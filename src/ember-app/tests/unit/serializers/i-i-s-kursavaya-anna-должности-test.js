import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursavaya-anna-должности', 'Unit | Serializer | i-i-s-kursavaya-anna-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursavaya-anna-должности',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursavaya-anna-единицы',
    'transform:i-i-s-kursavaya-anna-пол',
    'transform:i-i-s-kursavaya-anna-тип-занятости',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
