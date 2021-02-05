
function scriptmath(variable1){
    let a = 'a';
    console.log(a.charCodeAt(0));
    let b = String.fromCharCode(a.charCodeAt(0)+5);
    console.log(b);
    let c='986';
    let no = parseInt(c.charAt(0));
    console.log(no);
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

function encrypt(){
    let key = document.getElementById("keyy").value;
    let msg = document.getElementById("keyy2").value;
    if(key!=""){
        let encypted="";
		let decrypted="";
		let j =0, looper=0, len = key.length;
		for(let i=0; i<msg.length; i++) {
			j= parseInt(key.charAt(looper));
            let temp = String.fromCharCode((msg.charCodeAt(i)+j));
			encypted = encypted.concat(temp);
			looper = (looper+1)%len;
		}
		console.log("Encrypted: "+encypted);
        document.getElementById("encryted").innerHTML=encypted;
        document.getElementById("crypted").innerHTML="Encrypted Message:";
    }
    else
        alert("key not entered");
    
}

function decrypt(){
    let key = document.getElementById("keyy").value;
    let msg = document.getElementById("keyy2").value;
    if(key!=""){
        let encypted="";
		let decrypted="";
		let j =0, looper=0, len = key.length;
		for(let i=0; i<msg.length; i++) {
			j= parseInt(key.charAt(looper));
            let temp = String.fromCharCode((msg.charCodeAt(i)-j));
			encypted = encypted.concat(temp);
			looper = (looper+1)%len;
		}
        console.log("Decrypted: "+encypted);
        document.getElementById("encryted").innerHTML=encypted;
        document.getElementById("crypted").innerHTML="Decrypted Message:";
    }
    else
        alert("key not entered");
}
