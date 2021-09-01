//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const{ bulkCreateCountry } = require('./src/utils')
const force = false;

const initServer = () => {
	server.listen(3001, () => {
	      console.log('Escuchando en puerto 3001'); // eslint-disable-line no-console
	});
}
//con bulkCreateCountry cargo la tabla countries con lo que me manda la api antes de inicializar el server
conn.sync({ force }).then(() => {
  if (force){
  	bulkCreateCountry().then(() => { 
		initServer();    
	})
  } else {
  	initServer();
  }});
   
