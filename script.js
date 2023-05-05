var jatekos=true;//true az elso, false akk a második;
var jatekos1pont=0;
var jatekos2pont=0;
var jatekvege=false;
var sor = 8;
var oszlop = 8;
var tabla = document.getElementById("tabla");
var jatekter = document.createElement("table");
var Matrix=[];//kezdő helyek 28,29 ,,, 36,37
var valtozott=false;
var lepes = document.getElementById("lepes");
var eredmenyjelzo = document.getElementById("eredmenyjelzo");


// Lépő
lepes.innerHTML = "player"+jatekos%2+" következik."
lepes.style.color = "white";


// eredményjelző
var fejlec = document.createElement("tr");
var player1 = document.createElement("td")
player1.innerHTML = "player1";
var player2 = document.createElement("td")
player2.innerHTML = "player2";
fejlec.appendChild(player1);
fejlec.appendChild(player2);

var score = document.createElement("tr");
var elso = document.createElement("td")
elso.innerHTML = 0;
var masodik = document.createElement("td")
masodik.innerHTML = 0;

player1.style.backgroundColor = "black";
player2.style.backgroundColor = "black";
player1.style.color = "white";
player2.style.color = "white";

elso.style.backgroundColor = "white";
masodik.style.backgroundColor = "white";

score.appendChild(elso);
score.appendChild(masodik);
eredmenyjelzo.appendChild(fejlec);
eredmenyjelzo.appendChild(score);

//

function Main()
{
    matrix=[];
    jatekvege=false;
    var div = document.createElement('div');
    generalas();
	
}


function katt(td)
{
	
    if(!jatekvege)
    {
	
    if(td.innerHTML=="")
    {
        let jatekos;
    if(lepes%2==0)
    {
        td.innerHTML = "X";
        jatekos="X";
        matrix[td.dataset.sor][td.dataset.oszlop]="X";
    } 
    else{
        td.innerHTML = "O"
        jatekos ="O"
        matrix[td.dataset.sor][td.dataset.oszlop]="O";
    }
	if(lepes==(sor*oszlop))
	{document.getElementById("kiiratas").innerHTML="Döntetlen! Nem nyert senki!";
		jatekvege=true;}

    for(let i =0; i<iranyvektor.length;i+=2)
    {
        if(megszamol(i,jatekos,td.dataset.sor-0,td.dataset.oszlop-0)+
        megszamol(i+1,jatekos,td.dataset.sor-0,td.dataset.oszlop-0)+1==5)
        {
            
            
            
            if(jatekos=="X")
            {
                jatekosx++;
            }
            else
            {
                jatekoso++;
            }
            /*document.getElementById("kiiratas").innerHTML="Nyert az:"+jatekos+"   "+"Nyomd meg a Generálást új játékhoz!";
            document.getElementById("pontok").innerHTML="X nyert körök: "+jatekosx+"/"+" O nyert körök: "+jatekoso;*/


            jatekvege=true;
            
        }

    }
}
}
}

function uresMatrix()
{
    for (let i = 0; i <sor; i++) {
        let uresSor=[];
        for (let j = 0; j < oszlop; j++) {
            uresSor.push(0);
            
        }
        matrix.push(uresSor);
        
    }
}

function Jatekeleje(){
//első korong koordináta
    tabla.appendChild(jatekter);


    for (let i = 4; i < 6; i++) {
        var feher = document.createElement("img");
        var fekete = document.createElement("img");

        feher.src= "kepek/"+1+".png";
        fekete.src= "kepek/"+2+".png";

        feher.className="korong";
        fekete.className="korong";

        var j =4;
        if (i==5) {
            j=5;
            document.getElementById(i+"_"+j).appendChild(feher);
            j--;
            document.getElementById(i+"_"+j).appendChild(fekete);
            //console.log(i,j);
            
        }
        else{
            document.getElementById(i+"_"+j).appendChild(feher);
            j++;
            document.getElementById(i+"_"+j).appendChild(fekete);
            //console.log(i,j);
        }
}

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