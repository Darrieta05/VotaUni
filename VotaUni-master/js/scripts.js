$(document).ready(function() {

  $("#btn_fiscal").click(function(e) {

      var id_fiscal=$('#id_fiscal').val()
      var password=$('#password_fiscal').val()
      console.log(id_fiscal);
      console.log(password);

    var Id=id_fiscal;
    var Password=password;

   e.preventDefault();

  $.ajax({
    type: "POST",
    url: "http://0.0.0.0:8000/iniciar_fiscal/",
     contentType: "application/x-www-form-urlencoded",
    data: {
      Id,Password
    },
    success: function (result) {
          if (result.Status == ("CORRECTO")){
            alert('ok');

            //Editar con la ruta del proyecto
          $(location).attr('href','index.html');

          }else {
            alert('Revise los datos');
          }
          console.log(result.Status);
      },
    error: function(result) {
          alert('error'+result);
     }
   });
});







$("#btn_cerrar_sesion").click(function(e) {
 e.preventDefault();

$.ajax({
  type: "POST",
  url: "http://0.0.0.0:8000/cerrar_sesion/",
   contentType: "application/x-www-form-urlencoded",
  data: {

  },
  success: function (result) {
        if (result.Status == ("Sesión cerrada")){
          alert('ok');
          //Editar con la ruta del proyecto
        $(location).attr('href','cambio_fiscal.html');

        }else {
          alert('Error al cerrar sesión');
        }
        console.log(result.Status);
    },
  error: function(result) {
        alert('error'+result);
   }
 });
});



$("#btn_cambio_fiscal").click(function(e) {
  $(location).attr('href','cambio_fiscal.html');
 });



$("#btn_voto").click(function(e) {
$(location).attr('href','/Users/Jeycood/Desktop/VotaUni-master/voto.html');
});




 $("#btn_buscar_estudiante").click(function(e) {
    var id_estudiante=$('#id_estudiante_buscar').val()

  e.preventDefault();

 $.ajax({
   type: "POST",
   url: "http://0.0.0.0:8000/buscar_votante",
    contentType: "application/x-www-form-urlencoded",
   data: {
     id_estudiante
   },
   success: function (result) {
         if (result.ID_ESTUDIANTE == ("No_encontrado")){
           alert('Estudiante incorrecto');
           //Editar con la ruta del proyecto
         //$(location).attr('href','index.html');
         }else {

           $("#nombre").text(result.NOMBRE);

            var escuelas=result.ESCUELAS;
            var nombre_escuelas=[];
            var texto_escuelas="";

            for (var posicion in escuelas) {
              nombre=escuelas[posicion].ESCUELA;
              console.log(nombre);
              nombre_escuelas.push(nombre);
              texto_escuelas+=nombre+"     "
            }

            $("#escuelas").text(texto_escuelas);

              var estado=result.ESCUELAS[0].ESTADO_VOTO;
            $("#estado").text(estado);

            if (estado==("Activo")) {
              $('#btn_habilitar').attr("disabled", true);
            }

          }
     },
   error: function(result) {
         alert('error'+result);
    }
  });
});



$("#btn_habilitar").click(function(e) {

var id_estudiante=$('#id_estudiante_buscar').val()

 e.preventDefault();

$.ajax({
  type: "POST",
  url: "http://0.0.0.0:8000/habilitar_voto",
   contentType: "application/x-www-form-urlencoded",
  data: {
    id_estudiante
  },
  success: function (result) {
          $("#estado").text("Activo");

          $(location).attr('href','index.html');
    },
  error: function(result) {
        alert('error'+result);
   }
 });
});


$("#btn_generarpapeleta").click(function(e){
    e.preventDefault();
    var id_estudiante=$('#input_id').val()

    $.ajax({
      type: "GET",
      url: "http://0.0.0.0:8000/papeletaEstudiante/id="+id_estudiante,
      success: function(result){
      //  $(location).attr('href','terminal_muestra.html');
        window.location.href = 'terminal_muestra.html' + '#' + id_estudiante;

        $("#label_nombre").text(result.ID_ESTUDIANTE);
    }});
});

$("#btn_votoFinal").click(function(e){
    e.preventDefault();

    var cantidad_papeletas=$("form").size();
    console.log(cantidad_papeletas);
    for (var posicion_papeleta = 0; posicion_papeleta < cantidad_papeletas; posicion_papeleta++) {

      var papeleta="papeleta"+posicion_papeleta;

      var id_partido=$("input[name=partido]:checked", "#"+papeleta).val();

      console.log(id_partido);
      if (isNaN(id_partido)){
        console.log(id_partido);
        hacer_voto(e,id_partido);
      }
  }
});



function hacer_voto(e,id_partido) {

var ID_PARTIDO=id_partido;

 e.preventDefault();

$.ajax({
  type: "POST",
  url: "http://0.0.0.0:8000/voto/",
   contentType: "application/x-www-form-urlencoded",
  data: {
    ID_PARTIDO
  },
  success: function (result) {
          alert("Voto efectuado");
    },
  error: function(result) {
        alert('error'+result);
   }
 });
}

});
