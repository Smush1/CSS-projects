
/* Creating an array for different objects containing images ids and urls */

let imagesIds = [
    {"id": 1,
    "image": "images/wallpaper1web.webp"
    },
    {"id": 2,
    "image": "images/wallpaper2webp.webp"
    },
    {
    "id": 3,
    "image": "images/wallpaper3web.webp"
    },
    {
    "id": 4,
    "image": "images/wallpaper4web.webp"
    },
    {"id": 5,
    "image": "images/wallpaper5webp.webp"
}
]



let currentItem=1;

/* DOM for left button, image and right button. */

const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const imagevw = document.querySelector('.image-view')
console.log(imagesIds)
console.log(imagesIds.length)


/* Assigning a single object from an array of imageIds using currentItem */

const item= imagesIds[currentItem]
console.log(item.id)
console.log(imagevw.src)



/* Increment by 1 of currentItem to reach the desired object  */
btnLeft.addEventListener("click",function(){
    if (currentItem>0)
    {
        currentItem--
    }
    else {
        currentItem=imagesIds.length-1;
    }   
    changeImage()
})

/* Increment by 1 of currentItem to reach the desired object  */
btnRight.addEventListener("click",function(){
    if (currentItem<imagesIds.length-1)
    {
        currentItem++
        
    }
    else {
        currentItem=0

    }
    changeImage()
})


/* Created a function to assign a particular object from the "imagesIds" array */


function changeImage(){
    imagevw.classList.remove("elementToFadeInAndOut")
    let item= imagesIds[currentItem ]
    console.log(currentItem)
    console.log(item.image)
    imagevw.src=item.image
    imagevw.classList.add("elementToFadeInAndOut")
    console.log(imagevw.classList)
    setInterval(function () {
        imagevw.classList.remove("elementToFadeInAndOut")
    }, 1000);
    
}