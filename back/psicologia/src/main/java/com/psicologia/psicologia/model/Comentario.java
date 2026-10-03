package com.psicologia.psicologia.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "comentario")
public class Comentario {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_comentario")
	Integer id_comentario;
	
	@Column(name = "comentario")
	String comentario;
	
	@Column(name = "email")
	String email;
	
	@Column(name = "tel")
	String tel;
	
	Comentario(){
		
	}
	
	Comentario(Integer id_comentario,String comentario,String email,String tel){
		this.id_comentario = id_comentario;
		this.comentario = comentario;
		this.email = email;
		this.tel = tel;
	}

	public Integer getId_comentario() {
		return id_comentario;
	}

	public void setId_comentario(Integer id_comentario) {
		this.id_comentario = id_comentario;
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}
	
	
	
	

}
