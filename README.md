
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



## Learn More



Api  React
Api rest básica que permite conectarse a un endpoint de Login  , que se consume en componentes de React:

Requerimientos

Composer
Node js
Laragon , Wamp, Xampp
Apache

Clonar repo
Ir a la url : https://github.com/Semi-dios/apiArtemisa
Abrir una consola de git y en la carpeta raiz del entorno de desarrollo digitar git clone + url
Instale dependencias digitando npm i y/o npm u



Inicie servicios digitando npm  start 


Acceda a la url http://127.0.0.1:3000/




Estructura
El proyecto se realizó mediante el consumo de ruta Api o end point de  login   a través de componentes elaborados en react , 
por lo tanto las vistas las encontrara en la carpeta src/components , estas a su vez se renderizan por medio del archivo App.js  


En la elaboración de la prueba a continuación estructura.

src
--assets
  --css
    --Login.css(Archivo de estilos de login.)
  --img
    --logo.svg(logo react) 

--components 
  --Login.jsx(Componente que consume el endpoint, ubicado en la ruta raiz :http://127.0.0.1:3000/#/ )
  --Dashboard.jsx
--services
  --apirest.js(Ruta api)




