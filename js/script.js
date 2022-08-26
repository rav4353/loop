// while loop

var count = 0;

while (count < 10) {
    console.log(count);
    count++;
}


//do-while

var count = 0;

do {
    console.log(count);
    count++;
}

while (count < 5);
console.log("Loop stopped!");

//For Loop

let text ="";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "\n";
}

console.log(text);

//For-In

let colors = ['red', 'green', 'blue'];

for (let index in colors) {
    console.log(colors[index]);
}

//For-Of

let colorss = ['red', 'green', 'blue'];

for (let color of colorss) {
    console.log("Color: " + color);
}
