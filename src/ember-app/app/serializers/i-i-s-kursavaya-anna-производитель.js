import { Serializer as ПроизводительSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursavaya-anna-производитель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПроизводительSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
