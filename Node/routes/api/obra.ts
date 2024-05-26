import app = require("teem");
import Obra = require("../../models/obra");
import TipoObra = require("../../enums/tipoObra");

class ObraApiRoute {
    public static async listarObras(req: app.Request, res: app.Response) {
		//const u = await Usuario.cookie(req, res, true);
		//if (!u)
		//	return;
		res.json(await Obra.listarObras());
	}

    public static async listarFilmes(req: app.Request, res: app.Response) {
		//const u = await Usuario.cookie(req, res, true);
		//if (!u)
		//	return;
		res.json(await Obra.listarRankingPorTipo(TipoObra.Filme));
	}

    public static async listarSeries(req: app.Request, res: app.Response) {
		//const u = await Usuario.cookie(req, res, true);
		//if (!u)
		//	return;
		res.json(await Obra.listarRankingPorTipo(TipoObra.Serie));
	}

	public static async muesFavoritos(req: app.Request, res: app.Response) {
		//const u = await Usuario.cookie(req, res, true);
		//if (!u)
		//	return;
		res.json(await Obra.meusFavoritos());
	}

	@app.http.post()
    public static async favoritar(req: app.Request, res: app.Response) {
		//const u = await Usuario.cookie(req, res, true);
		//if (!u)
		//	return;
		const idobra = parseInt(req.body.idobra);
		const incluir: boolean = req.body.incluir;
		await Obra.favoritar(idobra, incluir);
		res.json(true);
	}
}

export = ObraApiRoute;