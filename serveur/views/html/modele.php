<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Wib - Le Modèle</title>
    <link rel="stylesheet" href="../../public/stylesheets/modele.css">
    <link rel="icon" type="image/png" href="../../public/images/Logo/icon_ext.png"/>

</head>
<body>

<?php include "../../public/template/header.php"; ?>

<main>
    <article>
        <div class="box">

            <div class="boxinfo">
                <h1>Nom du site</h1>
                <p>Catégorie</p>
            </div>

            <div class="boxlogo">
                <a href="http://www.lemonde.fr/">
                    <img src="../../public/images/Logo/LogoLeMonde.png" alt="Logo Le Monde" title="Logo Le Monde">
                </a>
            </div>
        </div>

        <div class="box2">
            <div class="boxscreenshot">

                <img id="myImg" src="../../public/images/ScreenshotLeMonde.png" alt="Screenshot Le Monde">

                <!-- The Modal -->
                <div id="myModal" class="modal">
                    <span class="close">×</span>
                    <img class="modal-content" id="img01">
                    <div id="caption"></div>
                </div>
                <script type="text/javascript" src="../../public/scripts/modal.js"></script>
            </div>

            <div class="avis">
                <p>Fiabilité</p>
                <div class="rating rating2"><!--
                  --><a href="#5" title="Give 5 stars">★</a><!--
                  --><a href="#4" title="Give 4 stars">★</a><!--
                  --><a href="#3" title="Give 3 stars">★</a><!--
                  --><a href="#2" title="Give 2 stars">★</a><!--
              --><a href="#1" title="Give 1 star">★</a>
                </div>
                <p>Cohérence</p>
                <div class="rating rating2"><!--
                  --><a href="#5" title="Give 5 stars">★</a><!--
                  --><a href="#4" title="Give 4 stars">★</a><!--
                  --><a href="#3" title="Give 3 stars">★</a><!--
                  --><a href="#2" title="Give 2 stars">★</a><!--
              --><a href="#1" title="Give 1 star">★</a>
                </div>

            </div>
        </div>

    </article>
    <div id="commentaires">
        <h2 class=" nb_com">
            3 Commentaires
            <hr>
        </h2>

        <form action="" method="POST">
            <textarea class="msg" name="texte" placeholder="Votre commentaire"></textarea>

            <input value="Envoyer" type="submit">
        </form>

        <br>

        <div class="comment">
            <div class="avatar">
                <img src="http://www.gravatar.com/avatar/74ad9ac94d2a34363d4f7e03a8b7cc45?s=75&amp;d=mm&amp;r=x"
                     alt="avatar" width="75" height="75">
            </div>
            <div class="message">
                <div class="author">
                    <span class="pseudo">LeDabeurFou</span>
                    <span class="date">- 01/12/2017</span>
                </div>
                <p class="content">
                    Reprenons. Les éléments sont organisés soit horizontalement (par défaut), soit verticalement. Cela
                    définit ce qu'on appelle l'axe principal. Il y a aussi un axe secondaire (cross axis).
                </p>
            </div>
        </div>
        <hr>
        <div class="comment">
            <div class="avatar">
                <img src="http://www.gravatar.com/avatar/74ad9ac94d2a34363d4f7e03a8b7cc45?s=75&amp;d=mm&amp;r=x"
                     alt="avatar" width="75" height="75">
            </div>
            <div class="message">
                <div class="author">
                    <span class="pseudo">LeDabeurFou</span>
                    <span class="date">- 01/12/2017</span>
                </div>
                <p class="content">
                    Pourquoi je vous raconte ça ? Parce que nous allons découvrir comment aligner nos éléments sur l'axe
                    principal et sur l'axe secondaire.
                </p>
            </div>
        </div>
        <hr>
        <div class="comment">
            <div class="avatar">
                <img src="http://www.gravatar.com/avatar/74ad9ac94d2a34363d4f7e03a8b7cc45?s=75&amp;d=mm&amp;r=x"
                     alt="avatar" width="75" height="75">
            </div>
            <div class="message">
                <div class="author">
                    <span class="pseudo">LeDabeurFou</span>
                    <span class="date">- 01/12/2017</span>
                </div>
                <p class="content">
                    Comme je vous disais, si nos éléments sont placés dans une direction horizontale (ligne), l'axe
                    secondaire est... vertical. Et inversement, si nos éléments sont dans une direction verticale
                    (colonne), l'axe secondaire est horizontal.
                </p>
            </div>
        </div>
        <hr>
    </div>
</main>


<br>

<footer>
    <a id="haut" href="#logo"> Haut de page</a>
</footer>
</body>
</html>