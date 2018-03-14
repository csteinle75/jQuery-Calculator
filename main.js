$(document).ready(function() {
	$('#add').on('click', function(){
		var valOne = $('#numOne').val()
		var valTwo = $('#numTwo').val()
		console.log(`valOne = ${valOne}, valTwo = ${valTwo}`)
		$('#answer').val(Number(valOne) + Number(valTwo))
	})
	$('#subtract').on('click', function(){
		var valOne = $('#numOne').val()
		var valTwo = $('#numTwo').val()
		console.log(`valOne = ${valOne}, valTwo = ${valTwo}`)
		$('#answer').val(Number(valOne) - Number(valTwo))
	})
	$('#multiply').on('click', function(){
		var valOne = $('#numOne').val()
		var valTwo = $('#numTwo').val()
		console.log(`valOne = ${valOne}, valTwo = ${valTwo}`)
		$('#answer').val(Number(valOne) * Number(valTwo))
	})
	$('#divide').on('click', function(){
		var valOne = $('#numOne').val()
		var valTwo = $('#numTwo').val()
		console.log(`valOne = ${valOne}, valTwo = ${valTwo}`)
		$('#answer').val(Number(valOne) / Number(valTwo))
	})

}) //Document Ready func