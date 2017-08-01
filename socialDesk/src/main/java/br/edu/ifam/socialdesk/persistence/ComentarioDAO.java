package br.edu.ifam.socialdesk.persistence;

import java.util.List;

import br.edu.ifam.socialdesk.domain.Comentario;
import br.gov.frameworkdemoiselle.stereotype.PersistenceController;

@PersistenceController
public class ComentarioDAO extends GenericDAO<Comentario, Long> {

	private static final long serialVersionUID = 1L;

	public List<Comentario> find(String query) {

		return null;
	}

}