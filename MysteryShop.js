//alert("На сайте встроен мощный АнтиВирус! Так что не волнуйтесь, мы стоим на защите!");

/*let element = document.querySelector("body");
element.onclick = function() { element.style.color = 'red' };

let reName = document.createElement("h1");
element.onclick = function() { 
    element.innerHTML = "Ха-ха-ха-ха-ха";

 };
 
*/

(function(console){

	console.save = function(data, filename){

		if(!data) {
			console.error('Console.save: No data')
			return;
		}

		if(!filename) filename = 'console.json'

		if(typeof data === "object"){
			data = JSON.stringify(data, undefined, 4)
		}

		var blob = new Blob([data], {type: 'text/json'}),
			e    = document.createEvent('MouseEvents'),
			a    = document.createElement('a')

		a.download = filename
		a.href = window.URL.createObjectURL(blob)
		a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
		e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
		a.dispatchEvent(e)
	}
})(console)

saveF = function() 
{
	var elements = document.querySelectorAll('input, textarea');
	for (i = 0; i < elements.length; i++) 
	{
	  (function(element) {
		var id = element.getAttribute('id');
		if(id == "click") return;
		localStorage.setItem(id, element.value); // обязательно наличие у элементов id
	  })(elements[i]);
	}
	console.save(JSON.stringify(localStorage, null,'\t'), 'data.txt');
}

document.querySelectorAll('textarea').forEach(el => {
    el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
    el.classList.add('auto');
    el.addEventListener('input', e => {
        el.style.height = 'auto';
        el.style.height = (el.scrollHeight) + 'px';
    });
});





  


