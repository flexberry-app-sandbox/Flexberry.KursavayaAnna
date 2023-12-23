import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ГрафикРаботыMixin
} from '../mixins/regenerated/models/i-i-s-kursavaya-anna-график-работы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГрафикРаботыMixin, Validations, {
});

defineProjections(Model);

export default Model;
