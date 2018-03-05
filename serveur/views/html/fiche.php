<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Wib - Fiche</title>
    <link rel="stylesheet" href="../../public/stylesheets/fiche.css">
    <link rel="icon" type="image/png" href="../../public/images/icon_ext.png"/>
</head>
<body>

<?php include "header.html";?>


    <main>
        <form action="" method="">
            <fieldset class="informationSite">
                <legend>Information du site:</legend>
                
                <div>
                    <p>Lien:</p>
                    <input  name="url" type="url" placeholder="Ex: LeMonde.fr" >
                </div>

                <br>

                <div>
                <p>Catégorie:</p> 
                    <select name="Catégories" >
                        <option value="Actualité">Actualité</option>
                        <option value="Sport">Sport</option>
                        <option value="Technologie">Technologie</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>
            </fieldset>

            <fieldset class="questionnaire">
                <legend>Questionnaire détaillé</legend>

                <div class="avis">
                    <div class="titreetetoile">
                        <p>Cohérence de l'écriture:</p>
                        <div class="rating rating2"><!--
                          --><a href="#5" title="Give 5 stars">★</a><!--
                          --><a href="#4" title="Give 4 stars">★</a><!--
                          --><a href="#3" title="Give 3 stars">★</a><!--
                          --><a href="#2" title="Give 2 stars">★</a><!--
                          --><a href="#1" title="Give 1 star">★</a>
                        </div>
                    </div>
                    <hr>
                    <div class="titreetetoile">
                        <p>Qualité du design:</p>
                        <div class="rating rating2"><!--
                              --><a href="#5" title="Give 5 stars">★</a><!--
                              --><a href="#4" title="Give 4 stars">★</a><!--
                              --><a href="#3" title="Give 3 stars">★</a><!--
                              --><a href="#2" title="Give 2 stars">★</a><!--
                              --><a href="#1" title="Give 1 star">★</a>
                        </div>
                    </div>
                    <hr>
                    <div class="titreetetoile">
                        <p>Qualité de l'illustration:</p>
                        <div class="rating rating2"><!--
                          --><a href="#5" title="Give 5 stars">★</a><!--
                          --><a href="#4" title="Give 4 stars">★</a><!--
                          --><a href="#3" title="Give 3 stars">★</a><!--
                          --><a href="#2" title="Give 2 stars">★</a><!--
                          --><a href="#1" title="Give 1 star">★</a>
                        </div>
                    </div>
                    <hr>
                    <div class="titreetetoile">
                        <p>Facilité d’utilisation/accessibilité:</p>
                        <div class="rating rating2"><!--
                          --><a href="#5" title="Give 5 stars">★</a><!--
                          --><a href="#4" title="Give 4 stars">★</a><!--
                          --><a href="#3" title="Give 3 stars">★</a><!--
                          --><a href="#2" title="Give 2 stars">★</a><!--
                         --><a href="#1" title="Give 1 star">★</a>
                        </div>
                    </div>
                    <hr>
                </div>

                <div class="avis2">
                    <p>Orientation politique:</p>

                    <div>
                        <input type="radio" name="orientationPolitique" value="oui">
                        <p>Oui</p>
                    </div>
                    <div>
                        <input type="radio" name="orientationPolitique" value="non" checked="checked">
                        <p>Non</p>
                    </div>
                </div>
            </fieldset>
            <div class="submit">
                <input type="submit" value="Envoyer">
            </div>
        </form>
    </main>

    <footer>
       <a href="#logo" id="haut">Haut de page</a>
    </footer>

</body>
</html>