document.getElementById('boton').addEventListener('click', function() {
    

    document.getElementById('plano1').style.display = "block";
    document.getElementById('boton').style.display = "none";
    document.getElementById('botonocultar').style.display = "block";

    
});

document.getElementById('botonocultar').addEventListener('click', function() {
    
    

    document.getElementById('plano1').style.display = "none";
    document.getElementById('boton').style.display = "block";
    document.getElementById('botonocultar').style.display = "none";

    
});



document.getElementById('botontitulo').addEventListener('click', function() {
    

    document.getElementById('titulo1').style.display = "block";
    document.getElementById('botontitulo').style.display = "none";
    document.getElementById('botonocultartitulo').style.display = "block";

    
});

document.getElementById('botonocultartitulo').addEventListener('click', function() {
    
    

    document.getElementById('titulo1').style.display = "none";
    document.getElementById('botontitulo').style.display = "block";
    document.getElementById('botonocultartitulo').style.display = "none";

    
});
