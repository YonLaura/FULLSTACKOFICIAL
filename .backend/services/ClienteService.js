const clienteModel = require('../models/ClienteModels');

class ClienteService {
    async getClientes() {
        return clienteModel.getAllClientes(); 
    }

    async getClienteById(id) {
        return clienteModel.getClienteById(id); 
    }



        async addCliente(data) {
            return clienteModel.createCliente(data); // data es un objeto
        }
    
    
    async modifyCliente(id, data) {
        return clienteModel.updateCliente(id, data); 
    }

    async removeCliente(id) {
        await clienteModel.deleteCliente(id);
        return { message: 'Cliente eliminado' }; 
    }
    async getClientePorDNI(dni) {
        return await clienteModel.getClientePorDNI(dni);
    }
}

module.exports = new ClienteService();
