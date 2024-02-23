let text = document.getElementById('text');
let myicon = document.getElementById('myicon');
let graphicon = document.getElementById('graphicon');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    graphicon.style.left = value * -1 + 'px';
    myicon.style.left = value * 1 + 'px';
});
