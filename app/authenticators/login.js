import Base from 'ember-simple-auth/authenticators/base';
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default class OAuth2Authenticator extends OAuth2PasswordGrantAuthenticator {
  serverTokenEndpoint = 'https://localhost:44300/api/account/login';
  makeRequest(url, data) {
    let body = JSON.stringify(data);
    let requestOptions = {
      body,
      method: 'POST',
      headers: {
        Accept: 'application/json, text/javascript',
        'Content-Type': 'application/json',
      },
    };

    // return fetch(url, requestOptions);
    return new Promise((resolve, reject) => {
      fetch(url, requestOptions)
        .then((response) => {
          response.text().then((text) => {
            //<-- here debug text
            let json = text ? JSON.parse(text) : {};
            if (!response.ok) {
              //<-- and here debug response
              response.responseJSON = json;
              reject(response);
            } else {
              resolve(json);
            }
          });
        })
        .catch(reject);
    });
  }
}
