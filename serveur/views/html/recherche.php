<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Wib - Recherche</title>
    <link rel="stylesheet" href="../../public/stylesheets/recherche.css">
    <link href="../../public/stylesheets/nouislider.min.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="../public/images/Logo/icon_ext.png"/>

</head>
<body>

<?php include "header.html"; ?>

<main>
    <div class="ecranRecherche">
        <aside>
            <div id="slider"></div>
        </aside>

        <div class="sectionRecherche">
            <br>
            <form class="barRecherche">
                <input type="text" name="search" placeholder="Search..">
                <input type="submit" value="Go!">
            </form>
            <br>
            <a id="haut" href="modele.php"> voir un modele</a>
        </div>


    </div>
</main>

<script src="../../public/scripts/nouislider.min.js"></script>

<script src="../../public/scripts/slider.js"></script>

<footer>
    <a id="haut" href="#logo"> Haut de page</a>
</footer>
</body>
</html>