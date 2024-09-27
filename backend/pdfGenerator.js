const PDFDocument = require('pdfkit'); // Certifique-se de ter este pacote instalado
const Order = require('./models/order'); // Ajuste o caminho conforme necessário
const moment = require('moment');

const generatePDF = async (orderId) => {
    const order = await Order.findById(orderId);
    if (!order) {
        throw new Error('Ordem não encontrada'); // Verifique se a ordem existe
    }

    const doc = new PDFDocument();
    const buffers = [];

    doc.fontSize(12).text(`Data: ${moment().format('DD/MM/YYYY')}`, { align: 'left' });
    doc.text(`GARANTIA DE 90 DIAS`, { align: 'center', underline: true, fontSize: 14 });

    // Adicionando os dados ao PDF
    doc.moveDown();
    doc.text(`Número OS: ${order.numeroOS}`);
    doc.text(`Nome do Cliente: ${order.clienteNome}`);
    doc.text(`Aparelho: ${order.aparelho}`);
    doc.text(`Defeito: ${order.defeito}`);
    doc.text(`Peças: ${order.pecas}`);
    doc.text(`Preço: ${order.preco}`);
    doc.text(`Aprovação: ${order.aprovacao}`);
    doc.text(`Pagamento: ${order.pagamento}`);
    doc.text(`Status: ${order.status}`);

    doc.end();

    // Convertendo o PDF para um buffer
    return new Promise((resolve, reject) => {
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
            const pdfData = Buffer.concat(buffers);
            resolve(pdfData); // Resolve com o buffer do PDF
        });
        doc.on('error', reject); // Rejeita em caso de erro
    });
};

module.exports = { generatePDF };
