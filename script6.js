const fs = require('fs');

function question1 () {
fs.readFile('./input6.txt', (err,data) => {
	const myinput=data.toString();
	const myinputArray=myinput.split('\n');
let countOn=0;
let coordinates=[];
let lightOptions=[];


for (let i=0; i<myinputArray.length; i++) {
   coordinates.push (myinputArray[i].match(/[0-9]+/g));
   if (myinputArray[i].indexOf('on') !==-1) {
   		lightOptions.push('on');
   } else if (myinputArray[i].indexOf('off')!==-1) {
   		lightOptions.push('off');
   } else {
   	lightOptions.push('toggle');
   };
};

let lights =[];
for (let i=0; i<=999; i++) {
  lights[i]=[];
  for (let j=0; j<=999; j++) {
    lights[i][j]=0;
  }
  }


for (let i=0; i<coordinates.length; i++) {
	let x1=Number(coordinates[i][0]);
	let y1=Number(coordinates[i][1]);
	let x2=Number(coordinates[i][2]);
	let y2=Number(coordinates[i][3]);

	for (let j=x1;j<=x2; j++) {
		for (let z=y1; z<=y2; z++) {
			if (lightOptions[i] =='on') {
				lights[j][z]=1;
			} else if (lightOptions[i]=='off') {
				lights[j][z]=0;
			} else if (lights[j][z] == 1) {
						lights[j][z]=0;
			} else {
				lights[j][z]=1;
					};

		}
	}
 };

let count=0;

for (let i=0; i<=999; i++) {
	for (let j=0; j<=999; j++) {
		if (lights[i][j]!==0) {
			count++
		}
	}
}

console.log('Number of lights that are on: ', count);
});
};

question1();



function question2 () {
fs.readFile('./input6.txt', (err,data) => {
	const myinput=data.toString();
	const myinputArray=myinput.split('\n');
let countOn=0;
let coordinates=[];
let lightOptions=[];


for (let i=0; i<myinputArray.length; i++) {
   coordinates.push (myinputArray[i].match(/[0-9]+/g));
   if (myinputArray[i].indexOf('on') !==-1) {
   		lightOptions.push('on');
   } else if (myinputArray[i].indexOf('off')!==-1) {
   		lightOptions.push('off');
   } else {
   	lightOptions.push('toggle');
   };
};

let brightness =[];
for (let i=0; i<=999; i++) {
  brightness[i]=[];
  for (let j=0; j<=999; j++) {
    brightness[i][j]=0;
  }
  }


for (let i=0; i<coordinates.length; i++) {
	let x1=Number(coordinates[i][0]);
	let y1=Number(coordinates[i][1]);
	let x2=Number(coordinates[i][2]);
	let y2=Number(coordinates[i][3]);

	for (let j=x1;j<=x2; j++) {
		for (let z=y1; z<=y2; z++) {
			if (lightOptions[i] =='on') {
				brightness[j][z]++;
			} else if (lightOptions[i]=='off') {
				if (brightness[j][z]>0) {
				brightness[j][z]--;
			} else {
				brightness[j][z]=0;
			}
			} else {
				brightness[j][z]=brightness[j][z]+2;
			}
		}
	}
 };

let totalBrightness=0;

for (let i=0; i<=999; i++) {
	for (let j=0; j<=999; j++) {
	totalBrightness=totalBrightness+brightness[i][j];
		}
	}


console.log('Brightness: ', totalBrightness);
});
};

question2();