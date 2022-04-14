import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from '../config/environment';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = ENV.namespace;
  host = ENV.host;

  @service session;

  @computed(
    'session.data.authenticated.access_token',
    'session.isAuthenticated'
  )
  get headers() {
    let headers = {};
    if (this.session.isAuthenticated) {
      // OAuth 2
      headers[
        'Authorization'
      ] = `Bearer ${this.session.data.authenticated.access_token}`;
    }

    return headers;
  }
}
