module.exports = (db) => {
  //get all file controllers
  const getFiles = require('../utils/directoryGetFiles')
  const files = getFiles(__dirname);

  let controllers = {}
  files.forEach((file) => {
    if(/.controller.js/.test(file)) {
      Object.assign(controllers, {
        [file.split('.controller.js')[0]+"Controller"]:
        require(`${__dirname}/${file}`)(db)
      });
    }
  })

  return controllers;
}
