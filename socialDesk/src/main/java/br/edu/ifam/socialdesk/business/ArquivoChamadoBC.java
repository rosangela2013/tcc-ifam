package br.edu.ifam.socialdesk.business;

import java.util.List;

import br.edu.ifam.socialdesk.domain.ArquivoChamado;
import br.edu.ifam.socialdesk.persistence.ArquivoChamadoDAO;
import br.gov.frameworkdemoiselle.stereotype.BusinessController;
import br.gov.frameworkdemoiselle.template.DelegateCrud;

@BusinessController
public class ArquivoChamadoBC extends DelegateCrud<ArquivoChamado, Long, ArquivoChamadoDAO> {

	private static final long serialVersionUID = 1L;

	public List<ArquivoChamado> find(String query) {
		return getDelegate().find(query);
	}
}
