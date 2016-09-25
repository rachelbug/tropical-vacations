$(function() {
  $("form#vacation").submit(function(event) {

    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var color = $("select#color").val();
    var season = $("input:radio[name=group1]:checked").val();
    var dayOff = $("input:radio[name=group2]:checked").val();

    event.preventDefault();

    if (season === 'winter') {
      $("#russia").show();
    } else if (season === 'summer') {
      $("#death").show();
    } else if (color === 'smarag') {
      $("#bora").show();
    } else if (dayOff === 'beach') {
      $("#bora").show();
    } else if (age >= 50) {
      $("#abq").show();
    } else if (dayOff === 'office') {
      $("#abq").show();
    } else if (season === 'autumn' && color === 'coq') {
      $("#death").show();
    } else if (color === 'amar' && season === 'autumn') {
      $("#bora").show();
    } else if (color === 'chart' && age > 15) {
      $("#abq").show();
    } else if (gender === 'female' && (season === 'spring' || color === 'coq')) {
      $("#bora").show();
  } else {
    $("#abq").show();
  }


  });
});
