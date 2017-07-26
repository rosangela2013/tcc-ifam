package br.edu.ifam.socialdesk.business;

import java.util.List;

import br.edu.ifam.socialdesk.entity.Usuario;
import br.edu.ifam.socialdesk.persistence.UsuarioDAO;
import br.gov.frameworkdemoiselle.stereotype.BusinessController;
import br.gov.frameworkdemoiselle.template.DelegateCrud;

@BusinessController
public class UsuarioBC extends DelegateCrud<Usuario, Long, UsuarioDAO> {

	private static final long serialVersionUID = 1L;

	public List<Usuario> find(String query) {
		return getDelegate().find(query);
	}
}
