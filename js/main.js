
var $resultado_cursos_reciente = $("#resultado_cursos_reciente");
var $num_cursos_nab_reciente = $("#num_cursos_nab_reciente");
var $num_cursos_invitado_reciente = $("#num_cursos_invitado_reciente");

var $resultado_cursos_desarrollo = $("#resultado_cursos_desarrollo");
var $num_cursos_nab_desarrollo = $("#num_cursos_nab_desarrollo");
var $num_cursos_invitado_desarrollo=$("#num_cursos_invitado_desarrollo");

var $resultado_cursos_consolidado = $("#resultado_cursos_consolidado");
var $num_cursos_nab_consolidado = $("#num_cursos_nab_consolidado");
var $num_cursos_invitado_consolidado=$("#num_cursos_invitado_consolidado");

var $factor_1 = $("#factor_1");

$(document).tooltip();

function ffactor_1() {
    var a=0;
    var b=0;
    var c=0;

    if($resultado_cursos_reciente.val() === "") {
        a=0;
    } else {
        a=parseInt($resultado_cursos_reciente.val());
    }

    if($resultado_cursos_desarrollo.val() === "") {
        b=0;
    } else {
        b=parseInt($resultado_cursos_desarrollo.val());
    }

    if($resultado_cursos_consolidado.val() === "") {
        c=0;
    } else {
        c=parseInt($resultado_cursos_consolidado.val());
    }

    return a + b + c;
}


$(".radioBtn").on("click", function () {
    switch($("input[name=reciente]:checked").val()) {
        case "1" :
            $num_cursos_invitado_reciente.val("");
            $num_cursos_invitado_reciente.attr("disabled", true);
            $resultado_cursos_reciente.val("");
            $num_cursos_nab_reciente.attr("disabled", false);
            $factor_1.val(ffactor_1());
            break;
        case "2" :
            $num_cursos_nab_reciente.val("");
            $num_cursos_nab_reciente.attr("disabled", true);
            $resultado_cursos_reciente.val("");
            $num_cursos_invitado_reciente.attr("disabled", false);
            $factor_1.val(ffactor_1());
            break;
        case "0":
            $num_cursos_nab_reciente.val("");
            $num_cursos_invitado_reciente.val("");
            $resultado_cursos_reciente.val("");
            $num_cursos_nab_reciente.attr("disabled", true);
            $num_cursos_invitado_reciente.attr("disabled", true);
            $factor_1.val(ffactor_1());
    }
});

$num_cursos_nab_reciente.on("click", function () {
    $resultado_cursos_reciente.val(parseInt($num_cursos_nab_reciente.val()) * 25);
    $factor_1.val(ffactor_1());
});

$num_cursos_invitado_reciente.on("click", function () {
    $resultado_cursos_reciente.val(parseInt($num_cursos_invitado_reciente.val()) * 20);
    $factor_1.val(ffactor_1());
});

//En desarrollo

$(".radioBtnD").on("click", function () {
    switch($("input[name=desarrollo]:checked").val()) {
        case "1" :
            $num_cursos_invitado_desarrollo.val("");
            $num_cursos_invitado_desarrollo.attr("disabled", true);
            $resultado_cursos_desarrollo.val("");
            $num_cursos_nab_desarrollo.attr("disabled", false);
            $factor_1.val(ffactor_1());
            break;
        case "2" :
            $num_cursos_nab_desarrollo.val("");
            $num_cursos_nab_desarrollo.attr("disabled", true);
            $resultado_cursos_desarrollo.val("");
            $num_cursos_invitado_desarrollo.attr("disabled", false);
            $factor_1.val(ffactor_1());
            break;
        case "0":
            $num_cursos_nab_desarrollo.val("");
            $num_cursos_invitado_desarrollo.val("");
            $resultado_cursos_desarrollo.val("");
            $num_cursos_nab_desarrollo.attr("disabled", true);
            $num_cursos_invitado_desarrollo.attr("disabled", true);
            $factor_1.val(ffactor_1());
    }
});

$num_cursos_nab_desarrollo.on("click", function () {
    $resultado_cursos_desarrollo.val(parseInt($num_cursos_nab_desarrollo.val()) * 25);
    $factor_1.val(ffactor_1());
});

$num_cursos_invitado_desarrollo.on("click", function () {
    $resultado_cursos_desarrollo.val(parseInt($num_cursos_invitado_desarrollo.val()) * 20);
    $factor_1.val(ffactor_1());
});


//Consolidado
$(".radioBtnC").on("click", function () {
    switch($("input[name=consolidado]:checked").val()) {
        case "1" :
            $num_cursos_invitado_consolidado.val("");
            $num_cursos_invitado_consolidado.attr("disabled", true);
            $resultado_cursos_consolidado.val("");
            $num_cursos_nab_consolidado.attr("disabled", false);
            $factor_1.val(ffactor_1());
            break;
        case "2" :
            $num_cursos_nab_consolidado.val("");
            $num_cursos_nab_consolidado.attr("disabled", true);
            $resultado_cursos_consolidado.val("");
            $num_cursos_invitado_consolidado.attr("disabled", false);
            $factor_1.val(ffactor_1());
            break;
        case "0":
            $num_cursos_nab_consolidado.val("");
            $num_cursos_invitado_consolidado.val("");
            $resultado_cursos_consolidado.val("");
            $num_cursos_nab_consolidado.attr("disabled", true);
            $num_cursos_invitado_consolidado.attr("disabled", true);
            $factor_1.val(ffactor_1());
    }
});

$num_cursos_nab_consolidado.on("click", function () {
    $resultado_cursos_consolidado.val(parseInt($num_cursos_nab_consolidado.val()) * 30);
    $factor_1.val(ffactor_1());
});

$num_cursos_invitado_consolidado.on("click", function () {
    $resultado_cursos_consolidado.val(parseInt($num_cursos_invitado_consolidado.val()) * 25);
    $factor_1.val(ffactor_1());
});


// Tabla 2: Publicaciones =====================================================

var $num_articulos_autor = $("#num_articulos_autor");
var $num_articulos_coautor =  $("#num_articulos_coautor");
var $resultado_autor_principal = $("#resultado_autor_principal");
var $resultado_coautor = $("#resultado_coautor");
var $factor_2 = $("#factor_2");

function ffactor_2(){
    var a = 0;
    var b = 0;

    if ($resultado_autor_principal.val() === "") {
        a = 0;
    } else {
        a = parseInt($resultado_autor_principal.val());
    }

    if ($resultado_coautor.val() === "") {
        b = 0;
    } else {
        b = parseInt($resultado_coautor.val());
    }

    return a + b;
}

$num_articulos_autor.on("click", function () {
    $resultado_autor_principal.val($num_articulos_autor.val() * 50);
    $factor_2.val(ffactor_2());
});

$num_articulos_coautor.on("click", function () {
    $resultado_coautor.val($num_articulos_coautor.val() * 25);
    $factor_2.val(ffactor_2());
});


// Tabla 3: SNI imparten cursos de licenciatura  ==============================

var $num_cursos_candidato_sni = $("#num_cursos_candidato_sni");
var $num_cursos_sni = $("#num_cursos_sni");
var $resultado_cursos_candidato_sni = $("#resultado_cursos_candidato_sni");
var $resultado_cursos_sni = $("#resultado_cursos_sni");
var $factor_3 = $("#factor_3")

function ffactor_3(){
    var a = 0;
    var b = 0;

    if($resultado_cursos_candidato_sni.val() === ""){
        a = 0;
    } else {
        a = parseInt($resultado_cursos_candidato_sni.val());
    }

    if($resultado_cursos_sni.val() === ""){
        b = 0;
    } else {
        b = parseInt($resultado_cursos_sni.val());
    }

    return a + b;
}

$num_cursos_candidato_sni.on("click", function () {
    $resultado_cursos_candidato_sni.val($num_cursos_candidato_sni.val() * 30);
    $factor_3.val(ffactor_3());
});

$num_cursos_sni.on("click", function () {
    $resultado_cursos_sni.val($num_cursos_sni.val() * 40);
    $factor_3.val(ffactor_3());
});



//Tabla 4: CA  ================================================================
var $factor_4 = $("#factor_4");

$(".ptc_en_ca").on("click", function () {
    switch($("input[name=ptc_en_ca]:checked").val()) {
        case "1" :
            $factor_4.val(40);
            break;
        case "2":
            $factor_4.val(50);
            break;
        case "0":
            $factor_4.val(0);
    }
});



// Tabla 5: PTC cursos CIEES  =================================================
var $factor_5 = $("#factor_5");
var $num_cursos_ciees = $("#num_cursos_ciees");
var $resultado_cursos_ciees=$("#resultado_cursos_ciees");

function ffactor_5(){
    var a =0;
    if($resultado_cursos_ciees.val()===""){
        a=0
    } else {
       a = parseInt($resultado_cursos_ciees.val());
    }

    return a
}

$num_cursos_ciees.on("click", function () {
   $resultado_cursos_ciees.val($num_cursos_ciees.val() * 30);
   $factor_5.val(ffactor_5());
});


// Tabla 6: PTC con patentes  =================================================

var $factor_6 = $("#factor_6");
var $num_patentes = $("#num_patentes");
var $num_prototipos = $("#num_prototipos");
var $num_obras = $("#num_obras");
var $resultado_patentes = $("#resultado_patentes");
var $resultado_prototipos = $("#resultado_prototipos");
var $resultado_obras = $("#resultado_obras");

function ffactor_6() {
    var a=0;
    var b=0;
    var c=0;

    if ($resultado_patentes.val() === ""){
        a = 0;
    } else {
        a = parseInt($resultado_patentes.val());
    }


    if ($resultado_prototipos.val() === ""){
        b = 0;
    } else {
        b = parseInt($resultado_prototipos.val());
    }

    if ($resultado_obras.val() === ""){
        c = 0;
    } else {
        c = parseInt($resultado_obras.val());
    }

    return a + b + c;
}

$num_patentes.on("click", function () {
    $resultado_patentes.val($num_patentes.val() * 50);
    $factor_6.val(ffactor_6());
});

$num_prototipos.on("click", function () {
    $resultado_prototipos.val($num_prototipos.val() * 40);
    $factor_6.val(ffactor_6());
});

$num_obras.on("click", function () {
    $resultado_obras.val($num_obras.val() * 25);
    $factor_6.val(ffactor_6());
});


// Tabla 7: PTC cursos lengua extranjera  =====================================

var $factor_7 = $("#factor_7");
var $num_cursos_lengua_extranjera = $("#num_cursos_lengua_extranjera");
var $resultado_cursos_lengua_extranjera=$("#resultado_cursos_lengua_extranjera");

function ffactor_7(){
    var a =0;
    if($resultado_cursos_lengua_extranjera.val()===""){
        a = 0
    } else {
        a = parseInt($resultado_cursos_lengua_extranjera.val());
    }

    return a
}

$num_cursos_lengua_extranjera.on("click", function () {
    $resultado_cursos_lengua_extranjera.val($num_cursos_lengua_extranjera.val() * 30);
    $factor_7.val(ffactor_7());
});


// Tabla 8: PTC cursos acreditacion internacional =============================

var $factor_8 = $("#factor_8");
var $num_cursos_posgrado_int = $("#num_cursos_posgrado_int");
var $resultado_cursos_posgrado_int=$("#resultado_cursos_posgrado_int");

function ffactor_8(){
    var a =0;
    if($resultado_cursos_posgrado_int.val()===""){
        a = 0
    } else {
        a = parseInt($resultado_cursos_posgrado_int.val());
    }

    return a
}

$num_cursos_posgrado_int.on("click", function () {
    $resultado_cursos_posgrado_int.val($num_cursos_posgrado_int.val() * 30);
    $factor_8.val(ffactor_8());
});

// Tabla 9: PTC cursos RSU ====================================================

var $factor_9 = $("#factor_9");
var $num_cursos_RSU_40 = $("#num_cursos_RSU_40");
var $resultado_cursos_RSU_40=$("#resultado_cursos_RSU_40");
var $num_cursos_RSU_20 = $("#num_cursos_RSU_20");
var $resultado_cursos_RSU_20=$("#resultado_cursos_RSU_20");

function ffactor_9(){
    var a = 0;
    var b = 0;

    if($resultado_cursos_RSU_40.val()===""){
        a = 0
    } else {
        a = parseInt($resultado_cursos_RSU_40.val());
    }

    if($resultado_cursos_RSU_20.val()===""){
        b = 0
    } else {
        b = parseInt($resultado_cursos_RSU_20.val());
    }

    return a + b;
}

$num_cursos_RSU_40.on("click", function () {
    $resultado_cursos_RSU_40.val($num_cursos_RSU_40.val() * 50);
    $factor_9.val(ffactor_9());
});

$num_cursos_RSU_20.on("click", function () {
    $resultado_cursos_RSU_20.val($num_cursos_RSU_20.val() * 25);
    $factor_9.val(ffactor_9());
});

// Tabla 10: PTC acciones internacionales=======================================

var $factor_10 = $("#factor_10");
var $num_estancias= $("#num_estancias");
var $resultado_estancias=$("#resultado_estancias");
var $num_estancias_sabaticas = $("#num_estancias_sabaticas");
var $resultado_estancias_sabaticas = $("#resultado_estancias_sabaticas");
var $num_cursos_extranjero =$("#num_cursos_extranjero")
var $resultado_cursos_extranjero = $("#resultado_cursos_extranjero");
var $num_presentacion = $("#num_presentacion");
var $resultado_presentacion = $("#resultado_presentacion");


function ffactor_10(){
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;

    if($resultado_estancias.val()===""){
        a = 0
    } else {
        a = parseInt($resultado_estancias.val());
    }

    if($resultado_estancias_sabaticas.val()===""){
        b = 0
    } else {
        b = parseInt($resultado_estancias_sabaticas.val());
    }

    if($resultado_cursos_extranjero.val()===""){
        c = 0
    } else {
        c = parseInt($resultado_cursos_extranjero.val());
    }

    if($resultado_presentacion.val()===""){
        d = 0
    } else {
        d = parseInt($resultado_presentacion.val());
    }

    return a + b + c + d;
}

$num_estancias.on("click", function () {
    $resultado_estancias.val($num_estancias.val() * 20);
    $factor_10.val(ffactor_10());
});

$num_estancias_sabaticas.on("click", function () {
    $resultado_estancias_sabaticas.val($num_estancias_sabaticas.val() * 25);
    $factor_10.val(ffactor_10());
});

$num_cursos_extranjero.on("click", function () {
    $resultado_cursos_extranjero.val($num_cursos_extranjero.val() * 30);
    $factor_10.val(ffactor_10());
});

$num_presentacion.on("click", function () {
    $resultado_presentacion.val($num_presentacion.val() * 15);
    $factor_10.val(ffactor_10());
});

