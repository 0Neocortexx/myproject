from config import *
from modelo import *


@app.route('/')
def home():
    return render_template("index.html")