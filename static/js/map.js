// Define colors for color coded country map
var color5 = "darkred";
var color4 = "red";
var color3 = "darkorange";
var color2 = "orange";
var color1 = "yellow";

// Create map 
var myMap = L.map("map", {
	center: [20.82, 15.57],
	zoom: 2
});

// Tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
	attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
	tileSize: 512,
    maxZoom: 7,
    minZoom: 2,
	zoomOffset: -1,
    id: "light-v10",
	accessToken: API_KEY
}).addTo(myMap);

//Add Boundaries//
d3.json("/static/js/countries.geojson").then(function(data){

var countries = ["China", "Russia", "India", "Japan", "United States of America", "United Kingdom", "Germany", "Canada", "South Korea", "Iran", "Mexico", "South Africa", "Italy", "Saudi Arabia", "Indonesia", "Brazil", "Australia", "France", "Ukraine", "Poland", "Spain", "Turkey", "Taiwan", "Thailand", "Kazakhstan", "Malaysia", "Netherlands", "Venezuela", "Egypt", "Argentina"]
  L.geoJson(data, {
    style: function(feature) {
      var color = "white";
      console.log(feature);
      if (countries.includes(feature.properties["ADMIN"]))
        //make call to determine country total CO2 emissions and select appropriate color
        color = "purple"
      return {
        color: "black",
        // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
        fillColor: color,
        fillOpacity: 0.5,
        weight: 1.5
      };
    }
})
  .on('click',
    function(target) {
      updateCountry(target.layer.feature);
    }
  )
  .addTo(myMap);

});

// Legend for the chart
var legend = L.control({position: "bottomleft"});
legend.onAdd = function () {
  console.log("adding legend...");
 var div = L.DomUtil.create("div", "info legend"),
     grades = [color1, color2, color3, color4, color5],
     labels = ["DIRTY 30 - Best 20%","DIRTY 30 - Upper Middle", "DIRTY 30 - Middle", "DIRTY 30 - Lower Middle", "DIRTY 30 - Worst 20%"];
 div.innerHTML += '<b>BY COUNTRY: TOP 30 CO2 EMITTERS</b><br>'
// loop through our magnitude intervals and generate a label with a colored square for each interval
 for (var i = 0; i < grades.length; i++) {
     div.innerHTML +=
     '<i style="background:' + grades[i] + '" ></i>' + labels[i] +'<br>';
     }
 return div;
};
legend.addTo(myMap);

function updateCountry(feature) {
  d3.json("/loadsingle/" + feature.properties["ADMIN"]).then(function(result){
      //update chart(s)
  });
  console.log(feature);
}

function LoadAll()
{
    d3.json("/loadall").then(response => {
        console.log(countrytotals)
        // push data to vars for html or use directly to build chart
    })
};


function LoadOne()
{
    d3.json("/loadsingle").then(response => {
        console.log(singlecountry)
    })
};
