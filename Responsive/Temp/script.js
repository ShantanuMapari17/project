function myFunction(){
    document.getElementById("demo").innerHTML="Welcome JS!!!";
}

function light(input){
    var pic;
    if(input==0)
        pic="/img/pic_bulboff.gif";
    else
        pic="/img/pic_bulbon.gif";
    
    document.getElementById('bulb').src=pic;
}