function show(select){
    if (select.value=="selected"){
        
        document.getElementById("res-details").style.display = "none";
        document.getElementById("com-details").style.display = "none";
        document.getElementById("cor-details").style.display = "none";
        document.getElementById("hyb-details").style.display = "none";
        document.getElementById("price").style.display = "none";

       }
    if (select.value==1){
        document.getElementById("res-details").style.display = "block" 
        document.getElementById("price").style.display = "block";
           } else {
            document.getElementById("res-details").style.display = "none";
           } 
        if (select.value==2) {
            document.getElementById("com-details").style.display = "block";
            document.getElementById("price").style.display = "block";
    
        } else {
         document.getElementById("com-details").style.display = "none";
        }   
        if (select.value==3) {
            document.getElementById("cor-details").style.display = "block";
            document.getElementById("price").style.display = "block";
        } else {
         document.getElementById("cor-details").style.display = "none";
        } 
        if (select.value==4) {
            document.getElementById("hyb-details").style.display = "block";
            document.getElementById("price").style.display = "block";
        } else {
         document.getElementById("hyb-details").style.display = "none";
        }     
      
    }

    function com(input){
            var comInput= document.getElementById("com-details-5").value;
            var cageInput= document.getElementById("cage").value

            document.getElementById("cage").value = comInput;
    }

    function res(input){

var resApp = document.getElementById("res-details-1").value
var resFloor = document.getElementById("res-details-2").value
var resBasement = document.getElementById("res-details-3").value
var totalFloor = resFloor - resBasement;
var appFloor = Math.ceil( resApp / totalFloor );
var cage = Math.ceil( appFloor / 6);
var column = Math.ceil(totalFloor / 20);
var cageT = cage * column;

document.getElementById("cage").value = cageT

}

function cor(input){
var occFloor = document.getElementById("cor-details-5").value
var floor = document.getElementById("cor-details-2").value
var totalOcc = occFloor * floor;
var cage = Math.ceil(totalOcc / 1000);
var column = Math.ceil(floor / 20);
var cageColumn = Math.ceil(cage / column);
var cageT = Math.ceil( cageColumn * column);

document.getElementById("cage").value = cageT

}

function hyb(input){
    var occFloor = document.getElementById("hyb-details-5").value
    var floor = document.getElementById("hyb-details-2").value
    var totalOcc = occFloor * floor;
    var cage = Math.ceil(totalOcc / 1000);
    var column = Math.ceil(floor / 20);
    var cageColumn = Math.ceil(cage / column);
    var cageT = Math.ceil( cageColumn * column);
    
    document.getElementById("cage").value = cageT
    
    }


  
function oneElevator() {

var standard = document.getElementById("standard");
var premium = document.getElementById("premium");
var excelium = document.getElementById("excelium");
var numE = document.getElementById("cage").value;



if(standard.checked==true) {
    document.getElementById("1elevator").value = "The unit price for a standard elevator shaft is $7565"
    document.getElementById("totalB").value = (numE * 7565)
        var totalB = document.getElementById("totalB").value
    document.getElementById("insF").value = totalB * 0.10
        var insF = document.getElementById("insF").value;
    document.getElementById("bigTotal").value = +totalB + +insF;
    
}
else if(premium.checked==true) {
    document.getElementById("1elevator").value = "The unit price for a premium elevator shaft is $12,345";
    document.getElementById("totalB").value = numE * 12345
        var totalB = document.getElementById("totalB").value
    document.getElementById("insF").value = totalB * 0.13
        var insF = document.getElementById("insF").value;
    document.getElementById("bigTotal").value = +totalB + +insF;

}

else if(excelium.checked==true){
    document.getElementById("1elevator").value = "The unit price for a excelium elevator shaft is $15,400";
    document.getElementById("totalB").value = numE * 15400;
        var totalB = document.getElementById("totalB").value
    document.getElementById("insF").value = totalB * 0.16
        var insF = document.getElementById("insF").value;
    document.getElementById("bigTotal").value = +totalB + +insF;
}
    
}