package br.edu.ifam.socialdesk.business;

import java.util.List;

import br.edu.ifam.socialdesk.domain.Chamado;
import br.edu.ifam.socialdesk.persistence.ChamadoDAO;
import br.gov.frameworkdemoiselle.stereotype.BusinessController;
import br.gov.frameworkdemoiselle.template.DelegateCrud;

@BusinessController
public class ChamadoBC extends DelegateCrud<Chamado, Long, ChamadoDAO> {

	private static final long serialVersionUID = 1L;

	public List<Chamado> find(String query) {
		return getDelegate().find(query);
	}
}
