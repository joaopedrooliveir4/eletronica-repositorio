const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const orderRoutes = require('./routes/orders');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/routes/orders', require('./routes/orders'));


// Supondo que você tenha uma função para gerar o PDF
const generatePDF = async (orderId) => {
    // Lógica para gerar PDF baseado no orderId
    // Retornar um buffer do PDF
};

// Conectar ao MongoDB Atlas
const uri = 'mongodb+srv://jp3066984:LotaMMSz8bQHe8Ie@eletronicaoliveira.jn0z7.mongodb.net/eletronicaOliveira?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexão com MongoDB Atlas realizada com sucesso!'))
    .catch(err => console.error('Erro de conexão com MongoDB Atlas:', err));

// Rota básica
app.get('/', (req, res) => {
    res.send('API de Eletrônica Oliveira');
});

// Integrar as rotas de ordens de serviço
app.use('/routes/orders', orderRoutes); 

// Usar as rotas da OS
app.use('/orders', orderRoutes);

// Endpoint para baixar PDF
app.get('/routes/orders/pdf/:id', async (req, res) => {
    const orderId = req.params.id;

    try {
        const pdfBuffer = await generatePDF(orderId);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="ordem_${orderId}.pdf"`,
            'Content-Length': pdfBuffer.length,
        });
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        res.status(500).send('Erro ao gerar PDF');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
