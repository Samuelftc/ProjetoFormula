// =============================================
//   TOGGLE DE TEMA (escuro / claro)
// =============================================

const htmlEl = document.documentElement;
const btnTema = document.getElementById('btn-tema');
const iconeTema = document.getElementById('icone-tema');

// Verifica se o usuário já tinha escolhido um tema antes (salvo no localStorage)
const temaSalvo = localStorage.getItem('tema') || 'escuro';
aplicarTema(temaSalvo);

// Clicou no botão de tema
btnTema.addEventListener('click', function () {
    const temaAtual = htmlEl.getAttribute('data-tema');

    if (temaAtual === 'escuro') {
        aplicarTema('claro');
        localStorage.setItem('tema', 'claro');
    } else {
        aplicarTema('escuro');
        localStorage.setItem('tema', 'escuro');
    }
});

// Função que aplica o tema e troca o ícone do botão
function aplicarTema(tema) {
    htmlEl.setAttribute('data-tema', tema);

    if (tema === 'escuro') {
        iconeTema.className = 'fa-solid fa-moon';
        btnTema.setAttribute('title', 'Mudar para tema claro');
    } else {
        iconeTema.className = 'fa-solid fa-sun';
        btnTema.setAttribute('title', 'Mudar para tema escuro');
    }
}


// =============================================
//   MENU MOBILE (hamburguer)
// =============================================

const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const iconMenu = btnMenu.querySelector('i');

// Clicou no hamburguer
btnMenu.addEventListener('click', function () {
    const estaFechado = menuMobile.classList.contains('fechado');

    if (estaFechado) {
        menuMobile.classList.remove('fechado');
        iconMenu.className = 'fa-solid fa-xmark'; // Troca pra X
    } else {
        menuMobile.classList.add('fechado');
        iconMenu.className = 'fa-solid fa-bars'; // Volta pra hamburguer
    }
});

// Clicou em um link do menu mobile → fecha o menu
const linksMenuMobile = menuMobile.querySelectorAll('a');

linksMenuMobile.forEach(function (link) {
    link.addEventListener('click', function () {
        menuMobile.classList.add('fechado');
        iconMenu.className = 'fa-solid fa-bars';
    });
});


// =============================================
//   BOTÃO VOLTAR AO TOPO
// =============================================

const btnTopo = document.querySelector('#topo a');

// Mostra ou esconde o botão conforme o scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
        btnTopo.classList.add('visivel');
    } else {
        btnTopo.classList.remove('visivel');
    }
});


// =============================================
//   LINK ATIVO NA NAVEGAÇÃO (destaca o item
//   do menu conforme a seção visível na tela)
// =============================================

const secoes = document.querySelectorAll('section[id]');
const linksNav = document.querySelectorAll('header nav a, .menu-mobile a');

window.addEventListener('scroll', function () {
    let secaoAtual = '';

    secoes.forEach(function (secao) {
        const topo = secao.offsetTop - 100;

        if (window.scrollY >= topo) {
            secaoAtual = secao.getAttribute('id');
        }
    });

    linksNav.forEach(function (link) {
        link.classList.remove('ativo');

        if (link.getAttribute('href') === '#' + secaoAtual) {
            link.classList.add('ativo');
        }
    });
});


// =============================================
//   ENVIO DO FORMULÁRIO (simulado)
// =============================================

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Impede o envio real da página

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação básica
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha nome, e-mail e mensagem antes de enviar!');
        return;
    }

    // Simulação de envio bem-sucedido
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    formulario.reset();
});