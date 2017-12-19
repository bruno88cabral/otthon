new WOW().init();

//efeito menu mobile
$('.navbar-icon').on('click', function(){
	$('html').toggleClass('menu-open');
});
$('main').on('click', function(){
  $('html').removeClass('menu-open');
});

//up-to-top
$(document).on("scroll", function(){
  if($(document).scrollTop()>500){
    $('body').addClass('appear-up-to-top');
  }
  else{
    $('body').removeClass('appear-up-to-top');
  }
});
//slide up-to-top
$('.up-to-top').on('click', function(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

//configuração google maps
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -22.291915, lng: -48.5158635},
      zoom: 15,
      scrollwheel: false,
		  navigationControl: false,
		  mapTypeControl: false,
		  scaleControl: false,
		  draggable: false,
		  fullscreenControl: false,
      styles: [{"featureType":"water","elementType":"all","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"hue":"#83cead"},{"saturation":1},{"lightness":-15},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#f3f4f4"},{"saturation":-84},{"lightness":59},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-35},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"hue":"#d7e4e4"},{"saturation":-60},{"lightness":23},{"visibility":"on"}]}]
    });
    var marker = new google.maps.Marker({
      position: map.center,
      map: map,
      title: 'Otthon Construtora'
    });
}

