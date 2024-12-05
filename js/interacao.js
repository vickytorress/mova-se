//slider
$(document).ready(function () {
    //iniciando o plugin
    $('#destaque').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });
});

//Interação Menu
function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}


// // Modal
// var modalBtn = document.getElementById("modal");
// const modal = document.querySelector(".modal-overlay");
// const closeBtn = document.querySelector(".close-btn");

// modalBtn.addEventListener("click", function () {
//   modal.classList.add("open-modal");
// });
// closeBtn.addEventListener("click", function () {
//   modal.classList.remove("open-modal");
// });

document.addEventListener('DOMContentLoaded', (event) => {
    const modals = document.querySelectorAll('.modal');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.close');

    openModalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});

// --------------------------- Acessórios

// document.addEventListener('DOMContentLoaded', () => {
//     const modal = document.getElementById('modal');
//     const openModalBtn = document.getElementById('openModalBtn');
//     const closeBtn = document.querySelector('.close-btn');

//     openModalBtn.addEventListener('click', () => {
//         modal.style.display = 'block';
//     });

//     closeBtn.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });

//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// });

let btn = document.querySelectorAll(".acessorios .btn");
let layer1 = document.querySelector(".acessorio-layer");
let modalAcessorio = document.querySelector(".modal-acessorio");
let fechar = document.querySelector('.modal-acessorio .fechar');
btn.forEach((x, i) => {
    x.addEventListener('click', function () {
        if (i == 0) {
            layer1.style.display = "block";
            modalAcessorio.style.display = "block";
        } else if (i == 1) {
            layer1.style.display = "block";
            modalAcessorio.style.display = "block";
            let img = modalAcessorio.querySelector('img');
            let descricao = modalAcessorio.querySelector(".descricao-ac");
            descricao.innerHTML = "Uma mochila cargueira de trekking é um equipamento essencial para quem pratica caminhadas de longa distância e expedições. Essas mochilas são projetadas para carregar grandes volumes de equipamentos e suprimentos, proporcionando conforto e estabilidade durante a caminhada. Elas geralmente possuem uma capacidade que varia de 50 a 80 litros ou mais, dependendo da duração e das necessidades da viagem.";
            img.src = "imagem/cargueira.jpg";
            

        } else if (i == 2) {
            layer1.style.display = "block";
            modalAcessorio.style.display = "block";
            let img = modalAcessorio.querySelector('img');
            let descricao = modalAcessorio.querySelector(".descricao-ac");
            descricao.innerHTML = "As luvas para trekking são um acessório essencial para proteger as mãos durante caminhadas em diferentes tipos de terreno e condições climáticas. Elas são projetadas para oferecer conforto, proteção e funcionalidade. Aqui estão algumas características comuns dessas luvas:"
            img.src = "imagem/luvas.jpg";
        }
        else if (i == 3) {
            layer1.style.display = "block";
            modalAcessorio.style.display = "block";
            let img = modalAcessorio.querySelector('img');
            let descricao = modalAcessorio.querySelector(".descricao-ac");
            descricao.innerHTML = "Um capacete para trekking é um equipamento de segurança projetado para proteger a cabeça durante caminhadas em terrenos acidentados ou em atividades que envolvem riscos de queda de objetos ou impactos. Embora não seja sempre necessário para todas as trilhas, ele é essencial em ambientes mais desafiadores, como montanhas rochosas ou áreas com risco de deslizamentos."
            img.src = "imagem/capacete.jpg";
        } else if (i == 4) {
            layer1.style.display = "block";
            modalAcessorio.style.display = "block";
            let img = modalAcessorio.querySelector('img');
            let descricao = modalAcessorio.querySelector(".descricao-ac");
            descricao.innerHTML = "Uma squeeze para trekking é um recipiente projetado para armazenar e transportar água ou outras bebidas durante caminhadas e atividades ao ar livre. Ela é essencial para manter a hidratação em trilhas longas e desafiadoras."
            img.src = "imagem/squeeze.jpg";
        } else if (i == 5) {
            layer1.style.display = "block";
            modalAcessorio.style.display = "block";
            let img = modalAcessorio.querySelector('img');
            let descricao = modalAcessorio.querySelector(".descricao-ac");
            descricao.innerHTML = "Uma sapatilha de trekking é um calçado leve e flexível, projetado para caminhadas em terrenos variados, oferecendo conforto e proteção aos pés."
            img.src = "imagem/sapatilha-escalada.jpg";
        }
    })
})




//----------------------------------- Pacotes

function openSlider(src) {
    document.getElementById('slider-img').src = src;
    document.getElementById('slider').style.display = 'flex';
}

function closeSlider() {
    document.que('slider').style.display = 'none';
}

let fechar2 = document.querySelector(".slider .fechar");

fechar2.addEventListener('click',function(){
    document.querySelector('#slider').style.display = 'none';
})