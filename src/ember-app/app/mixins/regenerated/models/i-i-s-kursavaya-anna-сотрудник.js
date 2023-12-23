import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  кодСотрудника: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  пол: DS.attr('i-i-s-kursavaya-anna-пол'),
  фИО: DS.attr('string'),
  графикРаботы: DS.belongsTo('i-i-s-kursavaya-anna-график-работы', { inverse: null, async: false }),
  должности: DS.belongsTo('i-i-s-kursavaya-anna-должности', { inverse: null, async: false }),
  отсутствие: DS.belongsTo('i-i-s-kursavaya-anna-отсутствие', { inverse: null, async: false }),
  услугиМастера: DS.hasMany('i-i-s-kursavaya-anna-услуги-мастера', { inverse: 'сотрудник', async: false })
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-сотрудник.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодСотрудника: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-сотрудник.validations.кодСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-сотрудник.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-сотрудник.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  графикРаботы: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-сотрудник.validations.графикРаботы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отсутствие: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-сотрудник.validations.отсутствие.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услугиМастера: {
    descriptionKey: 'models.i-i-s-kursavaya-anna-сотрудник.validations.услугиМастера.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('сотрудникE', 'i-i-s-kursavaya-anna-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    кодСотрудника: attr('Код сотрудника', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 }),
    пол: attr('Пол', { index: 4 }),
    графикРаботы: belongsTo('i-i-s-kursavaya-anna-график-работы', 'График работы', {
      числоЧасов: attr('Число часов', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'числоЧасов' }),
    должности: belongsTo('i-i-s-kursavaya-anna-должности', 'Должности', {
      должность: attr('Должность', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'должность' }),
    отсутствие: belongsTo('i-i-s-kursavaya-anna-отсутствие', 'Отсутствие', {
      комментарий: attr('Комментарий', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'комментарий' }),
    услугиМастера: hasMany('i-i-s-kursavaya-anna-услуги-мастера', 'Услуги мастера', {
      услуга: belongsTo('i-i-s-kursavaya-anna-услуга', 'Услуга', {
        наименование: attr('Наименование', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('сотрудникL', 'i-i-s-kursavaya-anna-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    кодСотрудника: attr('Код сотрудника', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    номерТелефона: attr('Номер телефона', { index: 3 }),
    пол: attr('Пол', { index: 4 }),
    графикРаботы: belongsTo('i-i-s-kursavaya-anna-график-работы', 'Число часов', {
      числоЧасов: attr('Число часов', { index: 5 })
    }, { index: -1, hidden: true }),
    должности: belongsTo('i-i-s-kursavaya-anna-должности', 'Должность', {
      должность: attr('Должность', { index: 6 })
    }, { index: -1, hidden: true }),
    отсутствие: belongsTo('i-i-s-kursavaya-anna-отсутствие', 'Комментарий', {
      комментарий: attr('Комментарий', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
