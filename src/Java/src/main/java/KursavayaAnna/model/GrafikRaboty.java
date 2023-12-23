package KursavayaAnna.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KursavayaAnna.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: ГрафикРаботы
 */
@Entity(name = "IISKursavayaAnnaГрафикРаботы")
@Table(schema = "public", name = "ГрафикРаботы")
public class GrafikRaboty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "числоЧасов")
    private Double числочасов;

    @Column(name = "времяНачала")
    private Date времяначала;

    @Column(name = "времяКонца")
    private Date времяконца;

    @Column(name = "типЗанятости")
    private String типзанятости;

    @Column(name = "Дата")
    private Date дата;


    public GrafikRaboty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getчислоЧасов() {
      return числочасов;
    }

    public void setчислоЧасов(Double числочасов) {
      this.числочасов = числочасов;
    }

    public Date getвремяНачала() {
      return времяначала;
    }

    public void setвремяНачала(Date времяначала) {
      this.времяначала = времяначала;
    }

    public Date getвремяКонца() {
      return времяконца;
    }

    public void setвремяКонца(Date времяконца) {
      this.времяконца = времяконца;
    }

    public String getтипЗанятости() {
      return типзанятости;
    }

    public void setтипЗанятости(String типзанятости) {
      this.типзанятости = типзанятости;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}