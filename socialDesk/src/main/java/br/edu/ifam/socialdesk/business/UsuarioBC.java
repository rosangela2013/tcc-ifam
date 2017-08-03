package br.edu.ifam.socialdesk.business;

import java.util.List;

import br.edu.ifam.socialdesk.domain.Usuario;
import br.edu.ifam.socialdesk.persistence.UsuarioDAO;
import br.gov.frameworkdemoiselle.stereotype.BusinessController;
import br.gov.frameworkdemoiselle.template.DelegateCrud;

@BusinessController
public class UsuarioBC extends DelegateCrud<Usuario, Long, UsuarioDAO> {

	private static final long serialVersionUID = 1L;

	public List<Usuario> find(String query) {
		return getDelegate().find(query);
	}

	/**
	 * Realiza a autenticação do usuário
	 * 
	 * @param email
	 * @param senha
	 * 
	 * @return usuário logado
	 */
	public Usuario login(String email, String senha) {
		return getDelegate().login(email, senha);
	}

	public Long save(Usuario usuario) {
		Long id = null;

		if (usuario.getId() == null) {
			id = getDelegate().insert(usuario).getId();
		} else {
			id = getDelegate().update(usuario).getId();
		}

		return id;
	}

}
