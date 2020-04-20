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
        return 0
    },
    
    trier()
    {
        for(let a = 0; a < this.inventaire.length;a++)
        {
            for(let b = 0; b < this.inventaire.length;b++)
            {
                if(this.inventaire[a].charCodeAt(0) > this.inventaire[b].charCodeAt(0))
                {
                    temp = this.inventaire[a];
                    this.inventaire[a] = this.inventaire[b];
                    this.inventaire[b] = temp;
                }    
             }
        }
    }
};
console.log(personnage.presentation());
personnage.trier();
console.log(personnage.list_inventaire());