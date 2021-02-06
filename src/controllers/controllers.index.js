


const getUsers = (req, res) => {
    res.send('Lista de usuarios');
  }
  const getClients = (req, res) => {
    res.send('Lista de clientes');
  }

module.exports = {
    getUsers,
    getClients
}