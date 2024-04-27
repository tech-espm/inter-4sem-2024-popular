import app = require("teem");
import Obra = require("../models/obra");

class ObraRoute {
    public static async listarObras(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u || !u.admin)
		//	res.redirect(app.root + "/acesso");
		//else
			res.render("obra/listarObras", {
				layout: "layout-tabela",
				titulo: "Todas as Obras",
				datatables: true,
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
				lista: await Obra.listarFilmes()
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
				lista: await Obra.listarSeries()
			});
	}
}

export = ObraRoute;