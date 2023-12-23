import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтсутствиеMixin
} from '../mixins/regenerated/models/i-i-s-kursavaya-anna-отсутствие';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтсутствиеMixin, Validations, {
});

defineProjections(Model);

export default Model;
