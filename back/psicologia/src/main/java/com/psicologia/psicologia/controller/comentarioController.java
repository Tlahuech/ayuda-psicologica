package com.psicologia.psicologia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.psicologia.psicologia.model.Comentario;
import com.psicologia.psicologia.service.comentarioService;


@CrossOrigin(origins = "http://localhost:5173")
@RestController 
@RequestMapping("/API2")
public class comentarioController {
	

	 @Autowired
	 comentarioService comentarioService;
	
	@PostMapping("/guardarComentario")
	public ResponseEntity<?> guardarComentario(@RequestBody Comentario nuevoComentario){
		try {
			comentarioService.guardarComentario(nuevoComentario);
			return ResponseEntity.ok("REGISTRO CORRECTO");
		}catch(Exception e) {
			return ResponseEntity.status(500).body("Error al guardar el comentario: " + e.getMessage());
		}
	}

	@GetMapping("/saludo")
	public String saludo() {
		return "HOLA DESDE EL CONTROLLER";
	}
}
