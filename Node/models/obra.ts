import app = require("teem");
import TipoObra = require("../enums/tipoObra");

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
	

	public static async listarRankingPorTipo(tipo: TipoObra): Promise<Obra[]> {
		let lista: Obra[] = null;
	
		await app.sql.connect(async (sql) => {
		  lista = await sql.query(
			`SELECT ranking.posicao, obra.titulo, leitura.data AS dataLeitura, obra.poster,
			  obra.ano, obra.duracao, obra.classificacao, obra.nota, obra.tipo
			  FROM ranking
			  INNER JOIN obra ON ranking.idobra = obra.idobra
			  LEFT JOIN leitura ON ranking.idleitura = leitura.idleitura
			  WHERE obra.tipo = ?`, [tipo]
		  ) as Obra[];
		});
	
		return (lista || []);
	  }

	  public static async listarDeltaPorTipo(tipo: TipoObra): Promise<any[]> {
		let lista: any[] = null;

		const hoje = new Date();
		const diaDeHoje = hoje.getDay() || 7; // Se for 0, vira 7
		let primeiraSegundaFeira: Date;
		if (diaDeHoje === 1) {
			primeiraSegundaFeira = hoje;
		} else {
			primeiraSegundaFeira = new Date(hoje.getTime() - ((diaDeHoje - 1) * 24 * 60 * 60 * 1000));
		}
		
		
		await app.sql.connect(async (sql) => {
		  lista = await sql.query(
			`select rtmp.posicao, rtmp.idobra, rtmp.idexterno, rtmp.titulo, rtmp.poster, rtmp.data,
			date_format(rtmp.data1, '%d/%m/%Y') data1,
			date_format(rtmp.data2, '%d/%m/%Y') data2,
			date_format(rtmp.data3, '%d/%m/%Y') data3,
			date_format(rtmp.data4, '%d/%m/%Y') data4,
			date_format(rtmp.data5, '%d/%m/%Y') data5,
			date_format(rtmp.data6, '%d/%m/%Y') data6,
			date_format(rtmp.data7, '%d/%m/%Y') data7,
			date_format(rtmp.data8, '%d/%m/%Y') data8,
			date_format(rtmp.data9, '%d/%m/%Y') data9,
			(select r2.posicao from leitura l2 left join ranking r2 on r2.idleitura = l2.idleitura and r2.idobra = rtmp.idobra where l2.data = rtmp.data1) posicao1,
			(select r2.posicao from leitura l2 left join ranking r2 on r2.idleitura = l2.idleitura and r2.idobra = rtmp.idobra where l2.data = rtmp.data2) posicao2,
			(select r2.posicao from leitura l2 left join ranking r2 on r2.idleitura = l2.idleitura and r2.idobra = rtmp.idobra where l2.data = rtmp.data3) posicao3,
			(select r2.posicao from leitura l2 left join ranking r2 on r2.idleitura = l2.idleitura and r2.idobra = rtmp.idobra where l2.data = rtmp.data4) posicao4,
			(select r2.posicao from leitura l2 left join ranking r2 on r2.idleitura = l2.idleitura and r2.idobra = rtmp.idobra where l2.data = rtmp.data5) posicao5,
			(select r2.posicao from leitura l2 left join ranking r2 on r2.idleitura = l2.idleitura and r2.idobra = rtmp.idobra where l2.data = rtmp.data6) posicao6,
			(select r2.posicao from leitura l2 left join ranking r2 on r2.idleitura = l2.idleitura and r2.idobra = rtmp.idobra where l2.data = rtmp.data7) posicao7,
			(select r2.posicao from leitura l2 left join ranking r2 on r2.idleitura = l2.idleitura and r2.idobra = rtmp.idobra where l2.data = rtmp.data8) posicao8,
			(select r2.posicao from leitura l2 left join ranking r2 on r2.idleitura = l2.idleitura and r2.idobra = rtmp.idobra where l2.data = rtmp.data9) posicao9
			from (
				select r.posicao, r.idobra, o.idexterno, o.titulo, o.poster, date_format(ltmp.data, '%d/%m/%Y') data,
				adddate(ltmp.data, interval -1 day) data1,
				adddate(ltmp.data, interval -2 day) data2,
				adddate(ltmp.data, interval -3 day) data3,
				adddate(ltmp.data, interval -4 day) data4,
				adddate(ltmp.data, interval -5 day) data5,
				adddate(ltmp.data, interval -6 day) data6,
				adddate(ltmp.data, interval -7 day) data7,
				adddate(ltmp.data, interval -8 day) data8,
				adddate(ltmp.data, interval -9 day) data9
				from (
					select l.idleitura, l.data from leitura l order by l.data desc limit 1
				) ltmp
				inner join ranking r on r.idleitura = ltmp.idleitura
				inner join obra o on o.idobra = r.idobra and o.tipo = ?
				order by r.posicao asc
				limit 20
			) rtmp`, [tipo]
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
