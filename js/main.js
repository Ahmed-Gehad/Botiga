function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username *"
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="UserName At Least 6 characters*"
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email*"
        return false;
    }
    else if(document.Formfill.Password1.value==""){
        document.getElementById("result").innerHTML="Enter your Password*"
        return false;
    }

    else if(document.Formfill.Password1.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits*"
        return false;
    }

    else if(document.Formfill.Password2.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password*"
        return false;
    }

    else if(document.Formfill.Password2.value !== document.Formfill.Password1.value){
        document.getElementById("result").innerHTML="Password not matched*"
        return false;
    }
}
