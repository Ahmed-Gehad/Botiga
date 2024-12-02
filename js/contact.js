function sendEmail(){
   let parms={
       name : document.getElementById("name").value,
       email : document.getElementById("email").value,
       message : document.getElementById("message").value,

   }

  emailjs.send("service_i6jip37","template_7ft347p",parms).then(alert("email send!"))
     document.getElementById("email").innerHTML=""

}


