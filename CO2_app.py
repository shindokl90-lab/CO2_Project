# imports
from flask import Flask, jsonify, request, render_template, redirect
import json
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
# create instance of Flask app
app = Flask(__name__)

# Use flask to set up db connection
engine = create_engine("postgresql://postgres:postgres@localhost/CO2")

# reflect an existing database into a new model
Base = automap_base()
Base.prepare(engine, reflect=True)

# Table references
dirty30 = Base.classes.co2_dirty30
countryvals = Base.classes.co2_values

# Create route that renders index.html template
@app.route("/")
def home():
    return render_template('index.html')

@app.route("/map")
def map():
    return render_template('map.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/loadall")
def loadall():
    #Read data from database and pass it to template/js
    if request.method == 'GET':
        countrytotals = []
        session = Session(engine)
        countrytotals = session.query(dirty30.country, dirty30.total).all()
        session.close()
        return json.dumps([dict(r) for r in countrytotals])


@app.route("/loadsingle")
def loadsingle():
    #Read data from database and pass it to template/js
    if request.method == 'GET':
        singlecountry = []
        #r = request.get_json()
        #country = r["country"]
        country = "JAPAN"
        session = Session(engine)
        singlecountry = session.query(countryvals.year, countryvals.total, countryvals.country, countryvals.solid_fuel, countryvals.liquid_fuel, countryvals.gas_fuel, countryvals.cement, countryvals.gas_flaring, countryvals.per_capita).filter(countryvals.country == country)
        session.close()
        return json.dumps([dict(r) for r in singlecountry])

if __name__ == "__main__":
    app.run(debug=True)