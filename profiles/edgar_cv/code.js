function aviso(){
    alert("UVM ESTUDIANTES");
}
aviso()

function fondoParrafo(){
    parrafos=document.getElementsByTagName("p");
    parrafos[0].innerHTML="REMPLAZADO";
    parrafos[1].style="color:red"
    lista=document.getElementsByClassName("verde");
    lsita[0].style="text-align:center; color=blue";
    document.getElementById("raro").innerHTML="CONTENIDO ACTUAL";
}

function cambiarEstilo(archivoCSS) {
    document.getElementById("file1").href = archivoCSS;
    document.getElementById("file2").href = archivoCSS;
    document.getElementById("file3").href = archivoCSS;
}


