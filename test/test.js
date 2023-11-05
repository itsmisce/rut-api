const { expect } = require('chai');
const RutGenerator = require('../utils/ruts.js');

describe('RutGenerator', () => {
    let rutGenerator;

    beforeEach(() => {
        rutGenerator = new RutGenerator();
    });

    //   Hay que explicar que ademas de obviar el hecho de que el constructor genera valores unicos, 
    //   matematicamente es baja la probabilidad de que se generen dos ruts identicos.
    //   Por ejemplo, considerando que dado el math random puede generarse 20.000.000 numeros únicos
    //   Si solicitamos 1000 ruts, es 0.005% probable de que el rut se repita, pero para efectos de testeo lo realizamos.
    //   const totalRutsPosibles = 20000000;
    //   const rutsGeneradosHastaElMomento = 1000;
    //   const probabilidadRutUnico = (totalRutsPosibles - rutsGeneradosHastaElMomento) / totalRutsPosibles;
    //   console.log(probabilidadRutUnico); 

    describe('generarRutUnico()', () => {
        it('debería generar un RUT único', () => {
            const rut1 = rutGenerator.generarRutUnico();
            const rut2 = rutGenerator.generarRutUnico();
            expect(rut1).to.not.equal(rut2);
        });
    });

    describe('calcularDigitoVerificador()', () => {
        it('debería calcular el dígito verificador correctamente', () => {
            const rutSinDigito = '21004624';
            const digitoVerificador = rutGenerator.calcularDigitoVerificador(rutSinDigito);
            expect(digitoVerificador.toString()).to.equal('0');
        });
    });

    describe('generarRutConDigito()', () => {
        it('debería generar un RUT con dígito verificador correctamente', () => {
            const rutCompleto = rutGenerator.generarRutConDigito();
            const regex = /^\d{7,8}-[0-9K]$/;
            expect(rutCompleto).to.match(regex);
        });
    });
});
