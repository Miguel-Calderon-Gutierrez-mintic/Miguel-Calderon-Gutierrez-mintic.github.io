function Agregar() {
    console.log("Agregar");

    var datos = {
        id: $("#mi_ID").val(),
        target: $("#mi_TARGET").val(),
        capacity: $("#mi_CAPACITY").val(),
        category_id: $("#mi_CATEGORY_ID").val(),
        name: $("#mi_NAME").val(),
    };

    $.ajax({
        dataType: "json",
        url: "https://g1b3f1809d5e702-dblibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        data: datos,
        type: "POST",
    });

    limpiarCampos1();
}

function BorrarId(Numid) {
    var datos = {
        id: Numid,
    };

    var datos_A_Enviar = JSON.stringify(datos);

    $.ajax({
        dataType: "json",
        url: "https://g1b3f1809d5e702-dblibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        data: datos_A_Enviar,
        contentType: "application/json",
        type: "DELETE",
    });
    consultar();
    limpiarCampos1();
}

function Borrar() {
    console.log("Borrar");

    var datos = {
        id: $("#mi_ID").val(),
    };

    var datos_A_Enviar = JSON.stringify(datos);

    $.ajax({
        dataType: "json",
        url: "https://g1b3f1809d5e702-dblibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        data: datos_A_Enviar,
        contentType: "application/json",
        type: "DELETE",
    });
    limpiarCampos1();
}

function Actualizar() {
    console.log("Actualizar");

    var datos = {
        id: $("#mi_ID").val(),
        target: $("#mi_TARGET").val(),
        capacity: $("#mi_CAPACITY").val(),
        category_id: $("#mi_CATEGORY_ID").val(),
        name: $("#mi_NAME").val(),
    };

    var datos_A_Enviar = JSON.stringify(datos);

    $.ajax({
        dataType: "json",
        url: "https://g1b3f1809d5e702-dblibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        data: datos_A_Enviar,
        contentType: "application/json",
        type: "PUT",
    });
    limpiarCampos1();
}

function consultar() {
    $.ajax({
        url: "https://g1b3f1809d5e702-dblibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type: "GET",
        dataType: "json",
        complete: function(xhr, status) {},
        success: function(json) {
            if (json.items.length > 0) {
                $("#Tabla_Cubiculos").empty();
                tabla =
                    "<table  border='1'><tr><th>Id<th>Target<th>Capacidad<th>Categoria<th>Nombre";
                filas = "";
                for (i = 0; i < json.items.length; i++) {
                    filas += "<tr>";
                    filas += "<td>" + json.items[i].id;
                    filas += "<td>" + json.items[i].target;
                    filas += "<td>" + json.items[i].capacity;
                    filas += "<td>" + json.items[i].category_id;
                    filas += "<td>" + json.items[i].name;
                    filas +=
                        '<td><button onclick="BorrarId(' +
                        json.items[i].id +
                        ')">Borrar</button></td>';
                    filas += "</td>";
                }
                $("#Tabla_Cubiculos").append(tabla + filas);

                $("#Tabla_resultados").append("</tr>");

                setTimeout(function() {
                    $("#Tabla_Cubiculos").empty();
                }, 5000);
            } else {
                alert("No hay nada por mostrar");
            }
        },
    });
}

function consultarPorId() {
    var id = $("#mi_ID").val();
    $.ajax({
        url: "https://g1b3f1809d5e702-dblibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type: "GET",
        dataType: "json",
        complete: function(xhr, status) {},
        success: function(json) {
            con = 0;
            if (json.items.length > 0) {
                for (i = 0; i < json.items.length; i++) {
                    if (id == json.items[i].id) {
                        con = 1;
                        $("#Tabla_Cubiculos").empty();
                        tabla =
                            "<table  border='1'><tr><th>Id<th>Target<th>Capacidad<th>Categoria<th>Nombre";
                        filas = "";
                        filas += "<tr>";
                        filas += "<td>" + json.items[i].id;
                        filas += "<td>" + json.items[i].target;
                        filas += "<td>" + json.items[i].capacity;
                        filas += "<td>" + json.items[i].category_id;
                        filas += "<td>" + json.items[i].name;
                        filas +=
                            '<td><button onclick="BorrarId(' +
                            json.items[i].id +
                            ')">Borrar</button></td>';
                        filas += "</td>";
                        $("#Tabla_Cubiculos").append(tabla + filas);
                        $("#Tabla_resultados").append("</tr>");
                    }
                }
                setTimeout(function() {
                    $("#Tabla_Cubiculos").empty();
                }, 40000);
            }

            if (con == 0) {
                alert("No hay nada por mostrar");
            }
        },
    });
    limpiarCampos1();
}

function limpiarCampos1() {
    var campo = $("#mi_ID");
    campo.val("");
    campo = $("#mi_TARGET");
    campo.val("");
    campo = $("#mi_CAPACITY");
    campo.val("");
    campo = $("#mi_CATEGORY_ID");
    campo.val("");
    campo = $("#mi_NAME");
    campo.val("");
}

//-- -- -- -- -- -- -- -- CLIENTE -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
function Agregar2() {
    console.log("Agregar");

    var datos = {
        id: $("#ID_client").val(),
        name: $("#Name_client").val(),
        email: $("#Email_client").val(),
        age: $("#age_client").val()
    };

    $.ajax({
        dataType: "json",
        url: "https://g1b3f1809d5e702-dbreto2.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        data: datos,
        type: "POST",
    });

    limpiarCampos2();
}

function BorrarId(Numid) {
    var datos = {
        id: Numid,
    };

    var datos_A_Enviar = JSON.stringify(datos);

    $.ajax({
        dataType: "json",
        url: "https://g1b3f1809d5e702-dbreto2.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        data: datos_A_Enviar,
        contentType: "application/json",
        type: "DELETE",
    });
    consultar();
    limpiarCampos1();
}

function Borrar() {
    console.log("Borrar");

    var datos = {
        id: $("#mi_ID").val(),
    };

    var datos_A_Enviar = JSON.stringify(datos);

    $.ajax({
        dataType: "json",
        url: "https://g1b3f1809d5e702-dblibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        data: datos_A_Enviar,
        contentType: "application/json",
        type: "DELETE",
    });
    limpiarCampos1();
}

function Actualizar() {
    console.log("Actualizar");

    var datos = {
        id: $("#mi_ID").val(),
        target: $("#mi_TARGET").val(),
        capacity: $("#mi_CAPACITY").val(),
        category_id: $("#mi_CATEGORY_ID").val(),
        name: $("#mi_NAME").val(),
    };

    var datos_A_Enviar = JSON.stringify(datos);

    $.ajax({
        dataType: "json",
        url: "https://g1b3f1809d5e702-dblibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        data: datos_A_Enviar,
        contentType: "application/json",
        type: "PUT",
    });
    limpiarCampos1();
}

function consultar2() {
    $.ajax({
        url: "https://g1b3f1809d5e702-dblibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type: "GET",
        dataType: "json",
        complete: function(xhr, status) {},
        success: function(json) {
            if (json.items.length > 0) {
                $("#Tabla_Cubiculos").empty();
                tabla =
                    "<table  border='1'><tr><th>Id<th>Target<th>Capacidad<th>Categoria<th>Nombre";
                filas = "";
                for (i = 0; i < json.items.length; i++) {
                    filas += "<tr>";
                    filas += "<td>" + json.items[i].id;
                    filas += "<td>" + json.items[i].target;
                    filas += "<td>" + json.items[i].capacity;
                    filas += "<td>" + json.items[i].category_id;
                    filas += "<td>" + json.items[i].name;
                    filas +=
                        '<td><button onclick="BorrarId(' +
                        json.items[i].id +
                        ')">Borrar</button></td>';
                    filas += "</td>";
                }
                $("#Tabla_Cubiculos").append(tabla + filas);

                $("#Tabla_resultados").append("</tr>");

                setTimeout(function() {
                    $("#Tabla_Cubiculos").empty();
                }, 5000);
            } else {
                alert("No hay nada por mostrar");
            }
        },
    });
}

function consultarPorId2() {
    var id = $("#mi_ID").val();
    $.ajax({
        url: "https://g1b3f1809d5e702-dblibrary.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library",
        type: "GET",
        dataType: "json",
        complete: function(xhr, status) {},
        success: function(json) {
            con = 0;
            if (json.items.length > 0) {
                for (i = 0; i < json.items.length; i++) {
                    if (id == json.items[i].id) {
                        con = 1;
                        $("#Tabla_Cubiculos").empty();
                        tabla =
                            "<table  border='1'><tr><th>Id<th>Target<th>Capacidad<th>Categoria<th>Nombre";
                        filas = "";
                        filas += "<tr>";
                        filas += "<td>" + json.items[i].id;
                        filas += "<td>" + json.items[i].target;
                        filas += "<td>" + json.items[i].capacity;
                        filas += "<td>" + json.items[i].category_id;
                        filas += "<td>" + json.items[i].name;
                        filas +=
                            '<td><button onclick="BorrarId(' +
                            json.items[i].id +
                            ')">Borrar</button></td>';
                        filas += "</td>";
                        $("#Tabla_Cubiculos").append(tabla + filas);
                        $("#Tabla_resultados").append("</tr>");
                    }
                }
                setTimeout(function() {
                    $("#Tabla_Cubiculos").empty();
                }, 40000);
            }

            if (con == 0) {
                alert("No hay nada por mostrar");
            }
        },
    });
    limpiarCampos2();
}

function limpiarCampos2() {
    var campo = $("#ID_client");
    campo.val("");
    campo = $("#Name_client");
    campo.val("");
    campo = $("#Email_client");
    campo.val("");
    campo = $("#age_client");
    campo.val("");
}