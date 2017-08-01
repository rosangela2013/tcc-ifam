package br.edu.ifam.socialdesk.persistence;

import java.util.List;

import br.edu.ifam.socialdesk.domain.ArquivoChamado;
import br.gov.frameworkdemoiselle.stereotype.PersistenceController;

@PersistenceController
public class ArquivoChamadoDAO extends GenericDAO<ArquivoChamado, Long> {

	private static final long serialVersionUID = 1L;

	public List<ArquivoChamado> find(String query) {

		return null;
	}

}