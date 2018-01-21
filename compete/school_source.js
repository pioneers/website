var schools = [
  ["Acalanes High School", 37.9043022,-122.0999264,"https://www.acalanes.k12.ca.us/acalanes"],
  ["Alameda Community Learning Center",37.7794615,-122.2894,"http://www.alamedaclc.org/"],
  ["Alameda High School",37.7702805,-122.2859331,"https://aus-alamedausd-ca.schoolloop.com/"],
]; // school_name, x-alt, y-alt,school_website
function add_content(school_name, body, url){
  console.log(school_name);
  var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' + school_name + '</h1>'+
            '<div id="bodyContent">'+
            '<p>' + body + '</p>'+
            '<p>School Website: <a href="'+url+'">'+ url + ' </a> '+
            '</p>'+
            '</div>'+
            '</div>';
  return contentString;
}

function createMarker(m, pos, school_name,body, url) {
    var marker = new google.maps.Marker({
        position: pos,
        map: m,  // google.maps.Map
        title: school_name
    });
    google.maps.event.addListener(marker, 'click', function() {
      var contentString = add_content(school_name,body,url);
      var infowindow = new google.maps.InfoWindow({
       content: contentString
     });
     infowindow.open(map, marker);
    });
    return marker;
}
