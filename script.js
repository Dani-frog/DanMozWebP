var kockaszel = 4;
var kockakozotthely=0.25;
var korongok;
var mozoghatkarika;
var jatekos=1;
var pontok;
var Jatekveg = false;
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

window.onload = function()
{
    var tabla = document.getElementById("tabla");
    korongok = document.getElementById("korongok");
    pontok = document.getElementById("pontok");
    mozoghatkarika=document.getElementById("mozoghatkarika");
    Tablazat();
    megjelenito();
    
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
            tabla.appendChild(kocka);
        }
    }
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
            if (ertekahelyen=id)
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
                korong.style.left=((kockaszel+kockakozotthely)*oszlop)+0.5+"vw";//itt pedig annak az értéknek a felét hozzáadjuk,
                korong.style.top=((kockaszel+kockakozotthely)*sor)+0.5+"vw"; //hogy ne csússzon ki a kereből.
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
