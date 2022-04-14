import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @tracked errorMessage;
  @service session;
  @service router;
  // @service currentUser;

  @tracked identification;
  @tracked password;

  @action
  updateIdentification(event) {
    this.identification = event.target.value;
  }

  @action
  updatePassword(event) {
    this.password = event.target.value;
  }

  @action
  async authenticate() {
    // let attemptedTransition = this.session.attemptedTransition;
    let that = this;
    await this.session
      .authenticate('authenticator:login', this.identification, this.password)
      .then((response) => {})
      .catch((error) => {
        this.errorMessage = error.responseJSON.error || error;
      });

    // if (this.session.isAuthenticated) {
    //     await this.currentUser.load().catch((error) => {
    //         this.session.invalidate()
    //     });
    // }
  }
}
