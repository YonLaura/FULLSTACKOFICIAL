// server.js
// importamos las dependencias
const express = require('express'); // para el manejo de solicitudes http
const cors = require('cors'); // habilita los cors en la aplicación para la comunicación
const productRoutes = require('./routers/productRouters');

class Server { // clase para encapsular la configuración y el arranque del servidor
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() { // método config
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() { // método routers
    this.app.use('/productos', productRoutes);
  }

  start() { // método start
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`); 
    });
  }
}

const server = new Server ();
server.start();