import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодТовара: DS.attr('number'),
  наименование: DS.attr('string'),
  производитель: DS.belongsTo('i-i-s-kursavaya-anna-производитель', { inverse: null, async: false })
});

export let ValidationRules = {
  кодТовара: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-товар.validations.кодТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-товар.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-товар.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-kursavaya-anna-товар', {
    наименование: attr('Наименование', { index: 0 }),
    кодТовара: attr('Код товара', { index: 1 }),
    производитель: belongsTo('i-i-s-kursavaya-anna-производитель', 'Производитель', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-kursavaya-anna-товар', {
    наименование: attr('Наименование', { index: 0 }),
    кодТовара: attr('Код товара', { index: 1 }),
    производитель: belongsTo('i-i-s-kursavaya-anna-производитель', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
