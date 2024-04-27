import app = require("teem");

interface Obra {
	idobra: number;
	idexterno: string;
	titulo: string;
	poster: string;
	ano: number;
	duracao: string;
	classificacao: string;
	tipo: number;
	criacao: string;
	posicao: number; 
	dataLeitura: Date; 
	nota: number;
  }
  
  class Obra {
	public static async listarObras(): Promise<Obra[]> {
	  let lista: Obra[] = null;
  
	  await app.sql.connect(async (sql) => {
		lista = await sql.query(
		  `SELECT ranking.posicao, obra.titulo, leitura.data AS dataLeitura, obra.poster,
			obra.ano, obra.duracao, obra.classificacao, obra.nota, obra.tipo
			FROM ranking
			INNER JOIN obra ON ranking.idobra = obra.idobra
			LEFT JOIN leitura ON ranking.idleitura = leitura.idleitura`
		) as Obra[];
	  });
  
	  return (lista || []);
	}

  public static async listarFilmes(): Promise<Obra[]> {
	let lista: Obra[] = null;

	await app.sql.connect(async (sql) => {
	  lista = await sql.query(
		`SELECT ranking.posicao, obra.titulo, leitura.data AS dataLeitura, obra.poster,
		  obra.ano, obra.duracao, obra.classificacao, obra.nota, obra.tipo
		  FROM ranking
		  INNER JOIN obra ON ranking.idobra = obra.idobra
		  LEFT JOIN leitura ON ranking.idleitura = leitura.idleitura
		  WHERE obra.tipo = 1`
	  ) as Obra[];
	});

	return (lista || []);
  }

  public static async listarSeries(): Promise<Obra[]> {
	let lista: Obra[] = null;

	await app.sql.connect(async (sql) => {
	  lista = await sql.query(
		`SELECT ranking.posicao, obra.titulo, leitura.data AS dataLeitura, obra.poster,
		  obra.ano, obra.duracao, obra.classificacao, obra.nota, obra.tipo
		  FROM ranking
		  INNER JOIN obra ON ranking.idobra = obra.idobra
		  LEFT JOIN leitura ON ranking.idleitura = leitura.idleitura
		  WHERE obra.tipo = 2`
	  ) as Obra[];
	});

	return (lista || []);
  }
}


export = Obra;
