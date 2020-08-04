document.addEventListener("DOMContentLoaded", () =>{
	const name = document.querySelector("#name")
	const email = document.querySelector("#email")
	const Tel = document.querySelector("#Tel")
	const area = document.querySelector("#area")
	const problem = document.querySelector("#problem")
	const enviar = document.querySelector("#enviar")

	const checkInput = () => {
		if (name.value === "" || email.value === "" || Tel.value === "" || area.value === "" || problem.value === "" ){
			enviar.disabled="disabled"
		} else{
			enviar.disabled = ""
		}
	}

	name.addEventListener("change", checkInput)
	email.addEventListener("change", checkInput)
	Tel.addEventListener("change", checkInput)
	area.addEventListener("change", checkInput)
	problem.addEventListener("change", checkInput)
}) //todo esto seria reemplazado por lo de abajo

function validate(){
	if(document.form.email.value === ""){
		alert('Por favor ingresar una dirección de email');
		document.form.email.focus();
		return false;
	}

	//acá irian todas las demas validaciones
	return true;

}

