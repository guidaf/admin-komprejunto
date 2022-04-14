import { module, test } from 'qunit';
import { setupTest } from 'admin-komprejunto/tests/helpers';

module('Unit | Model | manufactures', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('manufactures', {});
    assert.ok(model);
  });
});
