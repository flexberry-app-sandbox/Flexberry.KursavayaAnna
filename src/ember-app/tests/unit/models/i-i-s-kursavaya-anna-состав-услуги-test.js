import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursavaya-anna-состав-услуги', 'Unit | Model | i-i-s-kursavaya-anna-состав-услуги', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursavaya-anna-визит',
    'model:i-i-s-kursavaya-anna-график-работы',
    'model:i-i-s-kursavaya-anna-должности',
    'model:i-i-s-kursavaya-anna-запись-визита',
    'model:i-i-s-kursavaya-anna-клиент',
    'model:i-i-s-kursavaya-anna-отсутствие',
    'model:i-i-s-kursavaya-anna-производитель',
    'model:i-i-s-kursavaya-anna-состав-услуги',
    'model:i-i-s-kursavaya-anna-сотрудник',
    'model:i-i-s-kursavaya-anna-товар',
    'model:i-i-s-kursavaya-anna-услуга',
    'model:i-i-s-kursavaya-anna-услуги-мастера',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
