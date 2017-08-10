package br.edu.ifam.socialdesk.business;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import br.edu.ifam.socialdesk.constant.Constants;
import br.edu.ifam.socialdesk.domain.Chamado;
import br.edu.ifam.socialdesk.domain.Comentario;
import br.edu.ifam.socialdesk.domain.Status;
import br.edu.ifam.socialdesk.domain.dto.ChamadoDTO;
import br.edu.ifam.socialdesk.exception.BusinessException;
import br.edu.ifam.socialdesk.persistence.ChamadoDAO;
import br.gov.frameworkdemoiselle.stereotype.BusinessController;
import br.gov.frameworkdemoiselle.template.DelegateCrud;
import br.gov.frameworkdemoiselle.transaction.Transactional;

@BusinessController
public class ChamadoBC extends DelegateCrud<Chamado, Long, ChamadoDAO> {

	@Inject
	private ComentarioBC comentarioBC;

	@Inject
	private ArquivoChamadoBC arquivoChamadoBC;

	@Inject
	private StatusBC statusBC;

	private static final long serialVersionUID = 1L;

	public List<Chamado> find(String query) {
		return getDelegate().find(query);
	}

	public List<ChamadoDTO> find() {
		List<ChamadoDTO> result = new ArrayList<>();
		List<Chamado> listChamado = this.getDelegate().findAll();
		for (Chamado chamado : listChamado) {
			result.add(new ChamadoDTO(chamado, this.comentarioBC.contarComentarios(chamado.getId()), "img/apple.jpg"));
		}

		return result;
	}

	/**
	 * Listar chamados por categoria
	 * 
	 * @param idCategoria
	 */
	public List<ChamadoDTO> listPorCategoria(Long idCategoria) {
		List<ChamadoDTO> result = new ArrayList<>();
		List<Chamado> listPorCategoria = getDelegate().listPorCategoria(idCategoria);
		for (Chamado chamado : listPorCategoria) {
			result.add(new ChamadoDTO(chamado, this.comentarioBC.contarComentarios(chamado.getId()), "img/apple.jpg"));
		}

		return result;
	}

	/**
	 * Listar chamados por idUsuário
	 * 
	 * @param idUsuario
	 */
	public List<ChamadoDTO> listPorUsuario(Long idUsuario) {
		List<ChamadoDTO> result = new ArrayList<>();
		List<Chamado> listPorCategoria = getDelegate().listPorUsuario(idUsuario);
		for (Chamado chamado : listPorCategoria) {
			result.add(new ChamadoDTO(chamado, this.comentarioBC.contarComentarios(chamado.getId()), "img/apple.jpg"));
		}

		return result;

	}

	/**
	 * Listar chamados por nome de usuário
	 * 
	 * @param nomeUsuario
	 */
	public List<Chamado> listPorNomeUsuario(String nomeUsuario) {
		return getDelegate().listPorNomeUsuario(nomeUsuario);
	}

	/**
	 * Exclui o chamado
	 * 
	 * @param idChamado
	 * @throws BusinessException
	 */
	public void excluirChamado(Long idChamado) throws BusinessException {
		Long qtdeComentarios = comentarioBC.contarComentarios(idChamado);
		if (qtdeComentarios > 1) {
			throw new BusinessException("Não é possível excluir o chamado por possuir comentarios.");
		}

		arquivoChamadoBC.deletePorChamado(idChamado);

		this.delete(idChamado);
	}

	/**
	 * Fechar o chamado
	 * 
	 * @param idChamado
	 * @throws BusinessException
	 */
	@Transactional
	public void fecharChamado(Long idChamado) throws BusinessException {
		Long qtdeComentarios = comentarioBC.contarComentarios(idChamado);
		if (qtdeComentarios < 1) {
			throw new BusinessException("Não é possível fechar o chamado,pois ainda não está em atendimento");
		}

		Chamado chamado = load(idChamado);

		Status status = statusBC.getPorSigla(Constants.STATUS_FECHADO);
		chamado.setStatus(status);
		getDelegate().update(chamado);
	}

	/**
	 * Salvar o chamado
	 * 
	 * @param idChamado
	 */
	public Long save(Chamado chamado) {
		Long id = null;

		if (chamado.getId() == null) {
			Status status = statusBC.getPorSigla(Constants.STATUS_ABERTO);
			chamado.setStatus(status);
			chamado.setDataCriacao(new Date());
			id = getDelegate().insert(chamado).getId();
		} else {
			id = getDelegate().update(chamado).getId();
		}

		return id;
	}

	/**
	 * Metodo para inserir comentarios no chamado Adiciona os comentarios em um
	 * arrayList e salva o objeto por cascade.
	 * 
	 * @param comentario
	 */
	public void saveComentario(Comentario comentario) {

		comentarioBC.insert(comentario);

	}

	/**
	 * Atualiza a quantidade de curtidas de um Chamado
	 * 
	 * @param chamado
	 */
	public void updateQtdeLike(Chamado chamado) {
		Chamado chamadoBanco = this.load(chamado.getId());
		Long qtdeLikeAtualizada = chamadoBanco.getQuantidadeCurtida() + 1;
		chamadoBanco.setQuantidadeCurtida(qtdeLikeAtualizada);
		getDelegate().update(chamadoBanco);

	}
}
