<?php
    //Avvio la sessione
    session_start();
    //Verifico se l'accesso è stato effettuato
    if(!isset($_SESSION["username"])){
        header("Location: login.php");
        exit;
    }  

?>

<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
        <title> AroundTheWorld </title>
        <link rel="stylesheet" href="styl.css">
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200&display=swap" rel="stylesheet">
        <meta name="viewpoint" content="width=device-width, initial-scale=1">
        <script src="eventi.js" defer="true"></script>
    </head>
<body>
        <nav>
        <div id="opzioni">
        <a href="homepage.php"> home </a>
           <a href="index.html"> quiz </a>
           <a href="https://www.google.it/maps/"> maps </a>
           <a href="news.php"> news </a>
           <a href="eventi.php#Io"> contatti</a>
           <a href="./logout.php"class="button">Logout</a>
</div>

           <div id="menumini">
          <div></div>
          <div></div>
          <div></div>
          </div>
        </nav>   

        <section>
            <h1 id="desc"> Prossimi eventi </h1>
        <form>
    
            <div id="cont">
                    <div id="eventi">

                    </div> 
</form>
  </div>
            </section> 


<footer>
      <div id="Io">
        @aroundtheworld<br>
       ✉ email: aroundtheworld@info.com<br>
       Roberta Russo 1000002423<br>
       <a href="recensioni.php">Dicono di noi</a>
      </div>
   </footer>
</body>

</html>