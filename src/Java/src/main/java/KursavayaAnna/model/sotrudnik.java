package KursavayaAnna.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KursavayaAnna.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: сотрудник
 */
@Entity(name = "IISKursavayaAnnaсотрудник")
@Table(schema = "public", name = "сотрудник")
public class sotrudnik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "КодСотрудника")
    private Integer кодсотрудника;

    @Column(name = "ДатаРождения")
    private Date датарождения;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;

    @Column(name = "Пол")
    private String пол;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "GrafikRaboty")
    @Convert("GrafikRaboty")
    @Column(name = "ГрафикРаботы", length = 16, unique = true, nullable = false)
    private UUID _grafikrabotyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "GrafikRaboty", insertable = false, updatable = false)
    private GrafikRaboty grafikraboty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnosti")
    @Convert("Dolzhnosti")
    @Column(name = "Должности", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnosti", insertable = false, updatable = false)
    private Dolzhnosti dolzhnosti;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otsutstvie")
    @Convert("Otsutstvie")
    @Column(name = "Отсутствие", length = 16, unique = true, nullable = false)
    private UUID _otsutstvieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otsutstvie", insertable = false, updatable = false)
    private Otsutstvie otsutstvie;

    @OneToMany(mappedBy = "sotrudnik", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<UslugiMastera> uslugimasteras;


    public sotrudnik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getКодСотрудника() {
      return кодсотрудника;
    }

    public void setКодСотрудника(Integer кодсотрудника) {
      this.кодсотрудника = кодсотрудника;
    }

    public Date getДатаРождения() {
      return датарождения;
    }

    public void setДатаРождения(Date датарождения) {
      this.датарождения = датарождения;
    }

    public Integer getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(Integer номертелефона) {
      this.номертелефона = номертелефона;
    }

    public String getПол() {
      return пол;
    }

    public void setПол(String пол) {
      this.пол = пол;
    }


}