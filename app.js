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
