document.getElementById("lead").addEventListener("click", kiszamit)

function kiszamit() {


    let eredmeny = 0
    const g= document.getElementById("nev").value
    const a = document.getElementById("igaz").checked
   
    if (a == 1) { eredmeny = eredmeny + 1 }

    const b = document.getElementById("stilus").checked
    const c = document.getElementById("suly").checked
    const d = document.getElementById("ido").checked

    if (b == 1 && c == 1 && d == 1) {
        eredmeny = eredmeny + 1
    }
    const e = document.getElementById("lista").selectedIndex
    if (e == 2) {
        eredmeny = eredmeny + 1
    }
    const f = document.getElementById("kozpont").value
    if (f == 12) {
        eredmeny = eredmeny + 1
    }
    const h= document.getElementById("szazadban").value
    if(h==19){
        eredmeny=eredmeny+1
    }
    const i = document.getElementById("felszereles").value

    if(i=="léc"){
        eredmeny=eredmeny+1
    }
    alert(`Az elért pontszámod: ${eredmeny}`);
    if (eredmeny == 6) { alert(`Gratulálok ${g}, maximális pontszámot értél el!`) }
    





    }

    