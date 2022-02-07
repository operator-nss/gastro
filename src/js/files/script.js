const buttonMessage = document.querySelector('.social-mainslider__icon-message');
const chattingSocial = document.querySelector('.chatting-social-mainslider');
const socialMainslider = document.querySelector('.social-mainslider');
const socialClue = document.querySelector('.social-mainslider__clue');

buttonMessage.addEventListener('click', () => {
   buttonMessage.classList.toggle('_active');
   chattingSocial.classList.toggle('_active');
   socialClue.classList.add('_dnone');
});

socialMainslider.addEventListener('mouseover', () => {
   if (!socialClue.classList.contains('_dnone')) {
      socialClue.classList.add('_hidden');
   }

});

socialMainslider.addEventListener('mouseout', () => {
   setInterval(() => {
      socialClue.classList.remove('_hidden');
   }, 7000);

});
