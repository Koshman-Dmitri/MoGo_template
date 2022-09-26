const listTitle = document.querySelectorAll('[data-accordeon-title]');
const listPara = document.querySelectorAll('.list__item-text');

listTitle.forEach(function(item) {
    item.addEventListener('click', function() {
        listPara.forEach(function(item) {
            item.classList.add('hidden');
        })
        item.lastElementChild.classList.remove('hidden');
        listTitle.forEach(function(element) {
            element.classList.remove('visible');
        })
        item.classList.add('visible');
    })
});

