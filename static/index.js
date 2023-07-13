//Crear la variable date - (fecha).
var date=new Date()
var displaydate="fecha: " + date.toLocaleDateString()
//Cargar HTML DOM.
$(document).ready(function(){
    $("#display_date").html(displaydate)
})
//Definir la variable para almacenar la emoción predecida.
var predictemotion

//HTML-->JavaScript--->Flask.
//Flask--->JavaScript--->HTML.

//Selector jQuery y la acción click.

$(function () {
    $("#predict_button").click(function () {
        //Llamada a AJAX 
        var inputdata={"text":$("#text").val()}

        $.ajax({
            type:"POST",
            url:"/predict-emotion",
            data:JSON.stringify(inputdata),
            dataType:"json",
            contentType:"application/json",
            success:function(result)
              {
                
                // Resultado recibido de Flask ----->JavaScript
                predictemotion=result.data.predicted_emotion
                emourl=result.data.predicted_emotion_img_url

                // Mostrar resultado usando JavaScript----->HTML
                $("#prediction").html(predicted_emotion);
                $('#prediction').css("display", "block");
                 $("#emo_img_url").attr('src', emo_url); 
                 $('#emo_img_url').css("display", "block");
                
            },
            //Función error 
            error:function(result){
                alert(result.responseJSON.message)
            }
            
        });
    });
})

