/*
  Acalanes High School
  Alameda Community Learning Center
  Alameda High School
  Arroyo High School
  Aspire California Preparatory Academy
  Balboa High School
  Berkeley High School
  Bishop O'Dowd High School
  Coliseum College Prep Academy
  Community Day High School
  De Anza High School
  El Cerrito High School
  Encinal High School
  Galileo High School
  Hayward High School
  Head-Royce High School
  Hercules High School
  Impact Academy
  Lawrence Hall of Science TEAMS
  Leadership Public Schools Richmond
  Lighthouse Community Charter School
  Lionel Wilson College Preparatory Academy
  McClymonds High School
  MetWest High School
  Middle College High School
  Nea Community Learning Center
  Oakland School for the Arts
  Oakland Technical High School
  Pinole Valley High School
  Ralph Bunche High School
  Realm Charter High School
  Saint Mary's College High School
  San Lorenzo High School
  Skyline High School
  Raoul Wallenberg High School
*/

var schools = [
  ["Acalanes High School", 37.9043022,-122.0999264,"https://www.acalanes.k12.ca.us/acalanes", "/assets/images/schools/Alacanes.JPG"],
  ["Alameda Community Learning Center",37.7794615,-122.2894,"http://www.alamedaclc.org/",'/assets/images/schools/AlamedaCLC.png'],
  ["Alameda High School",37.7702805,-122.2859331,"https://aus-alamedausd-ca.schoolloop.com/",'/assets/images/schools/Alameda.png'],
  ["Albany High School",37.8964201,-122.2943059,"http://ahs.ausdk12.org/",'/assets/images/schools/Albany.gif'],
  ["Arroyo High School",37.6800314,-122.1412883,"https://ahs.schoolloop.com/",'/assets/images/schools/Arroyo.jpg'],
  ["Aspire California Preparatory Academy",36.2726879,-122.5206154,"https://aspirepublicschools.org/locations/bay-area/aspire-richmond-california-college-preparatory-academy/",'/assets/images/schools/AspireCalPrep.jpg'],
  ["Balboa High School",37.7215796,-122.4429598,"https://bhs-sfusd-ca.schoolloop.com/",'/assets/images/schools/Balboa.png'],
  ["Berkeley High School",37.8644593,-122.2708738,"http://bhs.berkeleyschools.net/",'/assets/images/schools/Berkeley.jpg'],
  ["Bishop O'Dowd High School",37.7532646,-122.1568858,"http://www.bishopodowd.org/",'/assets/images/schools/BishopODowd.jpg'],
  ["Coliseum College Prep Academy",37.761596,-122.1956843,"https://www.ousd.org/ccpa",'/assets/images/schools/Coliseum.jpg'],
  ["Community Day High School",37.8149821,-122.4547406,"https://www.ousd.org/communityday/",'/assets/images/schools/CommunityDay.png'],
  ["De Anza High School",37.9679706,-122.289689,"https://www.wccusd.net/deanza",'/assets/images/schools/DeAnza.jpg'],
  ["El Cerrito High School",37.9065914,-122.2962143,"http://elcerritogauchos.net/",'/assets/images/schools/ElCerrito.jpg'],
  ["Encinal High School",37.7726346,-122.2917178,"https://ehs-alamedausd-ca.schoolloop.com/",'/assets/images/schools/Encinal.jpg'],
  ["Galileo High School",37.8034625,-122.4262172,"http://galileoweb.org/",'/assets/images/schools/Galileo.jpg'],
  ["Hayward High School",37.6708676,-122.0709746,"https://www.haywardhigh.net/",'/assets/images/schools/Hayward.jpg'],
  ["Head-Royce High School",37.807941,-122.2073182,"https://www.headroyce.org/",'/assets/images/schools/HeadRoyce.jpg'],
  ["Hercules High School",37.9997255,-122.2560508,"https://www.wccusd.net/herculeshigh",'/assets/images/schools/Hercules.gif'],
  ["Impact Academy",37.71527,-122.2611359,"https://es-impact.org/",'/assets/images/schools/Impact.png'],
  ["Lawrence Hall of Science TEAMS",37.879205,-122.2487057,"https://www.lawrencehallofscience.org/get_involved/join_our_team",'/assets/images/schools/LawrenceHallofScience.png'],
  ["Leadership Public Schools Richmond",37.9337839,-122.3634891,"http://www.leadps.org/richmond/",'/assets/images/schools/LeadershipPublic.png'],
  ["Lighthouse Community Charter School",37.7361054,-122.1979074,"https://lighthousecharter.org/",'/assets/images/schools/LighthouseCC.jpg'],
  ["Lionel Wilson College Preparatory Academy",37.7295344,-122.1824677,"https://aspirepublicschools.org/locations/bay-area/aspire-lionel-wilson-college-preparatory-academy/",'/assets/images/schools/LionelWilsonCPA.png'],
  ["McClymonds High School",37.8180465,-122.2808373,"https://www.ousd.org/mcclymonds",'/assets/images/schools/McClymonds.png'],
  ["MetWest High School",37.7952511,-122.2601159,"https://www.ousd.org/metwest",'/assets/images/schools/MetWest.jpg'],
  ["Middle College High School",37.8914258,-122.3880266,"https://www.wccusd.net/middlecollege",'/assets/images/schools/MiCHS.JPG'],
  ["Nea Community Learning Center",37.7791,-122.2899133,"https://www.clcschools.org/page.cfm?p=351",'/assets/images/schools/NeaCLC.png'],
  ["Oakland School for the Arts",37.807892,-122.2729867,"https://www.oakarts.org/",'/assets/images/schools/OaklandSA.jpg'],
  ["Oakland Technical High School",37.832423,-122.2567391,"http://oaklandtech.com/staff/",'/assets/images/schools/OaklandTech.jpg'],
  ["Pinole Valley High School",37.9917606,-122.2884893,"https://www.wccusd.net/pinolevalley",'/assets/images/schools/PinoleValley.gif'],
  ["Ralph Bunche High School",37.81331,-122.2892257,"https://www.ousd.org/bunche",'/assets/images/schools/RalphBunche.png'],
  ["Realm Charter High School",37.8684076,-122.2936802,"https://www.realmcharterschool.org/",'/assets/images/schools/Realm.bmp'],
  ["Saint Mary's College High School",37.8829087,-122.285778,"http://www.saintmaryschs.org/",'/assets/images/schools/StMarysCollege.jpg'],
  ["San Lorenzo High School",37.6885711,-122.1247127,"https://slzhs.schoolloop.com/",'/assets/images/schools/SanLorenzo.gif'],
  ["Skyline High School",37.7980038,-122.1640634,"https://www.ousd.org/skyline",'/assets/images/schools/Skyline.jpg'],
  ["Raoul Wallenberg High School",37.7806409,-122.4483186,"https://rwhs-sfusd-ca.schoolloop.com/",'/assets/images/schools/RaoulWallenberg.jpg'],

]; // school_name, x-alt, y-alt,school_website
function add_content(school_name, body, url,img_path){
  console.log(school_name);
  var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' + school_name + '</h1>'+
            '<div id="bodyContent">'+
            '<p>' + body + '</p>'+
            '<img height = "50vh" width = "50vw" src="'+ img_path + '" class = "img-contain-w"'+
            '<p>School Website: <a href="'+url+'">'+ url + ' </a> '+
            '</p>'+
            '</div>'+
            '</div>';
  return contentString;
}

function createMarker(m, pos, school_name, body, url,img_path, infowindow) {
    var marker = new google.maps.Marker({
        position: pos,
        map: m,  // google.maps.Map
        title: school_name
    });

    google.maps.event.addListener(marker, 'click', function() {
      var contentString = add_content(school_name,body,url,img_path);
      infowindow.setContent(contentString);
      infowindow.open(map, marker);
    });
    return marker;
}
