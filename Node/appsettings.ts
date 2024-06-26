﻿import app = require("teem");

require("dotenv").config({ encoding: "utf8", path: app.currentDirectoryName() + "/../.env" });

export = {
	localIp: process.env.app_localIp as string,
	port: parseInt(process.env.app_port as string),
	root: process.env.app_root as string,
	urlSite: process.env.app_urlSite as string,
	cookie: process.env.app_cookie as string,
	cookieSecure: !!parseInt(process.env.app_cookieSecure as string),
	staticFilesDir: process.env.app_staticFilesDir as string,
	disableStaticFiles: !!parseInt(process.env.app_disableStaticFiles as string),

	sqlConfig: {
		connectionLimit: parseInt(process.env.app_sqlConfig_connectionLimit as string),
		waitForConnections: !!parseInt(process.env.app_sqlConfig_waitForConnections as string),
		charset: process.env.app_sqlConfig_charset as string,
		host: process.env.app_sqlConfig_host as string,
		port: parseInt(process.env.app_sqlConfig_port as string),
		user: process.env.app_sqlConfig_user as string,
		password: process.env.app_sqlConfig_password as string,
		database: process.env.app_sqlConfig_database as string
	},

	usuarioSenhaPadrao: process.env.app_usuarioSenhaPadrao,
	usuarioHashSenhaPadrao: process.env.app_usuarioHashSenhaPadrao,
	usuarioHashId: parseInt(process.env.app_usuarioHashId as string, 16),

	srcFlourish: process.env.app_srcFlourish as string,
	srcFlourish2: process.env.app_srcFlourish2 as string,
	srcFlourish3: process.env.app_srcFlourish3 as string,
	srcInfo: process.env.app_srcInfo as string,
	srcTableau2: process.env.app_srcTableau2 as string,
	srcTableau3: process.env.app_srcTableau3 as string,
	srcTableau4: process.env.app_srcTableau4 as string,
	srcTableau5: process.env.app_srcTableau5 as string,
};
