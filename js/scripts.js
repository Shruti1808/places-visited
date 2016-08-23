// business logic

function Place(place, location, landmark, year, purpose, notes) {
  this.addPlace = place;
  this.addLocation = location;
  this.addLandmark = landmark;
  this.addYear = year;
  this.addPicture = picture;
  this.addNotes = notes;
}

Place.prototype.placeLocation = function() {
  return this.addPlace + ", " + this.addLocation;
}


// interface logic

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
   event.preventDefault();

   var newPlace = $("input#new-place").val();
   var newLocation = $("input#new-location").val();
   var newLandmark = $("input#new-landmark").val();
   var newYear = $("input#new-year").val();
   var newPurpose = $("input#new-purpose").val();
   var newNote = $("textarea#new-notes").val();

   var newVacationPlace = new Place(newPlace, newLocation, newLandmark, newYear, newPurpose, newNote);

   $("ul#places").append("<li><span class='show-place'>" + newVacationPlace.placeLocation() + "</span></li>");

   $("input#new-place").val("");
   $("input#new-location").val("");
   $("input#new-landmark").val("");
   $("input#new-year").val("");
   $("input#new-purpose").val("");
   $("textarea#new-notes").val("");

   $(".show-place").click(function() {
   $("#show-place").show();
   $("#show-place h2").text(newVacationPlace.addPlace);
   $(".place").text(newVacationPlace.addPlace);
   $(".location").text(newVacationPlace.addLocation);
   });

  });
});
