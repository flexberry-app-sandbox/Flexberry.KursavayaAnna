import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursavayaAnnaВизитLForm from './forms/i-i-s-kursavaya-anna-визит-l';
import IISKursavayaAnnaГрафикРаботыLForm from './forms/i-i-s-kursavaya-anna-график-работы-l';
import IISKursavayaAnnaДолжностиLForm from './forms/i-i-s-kursavaya-anna-должности-l';
import IISKursavayaAnnaКлиентLForm from './forms/i-i-s-kursavaya-anna-клиент-l';
import IISKursavayaAnnaОтсутствиеLForm from './forms/i-i-s-kursavaya-anna-отсутствие-l';
import IISKursavayaAnnaПроизводительLForm from './forms/i-i-s-kursavaya-anna-производитель-l';
import IISKursavayaAnnaсотрудникLForm from './forms/i-i-s-kursavaya-anna-сотрудник-l';
import IISKursavayaAnnaТоварLForm from './forms/i-i-s-kursavaya-anna-товар-l';
import IISKursavayaAnnaУслугаLForm from './forms/i-i-s-kursavaya-anna-услуга-l';
import IISKursavayaAnnaВизитEForm from './forms/i-i-s-kursavaya-anna-визит-e';
import IISKursavayaAnnaГрафикРаботыEForm from './forms/i-i-s-kursavaya-anna-график-работы-e';
import IISKursavayaAnnaДолжностиEForm from './forms/i-i-s-kursavaya-anna-должности-e';
import IISKursavayaAnnaКлиентEForm from './forms/i-i-s-kursavaya-anna-клиент-e';
import IISKursavayaAnnaОтсутствиеEForm from './forms/i-i-s-kursavaya-anna-отсутствие-e';
import IISKursavayaAnnaПроизводительEForm from './forms/i-i-s-kursavaya-anna-производитель-e';
import IISKursavayaAnnaсотрудникEForm from './forms/i-i-s-kursavaya-anna-сотрудник-e';
import IISKursavayaAnnaТоварEForm from './forms/i-i-s-kursavaya-anna-товар-e';
import IISKursavayaAnnaУслугаEForm from './forms/i-i-s-kursavaya-anna-услуга-e';
import IISKursavayaAnnaВизитModel from './models/i-i-s-kursavaya-anna-визит';
import IISKursavayaAnnaГрафикРаботыModel from './models/i-i-s-kursavaya-anna-график-работы';
import IISKursavayaAnnaДолжностиModel from './models/i-i-s-kursavaya-anna-должности';
import IISKursavayaAnnaЗаписьВизитаModel from './models/i-i-s-kursavaya-anna-запись-визита';
import IISKursavayaAnnaКлиентModel from './models/i-i-s-kursavaya-anna-клиент';
import IISKursavayaAnnaОтсутствиеModel from './models/i-i-s-kursavaya-anna-отсутствие';
import IISKursavayaAnnaПроизводительModel from './models/i-i-s-kursavaya-anna-производитель';
import IISKursavayaAnnaСоставУслугиModel from './models/i-i-s-kursavaya-anna-состав-услуги';
import IISKursavayaAnnaсотрудникModel from './models/i-i-s-kursavaya-anna-сотрудник';
import IISKursavayaAnnaТоварModel from './models/i-i-s-kursavaya-anna-товар';
import IISKursavayaAnnaУслугаModel from './models/i-i-s-kursavaya-anna-услуга';
import IISKursavayaAnnaУслугиМастераModel from './models/i-i-s-kursavaya-anna-услуги-мастера';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursavaya-anna-визит': IISKursavayaAnnaВизитModel,
    'i-i-s-kursavaya-anna-график-работы': IISKursavayaAnnaГрафикРаботыModel,
    'i-i-s-kursavaya-anna-должности': IISKursavayaAnnaДолжностиModel,
    'i-i-s-kursavaya-anna-запись-визита': IISKursavayaAnnaЗаписьВизитаModel,
    'i-i-s-kursavaya-anna-клиент': IISKursavayaAnnaКлиентModel,
    'i-i-s-kursavaya-anna-отсутствие': IISKursavayaAnnaОтсутствиеModel,
    'i-i-s-kursavaya-anna-производитель': IISKursavayaAnnaПроизводительModel,
    'i-i-s-kursavaya-anna-состав-услуги': IISKursavayaAnnaСоставУслугиModel,
    'i-i-s-kursavaya-anna-сотрудник': IISKursavayaAnnaсотрудникModel,
    'i-i-s-kursavaya-anna-товар': IISKursavayaAnnaТоварModel,
    'i-i-s-kursavaya-anna-услуга': IISKursavayaAnnaУслугаModel,
    'i-i-s-kursavaya-anna-услуги-мастера': IISKursavayaAnnaУслугиМастераModel
  },

  'application-name': 'Kursavaya anna',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursavaya anna',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursavaya anna',
          title: 'Kursavaya anna'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-kursavaya-anna-сотрудник-l': {
            caption: 'сотрудник',
            title: 'Сотрудник'
          },
          'i-i-s-kursavaya-anna-должности-l': {
            caption: 'Должности',
            title: 'Должности'
          }
        },
        'график-работы': {
          caption: 'График работы',
          title: 'График работы',
          'i-i-s-kursavaya-anna-график-работы-l': {
            caption: 'ГрафикРаботы',
            title: 'График работы'
          },
          'i-i-s-kursavaya-anna-отсутствие-l': {
            caption: 'Отсутствие',
            title: 'Отсутствие'
          }
        },
        'справочник-товары': {
          caption: 'Справочник товары',
          title: 'Справочник товары',
          'i-i-s-kursavaya-anna-товар-l': {
            caption: 'Товар',
            title: 'Товар'
          },
          'i-i-s-kursavaya-anna-производитель-l': {
            caption: 'Производитель',
            title: 'Производитель'
          }
        },
        'запись-на-визит': {
          caption: 'Запись на визит',
          title: 'Запись на визит',
          'i-i-s-kursavaya-anna-визит-l': {
            caption: 'Визит',
            title: 'Визит'
          }
        },
        услуги: {
          caption: 'Услуги',
          title: 'Услуги',
          'i-i-s-kursavaya-anna-услуга-l': {
            caption: 'Услуга',
            title: 'Услуга'
          }
        },
        'наши-клиенты': {
          caption: 'Наши клиенты',
          title: 'Наши клиенты',
          'i-i-s-kursavaya-anna-клиент-l': {
            caption: 'Клиент',
            title: 'Клиент'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursavaya-anna-визит-l': IISKursavayaAnnaВизитLForm,
    'i-i-s-kursavaya-anna-график-работы-l': IISKursavayaAnnaГрафикРаботыLForm,
    'i-i-s-kursavaya-anna-должности-l': IISKursavayaAnnaДолжностиLForm,
    'i-i-s-kursavaya-anna-клиент-l': IISKursavayaAnnaКлиентLForm,
    'i-i-s-kursavaya-anna-отсутствие-l': IISKursavayaAnnaОтсутствиеLForm,
    'i-i-s-kursavaya-anna-производитель-l': IISKursavayaAnnaПроизводительLForm,
    'i-i-s-kursavaya-anna-сотрудник-l': IISKursavayaAnnaсотрудникLForm,
    'i-i-s-kursavaya-anna-товар-l': IISKursavayaAnnaТоварLForm,
    'i-i-s-kursavaya-anna-услуга-l': IISKursavayaAnnaУслугаLForm,
    'i-i-s-kursavaya-anna-визит-e': IISKursavayaAnnaВизитEForm,
    'i-i-s-kursavaya-anna-график-работы-e': IISKursavayaAnnaГрафикРаботыEForm,
    'i-i-s-kursavaya-anna-должности-e': IISKursavayaAnnaДолжностиEForm,
    'i-i-s-kursavaya-anna-клиент-e': IISKursavayaAnnaКлиентEForm,
    'i-i-s-kursavaya-anna-отсутствие-e': IISKursavayaAnnaОтсутствиеEForm,
    'i-i-s-kursavaya-anna-производитель-e': IISKursavayaAnnaПроизводительEForm,
    'i-i-s-kursavaya-anna-сотрудник-e': IISKursavayaAnnaсотрудникEForm,
    'i-i-s-kursavaya-anna-товар-e': IISKursavayaAnnaТоварEForm,
    'i-i-s-kursavaya-anna-услуга-e': IISKursavayaAnnaУслугаEForm
  },

});

export default translations;
