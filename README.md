* Los estilos de la web fueron realizados en CSS. 
* Dependencias Adicionales: 
    - react-router-dom: 5.3.0
    - react-bootstrap: 1.6.4
    - react: 17.0.2
    - bootstrap: 5.1.3
    - firebase: 9.1.3


## GIF

![Gif](https://media.giphy.com/media/xWH7KEq4EQA3oofnsT/giphy.gif)


## Setting

* Primero Tendrás que clonar el respositorio. Podrás hacerlo desde la consola ejecutando el siguiente comando:

git clone https://github.com/NataliaNasserDona/MyRopa.git
------------------------------------------------

* Luego de clonarlo, instalamos las dependencias desde la carpeta raíz. Ejecutando en la consola el siguiente 
comando: 

npm install
------------------------------------------------

* Podrás ejecutar la app en modo desarrollo desde la carpeta raíz: 

npm start
------------------------------------------------

Abrir este link para visualizarlo en el navegador: [Link](http://localhost:3000)


## Configurar Firebase

* En la carpeta raíz, crea un acrchivo .env
* Utilizando como base el archivo .env.example, copia su contenido y pegalo en el archivo .env que acabas de crear.
* Ingresa a [firebase](https://firebase.google.com/) y haz `log-in` con una cuenta de google.
* Ir a la consola de firebase y crear un nuevo proyecto: (ejemplo: "los-datos-y-vos").
* Hacer clic en el icono "Añade firebase a tu aplicación web", verás un objeto con el siguiente formato: 
```javascript
var config = {
   apiKey: "TuApiKey",
   authDomain: "TuAuthDomain.firebaseapp.com",
   projectId: "TuProjectId",
   storageBucket: "TuStorageBucket",
   messagingSenderId: "TuMessagingSenderId",
   appId: "1:213546321316:web:2abc3d65432135468ab"
  };
```
* Por último, reemplaza el value de cada key que te brinda Firebase, en el archivo .env que creaste.
```
REACT_APP_apiKey="ingresaAquiTuApiKey"
REACT_APP_authDomain="ingresaAquiTuAuthDomain.firebaseapp.com"
REACT_APP_projectId="ingresaAquiTuProjectId"
REACT_APP_storageBucket="ingresaAquiTuStorageBucket.appspot.com"
REACT_APP_messagingSenderId= "1232465132168465413"
REACT_APP_appId= "1:213546321316:web:2abc3d65432135468ba"
```
#### Para mas información visita la siguiente documentación en [Firebase](https://firebase.google.com/docs/web/learn-more#config-object) 


## Autor ✒️
* **Natalia Nasser Doña** - [
NatalianasserDona](https://github.com/NataliaNasserDona)