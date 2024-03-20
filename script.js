const products = ['green', 'purple', 'whitenpurple', 'grey', 'rednblack', 'orange', 'camogrey', 'black']

for  (let i=0; i<products.length;i++) {
    let elemento = document.getElementById(products[i]);
    elemento.addEventListener('mouseenter', function() {
        let tempelemento = document.getElementById('1'+products[i]);
        tempelemento.classList.toggle('none');
        tempelemento.classList.toggle('preco');
    });
    elemento.addEventListener('mouseleave', function() {
        let tempelemento = document.getElementById('1'+products[i]);
        tempelemento.classList.toggle('none');
        tempelemento.classList.toggle('preco');
        elemento
    });
}