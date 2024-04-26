import app = require("teem");
import Usuario = require("../models/usuario");

class ExemploRoute {
	public static async animacoes(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("exemplo/animacoes", { layout: "layout-sem-form", titulo: "Animações" });
	}

	public static async bordas(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("exemplo/bordas", { layout: "layout-sem-form", titulo: "Bordas" });
	}

	public static async botoes(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("exemplo/botoes", { layout: "layout-sem-form", titulo: "Botões" });
	}

	public static async cards(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("exemplo/cards", { layout: "layout-sem-form", titulo: "Cards" });
	}

	public static async cores(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("exemplo/cores", { layout: "layout-sem-form", titulo: "Cores" });
	}

	public static async data(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("exemplo/data", { layout: "layout-sem-form", titulo: "Data", datepicker: true });
	}

	public static async esqueci(req: app.Request, res: app.Response) {
		res.render("exemplo/esqueci", { layout: "layout-externo", titulo: "Esqueci minha senha" });
	}

	public static async graficos(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("exemplo/graficos", { layout: "layout-sem-form", titulo: "Gráficos" });
	}

	public static async outros(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("exemplo/outros", { layout: "layout-sem-form", titulo: "Outros" });
	}

	public static async registro(req: app.Request, res: app.Response) {
		res.render("exemplo/registro", { layout: "layout-externo", titulo: "Registro" });
	}

	public static async tabelas(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("exemplo/tabelas", { layout: "layout-tabela", titulo: "Tabelas", datatables: true });
	}

	public static async vazia(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("exemplo/vazia", { titulo: "Vazia" });
	}

	public static async vaziasemform(req: app.Request, res: app.Response) {
		//let u = await Usuario.cookie(req);
		//if (!u)
		//	res.redirect(app.root + "/login");
		//else
			res.render("exemplo/vazia", { layout: "layout-sem-form", titulo: "Vazia (Sem Form)" });
	}
}

export = ExemploRoute;
