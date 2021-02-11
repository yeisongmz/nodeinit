const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'postgres',
    port: 5432,
})

const getUsuarios = async () => {
   const res = await pool.query('SELECT* FROM usuarios');
   console.log(res.rows)
   console.log('ya fue hecha la consulta')
};

const getClientes = async () => {
    await pool.query('SELECT* FROM usuarios')
};

module.exports = {
    getUsuarios,
    getClientes
}

getUsuarios();