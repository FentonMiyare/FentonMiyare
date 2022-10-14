console.log('Hello World!');

let searchWrapper = document.querySelector('.search-wrapper');
let inputHolder = document.querySelector('.input-holder');
let ul = document.querySelector('#stateList');
let close = document.querySelector('.close');

function searchToggle(obj, evt){
  var container = obj.closest('.search-wrapper');
  var searchInput = container.querySelector('.search-input');
  if(!container.classList.contains('active')){
    container.classList.add('active');
    evt.preventDefault();
    //searchInput.onfocus = () => {
      // ul.style.display = "block";
      ul.style.left = "0";
      ul.style.opacity = "1";
    // }
  } else if(container.classList.contains('active') && obj.closest('.input-holder') === null) {
    container.classList.remove('active');
    // clear input
    searchInput.value = '';
    // ul.style.display = "none"
    ul.style.left = "-100%";
    ul.style.opacity = "0";
  }
}


function mySearchFunction() {
  // Declare variables
  var input, filter, li, item, i, txtValue;
  // User Input
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  // Individual item on list
   li = ul.getElementsByTagName("li");
  //li = document.querySelectorAll('.sList__item')
  ArrLi = Array.from(li)
  
  for (i = 0; i < ArrLi.length; i++) {
    item = ArrLi[i];
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
     ArrLi[i].style.display = "";
    } else {
      ArrLi[i].style.display = "none";
    }
  }
}

