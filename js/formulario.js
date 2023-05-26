function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var edad = document.getElementById("telefono").value;
    var juego = document.getElementById("juego").value;
    var conocimiento = document.getElementById("conocimiento").value;
    var edad = document.getElementById("email").value;
    var edad = document.getElementById("codigo").value;

    if (nombre.trim() == "" || edad.trim() == "" || juego.trim() == "" || conocimiento.trim() == "") {
        alert("Los campos son obligatorios");
        return false;
    }


    if (isNaN(edad)) {
        alert("La edad debe ser un número válido");
        return false;
    }


    return true;
}
if (!validarTelefono(telefono)) {
    document.getElementById('telefonoError').innerHTML = 'El número de teléfono no es válido.';
    return;
}

if (!validarEmail(email)) {
    document.getElementById('emailError').innerHTML = 'El correo electrónico no es válido.';
    return;
}

if (codigo !== obtenerCodigo()) {
    document.getElementById('codigoError').innerHTML = 'El código ingresado es incorrecto.';
    return;
}


alert('Formulario enviado correctamente.');


function validarTelefono(telefono) {

    var patronTelefono = /^\d{10}$/;
    return patronTelefono.test(telefono);
}

function validarEmail(email) {

    var patronEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return patronEmail.test(email);
}
