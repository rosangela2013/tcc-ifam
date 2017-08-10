package br.edu.ifam.socialdesk.domain.dto;

import javax.validation.constraints.NotNull;

import br.edu.ifam.socialdesk.domain.Categoria;
import br.edu.ifam.socialdesk.domain.Chamado;
import br.edu.ifam.socialdesk.domain.Usuario;

public class CriarChamadoDTO {

	@NotNull
	private String descricao;

	@NotNull
	private Long idUsuario;
	@NotNull
	private Long idCategoria;

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

	public Long getIdCategoria() {
		return idCategoria;
	}

	public void setIdCategoria(Long idCategoria) {
		this.idCategoria = idCategoria;
	}

	public Chamado getChamado() {
		Chamado chamado = new Chamado();
		chamado.setDescricao(getDescricao());

		if (this.idCategoria != null) {
			chamado.setCategoria(new Categoria());
			chamado.getCategoria().setId(idCategoria);
		}

		if (this.idUsuario != null) {
			chamado.setUsuario(new Usuario());
			chamado.getUsuario().setId(idUsuario);
		}
		return chamado;
	}

}
