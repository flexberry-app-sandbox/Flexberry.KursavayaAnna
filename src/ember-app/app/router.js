import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursavaya-anna-визит-l');
  this.route('i-i-s-kursavaya-anna-визит-e',
  { path: 'i-i-s-kursavaya-anna-визит-e/:id' });
  this.route('i-i-s-kursavaya-anna-визит-e.new',
  { path: 'i-i-s-kursavaya-anna-визит-e/new' });
  this.route('i-i-s-kursavaya-anna-график-работы-l');
  this.route('i-i-s-kursavaya-anna-график-работы-e',
  { path: 'i-i-s-kursavaya-anna-график-работы-e/:id' });
  this.route('i-i-s-kursavaya-anna-график-работы-e.new',
  { path: 'i-i-s-kursavaya-anna-график-работы-e/new' });
  this.route('i-i-s-kursavaya-anna-должности-l');
  this.route('i-i-s-kursavaya-anna-должности-e',
  { path: 'i-i-s-kursavaya-anna-должности-e/:id' });
  this.route('i-i-s-kursavaya-anna-должности-e.new',
  { path: 'i-i-s-kursavaya-anna-должности-e/new' });
  this.route('i-i-s-kursavaya-anna-клиент-l');
  this.route('i-i-s-kursavaya-anna-клиент-e',
  { path: 'i-i-s-kursavaya-anna-клиент-e/:id' });
  this.route('i-i-s-kursavaya-anna-клиент-e.new',
  { path: 'i-i-s-kursavaya-anna-клиент-e/new' });
  this.route('i-i-s-kursavaya-anna-отсутствие-l');
  this.route('i-i-s-kursavaya-anna-отсутствие-e',
  { path: 'i-i-s-kursavaya-anna-отсутствие-e/:id' });
  this.route('i-i-s-kursavaya-anna-отсутствие-e.new',
  { path: 'i-i-s-kursavaya-anna-отсутствие-e/new' });
  this.route('i-i-s-kursavaya-anna-производитель-l');
  this.route('i-i-s-kursavaya-anna-производитель-e',
  { path: 'i-i-s-kursavaya-anna-производитель-e/:id' });
  this.route('i-i-s-kursavaya-anna-производитель-e.new',
  { path: 'i-i-s-kursavaya-anna-производитель-e/new' });
  this.route('i-i-s-kursavaya-anna-сотрудник-l');
  this.route('i-i-s-kursavaya-anna-сотрудник-e',
  { path: 'i-i-s-kursavaya-anna-сотрудник-e/:id' });
  this.route('i-i-s-kursavaya-anna-сотрудник-e.new',
  { path: 'i-i-s-kursavaya-anna-сотрудник-e/new' });
  this.route('i-i-s-kursavaya-anna-товар-l');
  this.route('i-i-s-kursavaya-anna-товар-e',
  { path: 'i-i-s-kursavaya-anna-товар-e/:id' });
  this.route('i-i-s-kursavaya-anna-товар-e.new',
  { path: 'i-i-s-kursavaya-anna-товар-e/new' });
  this.route('i-i-s-kursavaya-anna-услуга-l');
  this.route('i-i-s-kursavaya-anna-услуга-e',
  { path: 'i-i-s-kursavaya-anna-услуга-e/:id' });
  this.route('i-i-s-kursavaya-anna-услуга-e.new',
  { path: 'i-i-s-kursavaya-anna-услуга-e/new' });
});

export default Router;
