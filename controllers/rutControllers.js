const RutGenerator = require('../utils/ruts.js');
const rutGenerator = new RutGenerator();

exports.getRut = (req, res) => {
    try {
        const cantidadRuts = parseInt(req.query.cantidad);
        if (!cantidadRuts || cantidadRuts < 1) {
            return res.status(400).json({ error: 'Debes ingresar una cantidad válida de RUTs a generar (mayor a 0).' });
        }

        const rutsGenerados = [];
        for (let i = 0; i < cantidadRuts; i++) {
            const rutGenerado = rutGenerator.generarRutUnico();
            rutsGenerados.push(rutGenerado);
        }
        const status = 200;
        const link = 'https://rut-api.vercel.app/api';
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Charset', 'utf-8');
        return res.json({status, link, ruts: rutsGenerados });
    } catch (error) {
        const status = error.status || 500;
        const link = 'https://rut-api.vercel.app/api';
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Charset', 'utf-8');
        return res.status(status).json({ error: 'Ocurrió un error al generar los RUTS.', status, link });
    }
};
