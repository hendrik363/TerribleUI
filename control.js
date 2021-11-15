function rand(min, max) {	return Math.floor(Math.random() * (max - min + 1)) + min }

function randomString(length,
	chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
	var result           = []
	var characters       = chars
	var charactersLength = characters.length
	for ( var i = 0; i < length; i++ ) {
		result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
 }
 return result.join('')
}

document.getElementById('uname-insert-lc').onclick = () => {
	document.getElementById('username').innerHTML +=
		document.getElementById('letter-selection-un').value
}

document.getElementById('uname-insert-uc').onclick = () => {
	document.getElementById('username').innerHTML +=
		document.getElementById('letter-selection-un').value
			.toUpperCase()
}

document.getElementById('uname-clear').onclick = () => {
	if (!confirm('Are you sure you want to clear the field?'))
		alert('Field will be cleared nevertheless')

	document.getElementById('username').innerHTML = ''
}

document.getElementById('pwd-insert').onclick = () => {
	document.getElementById('password').innerHTML +=
		String.fromCharCode(Number(
			document.getElementById('pwd-charcode').value
		))

	document.getElementById('pwd-charcode').value = ''
}

document.getElementById('pwd-clear').onclick = () => {
	if (!confirm('Are you sure you want to clear the field?')) alert('Field will be cleared nevertheless')

	document.getElementById('password').innerHTML = ''
}

document.getElementById('dob-year').oninput = () => {
	document.getElementById('dob-year-span').innerHTML = 
		document.getElementById('dob-year').value
}

document.getElementById('dob-month').oninput = () => {
	document.getElementById('dob-month-span').innerHTML = 
		document.getElementById('dob-month').value
}

document.getElementById('dob-day').oninput = () => {
	document.getElementById('dob-day-span').innerHTML = 
		document.getElementById('dob-day').value
}

document.getElementById('register').onclick = () => {
	alert('Thanks for registering :D')
	location.reload()
}