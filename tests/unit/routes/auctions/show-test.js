import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | auctions/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:auctions/show');
    assert.ok(route);
  });
});
