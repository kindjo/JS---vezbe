/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var bleh = null;
console.log(bleh);

//This is a single line comment

/* This is 
    a multi line    
    comment  */

/*
var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old '+job+ '. Is he married? '+isMarried);

//variable mutation - change the value of a variable
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old '+job+ '. Is he married? '+isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/
/*
var currentYear, yearJohn, yearMark;

//Math Operators
currentYear = 2019;
ageJohn = 28;
ageMark = 33;

yearJohn = currentYear - ageJohn;
yearMark = currentYear - ageMark;

console.log(yearJohn);
console.log(yearMark);
 
console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 10);

// Logical operators 
var jonhOlder = ageJohn < ageMark;
console.log(jonhOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof afeJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

*/

//OPERATOR PRESEDENCE
/*
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;
//Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);
//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);
//Multiple assignments

var x, y;
x=y= (3+5)*4 - 6;
console.log(x , y);

//More operators 

x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);

*/

//CODING CHALLENGE 1

//2x visina i 2x tezina
/*
var heightMark, heightJohn, weightMark, weightJohn, bmiMark, bmiJohn;

heightMark = 1.88;
weightMark = 80;
bmiMark =  weightMark / (heightMark * heightMark);
console.log(bmiMark);

heightJohn = 1.9;
weightJohn = 80;
bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

var bmiDiff = bmiMark > bmiJohn;
console.log(bmiDiff);

console.log("Is Mark's BMI higher than John's? "+bmiDiff );
*/

//IF / ELSE statements
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
}
else{
    console.log(firstName + ' is not married!');
}

var isMarried = true;
if(isMarried){
    console.log(firstName + ' is married!');
}
else{
    console.log(firstName + ' is not married!')
}

var heightMark, heightJohn, weightMark, weightJohn, bmiMark, bmiJohn;

heightMark = 1.88;
weightMark = 80;
bmiMark =  weightMark / (heightMark * heightMark);
//console.log(bmiMark);

heightJohn = 1.9;
weightJohn = 80;
bmiJohn = weightJohn / (heightJohn * heightJohn);
//console.log(bmiJohn);

//var bmiDiff = bmiMark > bmiJohn;
//console.log(bmiDiff);

//console.log("Is Mark's BMI higher than John's? "+bmiDiff );

if (bmiJohn > bmiMark){
    console.log("John's BMI is higher than Mark's");
}
else{
    console.log("Mark's BMI is higher than John's");
}
*/
/* 
var firstName = 'John';
var age = 20;

if (age < 13){
    console.log(firstName + " is a boy.");
}
else if (age >= 13 && age < 20){
    console.log(firstName + " is a teenager.");
}
else if (age >= 20 && age<30){
    console.log(firstName + " is a young man.");
}
else{
    console.log(firstName + " is a man.");
}
*/

// THE TERNARY OPERATOR
/* 
var firstName = 'John';
var age = 12;

(age >= 18) ? console.log(firstName+' drinks beer.')
: console.log(firstName +' drinks juice');

var drink = age >=18 ? 'beer' : 'juice';
console.log(drink);
*/

//SWITCH
/* 
var job = 'instructor';

switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName+ ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

var firstName = 'John';
age = 32;

switch(true){
    case age<12:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age>=20 && age<30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

*/

//TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS

//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values
/*
var height;

height = 23;

if (height || height === 0){
    console.log('Variable is defined');
}
else{
    console.log('Variable has NOT been defined');
}

//EQUALITY OPERATORS
if(height=='23'){
    console.log('The == operator does type coercion!');
}
*/


/* 
var teamJ, game1J, game2J, game3J, avgJon;

teamJ = 'John\'s team'
game1J = 89;
game2J = 120;
game3J = 103;
avgJon = (game1J+game2J+game3J)/3;

console.log(avgJon);

var teamM, game1M, game2M, game3M, avgMik;

teamM = 'Mike\'s team'
game1M = 116;
game2M = 94;
game3M = 123;
avgMik = (game1M+game2M+game3M)/3;

console.log(avgMik);

var teamMar, game1Ma, game2Ma, game3Ma, avgMar;

teamMar = 'Mary\'s team';
game1Ma = 97;
game2Ma = 134;
game3Ma = 105;
avgMar = (game1Ma+game2Ma+game3Ma)/3;

console.log(avgMar);

if(avgJon > avgMik && avgJon > avgMar){
    console.log(teamJ + ' wins the most games, with an average score of: '+avgJon);
}
else if (avgJon < avgMik && avgMar < avgMik){
    console.log(teamM + ' wins the most games, with an average score of: '+avgMik);
}
else if (avgMar > avgJon && avgMar > avgMik){
    console.log(teamMar + ' wins the most games, with an average score of: '+avgMar);
}
else if (avgJon = avgMik || avgJon == avgMar || avgMik == avgMar){
    console.log('Two members of the comparison have achieved a draw in performance');
}
else{
    console.log('Both ' + teamJ + ' and '+ teamM+ ' have the same score and ammount of wins!');
}

*/


//////////// FUNCTIONS ///////////////////////
/* 
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1994);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement>0){
        console.log(firstName + ' retires in '+ retirement + ' years.');
    }
    else{
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement (1990, 'John');
yearsUntilRetirement (1948, 'Mike');
yearsUntilRetirement (1994, 'Jane');
*/

/////////////// FUNCTION STATEMENTS AND EXPRESSIONS ///////////////////////

//FUNCTION DECLARATIONS
//function whatDoYouDo (job, firstName){}

//FUNCTION EXPRESSION
/*

var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives an uber in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log (whatDoYouDo ('teacher', 'John'));
console.log (whatDoYouDo ('designer', 'Jane'));
console.log (whatDoYouDo ('retired', 'Mark'));
*/

//////////////// ARRAYS ////////////////////
/*
//Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948); //will not use - use the 1st

console.log(names[1]);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary'
console.log(names);

//Different data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');

console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer')===-1 ? 'John is NOT a designer' : 'John IS a designer'
console.log(isDesigner);
*/

/*
function calculateTip(tipAmmount){
    if(tipAmmount<50){
        return tipAmmount*0.2;
    }
    else if (tipAmmount>=50 && tipAmmount<200){
        return tipAmmount*0.15;
    }
    else if (tipAmmount>=200){
        return tipAmmount*0.1;
        }
    else {
        return 'OK';
    }
}
var bill = [124,48,268]

var tip = [calculateTip(bill[0]), calculateTip(bill[1]), calculateTip(bill[2])];

console.log('The tips provided during the vacation were: ' + tip);

var ammountSpent = [bill[0]+tip[0],bill[1]+tip[1],bill[2]+tip[2]];

console.log('The ammount payed for each of the meals is: ' + ammountSpent);
*/

//OBJECTS AND PROPERTIES

//OBJECT LITERAL
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);

//new Object syntax

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1994;
jane['lastName'] = 'Smith';

console.log(jane);
*/

//Objects and Methods 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();
console.log(john);