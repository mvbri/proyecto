
document.getElementById("btn_inicia_sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_registro").addEventListener("click", registro);
window.addEventListener("resize", anchoPagina);


//DECLARACIÓN DE VARIABLES
var contenedor_login_registro =document.querySelector(".contenedor_login_registro");
var formulario_login = document.querySelector(".formulario_login");
var formulario_registro = document.querySelector(".formulario_registro");
var caja_trasera_login = document.querySelector(".caja_trasera_login");
var caja_trasera_registro = document.querySelector(".caja_trasera_registro");


function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_registro.style.display = "block";
    }else{
        caja_trasera_registro.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "0"
    }
}

anchoPagina();

function iniciarSesion(){
    if(window.innerWidth > 850){
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "0";
        formulario_login.style.display = "block";
        caja_trasera_registro.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
        
}

function registro(){
    if(window.innerWidth > 850){
        formulario_registro.style.display = "block";
        contenedor_login_registro.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_registro.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_registro.style.display = "block";
        contenedor_login_registro.style.left = "0";
        formulario_login.style.display = "none";
        caja_trasera_registro.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
    
}


const formulario = document.getElementById('formulario_registro');
const inputs = document.querySelectorAll('#formulario_registro input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const validar_formulario = (e) => {
    switch(e.target.name) {
       case 'nombre_u':
           if(expresiones.usuario.test(e.target.value)) {
            document.getElementById('grupo_usuario').classList.remove('formulario_grupo_incorrecto');
            document.getElementById('grupo_usuario').classList.add('formulario_correcto');
            document.querySelector('#grupo_usuario i').classList.remove('fa-times-circle');
            document.querySelector('#grupo_usuario i').classList.add('fa-check-circle');
            document.querySelector('#grupo_usuario_padre .input-text-error').classList.remove('input-text-error-activo');
           } else {
              document.getElementById('grupo_usuario').classList.add('formulario_grupo_incorrecto');
              document.getElementById('grupo_usuario').classList.remove('formulario_correcto');
            document.querySelector('#grupo_usuario i').classList.add('fa-times-circle');
            document.querySelector('#grupo_usuario i').classList.remove('fa-check-circle');
            document.querySelector('#grupo_usuario_padre .input-text-error').classList.add('input-text-error-activo');
           }
       break;
       case 'correo':
        if(expresiones.correo.test(e.target.value)) {
            document.getElementById('grupo_correo').classList.remove('formulario_grupo_incorrecto');
            document.getElementById('grupo_correo').classList.add('formulario_correcto');
            document.querySelector('#grupo_correo i').classList.remove('fa-times-circle');
            document.querySelector('#grupo_correo i').classList.add('fa-check-circle');
            document.querySelector('#grupo_correo_padre .input-text-error').classList.remove('input-text-error-activo');
           } else {
              document.getElementById('grupo_correo').classList.add('formulario_grupo_incorrecto');
              document.getElementById('grupo_correo').classList.remove('formulario_correcto');
            document.querySelector('#grupo_correo i').classList.add('fa-times-circle');
            document.querySelector('#grupo_correo i').classList.remove('fa-check-circle');
            document.querySelector('#grupo_correo_padre .input-text-error').classList.add('input-text-error-activo');
           }
       break;
       case 'password':
        if(expresiones.password.test(e.target.value)) {
            document.getElementById('grupo_password').classList.remove('formulario_grupo_incorrecto');
            document.getElementById('grupo_password').classList.add('formulario_correcto');
            document.querySelector('#grupo_password i').classList.remove('fa-times-circle');
            document.querySelector('#grupo_password i').classList.add('fa-check-circle');
            document.querySelector('#grupo_password_padre .input-text-error').classList.remove('input-text-error-activo');
           } else {
              document.getElementById('grupo_password').classList.add('formulario_grupo_incorrecto');
              document.getElementById('grupo_password').classList.remove('formulario_correcto');
            document.querySelector('#grupo_password i').classList.add('fa-times-circle');
            document.querySelector('#grupo_password i').classList.remove('fa-check-circle');
            document.querySelector('#grupo_password_padre .input-text-error').classList.add('input-text-error-activo');
           }
       break;
       case 'nombre_c':
        if(expresiones.nombre.test(e.target.value)) {
            document.getElementById('grupo_nombre_c').classList.remove('formulario_grupo_incorrecto');
            document.getElementById('grupo_nombre_c').classList.add('formulario_correcto');
            document.querySelector('#grupo_nombre_c i').classList.remove('fa-times-circle');
            document.querySelector('#grupo_nombre_c i').classList.add('fa-check-circle');
            document.querySelector('#grupo_nombre_c_padre .input-text-error').classList.remove('input-text-error-activo');
           } else {
              document.getElementById('grupo_nombre_c').classList.add('formulario_grupo_incorrecto');
              document.getElementById('grupo_nombre_c').classList.remove('formulario_correcto');
            document.querySelector('#grupo_nombre_c i').classList.add('fa-times-circle');
            document.querySelector('#grupo_nombre_c_padre .input-text-error').classList.add('input-text-error-activo');
           }

       break;
    }
}




inputs.forEach( (input) =>{
   input.addEventListener('keyup', validar_formulario);
   input.addEventListener('blur', validar_formulario);
}); 


formulario.addEventListener('submit', (e) => {
   e.preventDefault();
})