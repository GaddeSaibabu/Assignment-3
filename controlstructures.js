const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber >= 0.7) {

	alert('Greater or equal than 0.7');
}else{
	alert('Not Greater!');
}

//array
const num = [9,5,4,3,3,6,7];

//for loop
for (let i = 0; i < num.length; i++){

	console.log(num[i]);
}

//while loop

let count = 0;
while (count < num.length){
	console.log(num[count]);
	count++;
}

//for loop backwards
for(let i = num.length - 1; i >= 0;i--){
	console.log(num[i]);
}

//AND operation

let randomNumber2 = Math.random();

if ((randomNumber > 0.7 && randomNumber2 > 0.7) || 
	 randomNumber <= 0.2 ||
	randomNumber2 <= 0.2)
{
	alert('Greater than 0.7 or smaller than 0.2');
}