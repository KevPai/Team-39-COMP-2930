$(document).ready(function(){
  // Animation on the switches when the mouse hover on them
	$(".switch").hover(function() {
		$(this).css("text-shadow","-1px 0 #24bf40, 0 1px #24bf40, 1px 0 #24bf40, 0 -1px #24bf40");
		$(this).css("transition","filter 0.4s");
	}, function() {
		$(this).css("text-shadow", "none");
		$(this).css("transition","filter 0.4s");
  });

  // background color changes when the mouse hover on the buttons
  $(".button").hover(function() {
    $(this).css("background-color", "#5cbdc5");
  }, function() {
    $(this).css("background-color", "#0CAA55");
  })


  $("#signupSwitch").click(function() {
		$("#loginWindow").fadeOut(300);
		$("#signupWindow").delay(300).fadeIn(300);
  });
  
	$("#loginSwitch").click(function() {
		$("#signupWindow").fadeOut(300);
		$("#loginWindow").delay(300).fadeIn(300);
  });
  
  $("#forgotPW").click(function() {
		$("#loginWindow").fadeOut(300);
		$("#pwresetwindow").delay(300).fadeIn(300);
  });
  
  $("#loginSwitch2").click(function() {
		$("#pwresetwindow").fadeOut(300);
		$("#loginWindow").delay(300).fadeIn(300);
  });

  $("#loginSwitch3").click(function() {
		$("#newWindow").fadeOut(300);
		$("#loginWindow").delay(300).fadeIn(300);
  });

  //events for different buttons
  $("#button_login").on("click", login);
  $("#button_signup").on("click", signup);
  $("#button_submit").on("click", passwordReset);
});

//function when user is logged in and logged out
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    $("#loginWindow").css("display", "none");
    $("#signupWindow").css("display", "none");
    $("#signedinWindow").css("display", "block");
    email = user.email;
    document.getElementById("Hello").innerHTML = "Hi \"" + email + "\",";
    setTimeout(function(){ window.location = '../Home-Page/Home.html'; }, 2000);
  } else {
    $("#loginWindow").css("display", "block");
    $("#signupWindow").css("display", "none");
    $("#signedinWindow").css("display", "none");
  }
});

// function when the user click the login button
function login() {
  var userEmail = document.getElementById("email_login").value;
	var userPw = document.getElementById("pw_login").value;
	
  firebase.auth().signInWithEmailAndPassword(userEmail, userPw).catch(function(error) {
  // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: "  + errorMessage);
  });
}

// function when the user click the signup button
function signup() {
  var newEmail = document.getElementById("email_signup").value;
  var newPass = document.getElementById("pw_signup").value;
  
  firebase.auth().createUserWithEmailAndPassword(newEmail, newPass).catch(function(error) {
   //Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error: "  + errorMessage);
  });
} 

// function when the user click the logout button
function logout() {
  firebase.auth().signOut().then(function() {
    window.location = 'login.html';
  }).catch(function(error) {
    // An error happened.
  });
}

// function when the user click the submit button for the account recovery
function passwordReset() {
  var email = document.getElementById("email_pwreset").value;
  
  firebase.auth().sendPasswordResetEmail(email).then(function() {
    $("#pwresetwindow").fadeOut(300);
		$("#newWindow").delay(300).fadeIn(300);
  }).catch(function(error) {
    window.alert("Error!");
  });
}



  