import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКонца: DS.attr('date'),
  времяНачала: DS.attr('date'),
  дата: DS.attr('date'),
  типЗанятости: DS.attr('i-i-s-kursavaya-anna-тип-занятости'),
  числоЧасов: DS.attr('decimal')
});

export let ValidationRules = {
  времяКонца: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-график-работы.validations.времяКонца.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  времяНачала: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-график-работы.validations.времяНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-график-работы.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  типЗанятости: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-график-работы.validations.типЗанятости.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  числоЧасов: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-график-работы.validations.числоЧасов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикРаботыE', 'i-i-s-kursavaya-anna-график-работы', {
    числоЧасов: attr('Число часов', { index: 0 }),
    времяНачала: attr('Время начала', { index: 1 }),
    времяКонца: attr('Время конца', { index: 2 }),
    типЗанятости: attr('Тип занятости', { index: 3 }),
    дата: attr('Дата', { index: 4 })
  });

  modelClass.defineProjection('ГрафикРаботыL', 'i-i-s-kursavaya-anna-график-работы', {
    числоЧасов: attr('Число часов', { index: 0 }),
    времяНачала: attr('Время начала', { index: 1 }),
    времяКонца: attr('Время конца', { index: 2 }),
    типЗанятости: attr('Тип занятости', { index: 3 }),
    дата: attr('Дата', { index: 4 })
  });
};
