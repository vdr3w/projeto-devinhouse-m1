## 📍 Sumário
1. [Sobre o Projeto](#sistema-de-gerenciamento-de-treino)
2. [Equipe do Projeto](#equipe-do-projeto)
3. [Recursos do Projeto](#recursos-do-projeto)
4. [Apresentação do Projeto](#apresentacao-do-projeto)
5. [Introdução](#introdução)
6. [Instruções de Instalação](#instruções-de-instalação)
7. [Arquivo Central: App.vue](#arquivo-central-appvue)
8. [Páginas do Projeto](#páginas-do-projeto)
9. [Conclusão](#conclusão)

# 🎖 DevInGym - DevInHouse 2023 (Turma Zucchetti)

## 📍 Sistema de Gerenciamento de Treino

### 🔰 Descrição
A FitManage Tech, uma prestigiada empresa no setor de academias, está avançando em sua missão de proporcionar excelência no gerenciamento de treinos. Com a crescente demanda, sua equipe de especialistas está empenhada em desenvolver uma inovadora aplicação web, denominada DevInGym, dedicada aos instrutores de academia para aprimorar a administração dos treinamentos de seus alunos.

## 📍 Equipe do Projeto
### 🔰 Colaboradores
Andre Leonardo Rocha Vieira

### 🔰 Avaliadores Do Projeto
Bruno Costa e Douglas Cavalcante

## 📍 Recursos do Projeto
### 🔰 Repositório no Github
📌 [https://github.com/vdr3w/projeto-devinhouse-m1](https://github.com/vdr3w/projeto-devinhouse-m1)

### 🔰 Quadro no Trello
📌 [https://trello.com/b/ykfLLODt/projeto-modulo-1](https://trello.com/b/ykfLLODt/projeto-modulo-1)

### 🔰 Pasta no Google Drive
📌 [https://drive.google.com/drive/folders/1a2jAUUjWbeVbPhw8B0hDpxx_1--9OjhI?usp=drive_link](https://drive.google.com/drive/folders/1a2jAUUjWbeVbPhw8B0hDpxx_1--9OjhI?usp=drive_link)

## 📍 Apresentação do Projeto
📸 ![Descrição da Imagem](https://i.imgur.com/GcjBaP9.jpeg)

## 📖 Introdução
Este documento detalha a estrutura e a lógica dos principais componentes e páginas do Sistema de Gerenciamento de Treino. O projeto foi desenvolvido usando o framework Vue.js e segue os princípios de design e desenvolvimento moderno usando a biblioteca Vuetify.

## 🛠️ Instruções de Instalação
1. 🔰 **Baixar o Projeto**:
   - Acesse o repositório do GitHub onde o projeto está hospedado.
   - Clique no botão "Code" e escolha a opção "Download ZIP".
   - Extraia o arquivo ZIP em um diretório de sua escolha.
2. 🔰 **Instalação das Dependências**:
   - Abra um terminal ou prompt de comando.
   - Navegue até o diretório onde você extraiu o projeto.
   - Execute o seguinte comando para instalar todas as dependências necessárias:
     ```bash
     npm install
     ```
3. 🔰 **Executando o Projeto**:
   - Uma vez que todas as dependências estejam instaladas, você pode iniciar o servidor de desenvolvimento com o seguinte comando:
     ```bash
     npm run server
     ```
   - Após iniciar o servidor, você pode acessar o aplicativo em seu navegador usando o endereço: `http://localhost:8080/` (a menos que você tenha especificado uma porta diferente).
4. 🔰 **Acessando o Projeto**:
   - Abra seu navegador e vá para `http://localhost:5173/` (ou a porta especificada).
   - Agora você deve ver a interface do projeto e poderá navegar e testar suas funcionalidades.

## 📁 Arquivo Central: App.vue
App.vue
Este é o componente raiz do projeto. Ele serve como o template principal para todas as outras páginas e componentes.
   - Barra de Navegação: Apresenta links para várias partes do aplicativo, incluindo "Home", "Alunos", "Exercícios", e "Sair".
   - Visibilidade Condicional: A barra de navegação é condicionalmente exibida ou ocultada, dependendo da rota atual. Por exemplo, não é mostrada nas páginas de login e registro.
   - Estilos Globais: Estilos globais e cores personalizadas são definidos, promovendo consistência visual em todo o aplicativo.
   - EasterEgg 🐶🐾🐕

## 📍 Páginas do Projeto
### 🔰 Página de Login
Página de Login
Permite que os usuários insiram suas credenciais para acessar o sistema.
- Formulário: Contém campos para email e senha, juntamente com um botão de envio.
- Validação: Os campos são obrigatórios e contêm validações específicas.
- Redirecionamento: Em caso de sucesso, redireciona o usuário para a página principal.

### 🔰 Página de Registro
Página de Registro
Permite que novos usuários criem uma conta no sistema.
- Formulário: Contém campos para nome, email, senha e confirmação de senha.
- Validação: Todos os campos são obrigatórios e possuem validações específicas.
- Redirecionamento: Após o registro bem-sucedido, redireciona o usuário para a página de login.

### 🔰 Página Principal
Página Principal
Exibe informações gerais e serve como um painel inicial para os usuários.
- Botões de Ação: Fornece links rápidos para funções comuns, como adicionar alunos ou exercícios.
- Lista de Atividades: Mostra as atividades recentes relacionadas a treinos e alunos.

### 🔰 Lista de Alunos
Lista de Alunos
Exibe todos os alunos registrados no sistema.
- Tabela: Lista todos os alunos com detalhes como nome, email e ações disponíveis (editar/excluir).
- Ações: Permite a edição ou exclusão de alunos específicos.
- Link para Cadastro: Um botão permite o redirecionamento para a página de cadastro de novos alunos.

### 🔰 Cadastro de Alunos
Cadastro de Alunos
Fornece um formulário para adicionar novos alunos ao sistema.
- Formulário: Contém campos como nome, email, data de nascimento, etc.
- Validação: Todos os campos são obrigatórios e contêm validações específicas.
- Inclusão no Banco de Dados: Os dados são enviados para o endpoint apropriado após a validação.

### 🔰 Cadastro de Exercícios
Cadastro de Exercícios
Permite aos usuários adicionar novos exercícios ao sistema.
- Formulário: Inclui campos como descrição do exercício, categoria e duração.
- Validação: Validações específicas são aplicadas a cada campo para garantir a integridade dos dados.
- Inclusão no Banco de Dados: Os exercícios são adicionados ao banco de dados após a validação.

### 🔰 Cadastro de Treinos
Cadastro de Treinos
Permite a definição de treinos específicos para alunos.
- Seleção de Exercícios: Os usuários podem escolher exercícios previamente cadastrados.
- Detalhes do Treino: Inclui informações como repetições, peso, intervalo e observações.
- Dia da Semana: Permite especificar o dia da semana para o treino.
- Inclusão no Banco de Dados: Os detalhes do treino são enviados para o endpoint apropriado após a validação.

### 🔰 Visualização de Treinos
Visualização de Treinos
Exibe os treinos definidos para cada aluno.
- Divisão por Dia da Semana: Os treinos são organizados por dia da semana para fácil referência.
- Ações de Atualização: Os usuários podem marcar exercícios específicos como concluídos.
- Lista de Exercícios: Cada exercício é listado com seus detalhes relevantes para cada dia.

## 📖 Conclusão
Este projeto foi desenvolvido seguindo as melhores práticas de design e desenvolvimento. Cada componente e página foi criado com foco na experiência do usuário e na eficiência do sistema. A documentação aqui fornecida oferece uma visão detalhada da estrutura e funcionalidade do projeto, garantindo uma compreensão completa de seu funcionamento e design. As instruções de instalação foram detalhadamente explicadas para garantir uma fácil configuração e execução do projeto por qualquer usuário, mesmo sem experiência prévia.
