document.getElementById('mostrar-servicos').addEventListener('click', function() {
    var servicosDiv = document.getElementById('servicos');
    if (servicosDiv.style.display === 'none' || servicosDiv.style.display === '') {
        servicosDiv.style.display = 'block';
    } else {
        servicosDiv.style.display = 'none';
    }
});

var linksServicos = document.querySelectorAll('.servicos ul li a');
var descricoes = {
    'exemplo-1': 'Exemplo 1 DESCRIÇÃO',
    'exemplo-2': 'Exemplo 2 DESCRIÇÃO',
    'exemplo-3': 'Exemplo 3 DESCRIÇÃO',
    'exemplo-4': 'Exemplo 4 DESCRIÇÃO',
    'exemplo-5': 'Exemplo 5 DESCRIÇÃO'
};

var imagens = {
    'exemplo-1': 'img/image.png', 
    'exemplo-2': 'img/image.png',
    'exemplo-3': 'img/image.png',
    'exemplo-4': 'img/image.png',
    'exemplo-5': 'img/image.png'
};

var activeDescricaoDiv = null;

linksServicos.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var servico = this.getAttribute('data-servico');
        var descricaoDiv = document.getElementById('descricao-' + servico);
        var descricaoTexto = descricaoDiv.querySelector('.descricao-texto');
        var descricaoImagem = descricaoDiv.querySelector('.descricao-imagem');

        if (activeDescricaoDiv && activeDescricaoDiv !== descricaoDiv) {
            activeDescricaoDiv.style.display = 'none';
        }

        if (descricaoDiv.style.display === 'block') {
            descricaoDiv.style.display = 'none';
            activeDescricaoDiv = null;
        } else {
            descricaoTexto.textContent = descricoes[servico];
            descricaoImagem.src = imagens[servico];
            descricaoImagem.style.display = 'block';
            descricaoDiv.style.display = 'block';
            activeDescricaoDiv = descricaoDiv;
        }

        document.querySelectorAll('.select-exemplo').forEach(button => {
            button.addEventListener('click', function() {
                this.classList.add('selected');
            });
        });        
    });
});
