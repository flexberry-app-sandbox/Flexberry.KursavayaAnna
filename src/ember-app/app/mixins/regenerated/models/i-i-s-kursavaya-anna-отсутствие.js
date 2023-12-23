import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаКонца: DS.attr('date'),
  датаНачала: DS.attr('date'),
  комментарий: DS.attr('string'),
  причина: DS.attr('i-i-s-kursavaya-anna-тип-занятости')
});

export let ValidationRules = {
  датаКонца: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-отсутствие.validations.датаКонца.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-отсутствие.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-отсутствие.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  причина: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-отсутствие.validations.причина.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтсутствиеE', 'i-i-s-kursavaya-anna-отсутствие', {
    датаНачала: attr('Дата начала', { index: 0 }),
    датаКонца: attr('Дата конца', { index: 1 }),
    причина: attr('Причина', { index: 2 }),
    комментарий: attr('Комментарий', { index: 3 })
  });

  modelClass.defineProjection('ОтсутствиеL', 'i-i-s-kursavaya-anna-отсутствие', {
    датаНачала: attr('Дата начала', { index: 0 }),
    датаКонца: attr('Дата конца', { index: 1 }),
    причина: attr('Причина', { index: 2 }),
    комментарий: attr('Комментарий', { index: 3 })
  });
};
