// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig ={
    apiKey: "AIzaSyCthDC7L-CCfoA1A65vmZ8RLBWdhYJx5KU",
    authDomain: "assignment-51221.firebaseapp.com",
    databaseURL: "https://assignment-51221-default-rtdb.firebaseio.com",
    projectId: "assignment-51221",
    storageBucket: "assignment-51221.appspot.com",
    messagingSenderId: "52309492878",
    appId: "1:52309492878:web:752187e97b74bdf2a2f5df",
  
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var fName = document.getElementById("firstName").value;
      var lName = document.getElementById("lastName").value;
      var email = document.getElementById("email").value;
      var num = document.getElementById("number").value;
      var gender = document.querySelector('input[name="gender"]:checked').value;
      var dob = document.getElementById("dob").value;
      var linkedIn = document.getElementById("linkedIn").value;
      var gitHub = document.getElementById("gitHub").value;
      var techSkills = document.getElementById("techSkills").value;
      var domain = document.querySelector("#domain").value;
  
  
    // Save message
    saveMessage(fName, lName, email, num, gender, dob, linkedIn, gitHub, techSkills, domain);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Save message to firebase
  function saveMessage(fName, lName, email, num, gender, dob, linkedIn, gitHub, techSkills, domain){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fName:fName,
          lName:lName,
          email:email,
          num:num,
          gender:gender,
          dob:dob,
          linkedIn:linkedIn,
          gitHub:gitHub,
          techSkills:techSkills,
          domain:domain
    });
  }