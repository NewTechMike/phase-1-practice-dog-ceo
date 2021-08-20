console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dog = document.querySelector('#dog-image-container')
console.log(dog)

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogBreeds = document.querySelector('#dog-breeds')
console.log(dogBreeds)

const breedDropdown = document.querySelector("#breed-dropdown")
console.log(breedDropdown)

fetch(imgUrl)
  .then(response => response.json())
  .then(object => {
    object.message.forEach(dogImgs => {
      const img = document.createElement('img')
      img.src = dogImgs
      dog.append(img)
  })
})

fetch(breedUrl)
  .then(response => response.json())
  .then(obj => {
    Object.keys(obj.message).forEach(breed => {
    const li = document.createElement("li")
    li.textContent = breed
    dogBreeds.append(li)
  })
})

dogBreeds.addEventListener('click', event =>{
  if(event.target.tagName === "LI"){
    event.target.style.color = "red"
  }
})

breedDropdown.addEventListener("change", event => {
  const letter = event.target.value
  const breedList = dogBreeds.querySelectorAll("li")
  console.log(breedList)
  breedList.forEach(li => {
    if(li.textContent[0] === letter){
      li.style.display = ""
    } else {
      li.style.display = "none"
    }
  })
})