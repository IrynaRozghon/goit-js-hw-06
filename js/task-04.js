const counterValue = {
    value: 0,
    decrement() {
        console.log(this);
        this.value -= 1;
    },
    increment() {
        console.log(this);
        this.value += 1;
    },
};


const decrBtn = document.querySelector('[data-action= "decrement"]');
console.log(decrBtn);

const incrBtn = document.querySelector('[data-action="increment"]');
console.log(incrBtn);

const valueEl = document.querySelector('#value');
console.log(valueEl);

decrBtn.addEventListener('click', function decrBtnClick () 
{
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

incrBtn.addEventListener('click', function incrBtnClick() 
{
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});





