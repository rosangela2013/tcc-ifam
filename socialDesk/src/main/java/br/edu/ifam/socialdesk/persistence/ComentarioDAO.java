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

	/**
	 * Conta a quantidade de comentarios de um chamado
	 * 
	 * @param idChamado
	 * @return
	 */
	public Long contarComentarios(Long idChamado) {
		String hql = "select count(c) from Comentario c where c.chamado.id = :idChamado";
		Long quantidadeComentarios = getEntityManager().createQuery(hql, Long.class)
				.setParameter("idChamado", idChamado).getSingleResult();
		return quantidadeComentarios;
	}

}