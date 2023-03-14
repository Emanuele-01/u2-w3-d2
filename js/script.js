let inputValue = document.querySelector('.input');
let btnSucces = document.querySelector('.succes');
let btnDelete = document.querySelector('.delete');
let arrayOne = [];

btnSucces.addEventListener('click', function (){
    arrayOne.push(inputValue.value);
    localStorage.setItem('name', JSON.stringify(arrayOne));
    document.querySelector('.text').textContent = localStorage.getItem('name', JSON.stringify(arrayOne));
});
btnDelete.addEventListener('click', function(){
    arrayOne.pop();
    localStorage.setItem('name', JSON.stringify(arrayOne));
    document.querySelector('.text').textContent = localStorage.getItem('name', JSON.stringify(arrayOne));
});

let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

let heading;

const updateCounterInDOM = () => {
    heading.innerText = counterValue;
};

window.onload = () => {
    heading = document.querySelector(".counter");
    incrementCounter();
}
const incrementCounter = setInterval( () => {
    counterValue +=1;
    updateCounterInDOM();
    sessionStorage.setItem("lastCounterValue", counterValue);
}, 1000);