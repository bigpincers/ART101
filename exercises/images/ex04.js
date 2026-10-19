// the clicker button progrm 

let count=0;

$("#needy-button").click( function(){ 
    // what to do when the button is clicked
    count = count + 3;
    $("#needy-button").html("FUCK YOU HAVE CLICKED ME " + count + " TIMES"); 
});