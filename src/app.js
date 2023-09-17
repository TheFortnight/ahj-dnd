const addCloseBtns = require('./addCloseBtns');
const addLine = require('./addLine')
addCloseBtns();
addLine();


const items = Array.from(document.querySelectorAll('.list'));

items.forEach(item => {
    const itemsElements = item.querySelector('.line');

let actualElement;

const onMouseOver = (e) => {
    console.log(e.target);
    if (e.target.classList.contains('line')) e.target.style['margin-top'] = '20px';
    actualElement.style.top = (e.clientY-10) + 'px';
    actualElement.style.left = (e.clientX-120) + 'px';

};

const onMouseUp = (e) => {
    let mouseUpItem = e.target;
   
   item = mouseUpItem.parentNode;
    console.log(mouseUpItem);
    if (mouseUpItem.classList.contains('line')) item.insertBefore(actualElement, mouseUpItem); 
    e.target.style['margin-top'] = '0px';
    actualElement.classList.remove('dragged');
    actualElement = undefined;

    document.documentElement.removeEventListener('mouseup', onMouseUp);
    document.documentElement.removeEventListener('mouseout', onMouseOut);
    document.documentElement.removeEventListener('mouseover', onMouseOver);
};

const onMouseOut = (e) => {
    console.log('LEAVE: '+e.target)
    e.target.style['margin-top'] = '0px';
   
}

item.addEventListener('mousedown', (e) => {
    e.preventDefault();

    actualElement = e.target;    
    actualElement.classList.add('dragged');
    document.documentElement.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseout', onMouseOut);
    document.documentElement.addEventListener('mouseover', onMouseOver);
})
})
