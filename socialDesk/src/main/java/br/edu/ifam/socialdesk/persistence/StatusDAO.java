package br.edu.ifam.socialdesk.persistence;

import java.util.List;

import br.edu.ifam.socialdesk.domain.Status;
import br.gov.frameworkdemoiselle.stereotype.PersistenceController;

@PersistenceController
public class StatusDAO extends GenericDAO<Status, Long> {

	private static final long serialVersionUID = 1L;

	public List<Status> find(String query) {

		return null;
	}

}