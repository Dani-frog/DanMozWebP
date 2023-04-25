var jatekos=true;//true az elso, false akk a második;
var jatekos1pont=0;
var jatekos2pont=0;
var tabla = document.getElementById("tabla");
var jatekter = document.createElement("table");
var Matrix=[];//kezdő helyek 28,29 ,,, 36,37

function Jatekeleje(){
//első korong koordináta
tabla.appendChild(jatekter);
var feher = document.createElement("img");
var fekete = document.createElement("img");
feher.src= "kepek/"+1+".png";
fekete.src= "kepek/"+2+".png";
feher.className="korong";
fekete.className="korong";

document.getElementById("1_1").appendChild(feher);
}

function tablaGen(){
    //var k = 0;
    var s=1;
    
    for(var i = 0;i<8;i++){
        var sor = document.createElement("tr");
        var o=1;
        for(var j = 0;j<8;j++){
            
            var oszlop = document.createElement("td");
            sor.appendChild(oszlop)
            oszlop.id = s+"_"+o;
            //oszlop.style.border = "2px solid red";
            Matrix.push(oszlop.id);
            o++;

        }
        jatekter.appendChild(sor);
        s++;
    }
    
}
tablaGen();
Jatekeleje();