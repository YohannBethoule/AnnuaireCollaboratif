<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Wib - Vérifiez vos lectures</title>
    <link rel="stylesheet" href="../../public/stylesheets/style.css">
    <link rel="icon" type="image/png" href="../../public/images/Logo/icon_ext.png"/>
</head>

<body>

<<<<<<< HEAD:serveur/views/html/index.php
<?php include "../../public/template/header.php"; ?>
=======
<header>

    <div id="logo">

        <a href="index.php">

            <img src="../public/images/logo.png" alt="Logo Wib" title="Logo - Aller à l'accueil">

        </a>

    </div>

    <nav>

        <div class="topnav" id="myTopnav">

            <a href="index.php" class="active">Acceuil</a>

            <a href="../views/html/recherche.php">Recherche</a>

            <a href="../views/html/fiche.php">Fiche</a>

            <a href="../views/html/apropos.php">A propos</a>

            <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>

        </div>

    </nav>

</header>

<script type="text/javascript" src="../../public/scripts/menuDeroulant.js"></script>



>>>>>>> 5ec7d023421f8017cd0318af4a98dc96bcaed8b0:serveur/routes/index.php

<main>
<div class="acceuil">
    <div id="slideshow">
 	<!-- Slideshow container -->
	<div class="slideshow-container">

 	 <!-- Full-width images with number and caption text -->
 	 <div class="mySlides fade">
 	   <div class="numbertext">1 / 3</div>
 	   <img src="../../public/images/captureLeMonde.PNG" style="width:100%">
 	   <div class="text">Capture d'écran</div>
  	</div>

 	 <div class="mySlides fade">
  	  <div class="numbertext">2 / 3</div>
  	  <img src="../../public/images/LogoIUT-2011.jpg" style="width:100%">
  	  <div class="text">Logo IUT</div>
  	</div>

  	<div class="mySlides fade">
  	  <div class="numbertext">3 / 3</div>
  	  <img src="../../public/images/ScreenshotLeMonde.png" style="width:100%">
  	  <div class="text">Capture d'écran</div>
  	</div>

  	<!-- Next and previous buttons -->
  	 <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
 	 <a class="next" onclick="plusSlides(1)">&#10095;</a>
	</div>

	<br>

	<!-- The dots/circles -->
	<div style="text-align:center">
	  <span class="dot" onclick="currentSlide(1)"></span>
	  <span class="dot" onclick="currentSlide(2)"></span>
 	 <span class="dot" onclick="currentSlide(3)"></span>
	</div> 
     </div>
	<script src="../../public/scripts/slideshow.js"></script>


    <div id="corps">
        <h1>L'extension qui vérifie vos lectures.</h1>
        
        <div id="paragraphes">
            <p>Vérifiez la <span class="stronger">qualité</span> de ce que vous lisez.</p>
            <p>Consultez la <span class="stronger">fiabilité</span> du site que vous consultez.</p>
            <p>Informez les autres utilisateurs de la <span class="stronger">cohérence</span> des sites que vous
                visitez.</p>
        </div>
        <div id="bouton">
            <a id="download" href="http://www.lecentdeux.com/wp-content/uploads/2017/06/Trollface.png"
               title="Telechargement de l'extension">
                <span class="first_letter">T</span>éléchargez
            </a>
        </div>     
    </div>
</div>

<div id="avis">
    <p>Donnez votre avis !</p>
       <div class="rating rating2"><!--
       --><a href="#5" title="Give 5 stars">★</a><!--
       --><a href="#4" title="Give 4 stars">★</a><!--
       --><a href="#3" title="Give 3 stars">★</a><!--
       --><a href="#2" title="Give 2 stars">★</a><!--
       --><a href="#1" title="Give 1 star">★</a>
       </div>
</div>
</main>

<br>

<footer>
    <a href="#logo" id="haut">Haut de page</a>
</footer>
</body>
</html>