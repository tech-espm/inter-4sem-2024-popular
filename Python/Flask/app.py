from flask import Flask, render_template
from ReqSQL import listarRanking

app = Flask(__name__)

@app.route('/')
def index():
    # Obtém os dados do ranking de filmes
    filmes = listarRanking()

    # Renderiza a página HTML com os dados do ranking
    return render_template('ranking_filmes_copy.html', filmes=filmes)

if __name__ == '__main__':
    app.run(debug=True)
