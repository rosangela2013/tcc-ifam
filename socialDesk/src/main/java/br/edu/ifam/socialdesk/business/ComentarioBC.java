package br.edu.ifam.socialdesk.business;

import java.util.List;

import br.edu.ifam.socialdesk.domain.Comentario;
import br.edu.ifam.socialdesk.persistence.ComentarioDAO;
import br.gov.frameworkdemoiselle.stereotype.BusinessController;
import br.gov.frameworkdemoiselle.template.DelegateCrud;

@BusinessController
public class ComentarioBC extends DelegateCrud<Comentario, Long, ComentarioDAO> {

	private static final long serialVersionUID = 1L;

	public List<Comentario> find(String query) {
		return getDelegate().find(query);
	}
}
