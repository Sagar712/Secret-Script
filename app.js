
function scriptmath(variable1){
    console.log(variable1);
    let srt = 'sagar wankhade';
    let flip = '';
    for(let i=srt.length-1; i>=0; i--) {
        if(i==srt.length-1){
            flip = flip.concat(srt.charAt(i)).toUpperCase(); 
        }
        flip = flip.concat(srt.charAt(i)).toLowerCase();
    }
    console.log(flip);
    if(document.getElementById("heading").style.color!="yellow")
        document.getElementById("heading").style.color="yellow";
    else
    document.getElementById("heading").style.color="white";
}

function readata(){
    let key = document.getElementById("keyy").value;
    let msg = document.getElementById("keyy2").value;
    let flip = '';
    //megging flipping mechanism
    for(let i=msg.length-1; i>=0; i--) {
        flip = flip.concat(msg.charAt(i)).toLowerCase();
    }

    document.getElementById("encryted").innerHTML=flip;
    console.log("Encrypt clicked");
}

function reset(){
    document.getElementById("keyy2").value="";
    document.getElementById("encryted").innerHTML="";
    console.log("Reset clicked");
}
