const items = Array.from(document.querySelectorAll('.list'));

items.forEach(item => {
    const itemsElements = item.querySelector('.line');

let actualElement;

const onMouseOver = (e) => {
    console.log(e);

    actualElement.style.top = e.clientY + 'px';
    actualElement.style.left = e.clientX + 'px';
};

const onMouseUp = (e) => {
    const mouseUpItem = e.target;
    console.log(mouseUpItem);
    if (mouseUpItem.classList.contains('line')) item.insertBefore(actualElement, mouseUpItem);
   // items.insertBefore(actualElement, mouseUpItem);

    actualElement.classList.remove('dragged');
    actualElement = undefined;

    document.documentElement.removeEventListener('mouseup', onMouseUp);
    document.documentElement.removeEventListener('mouseover', onMouseOver);
};



item.addEventListener('mousedown', (e) => {
    e.preventDefault();

    actualElement = e.target;
    
    actualElement.classList.add('dragged');

    document.documentElement.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseover', onMouseOver);
})
})
