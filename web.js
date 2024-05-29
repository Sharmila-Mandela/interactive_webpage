
document.getElementById("i10").onclick= function display(){
    
    document.getElementById("i1field").textContent="welcome" + " " +document.getElementById("i1").value;
    document.getElementById("i2field").textContent=document.getElementById("i2").value;

document.getElementById("i3field").textContent=document.getElementById("i3").value;
document.getElementById("i4field").textContent=document.getElementById("i4").value;
document.getElementById("i5field").textContent=document.getElementById("i5").value;

document.getElementById("i6field").textContent=document.getElementById("i6").value;

document.getElementById("i7field").textContent=document.getElementById("i7").value;


document.getElementById("web1").style.display="none";
document.getElementById("output").style.display="block";



}


document.getElementById("i8").onclick= function generate(){  
   
        let isValid = true;
        let username = document.getElementById('i1').value.trim();
        let email = document.getElementById('i5').value.trim();

        // Clear previous errors
        document.getElementById('usernameError').textContent = '';
        document.getElementById('emailError').textContent = '';

        // Sanitize inputs (basic example)
        username = username.replace(/[<>]/g, '');
        email = email.replace(/[<>]/g, '');

        // Validate username
        if (username.length < 3) {
            document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
            isValid = false;
        }

        // Validate email using a regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!isValid) {
            preventDefault();
        }
    
    
  else{  
document.getElementById("i9").textContent= "your website template has successfully generated.";
  }
        
}

            
    



   
 