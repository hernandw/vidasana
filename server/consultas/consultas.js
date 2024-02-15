const pool = require('../db/config');

const getConsultas = async () => {
    const { rows: usuarios } = await pool.query('SELECT * FROM usuarios');
    return usuarios
}


module.exports = {
    getConsultas
}