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
		  `SELECT o.idobra, o.titulo, o.poster, o.ano, o.duracao, o.classificacao, o.nota, o.tipo, o.idexterno, f.idfavorito
		  from obra o
		  left join favorito f on f.idobra = o.idobra`
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

  public static async favoritar(idobra: number, incluir: boolean): Promise<void> {
	await app.sql.connect(async (sql) => {
		if (incluir) {
			await sql.query(
					`INSERT INTO favorito (idobra) VALUES (?)`,
					[idobra]
				);
			} else {
				await sql.query(
					`DELETE FROM favorito WHERE idobra = ?`,
					[idobra]
				);
			}
		});
	}

	public static async meusFavoritos(): Promise<Obra[]> {
        let lista: Obra[] = null;

        await app.sql.connect(async (sql) => {
            lista = await sql.query(
                `SELECT o.idobra, o.idexterno, o.titulo, o.poster, o.ano, o.duracao, o.classificacao, o.nota, o.tipo
				FROM obra o
				INNER JOIN favorito f ON f.idobra = o.idobra`,
            ) as Obra[];
        });

        return lista || [];
    }

}


export = Obra;
