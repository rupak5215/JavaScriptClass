// to get the access of show button
let showbtn = document.getElementById ('showbtn');

// to get the access of close button 
let closebtn = document.getElementById('closebtn');
let popup = document.querySelector('.popup');
let subp = document.getElementById('sub-p')

// to show the poopup on click

showbtn.addEventListener('click', () =>{
    popup.style.display = 'block';
    showbtn.style.display = 'none';
    document.body.style.backgroundColor = '#9EA9B1'
    subp.style.display='none;'
});

window.addEventListener('load', () =>{
    popup.style.display = 'block';
    showbtn.style.display = 'none';
    document.body.style.backgroundColor = '#9EA9B1'
    subp.style.display='none;'
});

// window.addEventListener('load', () =>{
//     popup.style.display = 'none';
//     showbtn.style.display = 'block';
//     document.body.style.backgroundColor = 'bisque'
//     subp.style.display='block;'
// });

closebtn.addEventListener('click', () =>{
    popup.style.display = 'none';
    showbtn.style.display = 'block';
    document.body.style.backgroundColor = 'bisque'
    subp.style.display='block;'
});

