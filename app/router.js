import EmberRouter from '@ember/routing/router';
import config from 'admin-komprejunto/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('manufacturer', { path: '/manufacturer'});
  this.route('manufacturers', function() {
    this.route('new');
    this.route('edit', { path: '/edit/:manufacturer_id'});
  });
  this.route('products', function() {
    this.route('new');
    this.route('edit', { path: '/edit/:product_id'});
  });
  this.route('auctions', function() {
    this.route('show', { path: ':product_id/' })
    this.route('show1', { path: ':product_id/:code' })
    this.route('edit', { path: '/edit/:auction_id'});
    this.route('new', { path: 'new'});
  });
  this.route('coupons', function() {
    this.route('create');
  });
  this.route('orders', function() {
    this.route('manage');
  });

  this.route('manufecturers', function() {
    this.route('edit');
    this.route('new');
  });
});
