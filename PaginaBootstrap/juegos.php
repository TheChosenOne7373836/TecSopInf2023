<?php
    $serverName="";
    $userName="alumno";
    $password="alumnoipm";
    $dbName="PaginaWebBD";
    $conexion=mysqli_connect($serverName, $userName, $password, $dbName);
    mysqli_select_db($conexion, $dbName);

    $idGame = $_GET['ID'];


    $consulta_sqlName="select * from juegos where idJuego=" . $idGame;
    $resultado=mysqli_query($conexion, $consulta_sqlName);
    if (mysqli_num_rows($resultado) > 0) 
    {
        for ($i = 0; $i < mysqli_num_rows($resultado); $i++) {
        $fila = mysqli_fetch_assoc($resultado);
        $nameGame = "<a> " . $fila["nombreJuego"] . "</a> ";
        $typeGame = "<a> Categoría: " . $fila["categoriaJuego"] . "</a>";
        $descriptionGame = "<a> " . $fila["descripcionJuego"] . "</a> ";
        $ratingGame = "<a> " . $fila["ratingJuego"] . "</a> ";
        $linkGame = "  " . $fila["linkJuego"] . "  ";
        }
    }

?>


<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#171a21">
        <link rel="stylesheet" href="PaginaWebDecor_Extras.css">
        <title>G . SEARCH | Juegos</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="loaderstyle.css">
    </head>

    <body style="background-color:#2b2c2c;">

        <!-- NO  TOCAR  -->
        <!-- NO  TOCAR  -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"></script>
        <!-- NO  TOCAR  -->
        <!-- NO  TOCAR  -->

        <div class="lds-roller loader" id="loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <script src="main.js"></script>

        <div class="responsive-page-template-content">

            <header>
                <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./BootstrapPrueba.html">
                    <img src="./ImagenesPagWeb/PagPrincipalLogo/MainLogo.png" style="width:9vw; height:4vw;">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active text-center text-white font-monospace" aria-current="page" href="./BootstrapPrueba.html#RAdded" style="padding-right: 4vw;">Recientemente añadido</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-center text-white font-monospace" href="./Categoria.html">Categoria</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </header>
            
            <div class="container-md">
                <br>

                <div class="text-center text-white font-monospace" style="font-size: 4.5vw;">
                   <?php echo $typeGame ?>
                </div>

                <br><br>

                <div class="text-center font-monospace text-white" style="font-size: 4vw;">
                    <?php echo $nameGame ?>
                </div>


                <br>

                <a class="text-white font-monospace" style="padding-left: 1vw; font-size:3vw; text-decoration:none;">Descripción / Jugabilidad:</a>
                <br><br><br>

                <div class="text-white font-monospace" style="padding-left: 2vw; font-size:1.5vw;">
                    <?php
                        echo $descriptionGame;
                    ?>
                </div>

                <br>

                <div style="padding-left:2vw;">
                    <button type="button" class="btn btn-warning" style="padding-left: 2vw; font-size:2vw; padding-right: 2vw;">
                        <?php echo $ratingGame ?>
                    </button>

                    <br><br>

                    <button type="button" class="btn btn-dark">
                        <div class="text-center text-white font-monospace">
                            <a class="phpLink" href="<?php echo $linkGame ?>" style="text-decoration:none; color:white; font-size: 2vw;" >
                                COMPRA EL JUEGO ACÁ
                            </a>    
                        </div>
                    </button>
                </div>
                <br><br>
            </div>
        </div>
    </body>
</html>