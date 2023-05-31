var kockaszel = 4;
var kockakozotthely=0.25;
var korongok;
var mozoghatkarika;
var jatekos=1;
var pontok;
var Jatekveg;
var eredmeny = [0,0] // Az első szám a fekete játékos eredménye,a második a fehéré
var pont; // ide írjuk az összes eredményt, csak itt létre kell már hozni
var matrix =[
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,2,1,0,0,0],
    [0,0,0,1,2,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
];
function Reset(){   
    pont.innerHTML = "";
    eredmeny[0,0];
    Jatekeleje();

}
function Jatekeleje()
{
    document.getElementById("tabla").style.opacity="100%";
    document.getElementById("korongok").style.opacity="100%";
    document.getElementById("pontok").style.opacity="100%";
    Jatekveg = false;
    var tabla = document.getElementById("tabla");
    korongok = document.getElementById("korongok");
    pontok = document.getElementById("pontok");
    mozoghatkarika=document.getElementById("mozoghatkarika");
    matrix =[
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,2,1,0,0,0],
        [0,0,0,1,2,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ];
    Tablazat();
    megjelenito();
    karikamegjelenito();
    pontokvalt();
    document.getElementById("Kezdogomb").style.zIndex=2;
    document.getElementById("Kezdogomb").style.display="none";
    var gyozelemszamlalo = document.getElementById("osszeseredmeny");
    pont = document.createElement("p");
    pont.innerHTML = "Fekete győzelmek:"+eredmeny[0]+" Fehér győzelmek:"+eredmeny[1];
    gyozelemszamlalo.appendChild(pont);
}

function Tablazat()
{
    for (var sor = 0; sor < 8; sor++) {
        for (var oszlop = 0; oszlop < 8; oszlop++)    {
            var kocka = document.createElement("div");
            kocka.style.position="absolute";
            kocka.style.width=kockaszel+"vw";
            kocka.style.height=kockaszel+"vw";
            kocka.style.backgroundColor="green";
            kocka.style.left=((kockaszel+kockakozotthely)*oszlop)+"vw";
            kocka.style.top=((kockaszel+kockakozotthely)*sor)+"vw";
            kocka.setAttribute("onclick","kockaklikk("+sor+","+oszlop+")")   
            tabla.appendChild(kocka);
        }
    }
}

function mozoghat(jatekos) {
    for (var sor = 0; sor < 8; sor++) {
        for (var oszlop = 0; oszlop < 8; oszlop++)    {
            if (klikkelheto(jatekos,sor,oszlop))
            {
            return true;    
            }
            
        }
    }
    return false;
}
var fekete;
var feher;
function pontokvalt()
{
    fekete = 0;
    feher = 0;
    for (var sor = 0; sor < 8; sor++) {
        for (var oszlop = 0; oszlop < 8; oszlop++)    {
            var ertek = matrix[sor][oszlop];
            if (ertek==1) fekete+=1;
            else if(ertek ==2) feher+=1;
        }
    }
    pontok.innerHTML="Fekete: "+fekete+ " Fehér: "+feher;
}

function kockaklikk(sor,oszlop)
{
    Jatekveg=true;

    if (matrix[sor][oszlop]!= 0) {
        return;
    }
    if (klikkelheto(jatekos,sor,oszlop)==true) {
        var erintettkorongok = mikerintettkorongok(jatekos,sor,oszlop);
        console.log(mikerintettkorongok(jatekos,sor,oszlop));
        korongforditas(erintettkorongok);
        matrix[sor][oszlop]=jatekos;
        if(jatekos==1 && mozoghat(2))jatekos=2;
        else if (jatekos == 2 && mozoghat(1)) jatekos =1;
        megjelenito();
        karikamegjelenito();
        pontokvalt();
        if (Jatekveg) {
            Vege();
        }
    }
    else {return;}
    
}

function Vege() {
    if (feher>fekete) alert("A Fehér Nyert!");
    else alert("A Fekete Nyert!");
    document.getElementById("Kezdogomb").style.display="block";
    document.getElementById("tabla").style.opacity="50%";
    document.getElementById("korongok").style.opacity="50%";
    document.getElementById("pontok").style.opacity="50%";
    if(feher>fekete){
        eredmeny[1]+=1;
    }
    else if(fekete>feher){
        eredmeny[0]+=1;
    }
    else{
        eredmeny[0]+=1;
        eredmeny[1]+=1;
    }
    pont.innerHTML = "";
    Jatekeleje();
    
}

function klikkelheto(jatekos,sor,oszlop)
{
    var erintettkorongok = mikerintettkorongok(jatekos,sor,oszlop);
    if (erintettkorongok.length==0)return false;
    else return true;
    
}

function mikerintettkorongok(id,sor,oszlop) 
{
    var erintettkorongok=[];
    //jobbra
    var erinthetoe=[];
    var oszlopjaro=oszlop;
    while(oszlopjaro<7)
    {
        oszlopjaro+=1;
        var ertekahelyen = matrix[sor][oszlopjaro];
        if (ertekahelyen==0 || ertekahelyen==id)
        {
            if (ertekahelyen==id)
            {
            erintettkorongok=erintettkorongok.concat(erinthetoe);
            }
            break;    
        }
        else
        {
            var koronghely= {sor:sor,oszlop:oszlopjaro}
            erinthetoe.push(koronghely);
        }
    }

    //balra
    var erinthetoe=[];
    var oszlopjaro=oszlop;
    while(oszlopjaro>0)
    {
        oszlopjaro-=1;
        var ertekahelyen = matrix[sor][oszlopjaro];
        if (ertekahelyen==0 || ertekahelyen==id)
        {
            if (ertekahelyen==id)
            {
            erintettkorongok=erintettkorongok.concat(erinthetoe);
            }
            break;    
        }
        else
        {
            var koronghely= {sor:sor,oszlop:oszlopjaro}
            erinthetoe.push(koronghely);
        }
    }

    //fel
    var erinthetoe=[];
    var sorjaro=sor;
    while(sorjaro>0)
    {
        sorjaro-=1;
        var ertekahelyen = matrix[sorjaro][oszlop];
        if (ertekahelyen==0 || ertekahelyen==id)
        {
            if (ertekahelyen==id)
            {
            erintettkorongok=erintettkorongok.concat(erinthetoe);
            }
            break;    
        }
        else
        {
            var koronghely= {sor:sorjaro,oszlop:oszlop}
            erinthetoe.push(koronghely);
        }
    }

    //le
    var erinthetoe=[];
    var sorjaro=sor;
    while(sorjaro<7)
    {
        sorjaro+=1;
        var ertekahelyen = matrix[sorjaro][oszlop];
        if (ertekahelyen==0 || ertekahelyen==id)
        {
            if (ertekahelyen==id)
            {
            erintettkorongok=erintettkorongok.concat(erinthetoe);
            }
            break;    
        }
        else
        {
            var koronghely= {sor:sorjaro,oszlop:oszlop}
            erinthetoe.push(koronghely);
        }
    }

     //jobbra le
     var erinthetoe=[];
     var sorjaro=sor;
     var oszlopjaro = oszlop;
     while(sorjaro<7 && oszlopjaro<7)
     {
         sorjaro+=1;
         oszlopjaro+=1;
         var ertekahelyen = matrix[sorjaro][oszlopjaro];
         if (ertekahelyen==0 || ertekahelyen==id)
         {
             if (ertekahelyen==id)
             {
             erintettkorongok= erintettkorongok.concat(erinthetoe);
             }
             break;    
         }
         else
         {
             var koronghely= {sor:sorjaro,oszlop:oszlopjaro}
             erinthetoe.push(koronghely);
         }
     }

     //balra le
     var erinthetoe=[];
     var sorjaro=sor;
     var oszlopjaro = oszlop;
     while(sorjaro<7 && oszlopjaro>0)
     {
         sorjaro+=1;
         oszlopjaro-=1;
         var ertekahelyen = matrix[sorjaro][oszlopjaro];
         if (ertekahelyen==0 || ertekahelyen==id)
         {
             if (ertekahelyen==id)
             {
             erintettkorongok= erintettkorongok.concat(erinthetoe);
             }
             break;    
         }
         else
         {
             var koronghely= {sor:sorjaro,oszlop:oszlopjaro}
             erinthetoe.push(koronghely);
         }
     }

     //balra fel
     var erinthetoe=[];
     var sorjaro=sor;
     var oszlopjaro = oszlop;
     while(sorjaro>0 && oszlopjaro>0)
     {
         sorjaro-=1;
         oszlopjaro-=1;
         var ertekahelyen = matrix[sorjaro][oszlopjaro];
         if (ertekahelyen==0 || ertekahelyen==id)
         {
             if (ertekahelyen==id)
             {
             erintettkorongok= erintettkorongok.concat(erinthetoe); //concat: egy vagy több lista/tömb mergelése(egyesítése)
             }
             break;    
         }
         else
         {
             var koronghely= {sor:sorjaro,oszlop:oszlopjaro}
             erinthetoe.push(koronghely);
         }
     }

     //jobbra fel
     var erinthetoe=[];
     var sorjaro=sor;
     var oszlopjaro = oszlop;
     while(sorjaro>0 && oszlopjaro<7)
     {
         sorjaro-=1;
         oszlopjaro+=1;
         var ertekahelyen = matrix[sorjaro][oszlopjaro];
         if (ertekahelyen==0 || ertekahelyen==id)
         {
             if (ertekahelyen==id)
             {
             erintettkorongok= erintettkorongok.concat(erinthetoe);
             }
             break;    
         }
         else
         {
             var koronghely= {sor:sorjaro,oszlop:oszlopjaro}
             erinthetoe.push(koronghely);
         }
     }

    return erintettkorongok;
}

function korongforditas(erintettkorongok)
{
    for (let i = 0; i < erintettkorongok.length; i++) {
        var hely = erintettkorongok[i];
        if (matrix[hely.sor][hely.oszlop]==1) {
            matrix[hely.sor][hely.oszlop]=2;
        }
        else
        {
            matrix[hely.sor][hely.oszlop]=1;
        }
    }
}

function karikamegjelenito() {
    mozoghatkarika.innerHTML="";
    for (var sor = 0; sor < 8; sor++) {
        for (var oszlop = 0; oszlop < 8; oszlop++)    {
            var ertek = matrix[sor][oszlop]
            if (ertek ==0 && klikkelheto(jatekos,sor,oszlop)) {
                Jatekveg=false;
                var korongkorvonal = document.createElement("div");
                korongkorvonal.style.position="absolute";
                korongkorvonal.style.width=kockaszel-1.2+"vw";//A -1 az leveszi a méretét a korongnak, mivel a 
                korongkorvonal.style.height=kockaszel-1.2+"vw";//kockába pontosan illeszkedik, ami hülyén néz ki ezért lekicsinyítjűk 1 vw-vel(méret ami responsive).
                korongkorvonal.style.borderRadius="50%";
                korongkorvonal.style.left=((kockaszel+kockakozotthely)*oszlop)+1+"vw";//itt pedig annak az értéknek a felét hozzáadjuk,
                korongkorvonal.style.top=((kockaszel+kockakozotthely)*sor)+"vw"; //hogy ne csússzon ki a kereből.
                korongkorvonal.style.zIndex=2; //evvel előrébb hozzuk a körvonalt, hogy látszódjon.
                korongkorvonal.setAttribute("onclick","kockaklikk("+sor+","+oszlop+")");   
                if (jatekos==1) 
                {
                    korongkorvonal.style.border="2px solid black"
                }
                if (jatekos==2)
                {
                    korongkorvonal.style.border="2px solid white"
                }

                mozoghatkarika.appendChild(korongkorvonal);
            }
        }
        
    }
}

function megjelenito()
{
    korongok.innerHTML="";
    for (var sor = 0; sor < 8; sor++) {
        for (var oszlop = 0; oszlop < 8; oszlop++)    {
            var ertek = matrix[sor][oszlop]
            if (ertek ==0) {}
            else
            {
                var korong = document.createElement("div");
                korong.style.position="absolute";
                korong.style.width=kockaszel-1+"vw";//A -1 az leveszi a méretét a korongnak, mivel a 
                korong.style.height=kockaszel-1+"vw";//kockába pontosan illeszkedik, ami hülyén néz ki ezért lekicsinyítjűk 1 vw-vel(méret ami responsive).
                korong.style.borderRadius="50%";
                korong.style.left=((kockaszel+kockakozotthely)*oszlop)+1+"vw";//itt pedig annak az értéknek a felét hozzáadjuk,
                korong.style.top=((kockaszel+kockakozotthely)*sor)+"vw"; //hogy ne csússzon ki a kereből.
                korongok.appendChild(korong);

            if (ertek==1) 
            {
                korong.style.backgroundColor="black";
                korong.style.backgroundImage="radial-gradient(#333333 30%, black 70%)"
            }
            if (ertek==2)
            {
                korong.style.backgroundColor="white" ;
                korong.style.backgroundImage="radial-gradient(white 30%, #cccccc 70%)"
            }
            }
        }
        
    }
}

