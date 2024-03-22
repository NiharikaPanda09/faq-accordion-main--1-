
const plusIcon = document.getElementById("plus-icon");
const minusIcon = document.getElementById("minus-icon");
const content = document.getElementById("content");

plusIcon.addEventListener('click', () =>  {
  plusIcon.classList.add('hide');
  minusIcon.classList.remove('hide');
  content.classList.remove('hide');
});

minusIcon.addEventListener('click', () =>  {
  minusIcon.classList.add('hide');
  plusIcon.classList.remove('hide');
  content.classList.add('hide');
});

