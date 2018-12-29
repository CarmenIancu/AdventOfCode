const fs = require('fs');


/*function question1 () {
	fs.readFile('./input3.txt', (err,data) => {
	const myinput=data.toString();
	const myinputArray=myinput.split('');
	let currentPositionX=0;
	let currentPositionY=0;
	let positions=[[0,0]];
	

	for (let i=0; i<myinputArray.length; i++) {
		if (myinputArray[i]==="^") {
			currentPositionY++;
		} else if (myinputArray[i]==="<") {
			currentPositionX--;
		} else if (myinputArray[i] ===">") {
			currentPositionX++;
		} else if (myinputArray[i]==="v") {
			currentPositionY--;
		};
		positions.push([currentPositionX, currentPositionY]);
	};
console.log(positions);


let set  = new Set(positions.map(JSON.stringify));
let arr2 = Array.from(set).map(JSON.parse);

console.log(arr2.length)
});
};

question1();*/



function question2 () {

let santa=[];
let robo=[];

fs.readFile('./input3.txt', (err,data) => {
	const myinput=data.toString();
	const myinputArray=myinput.split('');
for (let i=0; i<myinputArray.length; i++) {
	if (i % 2 === 0 ) {
		santa.push(myinputArray[i]);
	} else {
		robo.push(myinputArray[i]);
	}
}
	let SantacurrentPositionX=0;
	let SantacurrentPositionY=0;
	let Santapositions=[[0,0]];
	let RobocurrentPositionX=0;
	let RobocurrentPositionY=0;
	let Robopositions=[[0,0]];


for (let i=0; i<santa.length; i++) {
		if (santa[i]==="^") {
			SantacurrentPositionY++;
		} else if (santa[i]==="<") {
			SantacurrentPositionX--;
		} else if (santa[i] ===">") {
			SantacurrentPositionX++;
		} else if (santa[i]==="v") {
			SantacurrentPositionY--;
		};
		Santapositions.push([SantacurrentPositionX, SantacurrentPositionY]);
	};



for (let i=0; i<robo.length; i++) {
		if (robo[i]==="^") {
			RobocurrentPositionY++;
		} else if (robo[i]==="<") {
			RobocurrentPositionX--;
		} else if (robo[i] ===">") {
			RobocurrentPositionX++;
		} else if (robo[i]==="v") {
			RobocurrentPositionY--;
		};
		Robopositions.push([RobocurrentPositionX, RobocurrentPositionY]);
	};

let setsanta  = new Set(Santapositions.map(JSON.stringify));
let arr2santa = Array.from(setsanta).map(JSON.parse);
let setrobo  = new Set(Robopositions.map(JSON.stringify));
let arr2robo = Array.from(setrobo).map(JSON.parse);

let result = arr2santa.concat(arr2robo);
let setresult =  new Set(result.map(JSON.stringify));
let arrayresult = Array.from(setresult).map(JSON.parse);


console.log(arrayresult.length);
});

};

question2();