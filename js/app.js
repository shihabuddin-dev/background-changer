document.getElementById('color-purple').addEventListener('click', function () {
    document.body.style.backgroundColor = 'purple';
});
document.getElementById('color-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
});
document.getElementById('color-skyBlue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'skyBlue';
});
document.getElementById('color-green').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
});
document.getElementById('color-yellow').addEventListener('click', function () {
    document.body.style.backgroundColor = 'yellow';
});

document.getElementById('color-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
});
document.getElementById('color-red').addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
});

// Change random background color 
function changeBgColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("body").style.backgroundColor = randomColor;
}