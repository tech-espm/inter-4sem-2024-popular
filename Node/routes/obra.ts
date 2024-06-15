import app = require("teem");
import Obra = require("../models/obra");
import appsettings = require("../appsettings");
import TipoObra = require("../enums/tipoObra");

class ObraRoute {
    public static async listarObras(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u || !u.admin)
		//	res.redirect(app.root + "/acesso");
		//else
			res.render("obra/listarObras", {
				layout: "layout-tabela",
				titulo: "Obras",
				datatables: true,
				srcInfo: appsettings.srcInfo,
		//		usuario: u,
				lista: await Obra.listarObras()
			});
	}

	public static async listarFilmes(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u || !u.admin)
		//	res.redirect(app.root + "/acesso");
		//else
			res.render("obra/listarFilmes", {
				layout: "layout-tabela",
				titulo: " Posição Raspagem Filmes ao longo do tempo",
				datatables: true,
		//		usuario: u,
				lista: await Obra.listarRankingPorTipo(TipoObra.Filme)
			});
	}

	public static async listarFilmes2(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u || !u.admin)
		//	res.redirect(app.root + "/acesso");
		//else
			res.render("obra/listarFilmes2", {
				layout: "layout-tabela",
				titulo: " Tabela Variação Semanal",
				datatables: true,
		//		usuario: u,
				lista: await Obra.listarDeltaPorTipo(TipoObra.Filme)
			});
	}

	public static async listarSeries(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u || !u.admin)
		//	res.redirect(app.root + "/acesso");
		//else
			res.render("obra/listarSeries", {
				layout: "layout-tabela",
				titulo: "Posição Raspagem Séries ao longo do tempo",
				datatables: true,
		//		usuario: u,
				lista: await Obra.listarRankingPorTipo(TipoObra.Serie)
			});
	}

	public static async meusFavoritos(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u || !u.admin)
		//	res.redirect(app.root + "/acesso");
		//else
			res.render("obra/meusFavoritos", {
				layout: "layout-tabela",
				titulo: "Obras Favoritadas",
				datatables: true,
				srcInfo: appsettings.srcInfo,
		//		usuario: u,
				lista: await Obra.meusFavoritos()
			});
	}

	public static async vazioForm(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("obra/vazioForm", { 
				titulo: "Notificações" 
			});
	}

	public static async sobreNos(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("obra/sobreNos", { 
				layout: "layout-sem-form", 
				titulo: "Sobre Nós" 
			});
	}
}

export = ObraRoute;