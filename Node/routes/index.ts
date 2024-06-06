import app = require("teem");
import Usuario = require("../models/usuario");
import appsettings = require("../appsettings");

class IndexRoute {
	public static async index(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("index/index", {
				layout: "layout-sem-form",
				titulo: "Análises & Insights de Popularidade",
				srcFlourish: appsettings.srcFlourish,
				srcFlourish2: appsettings.srcFlourish2,
				srcTableau: appsettings.srcTableau,
				srcTableau2: appsettings.srcTableau2,
				srcTableau3: appsettings.srcTableau3,
				srcTableau4: appsettings.srcTableau4,
				srcTableau5: appsettings.srcTableau5,
				srcTableau6: appsettings.srcTableau6
				//usuario: u
			});
	}

	@app.http.all()
	public static async login(req: app.Request, res: app.Response) {
		let u = await Usuario.cookie(req);
		if (!u) {
			let mensagem: string = null;
	
			if (req.body.email || req.body.senha) {
				[mensagem, u] = await Usuario.efetuarLogin(req.body.email as string, req.body.senha as string, res);
				if (mensagem)
					res.render("index/login", {
						layout: "layout-externo",
						mensagem: mensagem
					});
				else
					res.redirect(app.root + "/");
			} else {
				res.render("index/login", {
					layout: "layout-externo",
					mensagem: null
				});
			}
		} else {
			res.redirect(app.root + "/");
		}
	}

	public static async acesso(req: app.Request, res: app.Response) {
		let u = await Usuario.cookie(req);
		if (!u)
			res.redirect(app.root + "/login");
		else
			res.render("index/acesso", {
				layout: "layout-sem-form",
				titulo: "Sem Permissão",
				usuario: u
			});
	}

	public static async perfil(req: app.Request, res: app.Response) {
		let u = await Usuario.cookie(req);
		if (!u)
			res.redirect(app.root + "/");
		else
			res.render("index/perfil", {
				titulo: "Meu Perfil",
				usuario: u
			});
	}

	public static async logout(req: app.Request, res: app.Response) {
		let u = await Usuario.cookie(req);
		if (u)
			await Usuario.efetuarLogout(u, res);
		res.redirect(app.root + "/");
	}
}

export = IndexRoute;
