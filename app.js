function mostrarHelp(Elemento) {

	var elementID = document.getElementById(Elemento);  
	var botao = document.getElementById("botao");

  console.log(Elemento);
  if (elementID.style.display == 'none')
    {
		elementID.style.display = 'block';	
		botao.textContent = 'Ocultar';

	} else {
		elementID.style.display = 'none';	
		botao.textContent = 'Mostrar';
	}
}