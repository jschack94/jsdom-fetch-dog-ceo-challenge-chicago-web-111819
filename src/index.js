let breeds = [];

  let allBreeds = []
  // api endpoints
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  // dom nodes for attaching event listeners
  const container = document.getElementById('dog-image-container');
  const dogBreedUl = document.getElementById('dog-breeds');
  const breedDropdown = document.getElementById('breed-dropdown');
  


dogBreedUl.addEventListener('click', (event) => event.target.style.color = 'red')

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res=> res.json())
    .then(images => {
      renderImages(images)
})
}

 function renderImages(Images) {
  Images.message.forEach(renderImage)
}

function renderImage(Image) {
  let newImageEl = document.createElement('img');
  newImageEl.src = Image;
  container.appendChild(newImageEl);
}

function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {

      breeds = Object.keys(results.message);
      breeds.forEach(breed => updateBreedLists(breed));
   
    
      
      
    });
}

function updateBreedLists(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li); 
}

function updateBreedList(breeds) {
  let ul = document.querySelector('#dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => updateBreedLists(breed));
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function selectBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}



  
loadImages();
loadBreedOptions();
addBreedSelectListener()






