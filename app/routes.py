from flask import render_template, flash, redirect, url_for, request
from app import app, db
@app.route('/')
@app.route('/home')
def Home():
    return render_template('home.html')