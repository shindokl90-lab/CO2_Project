// code for the line chart

var trace1 = {
    x: [1999, 2004, 2009, 2014],
    y: [10, 12, 17, 22],
    type: 'scatter'
};

var data = [trace1];

Plotly.newPlot('linechart', data);


// code for stacked barchart

window.onload = function () {

    function getData(data) {
        var solid_fuel = []
        var liquid_fuel = []
        var gas_fuel = []
        var cement = []
        var gas_flaring = []

        for (var country of data) {
            solid_fuel.push({ y: country.solid_fuel, label: country.year })
            liquid_fuel.push({ y: country.liquid_fuel, label: country.year })
            gas_fuel.push({ y: country.gas_fuel, label: country.year })
            cement.push({ y: country.cement, label: country.year })
            gas_flaring.push({ y: country.gas_flaring, label: country.year })
        }
        console.log(solid_fuel)
        console.log(liquid_fuel)
        console.log(gas_fuel)

        makechart(solid_fuel, liquid_fuel, gas_fuel, cement, gas_flaring)

    }
    console.log(d3)
    d3.json("../static/js/japan.json").then(getData)
    function makechart(solid_fuel, liquid_fuel, gas_fuel, cement, gas_flaring) {


        var chart = new CanvasJS.Chart("insertStackedBar",
            {
                title:{
                	text: "Japan"
                },
                axisY: {
                    title: "CO2 Emissions (by tonnes)",
                    valueFormatString: "#0.#,.",
                },
                data: [
                    {
                        type: "stackedColumn",
                        legendText: "Solid Fuel",
                        showInLegend: "true",
                        dataPoints: solid_fuel
                            
                        
                    }, {
                        type: "stackedColumn",
                        legendText: "Liquid Fuel",
                        showInLegend: "true",
                        dataPoints: liquid_fuel
                        
                    }, {
                        type: "stackedColumn",
                        legendText: "Gas Fuel",
                        showInLegend: "true",
                        dataPoints: gas_fuel
                    }, 
                    
                    {
                        type: "stackedColumn",
                        legendText: "Cement",
                        showInLegend: "true",
                        dataPoints: cement
                    }, 
                    
                    {
                        type: "stackedColumn",
                        legendText: "Gas Flaring",
                        showInLegend: "true",
                        dataPoints: gas_flaring
                    }
                ]
            });
        chart.render();
    }
}

