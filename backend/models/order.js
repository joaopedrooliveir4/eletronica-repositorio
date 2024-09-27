// importar mongoose
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    numeroOS: { type: String, required: true },
    clienteNome: { type: String, required: true },
    clienteTelefone: { type: String, required: true },
    aparelho: { type: String, required: true },
    defeito: { type: String, required: true },
    pecas: { type: String },
    preco: { type: Number },
    aprovacao: { type: String },
    pagamento: { type: String },
    status: { type: String, required: true }
    });
    

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
