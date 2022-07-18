// alert('Hello DOM');

var myPara = document.querySelector('#pickme');
myPara.style.color='red';

var header = document.querySelector('h1');

header.style.color = 'blue';

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';

    for(var i=0;i<6;i++){
        color+= letters[Math.floor(Math.random()*16)];
    }

    return color;
}

function changeHeaderColor(){
    var colorInput = getRandomColor();
    header.style.color = colorInput;
}

setInterval('changeHeaderColor()',500);