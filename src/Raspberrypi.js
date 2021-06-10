
function setState(state) {
  ledValue = +state;
  WebKitPoint.digitalWrite(ledPin, ledValue);
}

var deviceId = 'Smart-Venti';
var myFirebaseRef = new Firebase('https://smart-venti.firebaseapp.com');
var deviceRef = myFirebaseRef.child(deviceId);

var myDevParamRef = deviceRef.child('parameters');

myDevParamRef.on('child_changed', function(snapshot){
  console.log(snapshot.key())
  console.log(snapshot.val())

  if (snapshot.key() == 'state'){
    setState(snapshot.val());
  }
})