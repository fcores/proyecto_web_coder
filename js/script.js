//JS REFERENCIADO EN EL HTML presupuesto.html

//FUNCIONES SECUNDARIAS
function relevarTipoDePedido(){
    alert("Por favor selecciona el tipo de presupuesto que necesitas")
    let tipo = prompt("1 para PC de escritorio / 2 para PC a medida / 3 para PC Gamer ")
    return tipo
}

function calcularTotal(motherboard_precio,placa_precio,fuente_precio,gabinete_precio,procesador_precio,memoria_precio,cooler_precio,windows_precio,teclado_precio,mouse_precio,monitor_precio,auriculares_precio){
    let total = motherboard_precio+placa_precio+fuente_precio+gabinete_precio+procesador_precio+memoria_precio+cooler_precio+windows_precio+teclado_precio+mouse_precio+monitor_precio+auriculares_precio
    return total
}


//FUNCION PRINCIPAL
function levantarPedido(){
    let tipo_ingresado
    do{
            let motherboard_descripcion
            let motherboard_precio
            let placa_descripcion
            let placa_precio
            let fuente_descripcion
            let fuente_precio
            let gabinete_descripcion
            let gabinete_precio
            let procesador_descripcion
            let procesador_precio
            let memoria_descripcion
            let memoria_precio
            let cooler_descripcion
            let cooler_precio
            let windows_descripcion
            let windows_precio
            let teclado_descripcion
            let teclado_precio
            let mouse_descripcion
            let mouse_precio
            let monitor_descripcion
            let monitor_precio
            let auriculares_descripcion
            let auriculares_precio
            let presupuesto
            tipo_ingresado = relevarTipoDePedido()

            console.log(tipo_ingresado);


            switch(tipo_ingresado){
                
                case "1":
                    alert(`Seleccionaste el tipo de presupuesto de PC de escritorio`)
                    motherboard_descripcion = "MOTHERBOARD 1700 12°GEN ASUS"
                    motherboard_precio = 150000
                    placa_descripcion = "PLACA DE VIDEO GEFORCE RTX 1070 TI 8G"
                    placa_precio = 120000
                    fuente_descripcion = "FUENTE MASTER 700W"
                    fuente_precio = 60000
                    gabinete_descripcion ="GABINETE TOWER THERMALTAKE S300"
                    gabinete_precio = 80000
                    procesador_descripcion = "PROCESADOR INTEL CORE I3 12700K 5.0 GHZ"
                    procesador_precio = 140000
                    memoria_descripcion = "MEMORIA RAM DDR4 - 8GB 3200"
                    memoria_precio = 25000
                    cooler_descripcion = "COOLER-MASTER-MASTERFAN-MF120-S3"
                    cooler_precio = 10000
                    windows_descripcion = "WINDOWS 10 PRO"
                    windows_precio = 80000
                    teclado_descripcion = "TECLADO LOGITECH V3"
                    teclado_precio = 15000
                    mouse_descripcion = "MOUSE LOGITECH V3"
                    mouse_precio = 15000
                    monitor_descripcion = "MONITOR DELL 27"
                    monitor_precio = 100000
                    auriculares_descripcion = "AURICULARES JBL"
                    auriculares_precio = 5000

                    presupuesto = calcularTotal(motherboard_precio,placa_precio,fuente_precio,gabinete_precio,procesador_precio,memoria_precio,cooler_precio,windows_precio,teclado_precio,mouse_precio,monitor_precio,auriculares_precio)
                    
                    alert(`Te recordamos los elementos que contiene\n
                    Mother: ${motherboard_descripcion}\n
                    Placa: ${placa_descripcion}\n
                    Fuente: ${fuente_descripcion}\n
                    Gabinete: ${gabinete_descripcion}\n
                    Procesador: ${procesador_descripcion}\n
                    Memoria: ${memoria_descripcion}\n
                    Cooler: ${cooler_descripcion}\n
                    Sistema Operativo: ${windows_descripcion}\n
                    Teclado: ${teclado_descripcion}\n
                    Mouse: ${mouse_descripcion}\n
                    Monitor: ${monitor_descripcion}\n
                    Auriculares: ${auriculares_descripcion}\n
                    `)


                    alert(`El valor de la PC de escritorio es de ${presupuesto}`)
                    
                    break

                case "2":
                    alert(`Seleccionaste el tipo de presupuesto de PC de Gamer`)
                    motherboard_descripcion = "MOTHERBOARD 1700 12°GEN ASUS"
                    motherboard_precio = 150000
                    placa_descripcion = "PLACA DE VIDEO GEFORCE RTX 3070 TI 8G"
                    placa_precio = 300000
                    fuente_descripcion = "FUENTE MASTER 1050W"
                    fuente_precio = 80000
                    gabinete_descripcion ="GABINETE TOWER THERMALTAKE S300"
                    gabinete_precio = 80000
                    procesador_descripcion = "PROCESADOR INTEL CORE I7 12700K 5.0 GHZ"
                    procesador_precio = 250000
                    memoria_descripcion = "MEMORIA RAM DDR4 - 16GB 3200"
                    memoria_precio = 50000
                    cooler_descripcion = "COOLER-MASTER-MASTERFAN-MF120-S3"
                    cooler_precio = 10000
                    windows_descripcion = "WINDOWS 10 PRO"
                    windows_precio = 80000
                    teclado_descripcion = "TECLADO LOGITECH V3"
                    teclado_precio = 15000
                    mouse_descripcion = "MOUSE LOGITECH V3"
                    mouse_precio = 15000
                    monitor_descripcion = "MONITOR DELL 27"
                    monitor_precio = 100000
                    auriculares_descripcion = "AURICULARES JBL"
                    auriculares_precio = 5000

                    presupuesto = calcularTotal(motherboard_precio,placa_precio,fuente_precio,gabinete_precio,procesador_precio,memoria_precio,cooler_precio,windows_precio,teclado_precio,mouse_precio,monitor_precio,auriculares_precio)
                    
                    alert(`Te recordamos los elementos que contiene\n
                    Mother: ${motherboard_descripcion}\n
                    Placa: ${placa_descripcion}\n
                    Fuente: ${fuente_descripcion}\n
                    Gabinete: ${gabinete_descripcion}\n
                    Procesador: ${procesador_descripcion}\n
                    Memoria: ${memoria_descripcion}\n
                    Cooler: ${cooler_descripcion}\n
                    Sistema Operativo: ${windows_descripcion}\n
                    Teclado: ${teclado_descripcion}\n
                    Mouse: ${mouse_descripcion}\n
                    Monitor: ${monitor_descripcion}\n
                    Auriculares: ${auriculares_descripcion}\n
                    `)


                    alert(`El valor de la PC Gamer es de ${presupuesto}`)

                    break


                case "3":
                    alert(`Seleccionaste el tipo de presupuesto a medida. Detalla cada uno de los elementos que necesitas`)
                    motherboard_descripcion = prompt("Por favor ingresa el mother")
                    motherboard_precio = 0
                    placa_descripcion = prompt("Por favor ingresa la placa")
                    placa_precio = 0
                    fuente_descripcion = prompt("Por favor ingresa la fuente")
                    fuente_precio = 0
                    gabinete_descripcion =prompt("Por favor ingresa el gabinete")
                    gabinete_precio = 0
                    procesador_descripcion = prompt("Por favor ingresa el procesador")
                    procesador_precio = 0
                    memoria_descripcion = prompt("Por favor ingresa la memoria")
                    memoria_precio = 0
                    cooler_descripcion = prompt("Por favor ingresa el cooler")
                    cooler_precio = 0
                    windows_descripcion = prompt("Por favor ingresa el sistema operativo")
                    windows_precio = 0
                    teclado_descripcion = prompt("Por favor ingresa el teclado")
                    teclado_precio = 0
                    mouse_descripcion = prompt("Por favor ingresa el mouse")
                    mouse_precio = 0
                    monitor_descripcion = prompt("Por favor ingresa el monitor")
                    monitor_precio = 0
                    auriculares_descripcion = prompt("Por favor ingresa los auriculares")
                    auriculares_precio = 0
                    
                    alert(`Ingresaste los siguientes elementos\n
                    Mother: ${motherboard_descripcion}\n
                    Placa: ${placa_descripcion}\n
                    Fuente: ${fuente_descripcion}\n
                    Gabinete: ${gabinete_descripcion}\n
                    Procesador: ${procesador_descripcion}\n
                    Memoria: ${memoria_descripcion}\n
                    Cooler: ${cooler_descripcion}\n
                    Sistema Operativo: ${windows_descripcion}\n
                    Teclado: ${teclado_descripcion}\n
                    Mouse: ${mouse_descripcion}\n
                    Monitor: ${monitor_descripcion}\n
                    Auriculares: ${auriculares_descripcion}\n
                    `)


                    break

                default:
                    alert("Opción inválida. Por favor, selecciona una opción válida.")
                }
            

    }while (tipo_ingresado != "1" && tipo_ingresado != "2" && tipo_ingresado != "3")
    
    alert("Perfecto, nos estaremos poniendo en contacto para confirmarte disponibilidad y precio")
}

levantarPedido()