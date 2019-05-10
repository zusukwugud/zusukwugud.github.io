

    
  var config = {
    apiKey: "AIzaSyBq665AGCDq0R-tSqF-S4YI8opriM0sUio",
    authDomain: "safe-helmet.firebaseapp.com",
    databaseURL: "https://safe-helmet.firebaseio.com",
    projectId: "safe-helmet",
    storageBucket: "safe-helmet.appspot.com",
    messagingSenderId: "514121418125"
  };
  firebase.initializeApp(config);


var database = firebase.database();
//var userId = firebase.auth().currentUser.uid;
var starCountRef = firebase.database().ref('users');
starCountRef.on('value', function(snapshot) {
  //updateStarCount(postElement, snapshot.val())
  console.log(snapshot.val());
  //document.write(snapshot.val());
})

function writeData(val) {
    firebase.database().ref('alert/').set({
      value: val
    });
  }
  writeData()