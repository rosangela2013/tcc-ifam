package br.edu.ifam.socialdesk.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.apache.commons.codec.binary.Base64;

@Entity
@Table(name = "FOTO_USUARIO")
public class FotoUsuario implements Serializable {

	private static final long serialVersionUID = 1L;

	public FotoUsuario() {

	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;

	@ManyToOne
	@JoinColumn(name = "ID_USUARIO")
	private Usuario usuario;

	@Lob
	@Column(name = "FOTO")
	private byte[] foto;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public byte[] getFoto() {
		return foto;
	}

	public String getFotoBase64() {
		if (foto != null) {
			byte[] encodeBase64 = Base64.encodeBase64(foto);
			return new String(encodeBase64);
		}
		return null;
	}

	public void setFoto(byte[] foto) {
		this.foto = foto;
	}

}
