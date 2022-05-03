import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | orders/manage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:orders/manage');
    assert.ok(route);
  });
});
