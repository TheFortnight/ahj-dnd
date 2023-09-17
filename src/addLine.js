module.exports = () => {
    const addBtn = document.querySelector('.addLine');
    addBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        const newLine = document.createElement('li');
        newLine.classList.add('line');
        const column = document.querySelector('.column1 .line');
        console.log('COLUMN: '+column);
        const pn = column.parentNode;
        pn.insertBefore(newLine, pn.lastChild);
        require('./addCloseBtns')();
    
       
})
}