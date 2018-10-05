
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

// language=JQuery-CSS
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


// Tabla 3: SNI impartiendo cursos







