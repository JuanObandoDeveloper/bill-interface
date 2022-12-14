//Variables
    //variables obtenerDatos();
        const form = document.getElementById("formularioRegistro");
        const Name = document.getElementById("campo_nombre");
        const nit = document.getElementById("campo_nit");
        const owner = document.getElementById("campo_propietario");
        const address = document.getElementById("campo_direccion");
        const phone = document.getElementById("campo_telefono");
        const formSignUp = document.getElementById("contentRegistro");

    //Variables llenando datos
        const formBill = document.getElementById("contentFactura");
        const bussinessName = document.getElementById("bussinessName");
        const ownerName = document.getElementById("ownerName");
        const nitInfo = document.getElementById("nitInfo");
        const phoneAndAddress = document.getElementById("phoneAndAddress");
        const dayValue = document.getElementById("dayValue");
        const monthValue = document.getElementById("monthValue");
        const yearValue = document.getElementById("yearValue");
        const billNumber = document.getElementById("billNumber");
        let number = 123;
        const clientCC = document.getElementById("campo_cliente_cc");
        const clientName = document.getElementById("campo_cliente");
        const clientAddress = document.getElementById("campo_cliente_direccion");
        const clientPhone = document.getElementById("campo_cliente_phone");

    //Variables calcNeto();
        const totalBill = document.getElementById("totalBill");

    //Variables editarDatos();
        const editorFormPersonas = document.getElementById("editorFormPersonas");
        const editorModalPersonas = new bootstrap.Modal(document.getElementById("editorModalPersonas"), {backdrop:"static", keyboard:false});
        const editDocument = document.getElementById("editDocument");
        const editName = document.getElementById("editName");
        const editAddress = document.getElementById("editAddress");
        const editPhone = document.getElementById("editPhone");
        var doc = 0;
        var nombre = 0;
        var add = 0;
        var tel = 0;

    //Variables editarProducto();
        const editorFormProductos = document.getElementById("editorFormProductos");
        const editorModalProducto = new bootstrap.Modal(document.getElementById("editorModalProducto"), {backdrop:"static", keyboard:false});
        const editCode = document.getElementById("editCode");
        const editDescription = document.getElementById("editDescription");
        const editPrice = document.getElementById("editPrice");
        const editCantidad = document.getElementById("editCantidad");
        var code = 0;
        var desc = 0;
        var price = 0;
        var cant = 0; 

    //Variables addCliente();
        const contenidoClientes = document.getElementById("contenidoClientes");
        const addClienteModal = new bootstrap.Modal(document.getElementById("addClienteModal"), {backdrop:"static", keyboard:false});
        const formAddCliente = document.getElementById("formAddCliente");
        const addDocumentCliente = document.getElementById("addDocumentCliente");
        const addNameCliente = document.getElementById("addNameCliente");
        const addAddressCliente = document.getElementById("addAddressCliente");
        const addPhoneCliente = document.getElementById("addPhoneCliente");
        var documento = 0;
        var nombre = 0;
        var direccion = 0;
        var telefono = 0;
 
    //Variables addEmpleado();
        const addEmpleadoModal = new bootstrap.Modal(document.getElementById("addEmpleadoModal"), {backdrop:"static", keyboard:false});
        const contenidoEmpleados = document.getElementById("contenidoEmpleados");
        const formAddEmpleado = document.getElementById("formAddEmpleado");
        const addDocumentEmpleado = document.getElementById("addDocumentEmpleado");
        const addNameEmpleado = document.getElementById("addNameEmpleado");
        const addAddressEmpleado = document.getElementById("addAddressEmpleado");
        const addPhoneEmpleado = document.getElementById("addPhoneEmpleado");

    //Variables addProducto();
        const addProductoModal = new bootstrap.Modal(document.getElementById("addProductoModal"), {backdrop:"static", keyboard:false});        
        const contenidoProductos = document.getElementById("contenidoProductos");
        const formAddProducto = document.getElementById("formAddProducto");
        const addCode = document.getElementById("addCode");
        const addDescription = document.getElementById("addDescription");
        const addPrice = document.getElementById("addPrice");
        const addCantidad = document.getElementById("addCantidad");
        var codigo = 0;
        var descripcion = 0;
        var precio = 0;
        var cantidad = 0;

//Funciones
    const obtenerDatos = () =>{
        //Creacion objeto fecha
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth();
        let year = today.getFullYear();

        //Eliminacion y Adicion de formularios
        formSignUp.setAttribute("style", "display: none;");
        formBill.setAttribute("style", "display: block;");

        //Transferencia de datos y limpieza
        bussinessName.innerText = Name.value;
        Name.value = "";
        ownerName.innerText = owner.value;
        owner.value = "";
        nitInfo.innerText = `NIT: ${nit.value} Regimén Simplificado`;
        nit.value = "";
        phoneAndAddress.innerText = 
        `
        Tel: ${phone.value}
        ${address.value}
        `;
        phone.value = "";
        address.value = "";
        dayValue.innerText = day;
        monthValue.innerText = month+1;
        yearValue.innerText = year;
        billNumber.innerText = `N° 0${number}`;
    }
    const obtenerProducto = (code) =>{
        //Creacion de coleccion para productos
        let codigo = document.getElementsByClassName("productCode");

        //Recorrido de coleccion
        for(i = 0; i < codigo.length; i++){

            //comparacion de elemento de coleccion con el codigo ingresado
            if(code.value == codigo[i].innerText){
                let description = codigo[i].nextElementSibling;
                let price = description.nextElementSibling;
                code.parentElement.nextElementSibling.nextElementSibling.innerText = price.innerText;
                code.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerText = description.innerText;
                break;
            }else{
                code.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerText = "";
                code.parentElement.nextElementSibling.nextElementSibling.innerText = "";
            }
        }
    }
    const calcTotal = (cant) =>{
        //Creacion de coleccion para productos
        let codigo = document.getElementsByClassName("productCode");

        //Recorrido de coleccion
        for(i = 0; i < codigo.length; i++){
            
            //Comparacion de elemento de coleccion con el codigo ingresado
            if(cant.parentElement.previousElementSibling.firstChild.value == codigo[i].innerText){
                let description = codigo[i].nextElementSibling;
                let price = description.nextElementSibling;
                let cantidad = price.nextElementSibling;

                //Definicion de limite en los productos respecto a lo solicitado con los existentes
                if(parseInt(cant.value) <= parseInt(cantidad.innerText) || cant.value == ""){
                    cant.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerText = cant.value*price.innerText;
                    calcNeto();
                    break;
                }else{
                    alert(`La cantidad deseada no esta disponible
                    limite: ${cantidad.innerText}`);
                    cant.value = "";
                    cant.focus();
                    break;
                }
            }
        }
    }
    const calcNeto = () =>{
        //Limpieza de valores para cada ejecucion de la funcion
        totalBill.value = "";
        let valor = 0;

        //Creacion de coleccion de totales
        let totales = document.getElementsByClassName("total");
        
        //Recorrido de coleccion y almacenamiento de sus valores y entrega de los mismos en el total neto
        for(i = 0; i < totales.length; i++){
            valor += parseInt(totales[i].innerText);
        }
        totalBill.value = `$${valor}`;
    }
    const editarDatos = (boton) => {
        //obtencion de los tds y almacenamiento de los valores de los mismos
        let rowSons = boton.parentElement.parentElement.children;
        doc = rowSons[1].innerText;
        nombre = rowSons[2].innerText;
        add = rowSons[3].innerText;
        tel = rowSons[4].innerText;
        editDocument.value = doc;
        editName.value = nombre;
        editAddress.value = add;
        editPhone.value = tel;

        //aparicion del modal 
        editorModalPersonas.show();
        editName.focus();
    }
    const editarPersona = () =>{
        //obtencion de datos del formulario del modal
        doc = editDocument.value;
        nombre = editName.value;
        add = editAddress.value;
        tel = editPhone.value;

        //creacion de colecciones de documentos de clientes y empleados
        let columnDocumentClient = document.getElementsByClassName("documentoCliente");
        let columnDocumentEmployee = document.getElementsByClassName("documentoEmpleado");

        //recorrido de coleccion de clientes y entrega de datos segun su documento
        for(i = 0; i < columnDocumentClient.length; i++){
            if(columnDocumentClient[i].innerText == doc){
                let tr = columnDocumentClient[i].parentElement.children;
                tr[2].innerText = nombre;
                tr[3].innerText = add;
                tr[4].innerText = tel;
                break;
            }
        }

        //recorrido de coleccion de empleados y entrega de datos segun su documento
        for(i = 0; i < columnDocumentEmployee.length; i++){
            if(columnDocumentEmployee[i].innerText == doc){
                let tr = columnDocumentEmployee[i].parentElement.children;
                tr[2].innerText = nombre;
                tr[3].innerText = add;
                tr[4].innerText = tel;
                break;
            }
        }

        //cierre del modal
        editorModalPersonas.hide();
    }
    const editarProducto = (boton) => {
        //obtencion de los tds y almacenamiento de los valores de los mismos
        let rowSons = boton.parentElement.parentElement.children;
        code = rowSons[1].innerText;
        desc = rowSons[2].innerText;
        price = rowSons[3].innerText;
        cant = rowSons[4].innerText;
        editCode.value = code;
        editDescription.value = desc;
        editPrice.value = price;
        editCantidad.value = cant;

        //aparicion del modal
        editorModalProducto.show();
        editDescription.focus();
    }
    const editarDatosProducto = () =>{
        //obtencion de datos del modal
        code = editCode.value;
        desc = editDescription.value;
        price = editPrice.value;
        cant = editCantidad.value;
        
        //creacion de coleccion de codigos de productos
        let columnCode = document.getElementsByClassName("productCode");

        //recorrido de coleccion de productos y entrega de datos segun su codigo
        for(i = 0; i < columnCode.length; i++){
            if(columnCode[i].innerText == code){
                let tr = columnCode[i].parentElement.children;
                tr[2].innerText = desc;
                tr[3].innerText = price;
                tr[4].innerText = cant;
                break;
            }
        }

        //cierre del modal
        editorModalProducto.hide();
    }
    const eliminarFila = (boton) =>{
        //localizacion de todas las filas
        let allRows = boton.parentElement.parentElement.parentElement.children;

        //localizacion y eliminacion de la fila seleccionada para eliminacion
        let row = boton.parentElement.parentElement;
        row.parentElement.removeChild(row);

        //recorrido de todas las filas para reorganizacion de indices
        for(i = 0; allRows.length; i++){
            allRows[i].firstElementChild.innerText = i+1;
        }
    }
    const addCliente = () =>{
        //aparicion del modal
        addClienteModal.show();
    }
    const addClienteTable = () =>{
        //creacion de colecciones de documentos de clientes y empleados
        let documentosClientes = document.getElementsByClassName("documentoCliente");
        let documentosEmpleados = document.getElementsByClassName("documentoEmpleado");

        //validantes de repeticion de documentos
        let clienteRepetido = false;
        let empleadoRepetido = false;

        //recorrido de coleccion clientes y validacion de repeticiones
        for(i = 0; i < documentosClientes.length; i++){
            if(addDocumentCliente.value == documentosClientes[i].innerText){
                clienteRepetido = true;
                alert("el documento que intenta registrar ya existe como cliente");
                break;
            }else{
                clienteRepetido = false;
            }
        }

        //recorrido de coleccion de empleados y validacion de repeticiones
        for(i = 0; i < documentosEmpleados.length; i++){
            if(addDocumentCliente.value == documentosEmpleados[i].innerText){
                empleadoRepetido = true;
                alert("el documento que intenta ingresar ya existe como empleado");
                break;
            }else{
                empleadoRepetido = false;
            }
        }

        //confirmacion de validantes para anexar nuevo cliente
        if(clienteRepetido == false && empleadoRepetido == false){
            //obtencion de datos del formulario del modal
            documento = addDocumentCliente.value;
            nombre = addNameCliente.value;
            direccion = addAddressCliente.value;
            telefono = addPhoneCliente.value;

            //creacion de la nueva fila y adicion de la misma a la tabla
            let newTr = `
                <tr>
                    <td></td>
                    <td class="documentoCliente">${documento}</td>
                    <td>${nombre}</td>
                    <td>${direccion}</td>
                    <td>${telefono}</td>
                    <td>
                        <button class="btn btn-info py-0 px-2" onclick="editarDatos(this);" ><b><i class="fas fa-edit"></i></b></button>
                        <button class="btn btn-danger py-0 px-2" onclick="eliminarFila(this);" > <b>X</b> </button>
                    </td>
                </tr>
            `;
            contenidoClientes.innerHTML += newTr;

            //limpieza del formulario del modal
            addDocumentCliente.value = "";
            addNameCliente.value = "";
            addAddressCliente.value = "";
            addPhoneCliente.value = "";

            //cierre del modal
            addClienteModal.hide();

            //localizacion de todas las filas de la tabla 
            let filas = contenidoClientes.children;

            //reorganizacion de indices de la tabla clientes
            for(j = 0; j < filas.length; j++){
                filas[j].firstElementChild.innerText = j+1;
            }
        }
    }
    const addEmpleado = () =>{        
        //aparicion del modal
        addEmpleadoModal.show();
    }
    const addEmpleadoTable = () =>{ 
        //creacion de colecciones de documentos de clientes y empleados
        let documentosClientes = document.getElementsByClassName("documentoCliente");
        let documentosEmpleados = document.getElementsByClassName("documentoEmpleado");

        //validantes de repeticiones
        let clienteRepetido = false;
        let empleadoRepetido = false;
        
        //recorrido de coleccion de clientes y validacion de repeticiones
        for(i = 0; i < documentosClientes.length; i++){
            if(addDocumentEmpleado.value == documentosClientes[i].innerText){
                clienteRepetido = true;
                alert("el documento que intenta registrar ya existe como cliente");
                break;
            }else{
                clienteRepetido = false;
            }
        }

        //recorrido de coleccion de empleados y validacion de repeticiones
        for(i = 0; i < documentosEmpleados.length; i++){
            if(addDocumentEmpleado.value == documentosEmpleados[i].innerText){
                empleadoRepetido = true;
                alert("el documento que intenta ingresar ya existe como empleado");
                break;
            }else{
                empleadoRepetido = false;
            }
        }

        //confirmacion de validantes para anexar nuevo empleado
        if(clienteRepetido == false && empleadoRepetido == false){
            //obtencion de datos del formulario
            documento = addDocumentEmpleado.value;
            nombre = addNameEmpleado.value;
            direccion = addAddressEmpleado.value;
            telefono = addPhoneEmpleado.value;

            //creacion de la nueva fila y anexo de la misma en la tabla empleados
            let newTr = `
                <tr>
                    <td></td>
                    <td class="documentoEmpleado">${documento}</td>
                    <td>${nombre}</td>
                    <td>${direccion}</td>
                    <td>${telefono}</td>
                    <td>
                        <button class="btn btn-info py-0 px-2" onclick="editarDatos(this);" ><b><i class="fas fa-edit"></i></b></button>
                        <button class="btn btn-danger py-0 px-2" onclick="eliminarFila(this);" > <b>X</b> </button>
                    </td>
                </tr>
            `;
            contenidoEmpleados.innerHTML += newTr;

            //limpieza del formulario del modal
            addDocumentEmpleado.value = "";
            addNameEmpleado.value = "";
            addAddressEmpleado.value = "";
            addPhoneEmpleado.value = "";

            //cierre del modal
            addEmpleadoModal.hide();

            //localizacion de todas las filas de la tabla de empleados
            let filas = contenidoEmpleados.children;

            //organizacion de indices para la tabla de empleados
            for(j = 0; j < filas.length; j++){
                filas[j].firstElementChild.innerText = j+1;
            }
        }
    }
    const addProducto = () =>{
        //aparicion del modal
        addProductoModal.show();        
    }
    const addProductoTable = () =>{
        //obtencion de datos del formulario
        codigo = addCode.value;
        descripcion = addDescription.value;
        precio = addPrice.value;
        cantidad = addCantidad.value;

        //creacion de la nueva fila y anexo de la misma a la tabla de productos
        let newTr = `
            <tr>
                <td></td>
                <td class="productCode">${codigo}</td>
                <td>${descripcion}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>
                    <button class="btn btn-info py-0 px-2" onclick="editarDatos(this);" ><b><i class="fas fa-edit"></i></b></button>
                    <button class="btn btn-danger py-0 px-2" onclick="eliminarFila(this);" > <b>X</b> </button>
                </td>
            </tr>
        `;
        contenidoProductos.innerHTML += newTr;

        //cierre del modal
        addProductoModal.hide();

        //localizacion de todas las filas de la tabla productos
        let filas = contenidoProductos.children;

        //reorganizacion de los indices de la tabla productos
        for(i = 0; i < filas.length; i++){
            filas[i].firstElementChild.innerText = i+1;
        }
    }

//Eventos
    editorFormPersonas.addEventListener("submit", (ev)=>{
        ev.preventDefault();
        editarPersona();
    });
    editorFormProductos.addEventListener("submit", (ev)=>{
        ev.preventDefault();
        editarDatosProducto();
    });
    formAddCliente.addEventListener("submit", (ev)=>{
        ev.preventDefault();
        addClienteTable();
    });
    formAddEmpleado.addEventListener("submit", (ev)=>{
        ev.preventDefault();
        addEmpleadoTable();
    });
    formAddProducto.addEventListener("submit", (ev)=>{
        ev.preventDefault();
        addProductoTable();
    });
    form.addEventListener("submit", (ev)=>{
        ev.preventDefault();
    });
    clientCC.addEventListener("keyup", ()=>{
        //Creacion de coleccion para clientes
        let cc = document.getElementsByClassName("documentoCliente");

        //Recorrido de coleccion
        for(i = 0; i < cc.length; i++){

            //Comparacion del elemento de la coleccion con el codigo de cliente solicitado
            if(clientCC.value == cc[i].innerText){
                let name = cc[i].nextElementSibling;
                let address = name.nextElementSibling;
                let phone = address.nextElementSibling;
                clientName.value = name.innerText;
                clientAddress.value = address.innerText;
                clientPhone.value = phone.innerText;
                break;
            }else{
                clientName.value = "";
                clientAddress.value = "";
                clientPhone.value = "";
            }
        }
    });