var config = {
    apiKey: "AIzaSyCXETPm5yhW_NiIOP0yO_WCv4Onw5UyoO4",
    authDomain: "brickview-42bfb.firebaseapp.com",
    databaseURL: "https://brickview-42bfb.firebaseio.com",
    projectId: "brickview-42bfb",
    storageBucket: "brickview-42bfb.appspot.com",
    messagingSenderId: "8026993608"
  };
  firebase.initializeApp(config);
  
var msgref=firebase.database().ref('messages');

document.getElementById('contactrequest').addEventListener('submit',request);

function request(e){
	e.preventDefault();
	
	var name=getval('name');
	var email=getval('email');
	var phone=getval('phone');
	var msg=getval('message');
	
	savemsg(name,email,phone,msg)
	
	document.querySelector('.alert').style.display='block';
	
	setTimeout(function(){
		document.querySelector('.alert').style.display='none';
	},3000);
	
	document.getElementById('contactrequest').reset();
}

function getval(id){
	return document.getElementById(id).value;
}


function savemsg(name,email,phone,msg){
	var newmsgref=msgref.push();
	newmsgref.set({
		name:name,
		email:email,
		phone:phone,
		message:msg,
	});
}