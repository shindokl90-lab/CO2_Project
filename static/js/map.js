// Create map 
var myMap = L.map("map", {
	center: [20.82, 15.57],
	zoom: 3
});

// Tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
	attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
	tileSize: 512,
    maxZoom: 7,
    minZoom: 3,
	zoomOffset: -1,
    id: "light-v10",
	accessToken: API_KEY
}).addTo(myMap);

//Add Boundaries//
d3.json("countries.json").then(function(data){

var countries = ["China", "Russia", "India", "Japan", "United States of America", "United Kingdom", "Germany", "Canada", "South Korea", "Iran", "Mexico", "South Africa", "Italy", "Saudi Arabia", "Indonesia", "Brazil", "Australia", "France", "Ukraine", "Poland", "Spain", "Turkey", "Taiwan", "Thailand", "Kazakhstan", "Malaysia", "Netherlands", "Venezuela", "Egypt", "Argentina"]
  L.geoJson(data, {
    style: function(feature) {
      var color = "white";
      console.log(feature);
      if (countries.includes(feature.properties["ADMIN"]))
        color = "purple"
      return {
        color: "black",
        // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
        fillColor: color,

        fillOpacity: 0.5,
        weight: 1.5
      };
    }
}).addTo(myMap);

});