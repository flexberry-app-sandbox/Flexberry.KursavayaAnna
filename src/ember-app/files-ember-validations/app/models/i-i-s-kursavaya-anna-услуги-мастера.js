import {
  defineNamespace,
  defineProjections,
  Model as УслугиМастераMixin
} from '../mixins/regenerated/models/i-i-s-kursavaya-anna-услуги-мастера';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УслугиМастераMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
