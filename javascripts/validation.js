
$(document).ready(function(){

	document.getElementById('btnSubmit').addEventListener('click', function(e){

		var inputName = document.getElementById('userName').value;
		var inputDateOfBirth = document.getElementById('userDateOfBirth').value;
		var inputCountry = document.getElementById('userCountry').value;

		console.log('hola');

		if(inputName.length == 0) {

			e.preventDefault();

			var errorName = document.getElementById('errorName');
			var inputName = document.getElementById('userName');

			errorName.innerHTML = 'Debe ingresar su nombre';
			inputName.classList.add('error');

			return;
		}

		if(!isNaN(inputDateOfBirth)) {

			e.preventDefault();

			var errorDateOfBirth = document.getElementById('errorDateOfBirth');
			var inputDateOfBirth = document.getElementById('userDateOfBirth');

			errorDateOfBirth.innerHTML = 'Debe ingresar la fecha de su cumpleaños';
			inputDateOfBirth.classList.add('error');

			return;
		}


		if(inputCountry.length == 0) {

			e.preventDefault();

			var errorCountry = document.getElementById('errorCountry');
			var inputCountry = document.getElementById('userCountry');

			errorCountry.innerHTML = 'Debe seleccionar su país de origen';
			inputCountry.classList.add('error');

			return;
		}

	});

});
