const fs = require('fs');

function question1 () {
fs.readFile('./input5.txt', (err,data) => {
	const myinput=data.toString();
	const myinputArray=myinput.split('\n');
    let vowelsArray=['a','e','i','o','u'];

//It contains at least three vowels
let firstRequirementArray=[];

for (let i=0; i<myinputArray.length; i++) {
	let vowels=0;
	for (let j=0; j<myinputArray[i].length; j++) {
		if (vowelsArray.indexOf(myinputArray[i][j])!==-1) {
	vowels++;
};
	};
	if (vowels>=3) {
		firstRequirementArray.push(myinputArray[i]);
	};
};


//It does not contain the strings ab, cd, pq, or xy
let thirdRequirementArray=[];

for (let i=0; i<firstRequirementArray.length; i++) {
	if ( (firstRequirementArray[i].indexOf('ab') === -1) &&  (firstRequirementArray[i].indexOf('cd') ===-1) &&  (firstRequirementArray[i].indexOf('pq') ===-1)
		&&  (firstRequirementArray[i].indexOf('xy') ===-1)) {
		thirdRequirementArray.push(firstRequirementArray[i]);
	};	
};

//It contains at least one letter that appears twice in a row
let secondRequirementArray=[];

for (let i=0; i<thirdRequirementArray.length; i++) {
	let double=0;
	for (let j=0; j<thirdRequirementArray[i].length-1; j++) {
			if (thirdRequirementArray[i][j] === thirdRequirementArray[i][j+1]){
			double++;
		};
	};
	if (double>0) {
		secondRequirementArray.push(thirdRequirementArray[i]);
	};
};

console.log(secondRequirementArray.length);
});
};

question1();




function question2 () {
fs.readFile('./input5.txt', (err,data) => {
	const myinput=data.toString();
	const myinputArray=myinput.split('\n');
    let vowelsArray=['a','e','i','o','u'];

//It contains at least one letter which repeats with exactly one letter between them
secondRequirementArray=[];
for (let i=0; i<myinputArray.length; i++){
	let doubleLetter=0;
	for (let j=0; j<myinputArray[i].length; j++) {
		if (myinputArray[i][j]===myinputArray[i][j+2]) {
			doubleLetter++;
		};
	};
	if (doubleLetter>0) {
		secondRequirementArray.push(myinputArray[i]);
	};
};


//It contains a pair of any two letters that appears at least twice in the string without overlapping
firstRequirementArray=[];
for (i=0;i<secondRequirementArray.length; i++) {
	let pair=0;
	for (let j=0; j<secondRequirementArray[i].length; j++) {
		for (let z=j+2; z<secondRequirementArray[i].length; z++){
		if ((secondRequirementArray[i][j]+secondRequirementArray[i][j+1]) === (secondRequirementArray[i][z]+secondRequirementArray[i][z+1])){
			pair++;
		};
	};
};
	if (pair>0) {
		firstRequirementArray.push (secondRequirementArray[i]);
	};
};

console.log(firstRequirementArray.length);
});
};

question2();
