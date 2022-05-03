import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | manufecturers/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:manufecturers/index');
    assert.ok(route);
  });
});
