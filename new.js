const personnage =
{
    nom:"Nicki",
    prenom:"Santoro",
    sexe:"Undefined",
    tenue:"Survet barça claquette chaussette",
    inventaire: ["Téléphone","Du shit(du bon shit sa mere)","Cahier",],
    presentation()
    {
        return(`Je suis un(e) ${this.nom}.Je suis habillé(e) avec ${this.tenue},et je m'appelle ${this.nom} ${this.prenom}`);
    },
    list_inventaire()
    {
        console.log("Dans mon sac à dos, il y a: \n");
        this.inventaire.forEach(objet => {
            console.log(objet);
        })
    },
    smallest(st1, st2)
    {
        let great = false;
        let index = 0;
        let plus_court_mot;
        let shortest = (a,b)=>{
            if(a.length > b.length)
            {
                plus_court_mot = b;
                return b.length;
            }
            else{
                plus_court_mot = a;
                return a.length;
            }
        }
        shortest(st1,st2)
        let plus_petit;
        if(isNaN(st1) && isNaN(st2))
        {
            while(great == false || indice < shortest )
            {
               if(st1[index] < st2[index])
               {
                   plus_petit = st1;
                   great = true;
               }
               else if(st1[index] > st2[index])
               {
                   plus_petit = st2;
                   great = true;
               } 
               else{
                   index ++;
               }
            }
            if(indice == shortest)
            {
                return plus_court_mot;
            }
            else{
                return plus_petit;
            }
            
        }
        else{
            return 0
        }      
    },

    trier()
    {
        let inventaire_bis = [];
        for(let a = 0; a < this.inventaire.length;a++)
        {
            for(let b = 0; b < this.inventaire.length;b++)
            {
                inventaire_bis[a] = this.smallest(this.inventaire[a],this.inventaire[b]);
            }
        }
        for(let a = 0; a < this.inventaire.length;a++)
        {
            this.inventaire[a] = inventaire_bis[a];
        }
    }
};
console.log(personnage.presentation());
personnage.trier();
console.log(personnage.list_inventaire());