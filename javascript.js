let arg1 = 0, arg2 = 0;
let opr = "";
let argi = true;
let another = false;
let pointAdd = 0;

function updateArgs(nbr){

    if(argi){
        if(pointAdd != 0){
            arg1 = arg1 +  (Math.pow((0.1), pointAdd) * nbr);
            arg1 = parseFloat(arg1.toFixed(pointAdd));
            pointAdd += 1;
            console.log(`arg1=${arg1}, arg=${arg2}, argi=${argi},opr=${opr} another=${another} pointAdd=${pointAdd}`);
        }else{
        if(arg1 == "oh man don't"){
            arg1 = nbr;
        }else{
            arg1 = (arg1 * 10) + nbr;
            console.log(`arg1=${arg1}, arg=${arg2}, argi=${argi}, opr=${opr} another=${another} pointAdd=${pointAdd}`); 
        }
    }
    }else{
        if(pointAdd != 0){
            arg2 = arg2 +  (Math.pow((0.1), pointAdd) * nbr);
            arg2 = parseFloat(arg2.toFixed(pointAdd));
            pointAdd += 1;
            console.log(`arg1=${arg1}, arg=${arg2}, argi=${argi},opr=${opr} another=${another} pointAdd=${pointAdd}`);
        }else {
        arg2 = (arg2 * 10) + nbr;
        console.log(`arg1=${arg1}, arg=${arg2}, argi=${argi},opr=${opr} another=${another} pointAdd=${pointAdd}`);
        another = true;
        }   
    }
}

function updateOpr(Opr){
    opr = Opr;
    argi = false;
    another = false;
    pointAdd = 0;
    console.log(`arg1=${arg1}, arg=${arg2}, argi=${argi},opr=${opr} another=${another} pointAdd=${pointAdd}`); 
}

function add(arg1, arg2){
    return arg1 + arg2
}
function substract(arg1, arg2){
    return arg1 - arg2;
}
function multiply(arg1, arg2){
    return arg1 * arg2;
}
function devide(arg1, arg2){
    if(arg2 == 0){
        return "oh man don't"
    }else{
        return arg1 / arg2;
    }
}

function operate(number1, opr, number2){
    if(opr == "+") return add(number1, number2);
    else if(opr == "-") return substract(number1, number2);
    else if(opr == "*") return multiply(number1, number2);
    else return devide(number1, number2);
}

const screen = document.querySelector(".screen");
function populate(){
    if(argi){
        screen.innerText = arg1;
    }else{
        screen.innerText = arg2;
    }
}
const zero = document.querySelector(".zero");
zero.addEventListener('click', () => {
    updateArgs(0);
    populate();
});
const one = document.querySelector(".one");
one.addEventListener('click', () => {
    updateArgs(1);
    populate();
});
const two = document.querySelector(".two");
two.addEventListener('click', () => {
    updateArgs(2);
    populate();
});
const three = document.querySelector(".three");
three.addEventListener('click', () => {
    updateArgs(3);
    populate();
});
const four = document.querySelector(".four");
four.addEventListener('click', () => {
    updateArgs(4);
    populate();
});
const five = document.querySelector(".five");
five.addEventListener('click', () => {
    updateArgs(5);
    populate();
});
const six = document.querySelector(".six");
six.addEventListener('click', () => {
    updateArgs(6);
    populate();
});
const seven = document.querySelector(".seven");
seven.addEventListener('click', () => {
    updateArgs(7);
    populate();
});
const eight = document.querySelector(".eight");
eight.addEventListener('click', () => {
    updateArgs(8);
    populate();
});
const nine = document.querySelector(".nine");
nine.addEventListener('click', () => {
    updateArgs(9);
    populate();
});
const addi = document.querySelector(".addition");
addi.addEventListener('click', () =>{
    if(another){
        arg1 = operate(arg1, opr, arg2);
        arg2 = 0;
        screen.innerText = arg1;
        argi = false;
    }
    updateOpr("+");
});
const sub = document.querySelector(".sbstraction");
sub.addEventListener('click', () =>{
    if(another){
        arg1 = operate(arg1, opr, arg2);
        arg2 = 0;
        screen.innerText = arg1;
        argi = false;
    }
    updateOpr("-");
});
const mul = document.querySelector(".mul");
mul.addEventListener('click', () =>{
    if(another){
        arg1 = operate(arg1, opr, arg2);
        arg2 = 0;
        screen.innerText = arg1;
        argi = false;
    }
    updateOpr("*");
});
const dev = document.querySelector(".dev");
dev.addEventListener('click', () =>{
    if(another){
        arg1 = operate(arg1, opr, arg2);
        arg2 = 0;
        screen.innerText = arg1;
        argi = false;
    }
    updateOpr("/");
});
const ac = document.querySelector(".ac");
ac.addEventListener('click', () => {
    screen.innerText = 0;
    arg1 = arg2 = 0;
    argi = true;
    pointAdd = 0;
    opr = "";
    console.log(`arg1=${arg1}, arg=${arg2}, argi=${argi},opr=${opr} another=${another} pointAdd=${pointAdd}`); 
});
const equal = document.querySelector(".equal");
equal.addEventListener('click', () => {
    arg1 = operate(arg1, opr, arg2);
    if(arg1 == "oh man don't"){
        another = false;
        pointAdd = 0;
        argi = true;
        pointAdd = 0;
        screen.innerText = arg1;
        console.log(`arg1=${arg1}, arg=${arg2}, argi=${argi},opr=${opr} another=${another} pointAdd=${pointAdd}`);
    } 
    else{
        console.log(`arg1=${arg1}, ar g=${arg2}, argi=${argi},opr=${opr} another=${another} pointAdd=${pointAdd}`);
        arg2 = 0;
        screen.innerText = parseFloat(arg1.toFixed(pointAdd));
        pointAdd = 0;
        argi = false; 
        another = false;
    }
});
const del = document.querySelector(".del");
del.addEventListener('click', () => {
    if(argi){
        if(pointAdd > 1){
            arg1 = arg1 * (Math.pow(10, pointAdd - 1));
            arg1 = (arg1 - (arg1 % 10)) / 10;
            pointAdd --;
            arg1 = arg1 / (Math.pow(10, pointAdd-1));
            arg1 = parseFloat(arg1.toFixed(pointAdd));
            populate();
        }else{
            arg1 = (arg1 - (arg1 % 10)) / 10;
            populate();
            console.log(`arg1=${arg1}, arg=${arg2}, argi=${argi},opr=${opr} another=${another} pointAdd=${pointAdd}`); 
        }
    }else{
        if(pointAdd > 1){
            arg2 = arg2 * (Math.pow(10, pointAdd - 1));
            arg2 = (arg2 - (arg2 % 10)) / 10;
            pointAdd --;
            arg2 = arg2 / (Math.pow(10, pointAdd-1));
            arg2 = parseFloat(arg2.toFixed(pointAdd));
            populate();
        }else{
            arg2 =(arg2 - (arg2 % 10)) - 10;
            populate();
            console.log(`arg1=${arg1}, arg=${arg2}, argi=${argi},opr=${opr} another=${another} pointAdd=${pointAdd}`);
            another = true;   
        }
    }
});
const point = document.querySelector(".point");
point.addEventListener('click', () => {
    pointAdd = 1;
    console.log(`arg1=${arg1}, arg=${arg2}, argi=${argi},opr=${opr} another=${another} pointAdd=${pointAdd}`);
});
