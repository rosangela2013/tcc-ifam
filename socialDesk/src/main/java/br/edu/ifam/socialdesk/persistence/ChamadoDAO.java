package br.edu.ifam.socialdesk.persistence;

import java.util.List;

import javax.persistence.TypedQuery;

import br.edu.ifam.socialdesk.constant.Constants;
import br.edu.ifam.socialdesk.domain.Chamado;
import br.gov.frameworkdemoiselle.stereotype.PersistenceController;

@PersistenceController
public class ChamadoDAO extends GenericDAO<Chamado, Long> {

	private static final long serialVersionUID = 1L;

	public List<Chamado> find(String query) {

		final String hql = "select u from Chamado u where u.descricao like :descricao";

		TypedQuery<Chamado> createQuery = getEntityManager().createQuery(hql, Chamado.class);
		createQuery.setParameter("descricao", "%" + query + "%");

		return createQuery.getResultList();
	}

	public List<Chamado> listPorCategoria(Long idCategoria) {

		final String hql = "SELECT chamado FROM Chamado chamado WHERE chamado.status.siglaStatus = :statusFechado "
				+ " AND chamado.categoria.id = :idCategoria ORDER BY chamado.dataCriacao ";

		TypedQuery<Chamado> createQuery = getEntityManager().createQuery(hql, Chamado.class);
		createQuery.setParameter("statusFechado", Constants.STATUS_FECHADO);
		createQuery.setParameter("idCategoria", idCategoria);

		return createQuery.getResultList();
	}

}