let n = 5;

if (n > 0){
    console.log('this number is positive');}
else if ( n < 0){
    console.log('this number is negative'); }
else {
    console('This is zero'); }


    day = 6;
switch (day) {
    case 1:
        console.log('Today is Sunday');
        break;

    case 2:
        console.log('Today is Monday');
        break;

    case 3:
        console.log('Today is Tuesday');
        break;

    case 4:
        console.log('Today is Wednesday');
        break;

    case 5:
        console.log('Today is Thursday');
        break;

    case 6:
        console.log('Today is Friday');
        break;

    case 7:
        console.log('Today is Saturday');
        break;

    default:
        console.log('Error :( wrong input');
    }



for (let i=1; i<=5; i++){
    console.log('This is a for loop ' + i);
    if (i === 3){
        console.log('This loop will now break');
        break
    }
}
for (let i=1; i<=5; i++){
    console.log('This is a for loop ' + i);
    if (i === 3){
        console.log(`This is the number ${i}!`);
        continue
    }
}

let i = 1;
while (i<=5){
    console.log('This is a while loop '+ i);
    i++;
}

let x = 1;
do {
    console.log('This is a do-while loop '+ x);
    x++;
   
}  while (x<=5);


function introduction(name, animal){
    console.log(`Hello my name is ${name} and my favourite animal is a ${animal}`);
    let z = 5;
    b = z*z;
    console.log(`${z} squared is ${b}`);
}
introduction("Zainab", "Dragon");