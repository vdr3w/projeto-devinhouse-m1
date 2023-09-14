## 📍 Sumário
1. [Sobre o Projeto](#sistema-de-gerenciamento-de-treino)
2. [Equipe do Projeto](#equipe-do-projeto)
3. [Recursos do Projeto](#recursos-do-projeto)
4. [Apresentação do Projeto](#apresentação-do-projeto)
5. [Introdução](#introdução)
6. [Instruções de Instalação](#instruções-de-instalação)
7. [Arquivo Central: App.vue](#arquivo-central-appvue)
8. [Páginas do Projeto](#páginas-do-projeto)
9. [Conclusão](#conclusão)

# 🎖 DevInGym - DevInHouse 2023 (Turma Zucchetti)

## Sistema de Gerenciamento de Treino

<div align="left">
    <img src="https://camo.githubusercontent.com/4b37db8bd39e0377d29baed81fbfe9005d2d15f0ed6495968641493af09d3b44/68747470733a2f2f6c61623336352e7365736973656e61692e6f72672e62722f696d672f646576696e686f7573652d6c6f676f2e706e67" width="500" />
</div>

### 🔰 Descrição
A FitManage Tech, uma prestigiada empresa no setor de academias, está avançando em sua missão de proporcionar excelência no gerenciamento de treinos. Com a crescente demanda, sua equipe de especialistas está empenhada em desenvolver uma inovadora aplicação web, denominada DevInGym, dedicada aos instrutores de academia para aprimorar a administração dos treinamentos de seus alunos.

## 📚 Linguagens Utilizadas

![HTML5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=black)
![CSS3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=black)
![Javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![VueJS](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## Equipe do Projeto
### 📍 Colaboradores
- Andre Leonardo Rocha Vieira 🙋‍♂️

### 📍 Avaliadores Do Projeto
- Bruno Costa e Douglas Cavalcante

## Recursos do Projeto
### 🔰 Repositório no Github
📌 [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vdr3w/projeto-devinhouse-m1)

### 🔰 Quadro no Trello

📌 [![Trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white
)](https://trello.com/b/ykfLLODt/projeto-modulo-1)

### 🔰 Pasta no Google Drive
📌 [![GoogleDrive](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white
)](https://drive.google.com/drive/folders/1a2jAUUjWbeVbPhw8B0hDpxx_1--9OjhI?usp=drive_link)

##  Apresentação do Projeto
![Descrição da Imagem](https://i.imgur.com/GcjBaP9.jpeg)


## Introdução
📖 Bem-vindo ao DevInGym, uma inovação da FitManage Tech, criada com o objetivo de revolucionar o gerenciamento de treinos em academias. Como aluno do programa DevInHouse 2023, da turma Zucchetti, tive a oportunidade de mergulhar no mundo do desenvolvimento web e, neste documento, você encontrará uma descrição detalhada do projeto, desde sua concepção até sua implementação. 📖

## Instruções de Instalação
1. 🛠️ **Baixar o Projeto**:
   - Acesse o repositório do GitHub onde o projeto está hospedado.
   - Clique no botão "Code" e escolha a opção desejada.
   - Extraia o arquivo ZIP em um diretório de sua escolha.
2. 🛠️ **Instalação das Dependências**:
   - Abra um terminal ou prompt de comando.
   - Navegue até o diretório onde você extraiu o projeto.
   - Selecione a pasta do projeto
   - Execute o seguinte comando para instalar todas as dependências necessárias:
     ```bash
     npm install
     ```
3. 🛠️ **Executando o Projeto**:
   - Uma vez que todas as dependências estejam instaladas, você pode iniciar o servidor de desenvolvimento com o seguinte comando:
     ```bash
     npm run server
     ```
   - Após iniciar o servidor, você pode acessar o aplicativo em seu navegador usando o endereço: `http://localhost:5173/` (a menos que você tenha especificado uma porta diferente).
4. 🛠️ **Acessando o Projeto**:
   - Abra seu navegador e vá para `http://localhost:5173/` (ou a porta especificada).
   - Agora você deve ver a interface do projeto e poderá navegar e testar suas funcionalidades.

## Arquivo Central: App.vue
📁 App.vue 📁 
Este é o componente raiz do projeto. Ele serve como o template principal para todas as outras páginas e componentes.
   - Barra de Navegação: Apresenta links para várias partes do aplicativo, incluindo "Home", "Alunos", "Exercícios", e "Sair".
   - Visibilidade Condicional: A barra de navegação é condicionalmente exibida ou ocultada, dependendo da rota atual. Por exemplo, não é mostrada nas páginas de login e registro.
   - Estilos Globais: Estilos globais e cores personalizadas são definidos, promovendo consistência visual em todo o aplicativo.
   - EasterEgg 🐶🐾🐕

## Páginas do Projeto

### 📍 Página de Login
![LOGIN](https://github.com/vdr3w/projeto-devinhouse-m1/assets/84882983/689da094-d283-42ff-857c-10b548f21724)


Permite que os usuários insiram suas credenciais para acessar o sistema.
- 🔰 Formulário: Contém campos para email e senha, juntamente com um botão de envio.
- 🔰 Validação: Os campos são obrigatórios e contêm validações específicas.
- 🔰 Redirecionamento: Em caso de sucesso, redireciona o usuário para a página principal.

---

### 📍 Página de Registro
![CADASTRO USUARIO](https://github.com/vdr3w/projeto-devinhouse-m1/assets/84882983/ee6cf488-8f3d-4860-a8dd-6e0c09ad710a)


Permite que novos usuários criem uma conta no sistema.
- 🔰 Formulário: Contém campos para nome, email, senha e confirmação de senha.
- 🔰 Validação: Todos os campos são obrigatórios e possuem validações específicas.
- 🔰 Redirecionamento: Após o registro bem-sucedido, redireciona o usuário para a página de login.

---

### 📍 Dashboard
![DASHBOARD](https://github.com/vdr3w/projeto-devinhouse-m1/assets/84882983/c99f2af8-a720-4f20-bdf4-2dc398ecf57c)


Exibe informações gerais e serve como um painel inicial para os usuários.
- 🔰 Botões de Ação: Fornece links rápidos para funções comuns, como adicionar alunos ou exercícios.
- 🔰 Lista de Atividades: Mostra as atividades recentes relacionadas a treinos e alunos.

---

### 📍 Gerenciar Alunos
![GERENCIAMENTO ALUNO](https://github.com/vdr3w/projeto-devinhouse-m1/assets/84882983/00301d63-0b58-46ab-83bc-ead9a48e3f51)

Exibe todos os alunos registrados no sistema.
- 🔰 Tabela: Lista todos os alunos com detalhes como nome, email e ações disponíveis (editar/visualizar treinos).
- 🔰 Ações: Permite a edição ou visualização dos treinos do respectivo alunos.
- 🔰 Link para Cadastro: Um botão permite o redirecionamento para a página de cadastro de novos alunos.

---

### 📍 Cadastro de Alunos
![CADASTRO NOVO ALUNO](https://github.com/vdr3w/projeto-devinhouse-m1/assets/84882983/d862d136-a4cb-4fb9-8667-7b9b706fb441)


Fornece um formulário para adicionar novos alunos ao sistema.
- 🔰 Formulário: Contém campos como nome, email, data de nascimento, cep.
- 🔰 Validação: Todos os campos são obrigatórios e contêm validações específicas e aqui é feita uma requisição para viacep para autocompletar os campos de endereço.
- 🔰 Inclusão no Banco de Dados: Os dados são enviados para o endpoint apropriado após a validação.

---

### 📍 Gerenciamento de Exercícios
![GERENCIAMENTO EXERCICIO](https://github.com/vdr3w/projeto-devinhouse-m1/assets/84882983/78c22b45-acd9-4837-b9ef-f5257e7186fe)

Permite aos usuários adicionar novos exercícios ao sistema.
- 🔰 Formulário: Inclui campos como descrição do exercício, carga, duração, etc.
- 🔰 Validação: Validações específicas são aplicadas a cada campo para garantir a integridade dos dados.
- 🔰 Inclusão no Banco de Dados: Os exercícios são adicionados ao banco de dados após a validação.

---

### 📍 Cadastro de Treinos
![CADASTRO TREINO](https://github.com/vdr3w/projeto-devinhouse-m1/assets/84882983/064a2849-1e13-447f-ba36-f4be66f2cade)

Permite a definição de treinos específicos para alunos.
- 🔰 Seleção de Exercícios: Os usuários podem escolher exercícios previamente cadastrados.
- 🔰 Detalhes do Treino: Inclui informações como repetições, peso, intervalo e observações.
- 🔰 Dia da Semana: Permite especificar o dia da semana para o treino.
- 🔰 Inclusão no Banco de Dados: Os detalhes do treino são enviados para o endpoint apropriado após a validação.

---

### 📍 Visualização de Treinos
![VISUALIZAR TREINOS](https://github.com/vdr3w/projeto-devinhouse-m1/assets/84882983/468dad14-af96-40e9-ae91-ae971bf89b84)


Exibe os treinos definidos para cada aluno.
- 🔰 Divisão por Dia da Semana: Os treinos são organizados por dia da semana para fácil referência.
- 🔰 Ações de Atualização: Os usuários podem marcar exercícios específicos como concluídos.
- 🔰 Lista de Exercícios: Cada exercício é listado com seus detalhes relevantes para cada dia.

## Conclusão
📖 Ao terminar este projeto, percebi o quanto cresci e o quanto sou capaz. Tive meus momentos de ansiedade e desespero, mas com organização e foco, consegui finalizar de forma satisfatória e com tempo sobrando! Estou bem feliz não só com o que fiz, mas com todo o caminho que percorri até aqui. O "DevInGym" não é só um trabalho de final de módulo, é o resultado de muita dedicação e aprendizado. Espero que este documento tenha fornecido uma visão clara e abrangente do projeto. Obrigado por essa jornada, Professores Bruno, Douglas e pro Romeu que não vai ler mas me ajudou muito!  📖

## Entre em contato comigo: 
<div>
    <a href="mailto:drewvieirasocial@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail Drew" /></a>
</div>
<div>
    <a href="https://www.linkedin.com/in/vieiradrew/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Gmail Drew" /></a>
</div>
