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
      $(".ariel, .darko, .nomatch").hide();
    } else if (myMatch < 9){
      $(".ariel").show();
      $(".darko, .baggins, .nomatch").hide();

    } else if (myMatch < 13){
      $(".darko").show();
      $(".ariel, .baggins, .nomatch").hide();
    } else {
      $(".nomatch").show();
      $(".baggins, .ariel, .darko");
    }

   $(".insert").text(name);
  });
});
