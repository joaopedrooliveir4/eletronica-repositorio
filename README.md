# Eletrônica Oliveira - Sistema de Ordem de Serviço

Este projeto é um sistema de gerenciamento de ordens de serviço desenvolvido para a **Eletrônica Oliveira**, voltado para o controle de serviços técnicos realizados em aparelhos eletrônicos. O sistema permite criar, visualizar, editar, apagar e baixar ordens de serviço em formato PDF. Além disso, há uma funcionalidade de pesquisa para facilitar o acesso às informações.

## Funcionalidades

- **Cadastro de Ordens de Serviço**: Registre informações de clientes e aparelhos com dados como número da OS, nome do cliente, telefone, defeito do aparelho, peças para troca e status do serviço.
- **Edição de Ordens**: Altere informações das ordens de serviço conforme o andamento do conserto.
- **Exclusão de Ordens**: Remova ordens de serviço desatualizadas ou concluídas.
- **Download em PDF**: Baixe as ordens de serviço com os detalhes do cliente, aparelho, peças substituídas e garantia de 90 dias.
- **Filtro de Pesquisa**: Busque ordens de serviço por número da OS ou pelo nome do cliente.
- **Responsivo**: Layout adaptado para diferentes dispositivos, proporcionando uma boa experiência de uso tanto em desktop quanto em mobile.

## Tecnologias Utilizadas

### Frontend:
- **HTML5**: Para estruturação da interface do usuário.
- **CSS3**: Para o estilo e layout, incluindo design responsivo.
- **JavaScript**: Funcionalidades de interação e integração com a API.
- **Bootstrap**: Para componentes de interface prontos e responsividade.
- **Axios**: Para fazer requisições HTTP.
- **Font Awesome**: Ícones para melhorar a usabilidade.

### Backend:
- **Node.js**: Para o servidor e lógica de negócio.
- **Express**: Framework utilizado para lidar com rotas e requisições.
- **MongoDB**: Banco de dados NoSQL para armazenar as ordens de serviço.
- **Mongoose**: ORM utilizado para modelagem de dados no MongoDB.

### Outras Ferramentas:
- **MongoDB Compass**: Utilizado para visualizar e gerenciar o banco de dados.
- **Insomnia/Postman**: Para testar as requisições da API.
- **PDFKit**: Para geração dos PDFs das ordens de serviço.
