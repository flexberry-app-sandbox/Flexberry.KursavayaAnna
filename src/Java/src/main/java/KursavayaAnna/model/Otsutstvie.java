package KursavayaAnna.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KursavayaAnna.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: Отсутствие
 */
@Entity(name = "IISKursavayaAnnaОтсутствие")
@Table(schema = "public", name = "Отсутствие")
public class Otsutstvie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "ДатаКонца")
    private Date датаконца;

    @Column(name = "Причина")
    private String причина;

    @Column(name = "Комментарий")
    private String комментарий;


    public Otsutstvie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public Date getДатаКонца() {
      return датаконца;
    }

    public void setДатаКонца(Date датаконца) {
      this.датаконца = датаконца;
    }

    public String getПричина() {
      return причина;
    }

    public void setПричина(String причина) {
      this.причина = причина;
    }

    public String getКомментарий() {
      return комментарий;
    }

    public void setКомментарий(String комментарий) {
      this.комментарий = комментарий;
    }


}