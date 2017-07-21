import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "usuario")
public class Usuario implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "nome", length = 100, nullable = false)
	private String nome;

	@Column(name = "sobrenome", length = 250, nullable = false)
	private String sobrenome;

	@Column(name = "email", length = 250, nullable = false)
	private String email;

	@Column(name = "data_nascimento")
	private String dataNascimento;

	@Column(name = "sexo", length = 1)
	private String sexo;

}
