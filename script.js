let slideIndex = 0;
let imgId = document.getElementsByClassName('mySlide');
let dotId = document.getElementsByClassName('dot');
showSlide(slideIndex);
// For changing images with button
function changeWithButton(x){
    slideIndex += x;
    if(slideIndex < 0){
        slideIndex = imgId.length-1;
    }else if(slideIndex >= imgId.length){
        slideIndex = 0;
    }
    showSlide(slideIndex);
    console.log(slideIndex);
}
// For showing images
function showSlide(x){
    // Disabling other image to be shown and dim the color of dots
    for( let i = 0; i<imgId.length; i++){
        imgId[i].style.display = "none";
        dotId[i].style.color = "rgb(80,80,80)";
        dotId[i].style.fontSize = "100px";
    }
    // Showing the image and highlight the current dot
    imgId[x].style.display = "block";
    dotId[x].style.color = "white";
    dotId[x].style.fontSize = "150px";
}
