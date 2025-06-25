$(document).ready(function() {

// alterações gerais

$('.conteudo-topo .inferior .busca-mobile input').attr('placeholder','Buscar...');
$('.pagina-login .cadastro-logar .form-horizontal .controls #id_email').attr('placeholder','E-mail');
$('.pagina-login .cadastro-logar .form-horizontal .controls #id_senha').attr('placeholder','Senha');
$('.pagina-login .caixa-sombreada fieldset > div:not(.control-group) #id_email').attr('placeholder','Digite o email que deseja cadastrar');
$('.banner.cheio li').each(function () {
    const $li = $(this);
    const $img = $li.find('img[usemap]');
    const useMapName = $img.attr('usemap')?.replace('#', '');

    if (useMapName) {
    const $map = $li.find(`map[name="${useMapName}"]`);
    const $a = $li.find('a').first();

    if ($map.length && $a.length) {
        $a.append($map.children());
        $map.remove();
    }
    }
});
$('#barraNewsletter .componente .titulo').append($('#barraNewsletter .componente .texto-newsletter'));
$('#barraNewsletter .componente .botao').addClass('principal');
$('.banner.cheio .flex-direction-nav li.flex-nav-prev').after($('.banner.cheio .flex-control-nav'));

//Carrossel com slick
$('#listagemProdutos ul .flex-viewport > ul').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }
    ]
});

// Categorias home
var categorias = [
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/apple-cat.svg",
        alt: "Categoria Apple"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/google-cat.svg",
        alt: "Categoria Google"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/play-cat.svg",
        alt: "Categoria PlayStation"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/nintendo-cat.svg",
        alt: "Categoria Nintendo"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/v-bucks-cat.svg",
        alt: "Categoria V-bucks"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/xbox-cat.svg",
        alt: "Categoria Xbox"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/apple-cat.svg",
        alt: "Categoria Apple"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/google-cat.svg",
        alt: "Categoria Google"
    }
];


// Insere a seção de categorias antes de .pagina-inicial #corpo
if ($('.pagina-inicial #corpo').length > 0) {
    var categoriasHtml = '<div class="categorias-section"><ul><span class="titulo-categoria"><strong>Compre por marca ou jogo</strong></span>';
    
    categorias.forEach(function(categoria) {
        categoriasHtml += '<li><img src="' + categoria.img + '" alt="' + categoria.alt + '" /></li>';
    });
    
    categoriasHtml += '</ul></div>';
    
    $('.pagina-inicial #corpo').before(categoriasHtml);
}

$('.categorias-section ul').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      }
    ]
});

$(window).on('resize', function() {

    if ($(window).width() > 768) {
        // desktop
        // Antes de adicionar, verifica se já existe para evitar duplicação
        if ($('.conteudo-topo .sign-up-header').length === 0) {
            $('.conteudo-topo .inferior .busca-mobile').after(`
                <div class="sign-up-header">
                    <a href="../conta/login?next=/conta/index">
                        <span>Entrar</span>
                        <i class="user"></i>
                    </a>
                </div>    
            `);
        }

        $('#cabecalho .conteudo-topo').prepend($('#cabecalho .menu.superior'));

        $('.listagem-item .bandeira-promocao').each(function() {
            var texto = $(this).text();
            // Substitui "Desconto" (case-insensitive) por "OFF"
            var novoTexto = texto.replace(/Desconto/i, 'OFF');
            $(this).text(novoTexto);
        });

        $('.listagem-item').each(function() {
            var $item = $(this);
            var $bandeira = $item.find('.bandeira-promocao');
            var $precoPromocional = $item.find('strong.preco-promocional');
            if ($bandeira.length && $precoPromocional.length) {
                $bandeira.insertAfter($precoPromocional.first());
            }
        });

        $('.listagem-item').each(function() {
            var $item = $(this);
            var $bandeiras = $item.find('.bandeiras-produto');
            var $infoProduto = $item.find('.info-produto');
            if ($bandeiras.length && $infoProduto.length) {
                $bandeiras.insertBefore($infoProduto.first());
            }
        });

        // badges de categoria

        var badgesCategorias = [
            {
                codigoCategoria: '23387220',
                urlImagemBadge: 'https://cdn.awsli.com.br/2830/2830294/arquivos/badge-playstation.png'
            },
            {
                codigoCategoria: '23387224',
                urlImagemBadge: 'https://cdn.awsli.com.br/2830/2830294/arquivos/badge-xbox.png'
            }
            // Adicione mais objetos conforme necessário
        ];

        badgesCategorias.forEach(function(badge) {
            $('.listagem-item.prod-cat-' + badge.codigoCategoria).each(function() {
                var $item = $(this);
                if ($item.find('.badge-category-list[data-categoria="' + badge.codigoCategoria + '"]').length === 0) {
                    var $badge = $('<div class="badge-category-list" data-categoria="' + badge.codigoCategoria + '"><img src="' + badge.urlImagemBadge + '" alt="Badge Categoria" /></div>');
                    var $bandeiras = $item.find('.bandeiras-produto');
                    if ($bandeiras.length) {
                        $badge.insertBefore($bandeiras);
                    }
                }
            });
        });

        // Verifica se está na página de categoria antes de executar
        if ($('.pagina-categoria').length > 0) {
            // Altera o atributo data-produtos-linha para 3
            $('#listagemProdutos').attr('data-produtos-linha', '3');
            
            // Reorganiza os produtos em grupos de 3 por linha
            var produtos = $('.listagem-item').parent('li');
            var totalProdutos = produtos.length;
            
            // Remove todas as linhas existentes
            $('.listagem-linha').remove();
            
            // Cria novas linhas com 3 produtos cada
            for (var i = 0; i < totalProdutos; i += 3) {
                var novaLinha = $('<li class="listagem-linha"></li>');
                var novoUl = $('<ul></ul>');
                
                // Adiciona até 3 produtos na linha atual
                for (var j = 0; j < 3 && (i + j) < totalProdutos; j++) {
                    var produto = produtos.eq(i + j);
                    produto.removeClass('span3').addClass('span4');
                    novoUl.append(produto);
                }
                
                novaLinha.append(novoUl);
                $('#listagemProdutos > ul').append(novaLinha);
            }
        }

    } else {
        //mobile 

    }
});

});