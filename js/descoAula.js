//Funcao dos botoes
function Inserir(){
	var T1 = document.querySelector("#app > div:nth-child(1) > div.list > div > div:nth-child(1) > div.list__content > div > div.questions__container > div.questions__content.question > div > div > div.wrapper.question__description__activity-message.wrapper--border")
	T1.insertAdjacentHTML('beforebegin', '<div class="RESULTADO"></div>');
	var B1 = document.getElementsByClassName('RESULTADO');
	var elementoOriginal = document.querySelector("#app > div:nth-child(1) > div.list > div > div:nth-child(1) > div.list__content > div > div.question__solutions.question__solutions > div > div.solution__professor > div > div")
	var elementoClone = elementoOriginal.cloneNode(true);
	//document.body.appendChild(elementoClone);
	document.body.getElementsByClassName('RESULTADO')[0].appendChild(elementoClone);
}

function Apagar(){
	document.getElementsByClassName('RESULTADO')[0].remove();
}
