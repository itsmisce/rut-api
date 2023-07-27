const RutGenerator = require('../utils/ruts.js');

exports.getRut = (req, res) => {
    try {
        const cantidadRuts = parseInt(req.query.cantidad);
        if (!cantidadRuts || cantidadRuts < 1) {
          return res.status(400).json({ error: 'Debes ingresar una cantidad válida de RUTs a generar (mayor a 0).' });
        }
      
        const rutGenerator = new RutGenerator();
        const rutsGenerados = new Set();
      
        for (let i = 0; i < cantidadRuts; i++) {
          const rutGenerado = rutGenerator.generarRutUnico();
          rutsGenerados.add(rutGenerado);
        }
      
        const status = 200;
        const link = 'https://rut-api.vercel.app/api';
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Charset', 'utf-8');
        return res.json({ status, link, ruts: Array.from(rutsGenerados) });
      } catch (error) {
        const status = error.status || 500;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Charset', 'utf-8');
        return res.status(status).json({ error: error.message, status });
      }
      
};
