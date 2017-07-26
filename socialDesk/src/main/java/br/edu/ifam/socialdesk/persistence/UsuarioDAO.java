package br.edu.ifam.socialdesk.persistence;

import java.util.List;

import javax.persistence.TypedQuery;

import br.edu.ifam.socialdesk.entity.Usuario;
import br.gov.frameworkdemoiselle.stereotype.PersistenceController;

@PersistenceController
public class UsuarioDAO extends GenericDAO<Usuario, Long> {
	
	private static final long serialVersionUID = 1L;

	public List<Usuario> find(String query) {
		
		final String hql = "select u from Usuario u where u.nomeusuario like :nmUsuario";
		
		TypedQuery<Usuario> createQuery = getEntityManager().createQuery(hql, Usuario.class);
		createQuery.setParameter("nmUsuario", "%"+query+"%");
		
		return createQuery.getResultList();
	}	
	
	// criar funcao de login
}
