package br.gv.sepro.alecrim;

import org.junit.Test;

import junit.framework.Assert;

public class TurmaTest {
	@Test
	public void matricularAlunoComSucesso () {
		Turma turma = new Turma();
		turma.matricular("Rosangela Alecrim");
		Assert.assertTrue(turma.estaMatriculado("Rosangela Alecrim"));
		
	}
	
	@Test
	public void falhaAoTentarMatricularAlunoDuplicado () {
	}
	
	@Test
	public void falhaAoTentarMatricularAlunoNaTurmaCheia () {
		
	}
}
