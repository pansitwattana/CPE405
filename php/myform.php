<html>
<head>
<title>Online PHP Script Execution</title>
</head>
<body>
    <form method='post' action='saveForm.php' onSubmit='return checkForm()'>
        Product name1 : <input type='text' name='product1' id='product1'><br>
        Product name2 : <input type='text' name='product2' id='product2'><br>
        Product name3 : <input type='text' name='product3' id='product3'><br>
        Product name4 : <input type='text' name='product4' id='product4'><br>
        <input type='submit'><br>
        <!-- <input type="button" onClick="saveForm()"> -->
    </form>
</body>
</html>

<script>
    function checkForm() {
        if (document.getElementById("product1").value===""){
            alert("Please fill data");
            return false;
        }
        else if (document.getElementById("product2").value==="") {
            alert("Please fill data");
            return false;
        }
        else {
            return true;
        }
    }
    function saveForm() {
        
    }
</script>
