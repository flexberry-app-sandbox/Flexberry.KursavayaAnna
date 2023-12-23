import { Serializer as ГрафикРаботыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursavaya-anna-график-работы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГрафикРаботыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
