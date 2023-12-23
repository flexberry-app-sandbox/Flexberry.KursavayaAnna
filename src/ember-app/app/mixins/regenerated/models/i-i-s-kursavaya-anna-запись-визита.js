import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  комментарий: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-kursavaya-anna-сотрудник', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-kursavaya-anna-услуга', { inverse: null, async: false }),
  визит: DS.belongsTo('i-i-s-kursavaya-anna-визит', { inverse: 'записьВизита', async: false })
});

export let ValidationRules = {
  комментарий: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-запись-визита.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-запись-визита.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-запись-визита.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  визит: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-запись-визита.validations.визит.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьВизитаE', 'i-i-s-kursavaya-anna-запись-визита', {
    комментарий: attr('Комментарий', { index: 0 }),
    услуга: belongsTo('i-i-s-kursavaya-anna-услуга', 'Услуга', {
      наименование: attr('Наименование', { index: 2, hidden: true }),
      цена: attr('Цена', { index: 5 })
    }, { index: 1, displayMemberPath: 'наименование' }),
    сотрудник: belongsTo('i-i-s-kursavaya-anna-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' })
  });
};
