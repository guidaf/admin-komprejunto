import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service session;
  @service store;
  @service router;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
    if (this.session.data.authenticated.user.role != 'admin') {
      this.router.transitionTo('login');
    }
  }
  async model() {
    return this.store.findAll('manufacturer');
  }
}
