import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПроизводительMixin
} from '../mixins/regenerated/models/i-i-s-kursavaya-anna-производитель';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПроизводительMixin, Validations, {
});

defineProjections(Model);

export default Model;
