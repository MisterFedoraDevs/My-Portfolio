console.log("JavaScript started");
const photoScreen = document.querySelector(".photoScreen");
const photoCover = document.querySelectorAll(".photoCover");
const regularPhoto = document.getElementById("regularPhoto");
const photoTitle = document.getElementById("photoTitle");
const photoDescription = document.getElementById("photoDescription");
const closeoPhotoScreen = document.querySelector(".closePhotoScreen");

const photos = [
    {
        id: "waxMuseumPhoto",
        image: "1large.png",
        alt: "A picture of me standing behind a podium.",
        title: "Madame Tussaud's Wax Museum, NY",
        description: "I took a picture with two Presidents and First Ladys. Sadly, theu were made out of Wax, so they weren't real. Maybe I'll be the next person to be scuplted out of wax.",
    },
    {
        id: "highSchoolGymPhoto",
        image: "mypictures/2.png",
        alt: "a",
        title: "a",
        description: "a",
    },
    {
        id: "myDrivetrain1Photo",
        image: "mypictures/3.png",
        alt: "a",
        title: "a",
        description: "a",
    },
    {
        id: "cascadeLiftHalvesPhoto",
        image: "mypictures/4.png",
        alt: "a",
        title: "a",
        description: "a",
    },
    {
        id: "footballOnGroundPhoto",
        image: "mypictures/5.png",
        alt: "a",
        title: "a",
        description: "a",
    },
    {
        id: "playerRunningPhoto",
        image: "mypictures/6.png",
        alt: "a",
        title: "a",
        description: "a",
    },
    {
        id: "photo6",
        image: "mypictures/7.png",
        alt: "a",
        title: "a",
        description: "a",
    },
    {
        id: "photo7",
        image: "mypictures/8.png",
        alt: "a",
        title: "a",
        description: "a",
    }
];

console.log("Finshed Array");


photoCover.forEach (img => {
    console.log("photoScreen");
    
    img.addEventListener("click", () => {

        photoScreen.classList.toggle("hidden");
        
        console.log("photoScreen");

        const photo = photos.find(photo => photo.id === img.id);
        regularPhoto.src = photo.image;
        regularPhoto.alt = photo.alt;
        photoTitle.textContent = photo.title;
        photoDescription.textContent = photo.description;

        console.log(photoScreen.className);
    });
});