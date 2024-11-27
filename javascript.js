let arg1 = 0, arg2 = 0;
let opr = "";
let argi = true;
let another = false;

function updateArgs(nbr){
    if(argi){
        arg1 = (arg1 * 10) + nbr;
        console.log(`arg1=${arg1}, arg=${arg2}, opr=${opr} another=${another}`); 
    }else{
        arg2 = (arg2 * 10) + nbr;
        console.log(`arg1=${arg1}, arg=${arg2}, opr=${opr} another=${another}`);
        another = true;   
    }
}

function updateOpr(Opr){
    opr = Opr;
    argi = false;
    another = false;
    console.log(`arg1=${arg1}, arg=${arg2}, opr=${opr} another=${another}`); 
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
        return "error man";
    }
    return arg1 / arg2;
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
    opr = "";
    console.log(`arg1=${arg1}, arg=${arg2}, opr=${opr} another=${another}`); 
});
const equal = document.querySelector(".equal");
equal.addEventListener('click', () => {
    arg1 = operate(arg1, opr, arg2);
    arg2 = 0;
    screen.innerText = arg1;
    argi = false; 
    another = false;
});
const del = document.querySelector(".del");
del.addEventListener('click', () => {
    if(argi){
        arg1 = (arg1 - (arg1 % 10)) / 10;
        populate();
        console.log(`arg1=${arg1}, arg=${arg2}, opr=${opr} another=${another}`); 
    }else{
        arg2 =(arg - (arg2 % 10)) - 10;
        populate();
        console.log(`arg1=${arg1}, arg=${arg2}, opr=${opr} another=${another}`);
        another = true;   
    }
});


