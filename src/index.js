console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

function fetchImgs() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => {
        renderImg(images)
    })
    
  }
  
  function renderImg(images) {
    let dogContainer = document.querySelector("#dog-image-container")
    images.message.forEach(function(dog){
        let newImage = document.createElement('img') 
        newImage.setAttribute("src", dog)
        dogContainer.append(newImage)
    })
}
  
  
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

let breedInformation = ""

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        breedInformation = breeds
        renderBreed(breeds)
    })
    
  }
  
  function renderBreed(breeds) {
    let breedUl = document.querySelector("#dog-breeds")
    Object.keys(breeds["message"]).forEach(function(breed){
        let newBreed = document.createElement('li') 
        newBreed.innerText = breed
        breedUl.append(newBreed)
    })
}
  
function changeColor() {
    const dogList = document.querySelector("#dog-breeds")
    dogList.addEventListener("click", function(e) {
    
        e.target.style.color = "pink"
     
    }) 
    
  } 

  
  function selectBreed() {
    const breedList = document.querySelector("#breed-dropdown")
    breedList.addEventListener("change", function(e) {
        // renderBreed(breeds)
        let dogLis = document.querySelectorAll('ul#dog-breeds>li')
        dogLis.forEach(node => {

            if (node.innerText[0] !== e.target.value){
                node.style.display = "none"
            }
            else {
                node.style.display = ""
            }
            

        })
    })
}

    fetchImgs()
    fetchBreeds()
    changeColor()
    selectBreed()
  