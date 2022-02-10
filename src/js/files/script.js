const buttonMessage = document.querySelector('.social-mainslider__icon-message');
const chattingSocial = document.querySelector('.chatting-social-mainslider');
const socialMainslider = document.querySelector('.social-mainslider');
const socialClue = document.querySelector('.social-mainslider__clue');

buttonMessage.addEventListener('click', () => {
   buttonMessage.classList.toggle('_active');
   chattingSocial.classList.toggle('_active');
});

socialMainslider.addEventListener('mouseover', () => {
   if (!socialClue.classList.contains('_hidden')) {
      socialClue.classList.add('_hidden');
   }
});


window.addEventListener('load', () => {
   setInterval(() => {
      if (!socialClue.classList.contains('_hidden')) {
         socialClue.classList.add('_hidden');
      }
   }, 6000);
});


// forms
const inputNames = document.querySelectorAll('.issue-order__item');

document.addEventListener("formSent", function (e) {
   inputNames.forEach(el => el.classList.add('_form-send'))
});


// social dnone
document.addEventListener("watcherCallback", function (e) {
	// Полная информация от наблюдателя
	const entry = e.detail.entry;
	// Наблюдаемый объект
	const targetElement = entry.target;

   // if(e) {
   //    socialMainslider.classList.add('_dnone');
   // }

});
