//JS REFERENCIADO EN EL HTML presupuesto.html

class Pedido {
    constructor() {
        this.tipoSeleccionado = null;
        this.init();
    }

    async init() {
        const confirmarButton = document.getElementById('confirmar');
        const recotizarButton = document.getElementById('recotizar');
        const tipoSelect = document.getElementById('tipoPresupuesto');

        // Al cargar la página, intentamos cargar los elementos desde localStorage
        this.cargarElementosDesdeLocalStorage();

        confirmarButton.addEventListener('click', async () => {
            this.tipoSeleccionado = tipoSelect.value;
            if (this.tipoSeleccionado === "1" || this.tipoSeleccionado === "2" || this.tipoSeleccionado === "3") {
                await this.levantarPedido();
            } else {
                alert("Opción inválida. Por favor, selecciona una opción válida.");
            }
        });

        recotizarButton.addEventListener('click', () => {
            tipoSelect.value = ""; // Limpiar la selección
            document.getElementById('resultado').innerHTML = ""; // Limpiar el resultado
            tipoSelect.removeAttribute('disabled'); // Habilitar el select nuevamente
            this.tipoSeleccionado = null; // Restablecer el tipo seleccionado
            this.elementos = {}; // Restablecer los elementos
            this.guardarElementosEnLocalStorage(); // Limpiar los elementos en localStorage
        });
    }

    async relevarTipoDePedido() {
        return new Promise((resolve) => {
            const tipoSelect = document.getElementById('tipoPresupuesto');
            const tipoSeleccionado = tipoSelect.value;
            if (tipoSeleccionado === "1" || tipoSeleccionado === "2" || tipoSeleccionado === "3") {
                resolve(tipoSeleccionado);
            } else {
                alert("Opción inválida. Por favor, selecciona una opción válida.");
            }
        });
    }

    async levantarPedido() {
        let tipo_ingresado;

        do {
            tipo_ingresado = await this.relevarTipoDePedido();
            console.log(tipo_ingresado);

            switch (tipo_ingresado) {
                case "1":
                    alert(`Seleccionaste el tipo de presupuesto de PC de escritorio`);
                    this.elementos = {
                        Motherboard: { descripcion: "MOTHERBOARD 1700 12°GEN ASUS", precio: 150000 },
                        Placa: { descripcion: "PLACA DE VIDEO GEFORCE RTX 1070 TI 8G", precio: 120000 },
                        Fuente: { descripcion: "FUENTE MASTER 700W", precio: 60000 },
                        Gabinete: { descripcion: "GABINETE TOWER THERMALTAKE S300", precio: 80000 },
                        Procesador: { descripcion: "PROCESADOR INTEL CORE I3 12700K 5.0 GHZ", precio: 140000 },
                        Memoria: { descripcion: "MEMORIA RAM DDR4 - 8GB 3200", precio: 25000 },
                        Cooler: { descripcion: "COOLER-MASTER-MASTERFAN-MF120-S3", precio: 10000 },
                        SistemaOperativo: { descripcion: "WINDOWS 10 PRO", precio: 80000 },
                        Teclado: { descripcion: "TECLADO LOGITECH V3", precio: 15000 },
                        Mouse: { descripcion: "MOUSE LOGITECH V3", precio: 15000 },
                        Monitor: { descripcion: "MONITOR DELL 27", precio: 100000 },
                        Auriculares: { descripcion: "AURICULARES JBL", precio: 5000 },
                    };
                    break;

                case "2":
                    alert(`Seleccionaste el tipo de presupuesto de PC de Gamer`);
                    this.elementos = {
                        Motherboard: { descripcion: "MOTHERBOARD 1700 12°GEN ASUS", precio: 150000 },
                        Placa: { descripcion: "PLACA DE VIDEO GEFORCE RTX 3070 TI 8G", precio: 300000 },
                        Fuente: { descripcion: "FUENTE MASTER 1050W", precio: 80000 },
                        Gabinete: { descripcion: "GABINETE TOWER THERMALTAKE S300", precio: 80000 },
                        Procesador: { descripcion: "PROCESADOR INTEL CORE I7 12700K 5.0 GHZ", precio: 250000 },
                        Memoria: { descripcion: "MEMORIA RAM DDR4 - 16GB 3200", precio: 50000 },
                        Cooler: { descripcion: "COOLER-MASTER-MASTERFAN-MF120-S3", precio: 10000 },
                        SistemaOperativo: { descripcion: "WINDOWS 10 PRO", precio: 80000 },
                        Teclado: { descripcion: "TECLADO LOGITECH V3", precio: 15000 },
                        Mouse: { descripcion: "MOUSE LOGITECH V3", precio: 15000 },
                        Monitor: { descripcion: "MONITOR DELL 27", precio: 100000 },
                        Auriculares: { descripcion: "AURICULARES JBL", precio: 5000 },
                    };
                    break;

                case "3":
                    alert(`Seleccionaste el tipo de presupuesto a medida. Detalla cada uno de los elementos que necesitas`);
                    this.elementos = {};
                    const elementosPersonalizados = [
                        "Motherboard",
                        "Placa",
                        "Fuente",
                        "Gabinete",
                        "Procesador",
                        "Memoria",
                        "Cooler",
                        "Sistema Operativo",
                        "Teclado",
                        "Mouse",
                        "Monitor",
                        "Auriculares",
                    ];

                    for (const elemento of elementosPersonalizados) {
                        const descripcion = prompt(`Por favor ingresa la descripción para ${elemento}`);

                        if (descripcion) {
                            this.elementos[elemento] = { descripcion };
                        } else {
                            alert("Debes ingresar una descripción válida.");
                            break;
                        }
                    }

                    break;

                default:
                    alert("Opción inválida. Por favor, selecciona una opción válida.");
            }
        } while (!this.elementos && tipo_ingresado !== "1" && tipo_ingresado !== "2" && tipo_ingresado !== "3");

        // Guardar los elementos en localStorage
        this.guardarElementosEnLocalStorage();

        const elementosHTML = Object.entries(this.elementos)
            .map(([elemento, { descripcion }]) => `${elemento}: ${descripcion}`)
            .join("<br>");

        document.getElementById('resultado').innerHTML = `
            <br>Te recordamos los elementos que contiene<br><br>
            ${elementosHTML}<br><br>
            El valor total se calculará después de contactarte.
        `;

        alert("Perfecto, nos estaremos poniendo en contacto para confirmarte disponibilidad y precio");
    }

    // GUARDAR LOS ELEMENTOS EN EL LOCALSTORAGE COMO JSON
    guardarElementosEnLocalStorage() {
        localStorage.setItem("elementos", JSON.stringify(this.elementos));
    }

    // CARGAR LOS ELEMENTOS DESDE EL STORAGE
    cargarElementosDesdeLocalStorage() {
        const elementosJSON = localStorage.getItem("elementos");
        if (elementosJSON) {
            this.elementos = JSON.parse(elementosJSON);
        }
    }
}

// FUNCIONES SECUNDARIAS
document.addEventListener('DOMContentLoaded', () => {
    const pedido = new Pedido();
});
