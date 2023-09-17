module.exports = () => {
    
    const lines = Array.from(document.querySelectorAll('.line'));
    lines.forEach(line => {
        if(line.querySelector('.closeButton')) return;
        const closeBtn = document.createElement('div');
        closeBtn.classList.add('closeButton');
        
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.remove();
        })
        line.appendChild(closeBtn);
    })
}