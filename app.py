from flask import Flask, request, render_template, redirect, session, flash
from flask_debugtoolbar import DebugToolbarExtension
from boggle import Boggle

boggle_game = Boggle()

app = Flask(__name__)
app.config['SECRET_KEY'] = "whatever"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)


@app.route('/')
def landing_page():
    return render_template("home.html")


@app.route("/createsession", methods=["POST"])
def intialize_data():

    session["board"] = boggle_game.make_board()
    return redirect("/gamestart")


@app.route('/gamestart')
def start_game():
    """Display game board"""
    return render_template('index.html')



