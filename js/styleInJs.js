const sections = document.querySelectorAll('section');
// console.log(sections);

for(const section of sections){
    section.style.border = '2px solid blue';
    section.style.marginBottom = '2px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor = 'lightgray'; //overrides
}

const placesContainer = document.getElementById('fruits-container');
// placesContainer.style.backgroundColor = 'aqua';
placesContainer.classList.add('text-center'); //makes a id a class
placesContainer.classList.remove('large-text');