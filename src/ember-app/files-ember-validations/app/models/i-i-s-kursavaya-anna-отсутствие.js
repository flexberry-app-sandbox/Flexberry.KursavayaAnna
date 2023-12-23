import {
  defineNamespace,
  defineProjections,
  Model as ОтсутствиеMixin
} from '../mixins/regenerated/models/i-i-s-kursavaya-anna-отсутствие';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтсутствиеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
