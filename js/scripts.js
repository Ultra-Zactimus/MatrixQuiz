$(document).ready(function(){

  $("form#date-form").submit(function(event){
    const dayNight = $("select#day-night").val();
    const cityTown = $("select#city-town").val();

    $("#celeb").removeAttr("class");
    if (dayNight === 'day' && cityTown === 'city') {
      $(".celebrity").show();
      $("#celeb").addClass("anya");
    } else if (dayNight === "night" && cityTown === "city") {
      $(".celebrity").show();
      $("#celeb").addClass("keanu");
    } else if (dayNight === "day" && cityTown === "town") {
      $(".celebrity").show();
      $("#celeb").addClass("ingrid");
    } else if (dayNight === "night" && cityTown === "town") {
      $(".celebrity").show();
      $("#celeb").addClass("tilda");
    } else {
      $(".celebrity").hide();
      $("#pick").show();
    }

    event.preventDefault();
  });
});