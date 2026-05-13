<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?color=E10600&size=26&center=true&vCenter=true&width=700&lines=Fórmula+1+—+Temporada+2025;Projeto+Front-End+Responsivo;Interface+Moderna+e+Profissional;Experiência+imersiva+sobre+a+F1" />
</p>

---

# Fórmula 1 — Fan Page Temporada 2025

Página web dedicada à temporada 2025 da Fórmula 1, apresentando informações sobre pilotos, equipes e os Grandes Prêmios do campeonato. Projeto desenvolvido como parte do aprendizado em desenvolvimento web front-end.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Como Executar](#como-executar)
- [Seções da Página](#seções-da-página)
- [Responsividade](#responsividade)
- [Aprendizados](#aprendizados)
- [Autor](#autor)

---

## Sobre o Projeto

Este projeto é uma landing page informativa sobre a Fórmula 1, construída com HTML, CSS e JavaScript puros — sem frameworks ou bibliotecas externas além do Font Awesome para ícones.

O projeto passou por uma refatoração completa a partir de uma versão inicial de estudos. O objetivo foi aplicar boas práticas de estruturação de código, design responsivo e interatividade com JavaScript, mantendo a escrita acessível e legível para fins de aprendizado.

---

## Funcionalidades

- Alternância entre tema escuro e tema claro com persistência via `localStorage`
- Menu de navegação responsivo com hamburguer para dispositivos móveis
- Links de navegação com destaque automático conforme a seção visível na tela
- Botão de retorno ao topo com aparição controlada por scroll
- Formulário de contato com validação básica de campos obrigatórios
- Layout totalmente responsivo para desktop, tablet e mobile

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura e semântica das páginas |
| CSS3 | Estilização, variáveis de tema, grid, flexbox e responsividade |
| JavaScript (ES6) | Interatividade, toggle de tema, menu mobile e validação |
| Google Fonts | Família tipográfica Barlow e Barlow Condensed |
| Font Awesome 6 | Ícones da interface |

---

## Estrutura de Arquivos

```
ProjetoFormula/
│
├── index.html
│
└── assets/
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   └── script.js
    │
    └── imagem/
        ├── F1Logo.webp
        ├── F1Logo.png
        ├── MaxVerstappen.jpg
        ├── Hamilton.jpg
        ├── ... (demais imagens de pilotos, equipes e circuitos)
```

---

## Como Executar

### Pré-requisitos

Não há dependências de instalação. O projeto roda diretamente no navegador.

### Passo a passo

**1. Clone o repositório**
```bash
git clone https://github.com/samuelftc/ProjetoFormula.git
```

**2. Acesse a pasta do projeto**
```bash
cd ProjetoFormula
```

**3. Abra no navegador**

Abra o arquivo `index.html` diretamente no navegador, ou use uma extensão como Live Server no VS Code para um ambiente de desenvolvimento local.

---

## Seções da Página

### Home / Banner
Seção de abertura com imagem de fundo, sobreposição com gradiente e chamada para ação.

### Sobre
Explicação sobre o que é a Fórmula 1, o Campeonato de Pilotos e o Campeonato de Construtores, apresentados em cards informativos.

### Pilotos
Grid com os 20 pilotos titulares da temporada 2025. Cada card exibe foto, equipe e uma breve biografia do piloto.

### Equipes
Lista completa das 10 equipes do grid com logo, descrição histórica e fotos dos carros da temporada.

### Grandes Premios
Grid com todos os 24 GPs do calendário 2025, contendo bandeira do país, foto do circuito, data e descrição histórica de cada etapa.

### Contato
Formulário com campos de nome, e-mail, telefone, assunto e mensagem, acompanhado de informações de contato e mapa incorporado.

---

## Responsividade

O layout foi construído com breakpoints para três tamanhos de tela:

| Breakpoint | Layout |
|---|---|
| Acima de 1024px | Desktop — 4 colunas para pilotos e GPs |
| Ate 1024px | Tablet — 3 colunas para pilotos e GPs |
| Ate 768px | Mobile — menu hamburguer, 2 colunas para pilotos e GPs |
| Ate 480px | Mobile pequeno — 1 coluna para todos os grids |

---

## Aprendizados

Este projeto consolidou os seguintes conceitos:

- **Variáveis CSS (`custom properties`)** para gerenciar dois temas (escuro e claro) de forma centralizada
- **CSS Grid e Flexbox** aplicados juntos para layouts complexos e responsivos
- **Manipulacao do DOM** com JavaScript puro para interatividade sem dependências
- **`localStorage`** para persistência da preferência de tema entre sessões
- **Scroll events** para controlar elementos dinâmicos como o botão de topo e o link ativo na navegação
- **Semântica HTML5** com uso correto de `header`, `main`, `section`, `nav`, `footer` e atributos de acessibilidade como `aria-label`
- **Boas práticas de organização** separando HTML, CSS e JS em arquivos distintos

---

## Autor

Desenvolvido por **Samuel Ferreira**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Samuelftc)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:samuelferreiradev08@gmail.com)

---

> Projeto desenvolvido como parte dos estudos em desenvolvimento web front-end.
