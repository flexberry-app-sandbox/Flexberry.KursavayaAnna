import {
  defineNamespace,
  defineProjections,
  Model as ЗаписьВизитаMixin
} from '../mixins/regenerated/models/i-i-s-kursavaya-anna-запись-визита';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаписьВизитаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
