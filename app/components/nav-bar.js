import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class NavBarComponent extends Component {
    @service session;
    @service currentUser;
    @service store;
    @tracked activeHeader = false;

    @action
    invalidateSession() {
        this.session.invalidate();
    }

    @action
    closeHeader(){
        this.activeHeader = !this.activeHeader;
    }

    @action
    toggleHeader(){
        this.activeHeader = !this.activeHeader;
        var isBuying = false
        localStorage.setItem("isBuying", isBuying)
    }

    @action
    showDropdown(){
        document.getElementById("myDropdown").classList.toggle("show");
    }

    get countShoppingCartItems() {
        if (!this.session.isAuthenticated) return;

        var shoppingCartItems = this.store.peekAll("shopping-cart-item");
        return shoppingCartItems.length
    }
}
