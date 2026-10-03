package com.psicologia.psicologia.serviceImpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.psicologia.psicologia.model.Comentario;
import com.psicologia.psicologia.repository.ComentarioRepository;
import com.psicologia.psicologia.service.comentarioService;

@Service
public class comentarioServiceImpl implements comentarioService{
	
	@Autowired
	ComentarioRepository comentarioRepository;
	
	public Comentario guardarComentario(Comentario comentarioNuevo) {
		return comentarioRepository.save(comentarioNuevo);
	}

}
