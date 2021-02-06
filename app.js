
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
		let j =0, looper=0, len = key.length;
        let exchange=0;
        let series = [' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',
        '0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?','@',
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        '[','\\',']','^','_','`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',
        'v','w','x','y','z','{','|','}','~'];

		for(let i=0; i<msg.length; i++) {
			j= parseInt(key.charAt(looper));
			for(let k=0; k<series.length; k++) {
				if(series[k] == msg.charAt(i)) {
					exchange = k;
					break;
				}
				console.log(exchange);
			}
			let conv = series[((exchange+j)%95)];
			
			encypted = encypted.concat(conv);
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
		let decrypted="";
		let j =0, looper=0, len = key.length;
        let exchange;
		for(let i=0; i<msg.length; i++) {
			j= parseInt(key.charAt(looper));
            if((msg.charCodeAt(i)-j)<33)
                exchange = 127-(33-((msg.charCodeAt(i)-j)));
                
            else
                exchange = (msg.charCodeAt(i)-j);
            let temp = String.fromCharCode(exchange);
            if(temp=="~"){
                temp=" ";
            }
			decrypted = decrypted.concat(temp);
			looper = (looper+1)%len;
		}
        console.log("Decrypted: "+decrypted);
        document.getElementById("encryted").innerHTML=decrypted;
        document.getElementById("crypted").innerHTML="Decrypted Message:";
    }
    else
        alert("Please enter a key");
}

const menu = document.querySelector(".inck");
const menuLinks = document.querySelector(".dropdown");
let a=0;

menu.addEventListener('click', function handler(){
    menuLinks.classList.toggle("active");
    if(a%2!=0){
        document.getElementById("changeicon").className="fas fa-bars";
        a++;
    }
    else{
        document.getElementById("changeicon").className="fas fa-times";
        a++;
    }
});
