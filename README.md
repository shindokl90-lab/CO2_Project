# PROJECT2_CO2



Project Two 
Brian McLane, Greg Behnke, Katharine Hollars, Steve Reiss


TOPIC
We want to explore climate change. Since 1970 CO2 emissions have increased ~90%, with fossil fuels the #1 source. Our group will examine fossil fuel generated CO2 emissions in the years leading up to the Paris Climate Accord (2015).


REPOSITORY
https://github.com/shindokl90-lab/PROJECT2_CO2 


DATA SOURCE
Our data source is the Carbon Dioxide Information Analysis Center - https://datahub.io/core/co2-fossil-by-nation.  The data is available both as .CSV and .JSON files.
•	https://github.com/datasets/co2-fossil-by-nation/blob/master/data/fossil-fuel-co2-emissions-by-nation.csv 
•	https://datahub.io/core/co2-fossil-by-nation/r/fossil-fuel-co2-emissions-by-nation.json 

Our data set outlines: 
•	Annual fossil fuel generated CO2 emissions by country from 1751 (includes only a few countries) through 2014 (228 countries)
•	Data fields include year, country, total, solid, liquid fuel, gas fuel, cement, gas flaring, per capita, bunker fuels
●	solid fuel are emissions from coal
●	liquid fuel are emissions from petroleum-based fuels
●	gas fuels are emissions from natural gas
●	gas flaring are emissions tied to oil extraction
●	cement are emissions from production of concrete (currently ~7% of CO2 emissions)
●	bunker fuels are emissions from ships - note: not included in the emissions total


PART ONE: ETL
Our ETL goal is to simplify the dataset to streamline routes to answering our questions. We are considering:
●	Dropping bunker fuels (not included in total)
●	Using years 1970 – 2014 (CO2 emissions almost doubled from 1970-2014)
●	Focusing on top countries (the total of smaller countries is not significant) 
●	Breaking data into regions – e.g. Middle East 
●	Including data on domestic fossil fuel production, haven’t found a good source yet
●	https://www.weforum.org/agenda/2019/06/mapped-fossil-fuel-production-by-country/ 
●	https://www.fossilfuelsreview.ed.ac.uk/resources/Evidence%20-%20Climate%20Science/IEA%20-%20Key%20World%20Energy%20Statistics.pdf 


PART TWO: Coding
●	We will use JSON data as it’s becoming more commonplace in corporate settings
●	Our ETL process will be done in Jupyter Notebooks
●	Our filtered data will be stored in a SQL database based on a bespoke schema 
●	We’ll utilize Flask with HTML, CSS, graphics (Plotly and D3) to display our findings


PART THREE: Frontend and chart ideas under consideration based on findings
●	Total CO2 emissions 1999 - 2014 (line graph)
●	Countries - top 10 emitters and their % of the total over time (stacked bar)
●	Countries - per capita emissions (stacked bar by type of fuel used)
●	Global - current CO2 emissions (heatmap)

