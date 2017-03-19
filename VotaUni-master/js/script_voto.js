$(document).ready(function() {

var id_estudiante=window.location.hash.substring(1);
console.log("El id es"+id_estudiante);


    var id_fiscal=$('#input_id').val()

    $.ajax({
      type: "GET",
      url: "http://0.0.0.0:8000/papeletaEstudiante/id="+id_estudiante,
      success: function(result){


        $("#label_nombre").text(result.NOMBRE);

        var arreglo_escuelas=result.ESCUELAS
        cantidad_escuelas= result.ESCUELAS.length;


        for (var posicion_escuela=0; posicion_escuela<cantidad_escuelas-1;posicion_escuela++) {
          $("#papeleta0").clone().attr('id', 'papeleta'+ (posicion_escuela+1)).insertAfter("#papeleta0");
        }

        for (var posicion_escuela=0; posicion_escuela<cantidad_escuelas;posicion_escuela++) {

        var papeleta="papeleta"+posicion_escuela;
        console.log(papeleta);

        nombre_escuela=result.ESCUELAS[posicion_escuela].ESCUELA;

        $("#"+papeleta+ " "+"#Nombre_Escuela").text(nombre_escuela);

        var cantidad_partidos=result.ESCUELAS[posicion_escuela].Partidos.length;

        if(cantidad_partidos!=0){
          escuela=result.ESCUELAS[posicion_escuela];
          var partido01=escuela.Partidos[0];
          var partido02=escuela.Partidos[1];

          $("#"+papeleta+ " "+"#NombrePartido01").text(partido01.NOMBRE_PARTIDO);
          $("#"+papeleta+ " "+"#NombrePartido02").text(partido02.NOMBRE_PARTIDO);
          $("#"+papeleta+ " "+"#btn_radio01").val(partido01.ID_PARTIDO);
          $("#"+papeleta+ " "+"#btn_radio02").val(partido02.ID_PARTIDO);

        }else{

        }

       }

    }});

});
