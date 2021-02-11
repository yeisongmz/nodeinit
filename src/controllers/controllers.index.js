const db = require('../models/script')


const getUsers = (req, res) => {
   // res.send();
  };

  const getClients = (req, res) => {
    res.send(db.getClientes);
    
  };

module.exports = {
    getUsers,
    getClients
}