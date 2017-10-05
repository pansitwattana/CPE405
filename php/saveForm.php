<?php
    echo $_POST['product1']; echo '<br>'
    echo $_POST['product2']; echo '<br>'
    echo $_POST['product3']; echo '<br>'
    echo $_POST['product4']; echo '<br>'
    for ($i=1;$i<=count($_POST);$i++) {
        echo $_POST['product'.$i]; echo '<br>';
    }

    var_dump($_POST)
?>