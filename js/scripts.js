$(document).ready(function(){

  $("form#date-form").submit(function(event){
    const drinkType = $("select#drink").val();
    const lang = $("select#language").val();

    $("#char").removeAttr("class");
    if (drinkType === 'wine' && lang === 'english') {
      $(".character").show();
      $("#char").addClass("neo");
      $("#char").append("<p>Neo</p>");
    } else if (drinkType === "wine" && lang === "russian") {
      $(".character").show();
      $("#char").addClass("morpheus");
      $("#char").append("<p>Morpheus</p>");
    } else if (drinkType === "wine" && lang === "french") {
      $(".character").show();
      $("#char").addClass("tank");
      $("#char").append("<p>Tank</p>");
    } else if (drinkType === "coffee" && lang === "english") {
      $(".character").show();
      $("#char").addClass("trinity");
      $("#char").append("<p>Trinity</p>");
    }else if (drinkType === "coffee" && lang === "russian") {
      $(".character").show();
      $("#char").addClass("switch");
      $("#char").append("<p>Switch</p>");
    }else if (drinkType === "coffee" && lang === "french") {
      $(".character").show();
      $("#char").addClass("oracle");
      $("#char").append("<p>Oracle</p>");
    }else if (drinkType === "vodka" && lang === "english") {
      $(".character").show();
      $("#char").addClass("architect");
      $("#char").append("<p>Architect</p>");
    }else if (drinkType === "vodka" && lang === "russian") {
      $(".character").show();
      $("#char").addClass("lock");
      $("#char").append("<p>Lock</p>");
    }else if (drinkType === "vodka" && lang === "french") {
      $(".character").show();
      $("#char").addClass("smith");
      $("#char").append("<p>Smith</p>");
    }else {
      $(".character").hide();
      $("#pick").show();
    }

    event.preventDefault();
  });

  $("#pill").submit(function(event) {
    const pill = $("select#pill").val();

    if (pill === 'red') {
      $('#pill_check').hide()
    } else {
      $('#blue-pill').show();
    }
    
    event.preventDefault();
  });
  
});