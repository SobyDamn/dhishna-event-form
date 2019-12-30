var config = {
    apiKey: "AIzaSyBbzBc0mu2fIb0tYcD3toX7bIeLP8n_Zsg",
    authDomain: "dhisna-event.firebaseapp.com",
    databaseURL: "https://dhisna-event.firebaseio.com",
    projectId: "dhisna-event",
    storageBucket: "dhisna-event.appspot.com",
    messagingSenderId: "88554708487",
    appId: "1:88554708487:web:3b6503f12d8d36129594a2",
    measurementId: "G-S0VDWKKVK6"
};

firebase.initializeApp(config);
              
var events = firebase.database().ref("Events");

var submitEvents = function () {
	var event_Name = $("#eventName").val();
	var caption_text = $("#caption").val();
	var registration = $("#registration_status :selected").val();
	var description_text = $("#description").val();
	var coordinator_name = $("#cname").val();
	var coordinator_phNo = $("#PhoneNo").val();
	
	
	events.push({
    "Event_Name": event_Name,
    "Caption": caption_text,
    "Description": description_text,
    "Registration_Status": registration,
    "Coordinator_name": coordinator_name,
    "Coordinator_phoneNo": coordinator_phNo,
    
  });
};

$(window).load(function () {
	$("#eventForm").submit(submitEvents);

});
	