import Model, { attr, hasMany } from '@ember-data/model';

export default class ManufacturerModel extends Model {
  @attr name;
  @attr cnpj;
  // @hasMany('product') products;
}
