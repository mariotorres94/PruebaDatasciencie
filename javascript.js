
function mostrarFormulario(){
    document.getElementById('formulario--celular').style.display = "block";
}
function nomostrarFormulario(){
    document.getElementById('formulario--celular').style.display = "none";
}

function validar() {
    miCampoTexto = document.getElementById("miCampo").value;
    urlValidar = window.location;
    if (miCampoTexto.length == 0) {
        return false;
    }else{
        document.getElementById('aro2').style.border = "2px solid #98CA3F";
        document.getElementById('aro3').style.border = "2px solid #98CA3F";
        document.getElementById('line1').style.backgroundColor = "#98CA3F";
        document.getElementById('line2').style.backgroundColor = "#98CA3F";
        document.getElementById('p2').style.color = "#98CA3F";
        document.getElementById('p3').style.color = "#98CA3F";
        return true;
    }
}
