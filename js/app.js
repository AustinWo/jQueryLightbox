// Problem: user when clicking on image goes to a dead end
// Solution: create an overlay with the large image ~ Lightbox

var $overlay = $('<div id="overlay"><div>');
var $image = $('<img></img>');
var $caption = $('<p></p>');

//Add image to overlay
$overlay.append($image);
// jQuery representation of the object -> use var $overlay. Just a convention
//Add caption to overlay
$overlay.append($caption);

// 2. Add Overlay
  // best place to add overlay would probably be appending at the end of the document
  $('body').append($overlay);

// 1. Capture the click event on a link to an image
$('#imageGallery a').click(function (event) {
  event.preventDefault();
  // preventing the default behavior of followign the link
  var imageLocation = $(this).attr('href');
  // grabbing the href attribute from this (#imageGellery a) and store it in var imageLocation

  //update overlay with the image linked in the link by setting the src attribute to the imageLocation
  $image.attr('src', imageLocation);

  // Show the overlay
  $overlay.show();

  // Get child's image's alt attribute and set caption
  var captionText = $(this).children('img').attr('alt');
  $caption.text(captionText);
});


// 3. When overlay is clicked
$overlay.click(function(){
  // 3.1 Hide the overlay
  $(this).hide();
});

// -------------------------------------------

// Lessons learned:

// jQuery methods used:

// .hide()

// .show()

// .append()

// .click(function(event){
//   event.preventDefault();
// })

// .attr(attributeName)
// Get the value of an attribute for the first element in the set of matched elements.

// .attr(attributeName, value)
//  Set one or more attributes for the set of matched elements.
// Setting simple attribute eg:
// $('#greatphoto').attr('alt', "Best Seller");

// .children([selector ])
// Get the children of each element in the set of matched elements, optionally filtered by a selector.

// eg $( "div" ).children( ".selected" ).css( "color", "blue" );
// Find all children of div when class .selected then change the css property of color to blue





