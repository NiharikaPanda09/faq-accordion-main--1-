
const plusIcons = document.querySelectorAll('.plus-btn');
const minusIcons = document.querySelectorAll('.min-btn');
const contentElements = document.querySelectorAll('.content');

plusIcons.forEach(plusIcon => {
  plusIcon.addEventListener('click', function() {
    const parent = this.closest('.h2');
    const content = parent.nextElementSibling;

    this.classList.add('hide');
    parent.querySelector('#minus-icon').classList.remove('hide');
    content.classList.remove('hide');
  });
});

minusIcons.forEach(minusIcon => {
  minusIcon.addEventListener('click', function() {
    const parent = this.closest('.h2');
    const content = parent.nextElementSibling;

    this.classList.add('hide');
    parent.querySelector('.plus-icon').classList.remove('hide');
    content.classList.add('hide');
  });
});
