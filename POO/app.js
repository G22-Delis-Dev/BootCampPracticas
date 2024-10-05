class Whisky {
    constructor(sabor, capacidad, graduacion, destiladera) {
        this.sabor = sabor;
        this.capacidad = capacidad;
        this.graduacion = graduacion;
        this.destiladera = destiladera;
    }

    clasificarIngredientes(){
        let message = `ya hemos encontrado la mejor ${this.sabor}`;
        console.log(message);
    }

    mesclarIngredientes() {
        let message = `los ingredientes se estan mesclando y va a tener una graduacion de ${this.graduacion} de alcohol y luego estara listo para embasar`;
        console.log(message);
    }

    embasarWhisky() {
        let message = `ahora los embasamos en botella de ${this.capacidad} con el logo de ${this.destiladera}`;
        console.log(message);
    }

    distribuirWhisky() {
        let message = `ahora los distribuimos a las diferentes tiendas de ${this.destiladera} `;
        console.log(message);
    }
}

const capacidadWhisky = "700ML";
const destiladera = " Johnnie Walker"

const blackLabel = new Whisky("naranja y canela", capacidadWhisky, "40%", destiladera);
blackLabel.clasificarIngredientes();
blackLabel.mesclarIngredientes();
blackLabel.embasarWhisky();
blackLabel.distribuirWhisky();

const redLabel = new Whisky("dulce", capacidadWhisky, "40%", destiladera);

redLabel.clasificarIngredientes();
redLabel.mesclarIngredientes();
redLabel.embasarWhisky();
redLabel.distribuirWhisky();

class Computadora {
    constructor(componente, pantalla, fabricante) {
        this.componente = componente;
        this.pantalla = pantalla;
        this.fabricante = fabricante
    }

    comprobarComponente() {
        let message = `los componentes ${this.componente} y la pantalla de ${this.pantalla} pasaron la prueba de calidad`;
        console.log(message);
    }

    ensamblar() {
        let message = `todos los componente fueron ensamblado de forma correctamente`;
        console.log(message);
    }

    revizarProductoFinal() {
        let message = `El producto cumple las espectativa del mercado`;
        console.log(message);
    }

    distribuirComputadora() {
        let message = `ahora los distribuimos a las diferentes tiendas de ${this.fabricante} `;
        console.log(message);
    }
}

const dell = new Computadora("intel i7 16gb ram 256gb RTX3060", "24Pulgada", "Dell");

dell.comprobarComponente();
dell.ensamblar();
dell.revizarProductoFinal();
dell.distribuirComputadora();

const asus = new Computadora("intel i9 16gb ram 1TB RTX4090", "24Pulgada", "Asus"); 

asus.comprobarComponente();
asus.ensamblar();
asus.revizarProductoFinal();
asus.distribuirComputadora();

class Cartera {
    constructor(tela, capacidad, marca) {
        this.tela = tela;
        this.capacidad = capacidad;
        this.marca = marca;
    }

    comprobamosLaTela() {
        let message = `buscamos la tela seleccionada que es ${this.tela}`;
        console.log(message);
    }

    cosemosCartera() {
        let message = `cosemos la cartera y le damos forma`;
        console.log(message);
    }

    probamosCapacidad() {
        let message = `comprobamos que la capacidad de la cartera sea de ${this.capacidad}`;
        console.log(message);
    }

    distribuirCartera() {
        let message = `ya la cartera lista la distribuimos a las tiendas de ${this.marca}`;
        console.log(message);
    }

}

const Gucci = new Cartera("Piel de Cocodrilo", "40LB", "GUCCI");

Gucci.comprobamosLaTela();
Gucci.cosemosCartera();
Gucci.probamosCapacidad();
Gucci.distribuirCartera();

const MK = new Cartera("Cuero sintetico", "40LB", "Michael Kors");

MK.comprobamosLaTela();
MK.cosemosCartera();
MK.probamosCapacidad();
MK.distribuirCartera();