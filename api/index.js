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
const { conn, bulkCreateCountry } = require('./src/db.js');
const force = false;



// Syncing all the models at once.
/*  conn.sync({ force }).then(() => {
  
  bulkCreateCountry().then(() => { 
   
    server.listen(3001, () => {
      console.log('Escuchando en puerto 3001'); // eslint-disable-line no-console
    });
  })
});  */

 const initServer = () => {
	server.listen(3001, () => {
	      console.log('Escuchando en puerto 3001'); // eslint-disable-line no-console
	});
}

conn.sync({ force }).then(() => {
  if (force){
  	bulkCreateCountry().then(() => { 
		initServer();    
	})
  } else {
  	initServer();
  }});
   
