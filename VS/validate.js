function validate(){
    var num=document.getElementById("num_name").value;
    if (isNaN(num)){
    document.getElementById("numloc").innerHTML="Enter Numeric value only";
    return false;
    }
    else{
    return true;
    }
    }
     
    function pass_Validate() {
    var password = document.getElementById("txtPassword").value;
    var confirmPassword = document.getElementById("txtConfirmPassword").value; 
    if (password != confirmPassword || password==""|| confirmPassword=="") {
    document.getElementById("pass").innerHTML="Password is not Matching"; 
    return false;
    }
    else{
    return true;
    }
    }