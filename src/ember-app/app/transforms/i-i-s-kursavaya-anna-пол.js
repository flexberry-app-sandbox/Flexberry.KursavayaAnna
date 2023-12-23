import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолEnum from '../enums/i-i-s-kursavaya-anna-пол';

export default FlexberryEnum.extend({
  enum: ПолEnum,
  sourceType: 'IIS.KursavayaAnna.Пол'
});
