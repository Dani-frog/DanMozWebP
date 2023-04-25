

function tablaGen(){
    var tabla = document.getElementById("tabla");
    var jatekter = document.createElement("table");
    var k = 0;
    for(var i = 0;i<8;i++){
        var sor = document.createElement("tr");
        for(var j = 0;j<8;j++){
            var oszlop = document.createElement("td");
            sor.appendChild(oszlop)
            oszlop.id = k;
            k++;
            //oszlop.style.border = "2px solid red";
        }
        jatekter.appendChild(sor);
    }
    tabla.appendChild(jatekter);
}
tablaGen();