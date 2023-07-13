from flask import Flask, render_template, url_for, request, jsonify
from text_sentiment_prediction import *

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/predict-emotion', methods=["POST"])
def predict_emotion():
    
    # Obtener el texto ingresado del requerimiento POST.
    inputtext=request.json.get("text")
    
    if not inputtext:
        # Respuesta para enviar si input_text está indefinido.
        response={
            "status":"error",
            "message":"ingresa algun texto"   
        }
        
        # Respuesta para enviar si input_text no está indefinido.
        return jsonify(response)
        
        # Enviar respuesta.      
    else:
       predicted_emotion, predicted_emotion_img_url=predict(inputtext)
       response={
        "status":"success",
        "data":{"predictedmotion":predicted_emotion,
                "predictimageurl":predicted_emotion_img_url
                }
       }
       return jsonify.reposnse
         
            
       
        
       
app.run(debug=True)



    