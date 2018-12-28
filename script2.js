const fs = require('fs'); 
let sum=0;

/*function question1 () {
	let finalArray=[];
	fs.readFile('./input2.txt', (err,data) => {
	const myinput=data.toString();
	const myinputArray=myinput.split('\n');
	for (let i=0; i<myinputArray.length; i++) {
		finalArray.push(myinputArray[i].split('x'));
	}

	

	for (let j=0; j<finalArray.length; j++) {
		sum = sum
			+2*Number(finalArray[j][0])*Number(finalArray[j][1])
			+2*Number(finalArray[j][1])*Number(finalArray[j][2])
			+2*Number(finalArray[j][2])*Number(finalArray[j][0])
			+Math.min(Number(finalArray[j][0])*Number(finalArray[j][1]),Number(finalArray[j][1])*Number(finalArray[j][2]),Number(finalArray[j][2])*Number(finalArray[j][0]));
	}

	console.log(sum);
	})
}

question1(); */

function question2 () {
	let finalArray=[];
	fs.readFile('./input2.txt', (err,data) => {
	const myinput=data.toString();
	const myinputArray=myinput.split('\n');
	for (let i=0; i<myinputArray.length; i++) {
		finalArray.push(myinputArray[i].split('x'));
	}

	

	for (let j=0; j<finalArray.length; j++) {
		sum = sum
			+ Math.min((2*Number(finalArray[j][0])+2*Number(finalArray[j][1])),
			(2*Number(finalArray[j][1])+2*Number(finalArray[j][2])),(2*Number(finalArray[j][2])+2*Number(finalArray[j][0])))+
			Number(finalArray[j][0])*Number(finalArray[j][1])*Number(finalArray[j][2]);
	}

	console.log(sum);
	})
}

question2();