let i=0;
let images =[];
let time = 1000;

images[0]='Images/img7.jpg';
images[1]='images/img10.jpg';
images[2]='images/img11.jpg';
images[3]='Images/img7.jpg';
images[4]='images/img10.jpg';
images[5]='images/img11.jpg';

function changeImage(){
    document.slide.src=images[i];
    

    if(i<images.length-1){
        i++;
    } else {
        i=0;
    }
    
    setTimeout('changeImage()', time)
}

window.onload=changeImage;