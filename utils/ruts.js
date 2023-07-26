class RutGenerator {
  constructor() {
    this.rutsGenerados = new Set();
  }

  generarRutUnico() {
    try {
      let rutGenerado;
      do {
        rutGenerado = this.generarRutConDigito();
      } while (this.rutsGenerados.has(rutGenerado));
      this.rutsGenerados.add(rutGenerado);
      return rutGenerado;
    } catch (error) {
      throw new Error('Ocurrió un error al generar el RUT único.');
    }
  }

  calcularDigitoVerificador(rutSinDigito) {
    try {
      const rutReverso = [...rutSinDigito].reverse();
      const serie = [2, 3, 4, 5, 6, 7];
      let suma = 0;

      for (let i = 0; i < rutReverso.length; i++) {
        const digito = parseInt(rutReverso[i], 10);
        const multiplicador = serie[i % serie.length];
        suma += digito * multiplicador;
      }

      const resto = suma % 11;
      const digitoVerificador = 11 - resto;
      return digitoVerificador === 11 ? 0 : digitoVerificador === 10 ? 'K' : digitoVerificador;
    } catch (error) {
      throw new Error('Ocurrió un error al calcular el dígito verificador.');
    }
  }

  generarRutConDigito() {
    try {
      const rutSinDigito = String(Math.floor(Math.random() * 30000000 + 1000000));
      const digitoVerificador = this.calcularDigitoVerificador(rutSinDigito);
      const rutCompleto = `${rutSinDigito}-${digitoVerificador}`;
      return rutCompleto;
    } catch (error) {
      throw new Error('Ocurrió un error al generar el RUT con dígito verificador.');
    }
  }
}

module.exports = RutGenerator;
