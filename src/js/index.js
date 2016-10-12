'use strict';

// Using revealing module pattern
window.Carousel = (function ($) {

  // Initial settings for carousel
  var carouselSettings = {
    carouselDiv: '#carousel-holder',
    $slides: '',
    slideInterval: 3000,
    numPics: 10,
    currentSlide: 0,
    title: 'Machu Picchu',
    autoRotate: true
  };

  // Settings for flicker API
  var flickerSettings = {
    apiKey : 'cd2ff4a4ad0c7063902053922e84ca81',
    flickrApiUrl : 'https://api.flickr.com/services/rest/',
    method : 'flickr.photos.search',
    format : 'json',
    lat  : -13.163,
    long : -72.545,
    contentType : 1,
    place_id : 'uiZgkRVTVrMaF2cP'
  };

  /**
  * Initializes carousel
  * @param {object} options - would override carouselSettings
  */
  function init(options) {
    // Overrides the basic carouselSettings if new ones are passed in on init()
    for(var prop in options) {
      if(options.hasOwnProperty(prop)){
        carouselSettings[prop] = options[prop];
      }
    }
    // Pull images from API
    getImages();
  }

  /**
  * Ajax call from Flickr API
  */
  function getImages(){
    $.getJSON(
      flickerSettings.flickrApiUrl+'?'+
      'api_key='+ flickerSettings.apiKey + '&' +
      'method=' + flickerSettings.method + '&' +
      'format=' + flickerSettings.format + '&' +
      'content_type='+ flickerSettings.contentType +'&' +
      'lat=' + flickerSettings.lat+ '&' +
      'lon=' +flickerSettings.long + '&' +
      'nojsoncallback=1', function(data){
        parseData(data);
      });
  }

  /**
  * Callback from API call.
  * Parses data
  * @param {object} data - Data from API call
  */
  function parseData(data){
    // Get the number of pictures to display in carousel
    var numPics = numPicsToDisplay(data.photos.photo.length);

    // Array of images that will be used in templates
    var images = [];
    $.each(numPics, function(index, val){
      // Use numPics values to get photo at specified index
      images.push(data.photos.photo[val]);
      // Add title to each object
      // Photo title data was unreliable so I hard coded this title
      // TODO: find a way to wash API title data
      images[index].title = carouselSettings.title;
    });
    // Build templates using Handlebars
    buildTemplates(images);
    // Attached slides to slides variable
    // This is used in attachHandlers function
    carouselSettings.$slides = $('#slides .slide');
    // Attach handlers
    attachHandlers();
  }
  
  /**
  * Build templates using Handlebars
  * @param {array} images - images data from parseData()
  */
  function buildTemplates(images) {
    // Build templates using new images array
    // HB helper to format url string
    Handlebars.registerHelper("formatSrcUrl", function(image) {
      return 'https://farm' + image.farm + '.staticflickr.com/'+image.server+'/'+image.id+'_'+image.secret+'_z.jpg';
    });
    // Build templates and attached to DOM
    var template = JST['src/templates/carousel-template.hbs'];
    $(carouselSettings.carouselDiv).html(template(images));
  }

  /**
  * Set handlers to slides and controls
  */
  function attachHandlers(){
    var $controlLeft = $('#controls #left');
    var $controlRight = $('#controls #right');
    var $startStop = $('#controls #start-stop');
    var $pause = $startStop.find('.fa-pause');
    var $play = $startStop.find('.fa-play');

    $controlLeft.keypress(function(e) {
      if(e.which === 13) {
        $(this).click();
      }
    });
    $controlLeft.click(function(){
      clearInterval(slideInterval);
      moveSlide('prev');
      slideInterval = setInterval(function(){moveSlide('next')}, carouselSettings.slideInterval);
    });
    $controlRight.keypress(function(e) {
      if(e.which === 13) {
        $(this).click();
      }
    });
    $controlRight.click(function(){
      clearInterval(slideInterval);
      moveSlide('next');
      slideInterval = setInterval(function(){moveSlide('next')}, carouselSettings.slideInterval);
    });
    $startStop.keypress(function(e) {
      if(e.which === 13) {
        if($pause.css('display') === 'none') {
          $play.click();
        } else {
          $pause.click();
        }
      }
    });
    $pause.click(function(){
      $play.toggle();
      $pause.toggle();
      clearInterval(slideInterval);
    });
    $play.click(function(){
      $play.toggle();
      $pause.toggle();
      slideInterval = setInterval(function(){moveSlide('next')}, carouselSettings.slideInterval);
    });

    // Set autoRotate
    var slideInterval = setInterval(function(){moveSlide('next')},carouselSettings.slideInterval);
    if(!carouselSettings.autoRotate) $pause.click();
  }

 /**
  * Controls the movement of slides
  * Updates slides based on direction argument
  * @param {string} direction
  */
  function moveSlide(direction){
    $(carouselSettings.$slides[carouselSettings.currentSlide]).removeClass('active');
    if(direction === 'next') {
      carouselSettings.currentSlide = (carouselSettings.currentSlide+1)%carouselSettings.$slides.length;
    } else {
      carouselSettings.currentSlide = (carouselSettings.currentSlide-1 < 0) ? carouselSettings.$slides.length - 1 : carouselSettings.currentSlide -1;
    }
    $(carouselSettings.$slides[carouselSettings.currentSlide]).addClass('active');
  }

  /**
  * Gets {picsLength} random numbers
  * parseData() uses those numbers to get pictures from API
  * @param {number} picsLength
  * @ return arr - array of random numbers 
  */
  function numPicsToDisplay(picsLength) {
    // Check if number of pics that come back is less than settings for numPics
    var NUM_PICS = (picsLength < carouselSettings.numPics) ? picsLength : carouselSettings.numPics;
    var arr = [];
    while(arr.length < NUM_PICS) {
      var randomnumber = Math.ceil(Math.random()*100)
      // Check to make sure the random number is unique
      var found = false;
      for(var i = 0; i< arr.length; i++){
        if( arr[i] === randomnumber){
          found = true;
          break;
        }
      }
      if(!found) {
        arr[arr.length] = randomnumber;
      }
    }
    return arr;
  }

  // Expose init function
  return {
    init: init
  }

})(jQuery);

//Initialize carousel
window.Carousel.init();