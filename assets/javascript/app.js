console.log(moment().subtract(25, 'minutes'));

console.log(moment().subtract)

var date = moment('2:00:00 PM')
    .add(30, 'seconds')
    .add(2, 'minutes')
    .format('LTS');
    console.log(date);

var  Mhour = moment().hour();
var  Mmin = moment().minutes();


var time = moment( "00:03:15" );
var date = moment( "2014-06-07 09:22:06" );

date.subtract (time); 

console.log()
 
console.log(Mhour+":"+Mmin);
////var date1 = moment('2019-10-11 23:29:23');
//var date2 = moment('2019-10-08 11:06:55');
//var diff = date1.diff(date2,"minutes");



 //console.log(diff);


var firebaseConfig = {
    apiKey: "AIzaSyBQXYHqs5T-sY-wvTYHDOVJEMcWK3FiliY",
    authDomain: "train-scheduler-cc62d.firebaseapp.com",
    databaseURL: "https://train-scheduler-cc62d.firebaseio.com",
    projectId: "train-scheduler-cc62d",
    storageBucket: "train-scheduler-cc62d.appspot.com",
    messagingSenderId: "403060599697",
    appId: "1:403060599697:web:c5490ba492cd83fa550830",
    measurementId: "G-5RSJB2CME3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  // Create a variable to reference the database.
var database = firebase.database();
// var database = firbase.database();

var initialName = "temp";
var initialRole = "temp";
var trainFrequency = "temp"
var initialStartDate = "01/01/2019";
var employeeRef = database.ref("/trainTimeScheduler");
$(".submit-btn").on("click",function(event){
    event.preventDefault();
    var name = $("#inputname").val();
    var role = $("#destination").val();
    var startDate = $("#firsttraintime").val();
    var trainFrequency = $("#frequency").val()
    

    if (employeeRef){
        employeeRef.push({
            name: name,
            role: role,
            startDate: startDate,
            trainFrequency : trainFrequency,
            //monthlyRate: monthlyRate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        })    
    } else{
        employeeRef.push({
            name: initialName,
            role: initialRole,
            startDate: startDate,
            trainFrequency :trainFrequency,
          //  monthlyRate: initialMonthlyRate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        })
    }


    var name = $("#inputname").val();
    var role = $("#destination").val();
    $("#firsttraintime").text = "";
    $("#frequency").text ="";

})

employeeRef.on("child_added",function(snapshot, prevChildKey){
    var newTr = $("<tr>");
    $(".employee-table").append(newTr);

   
    console.log(snapshot);
   // var 
    var idTrain = snapshot.key;
   // console.log("---rrrrrrrrrrrrrrr-"+idTrain);
    var name =snapshot.val().name;
    var role=snapshot.val().role;
    var startDate =snapshot.val().startDate;
    var trainFreq = snapshot.val().trainFrequency;
    //console.log(trainFreq);

        var trainFreq;
   		var firstTime = 0;
        var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
       // console.log("---"+firstTimeConverted);
		var currentTime = moment();
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        
       // console.log(diffTime);

	    var tRemainder = diffTime % trainFreq;
	    var tMinutesTillTrain = trainFreq - tRemainder;
	    var nextTrain = moment().add(tMinutesTillTrain, "minutes");

       // console.log(nextTrain);
       // console.log(tMinutesTillTrain);
    
            addTd(name,newTr);
            addTd(role,newTr);
            addTd(trainFreq,newTr);
            addTd(moment(nextTrain).format("HH:mm"),newTr);
            addTd(tMinutesTillTrain,newTr);

         /*   var deleteBtn = $("<button>");
            deleteBtn.text("Delete");
            deleteBtn.addClass("btnTrain")
            deleteBtn.attr("data","1");
            $(".employee-table").append(deleteBtn);  
         
        */
          
        // addTd("<input type",newTr);
        // addTd(tMinutesTillTrain,newTr);
        // addTd(monthlyRate,newTr);
        // addTd(totalBilled,newTr);

})




function addTd(item,Tr){
    var Td = $("<td>").text(item);
    Tr.append(Td);
}

$(".btnT").on("click",function(){

    //event.preventDefault();
    console.log("btnT");

})
