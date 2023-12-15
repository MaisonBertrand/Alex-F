var imageContainer = document.getElementById(imageContainer);
var leftButton = document.getElementById(leftButton);
var images = ["url('src/images/DSC03222.jpg')","url('src/images/DSC03224.jpg')","url('src/images/DSC03228.jpg')","url('src/images/DSC03368.jpg')","url('src/images/DSC03504.jpg')",
"url('src/images/DSC03514.jpg')","url('src/images/DSC03518-Enhanced-NR.jpg')","url('src/images/DSC03528.jpg')","url('src/images/DSC03575.jpg')","url('src/images/DSC03581.jpg')"]
var slideTime = 2000;
var imageNumber = 0;


document.getElementById("imageContainer").style.backgroundImage= images[0];
document.getElementById("leftButton").innerHTML = " < "
document.getElementById("rightButton").innerHTML = " > "

const rightElement = document.getElementById("rightButton");
rightElement.addEventListener("click", cycleImage, slideTime);

function cycleImage(){
    if(imageNumber<images.length){
        imageNumber++;
        //console.log(imageNumber);
        document.getElementById("imageContainer").style.backgroundImage = images[imageNumber];
    }else{
        imageNumber = 0;
    };
};

