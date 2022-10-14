const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(animateContent);

function animateContent() {
  var animation = false,
      animDur = 1000
  let rows = $$('.box__row');
  let arrayRows = Array.from(rows);
  let cells = $$('.box__row-cell');
  let arrayCells = Array.from(cells);
  let contents = $$('.box__content');
  let arrayContents = Array.from(contents);
  let closeBtn = $('.box__close');    
  var animFalse = function() {
    animation = false;
  }

  var active = function(elem) {
    if (animation) return;
  
    elem.classList.add('cell-fade')
    var cellData = elem.dataset.cell;
    var content = $(`.box__content[data-content='${cellData}']`);
    elem.classList.add('active')
    animation = true;
    
    content.classList.add('show-content')
    closeBtn.classList.add('box-close-active');
    setTimeout(animFalse, animDur);
  }

  var close = function() {
    animation = true;
    
    arrayCells.forEach(cell => {
      cell.classList.remove('active')
      cell.classList.remove('cell-fade')
    })
    
    arrayContents.forEach(content => content.classList.remove('show-content'))
    // closeBtn
    this.classList.remove('box-close-active');

    setTimeout(animFalse, animDur);
  }
  

  arrayRows.forEach(row => {
    row.addEventListener('click', e => {
    const { target } = e;
    if (target.matches('div')) {
      active(target);
    }});
  })
  
  
  closeBtn.addEventListener('click', close);

};

