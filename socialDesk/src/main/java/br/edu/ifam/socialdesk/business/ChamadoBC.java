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

	public List<Chamado> listPorCategoria(Long idCategoria) {
		return getDelegate().listPorCategoria(idCategoria);
	}

	public Long save(Chamado chamado) {
		Long id = null;

		if (chamado.getId() == null) {
			id = getDelegate().insert(chamado).getId();
		} else {
			id = getDelegate().update(chamado).getId();
		}

		return id;
	}
}
