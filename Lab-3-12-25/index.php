<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Time and username</title>
</head>
<body>
    <?php
    echo date("d-m-y h-m-s");
    echo "<br>";

    echo "Hello ";
    echo  $_POST["username"];
    ?>

    
</body>
</html>