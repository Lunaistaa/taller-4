function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var direccion = document.getElementById("direccion").value;
  var ccusuario = document.getElementById("ccusuario").value;
  var ccpaswd = document.getElementById("ccpaswd").value;
  var ccpaswd_confirm = document.getElementById("ccpaswd_confirm").value;
  var email = document.getElementById("email").value;

  if (nombre == "" || nombre.length > 25) {
    alert("El campo 'Nombre' es obligatorio y debe tener una longitud máxima de 25 caracteres. Por favor, corrija el campo.");
    return false;
  }

  if (apellido == "" || apellido.length > 25) {
    alert("El campo 'Apellido' es obligatorio y debe tener una longitud máxima de 25 caracteres. Por favor, corrija el campo.");
    return false;
  }

  if (!/^((cll|cra|av|anv|trans)\s.*)$/.test(direccion)) {
    alert("El campo 'Dirección' debe comenzar con alguna de las siguientes palabras: 'cll', 'cra', 'av', 'anv' o 'trans'. Por favor, corrija el campo.");
    return false;
  }

  if (!/^[a-zA-Z0-9]{10,20}$/.test(ccusuario)) {
    alert("El campo 'ccusuario' es obligatorio y debe tener una longitud mínima de 10 y máxima de 20 caracteres. No se permiten caracteres especiales. Por favor, corrija el campo.");
    return false;
  }

  if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[#\/&%]).{15,20}$/.test(ccpaswd)) {
    alert("El campo 'ccpaswd' es obligatorio y debe tener una longitud mínima de 15 y máxima de 20 caracteres. Debe contener al menos una letra mayúscula, un número y uno de los siguientes caracteres especiales: '#', '%', '/', '&'. Por favor, corrija el campo.");
    return false;
  }

  if (ccpaswd != ccpaswd_confirm) {
    alert("El campo de confirmación de contraseña no coincide con el campo 'ccpaswd'. Por favor, corrija el campo.");
    return false;
  }

  if (email == "" || email.length > 120) {
    alert("El campo 'email' es obligatorio y debe tener una longitud máxima de 120 caracteres. Por favor, corrija el campo.");
    return false;
  }

  return true;
}