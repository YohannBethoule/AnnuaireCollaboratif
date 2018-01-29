//recherche et construction de la liste en json

var tab=[];

//ajouter la base de donnée ici


router.get('/recherche/:name', function rechercheAction (req, res) {
    res.send('recherche' +req.params.name+' !');
    //verification syntaxe
    // gereration de la liste d'article ou du site d'info
    //envoie du fichier json :
    res.json(tab);
});








