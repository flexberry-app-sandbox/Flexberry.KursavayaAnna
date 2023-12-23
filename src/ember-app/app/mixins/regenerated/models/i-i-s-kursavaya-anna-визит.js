import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВизита: DS.attr('date'),
  кодВизита: DS.attr('number'),
  конецСеанса: DS.attr('string'),
  началоСеанса: DS.attr('string'),
  стоимость: DS.attr('decimal'),
  клиент: DS.belongsTo('i-i-s-kursavaya-anna-клиент', { inverse: null, async: false }),
  записьВизита: DS.hasMany('i-i-s-kursavaya-anna-запись-визита', { inverse: 'визит', async: false })
});

export let ValidationRules = {
  датаВизита: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-визит.validations.датаВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодВизита: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-визит.validations.кодВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  конецСеанса: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-визит.validations.конецСеанса.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  началоСеанса: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-визит.validations.началоСеанса.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-визит.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-визит.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  записьВизита: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-визит.validations.записьВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВизитE', 'i-i-s-kursavaya-anna-визит', {
    кодВизита: attr('Код визита', { index: 0 }),
    началоСеанса: attr('Начало сеанса', { index: 1 }),
    конецСеанса: attr('Конец сеанса', { index: 2 }),
    датаВизита: attr('Дата визита', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 }),
    клиент: belongsTo('i-i-s-kursavaya-anna-клиент', 'Клиент', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' }),
    записьВизита: hasMany('i-i-s-kursavaya-anna-запись-визита', 'Запись визита', {
      комментарий: attr('Комментарий', { index: 0 }),
      услуга: belongsTo('i-i-s-kursavaya-anna-услуга', 'Услуга', {
        наименование: attr('Наименование', { index: 2, hidden: true }),
        цена: attr('Цена', { index: 5 })
      }, { index: 1, displayMemberPath: 'наименование' }),
      сотрудник: belongsTo('i-i-s-kursavaya-anna-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('ВизитL', 'i-i-s-kursavaya-anna-визит', {
    кодВизита: attr('Код визита', { index: 0 }),
    началоСеанса: attr('Начало сеанса', { index: 1 }),
    конецСеанса: attr('Конец сеанса', { index: 2 }),
    датаВизита: attr('Дата визита', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 }),
    клиент: belongsTo('i-i-s-kursavaya-anna-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
