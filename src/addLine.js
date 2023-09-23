module.exports = () => {
    const addBtns = Array.from(document.querySelectorAll('.addLine'));
    addBtns.forEach(addBtn => {
        addBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            const newLine = document.createElement('li');
            newLine.classList.add('line');
            const column = e.target.closest('.column');
            const list = column.querySelector('.list')
            console.log('COLUMN: '+column);
            list.insertBefore(newLine, list.lastChild);
            require('./addCloseBtns')();
    })    
       
})
}