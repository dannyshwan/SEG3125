function defaultDays(date){
  return date.getDay() === 0;
}

function yukariWorkDays(date){
  return date.getDay() === 0 || date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 5;
}

function simonWorkDays(date){
  return date.getDay() === 0 || date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 4;
}

function alessandroWorkDays(date){
  return date.getDay() === 0 || date.getDay() === 5 || date.getDay() === 6;
}

function anneWorkDays(date){
  return date.getDay() === 0 || date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 6;
}


function checkIfHasAlpha(id) {
  var a = document.getElementById(id).value;

  let filter = /[a-zA-Z]+/;
  if (filter.test(a)) {
      return true;
  }
  else {
      return false;
  }
}

function validateEmail(id) {
  var email = document.getElementById(id).value;

  let filter = /([A-Za-z0-9]+)@([A-Za-z]+)\.([a-z]+)/g;
  if (filter.test(email)) {
      return true;
  }
  else {
      return false;
  }
}
$(document).ready(function(){

  //This jquery code is my own and is from my bearlyhungry project
  //https://github.com/dannyshwan/BearlyHungry/blob/master/frontend/src/views/Home.vue
  $("a").on('click', function(event){
    var href = $(this).attr('href');
    if(href == "#title"|| href == "#about"|| href == "#staff"|| href == "#services" || href == "#scheduleCut"){
  
      event.preventDefault();
      let hash = this.hash;
      let scrollSetting = $(hash).offset().top;
          
      $('html, body').animate({
        scrollTop: scrollSetting
      }, 1000, 'easeInOutQuart');
    }
  });

  $('[data-toggle="tooltip"]').tooltip();  

  $("#dateInput").flatpickr({
    dateFormat: "Y-m-d",
    minDate: "today",
    maxDate: new Date().fp_incr(31*4), //Can only book within the next 4 months
    disable: [
      defaultDays
    ]
  });

  $("#email_input").on("change", () => {
    if(!validateEmail("email_input")){
      $("#email_input").addClass("error");
      $("#email_input").tooltip('show');
    }
    else{
      $("#email_input").removeClass("error");
      $("#email_input").tooltip('hide');
    }
  });

  $("#creditcardNumber_input").on('keypress change', function(){
    $(this).val(function (index, value) {
      return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
    });
  });

  $("#expiryDate_input").on('keypress change', function(){
    $(this).val(function (index, value) {
      return value.replace(/\W/gi, '').replace(/(.{2})/g, '$1 ').trim();
    });
  });


  $("#creditcardNumber_input").on("change", () => {

    const val = $("#creditcardNumber_input").val();
    const rightLength = val.length == 19 ? true : false;

    if(checkIfHasAlpha("creditcardNumber_input") || !rightLength){
      $("#creditcardNumber_input").addClass("error");
      $("#creditcardNumber_input").tooltip('show');
    }
    else{
      $("#creditcardNumber_input").removeClass("error");
      $("#creditcardNumber_input").tooltip('hide');
    }
  });

  $("#expiryDate_input").on("change", () => {
    const val = $("#expiryDate_input").val();
    const month = (val.substr(0,2) <= 12 && 1 <= val.substr(0,2)) ? true : false;
    const rightLength = val.length == 5 ? true : false;

    if(checkIfHasAlpha("expiryDate_input") || !month || !rightLength){
      $("#expiryDate_input").addClass("error");
      $("#expiryDate_input").tooltip('show');
    }
    else{
      $("#expiryDate_input").removeClass("error");
      $("#expiryDate_input").tooltip('hide');
    }
  });

  $("#CVC_input").on("change", () => {

    const val = $("#CVC_input").val();
    const rightLength = val.length == 3 ? true : false;

    if(checkIfHasAlpha("CVC_input") || !rightLength){
      $("#CVC_input").addClass("error");
      $("#CVC_input").tooltip('show');
    }
    else{
      $("#CVC_input").removeClass("error");
      $("#CVC_input").tooltip('hide');
    }
  });

  $("#prefHairdresser").on("change", () => {
    
    const value = $("#prefHairdresser").val();
    
    switch (value) {
      case "yukari":
        $("#dateInput").flatpickr({
          minDate: "today",
          maxDate: new Date().fp_incr(31*4), //Can only book within the next 4 months
          disable: [
            yukariWorkDays
          ]
        });
        break;

      case "simon":
        $("#dateInput").flatpickr({
          minDate: "today",
          maxDate: new Date().fp_incr(31*4), //Can only book within the next 4 months
          disable: [
            simonWorkDays
          ]
        });
        break;

      case "alessandro":
        $("#dateInput").flatpickr({
          minDate: "today",
          maxDate: new Date().fp_incr(31*4), //Can only book within the next 4 months
          disable: [
            alessandroWorkDays
          ]
        });
        break;

      case "anne":
        $("#dateInput").flatpickr({
          minDate: "today",
          maxDate: new Date().fp_incr(31*4), //Can only book within the next 4 months
          disable: [
            anneWorkDays
          ]
        });
        break;

      default:
        $("#dateInput").flatpickr({
          minDate: "today",
          maxDate: new Date().fp_incr(31*4), //Can only book within the next 4 months
          disable: [
            defaultDays
          ]
        });
        break;
    }
  });
});