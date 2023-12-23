import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-kursavaya-anna-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-kursavaya-anna-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-kursavaya-anna-сотрудник-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursavaya-anna-должности-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-kursavaya-anna-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-kursavaya-anna-должности-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.график-работы.caption'),
          title: i18n.t('forms.application.sitemap.график-работы.title'),
          children: [{
            link: 'i-i-s-kursavaya-anna-график-работы-l',
            caption: i18n.t('forms.application.sitemap.график-работы.i-i-s-kursavaya-anna-график-работы-l.caption'),
            title: i18n.t('forms.application.sitemap.график-работы.i-i-s-kursavaya-anna-график-работы-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-kursavaya-anna-отсутствие-l',
            caption: i18n.t('forms.application.sitemap.график-работы.i-i-s-kursavaya-anna-отсутствие-l.caption'),
            title: i18n.t('forms.application.sitemap.график-работы.i-i-s-kursavaya-anna-отсутствие-l.title'),
            icon: 'calendar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-товары.caption'),
          title: i18n.t('forms.application.sitemap.справочник-товары.title'),
          children: [{
            link: 'i-i-s-kursavaya-anna-товар-l',
            caption: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-kursavaya-anna-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-kursavaya-anna-товар-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-kursavaya-anna-производитель-l',
            caption: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-kursavaya-anna-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-kursavaya-anna-производитель-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.запись-на-визит.caption'),
          title: i18n.t('forms.application.sitemap.запись-на-визит.title'),
          children: [{
            link: 'i-i-s-kursavaya-anna-визит-l',
            caption: i18n.t('forms.application.sitemap.запись-на-визит.i-i-s-kursavaya-anna-визит-l.caption'),
            title: i18n.t('forms.application.sitemap.запись-на-визит.i-i-s-kursavaya-anna-визит-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.услуги.caption'),
          title: i18n.t('forms.application.sitemap.услуги.title'),
          children: [{
            link: 'i-i-s-kursavaya-anna-услуга-l',
            caption: i18n.t('forms.application.sitemap.услуги.i-i-s-kursavaya-anna-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.услуги.i-i-s-kursavaya-anna-услуга-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.наши-клиенты.caption'),
          title: i18n.t('forms.application.sitemap.наши-клиенты.title'),
          children: [{
            link: 'i-i-s-kursavaya-anna-клиент-l',
            caption: i18n.t('forms.application.sitemap.наши-клиенты.i-i-s-kursavaya-anna-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.наши-клиенты.i-i-s-kursavaya-anna-клиент-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})