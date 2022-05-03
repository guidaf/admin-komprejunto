import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | coupons/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:coupons/index');
    assert.ok(route);
  });
});
