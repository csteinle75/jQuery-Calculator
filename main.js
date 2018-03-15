$(document).ready(function() {

	//simple calc
	$('#addSimple').on('click', function(){
		var valOne = $('#numOne').val()
		var valTwo = $('#numTwo').val()
		$('#answer').val(Number(valOne) + Number(valTwo))
	})
	$('#subtractSimple').on('click', function(){
		var valOne = $('#numOne').val()
		var valTwo = $('#numTwo').val()
		$('#answer').val(Number(valOne) - Number(valTwo))
	})
	$('#multiplySimple').on('click', function(){
		var valOne = $('#numOne').val()
		var valTwo = $('#numTwo').val()
		$('#answer').val(Number(valOne) * Number(valTwo))
	})
	$('#divideSimple').on('click', function(){
		var valOne = $('#numOne').val()
		var valTwo = $('#numTwo').val()
		$('#answer').val(Number(valOne) / Number(valTwo))
	})

	//advanced calc
	let equation = []
	let value = ''
	let operator = ''
	const result = $('#result')
	const doTheMath = function(op){
		switch (op){
			case 'add':
					console.log(`equation: ${equation}, value: ${value}, operator: ${operator}`)
					equation = [equation.reduce((a,b)=> a + b)]	
					result.val(equation[0])
							
				break;
			case 'subtract':
					console.log(`equation: ${equation}, value: ${value}, operator: ${operator}`)
					equation = [equation.reduce((a,b)=> a - b)]
					result.val(equation[0])
					
				break;
			case 'multiply':
					console.log(`equation: ${equation}, value: ${value}, operator: ${operator}`)
					equation = [equation.reduce((a,b)=> a * b)]
					result.val(equation[0])
					
				break;
			case 'divide':
					console.log(`equation: ${equation}, value: ${value}, operator: ${operator}`)
					equation = [equation.reduce((a,b)=> a / b)]
					result.val(equation[0])
					
				break;
			default:
					result.val(equation[0])
					console.log(`equation: ${equation}, value: ${value}, operator: ${operator}`)
				break;		
		}
	}

	$('#clear').on('click', function(){
		equation = []
		value = ''
		operator = ''
		console.log(`equation: ${equation}, value: ${value}, operator: ${operator}`)
		result.val('cleared')
	})
	$('#decimal').on('click', function(){
		console.log(value.match(/\./gi))
		if(value.match(/\./gi) === null){
			value += '.'
			result.val(value)
		} else {return}
	})
	
	$('#seven').on('click', function(){
		value += '7'
		result.val(value)
	})
	$('#eight').on('click', function(){
		value += '8'
		result.val(value)
	})
	$('#nine').on('click', function(){
		value += '9'
		result.val(value)
	})
	$('#four').on('click', function(){
		value += '4'
		result.val(value)
	})
	$('#five').on('click', function(){
		value += '5'
		result.val(value)
	})
	$('#six').on('click', function(){
		value += '6'
		result.val(value)
	})
	$('#one').on('click', function(){
		value += '1'
		result.val(value)
	})
	$('#two').on('click', function(){
		value += '2'
		result.val(value)
	})
	$('#three').on('click', function(){
		value += '3'
		result.val(value)
	})
	$('#zero').on('click', function(){
		value += '0'
		result.val(value)
	})




	$('#add').on('click', function(){
		if(value.length > 0){
			equation.push(Number(value))
		}
		value = ''
		if(equation.length === 2){
			doTheMath(operator)
		}
		operator = 'add'
		
		console.log(`equation: ${equation}, value: ${value}, operator: ${operator}`)
		result.val(equation[0])
	})
	$('#subtract').on('click', function(){
		if(value.length > 0){
			equation.push(Number(value))
		}
		value = ''
		if(equation.length === 2){
			doTheMath(operator)
		}
		operator = 'subtract'
		
		console.log(`equation: ${equation}, value: ${value}, operator: ${operator}`)
		result.val(equation[0])
	})
	$('#multiply').on('click', function(){
		if(value.length > 0){
			equation.push(Number(value))
		}
		value = ''
		if(equation.length === 2){
			doTheMath(operator)
		}
		operator = 'multiply'
		console.log(`equation: ${equation}, value: ${value}, operator: ${operator}`)
		result.val(equation[0])
	})
	$('#divide').on('click', function(){
		if(value.length > 0){
			equation.push(Number(value))
		}
		value = ''
		if(equation.length === 2){
			doTheMath(operator)
		}
		operator = 'divide'
		console.log(`equation: ${equation}, value: ${value}, operator: ${operator}`)
		result.val(equation[0])
	})

	$('#equal').on('click', function(){
		if(value.length > 0){
			equation.push(Number(value))
		}
		value = ''
		console.log('equal button pressed')
		doTheMath(operator)
	})
}) //Document Ready func