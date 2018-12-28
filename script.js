const fs=require('fs');

/*function question1 () {
	let floor = 0; let basement = 0;
	fs.readFile('./input.txt', (err,data) => {
	const myinput=data.toString();
	const myinputArray=myinput.split('');
	for (let i=0; i<myinputArray.length; i++) {
		if (myinputArray[i] === '(' ) {
			floor ++; 
		} else {
			floor --; 
		}
	}
	console.log('floor: ', floor);
	console.log(basement);
})
}

question1(); */

function question2 () {
	let floor = 0;
	fs.readFile('./input.txt', (err,data) => {
	const myinput=data.toString();
	const myinputArray=myinput.split('');
	let i =0;
	while ((i<myinputArray.length) && (floor >= 0)) {
		if (myinputArray[i] === '(' ) {
			floor ++; 
		} else {
			floor --; 
		}
		i ++;
	}
	console.log('floor: ', floor);
	console.log('first position to enter basement: ', i);
})
}

question2();