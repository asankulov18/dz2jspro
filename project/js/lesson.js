	//phone checker
	const phoneInput = document.querySelector('#phone_input')
	const phoneButton = document.querySelector('#phone_button')
	const phoneResult = document.querySelector('#phone_result')

	const regExp = /^\+996 [5729]\d{2} \d{2}-\d{2}-\d{2}$/

	function validatePhoneNumber() {
		if (regExp.test(phoneInput.value)) {
			phoneResult.innerHTML = 'OK'
			phoneResult.style.color = 'green'
			phoneInput.value = ''
		} else {
			phoneResult.innerHTML = 'NOT OK'
			phoneResult.style.color = 'red'
		}
	}

	phoneButton.onclick = validatePhoneNumber

	phoneInput.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			validatePhoneNumber()
		}
	})
