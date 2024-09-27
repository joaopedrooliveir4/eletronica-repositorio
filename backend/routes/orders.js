const express = require('express')
const Order = require('../models/order')
const router = express.Router()
const pdf = require('html-pdf')
const PDFDocument = require('pdfkit');
const fs = require('fs');
const { generatePDF } = require('../pdfGenerator');

// Criar uma nova ordem de serviço
router.post('/', async (req, res) => {
    try {
        const order = new Order(req.body)
        await order.save()
        res.status(201).send(order)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Obter todas as ordens de serviço
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find()
        res.send(orders)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Obter uma ordem de serviço específica pelo ID
router.get('/:id', async (req,res) => {
    try {
        const order = await Order.findById(req.params.id)
        if (!order) {
            return res.status(404).send()
        } 
        res.send(order)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Atualizar uma ordem de serviço pelo ID
router.patch('/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
        if (!order) {
            return res.status(404).send()
        }
        res.send(order)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Excluir uma ordem de serviço pelo ID
router.delete('/:id', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id)
        if (!order) {
            return res.status(404).send()
        }
        res.send(order)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Rota para gerar PDF
router.get('/pdf/:id', async (req, res) => {
    const orderId = req.params.id;

    try {
        const pdfBuffer = await generatePDF(orderId); // Gera o PDF com o ID da ordem
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="ordem_${orderId}.pdf"`,
            'Content-Length': pdfBuffer.length,
        });
        res.send(pdfBuffer); // Envia o buffer do PDF como resposta
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        res.status(500).send('Erro ao gerar PDF');
    }
});



module.exports = router