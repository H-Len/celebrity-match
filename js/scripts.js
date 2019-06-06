$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    console.log("test");
    var name = $("#name").val();
    var goodDate = parseInt($("#goodDate").val());
    var favMovie = parseInt($("#favMovie").val());
    var favPast = parseInt($("#favPasttime").val());
    var favColor = parseInt($("#favColor").val());

    var myMatch = goodDate + favMovie + favPast + favColor;
    console.log(myMatch);

    if (myMatch < 5){
      $(".baggins").show();
    } else if (myMatch < 9){
      $(".ariel").show();
    } else if (myMatch < 13){
      $(".darko").show();
    } else {
      $(".nomatch").show();
    }

   $(".insert").text(name);
  });
});
