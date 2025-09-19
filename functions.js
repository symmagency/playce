$(document).ready(function() {

// alterações gerais
$('.selos li:first-child img').attr('src','https://cdn.awsli.com.br/2830/2830294/arquivos/site-protegido.svg');
$('#rodape>div:last-child .conteiner .row-fluid div:not(.span12)').before(`<div style="" class="assinatura-rodape"><a href="https://wa.me/5511939593709" class="symm" target="_blank"><img src="https://cdn.awsli.com.br/1041/1041512/arquivos/desenvolvido-symm.svg" alt="Symm.agency" width="120px" height="35px"></a></div>`)
$('#cabecalho .conteiner .row-fluid .logo a img').clone().prependTo($('#rodape>div:last-child .conteiner .row-fluid > .span9.span12'));
$('.assinatura-rodape').append($('#rodape>div:last-child .conteiner .row-fluid div:not(.span12, .assinatura-rodape)'));
$('.assinatura-rodape div a img').attr('src','https://cdn.awsli.com.br/2830/2830294/arquivos/li-logo-rp.svg');
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
$('#rodape .institucional > .conteiner > .row-fluid > .span9 > .row-fluid').append(`
    <div class="append-support">
    <div class="info-section">
    <span class="titulo">Atendimento</span>
    <p>
        Nosso atendimento ocorre todos os dias das 9h às 22h.<br>
        Para iniciar um atendimento clique no botão abaixo.
    </p>
    <a href="#" target="_blank" class="botao secundario">
        Iniciar atendimento
        <i></i>
    </a>
    </div>
    
    <div class="info-section">
    <span class="titulo">Envio</span>
    <p>
        Todos os nossos gift cards e produtos digitais são enviados de forma 100% online, garantindo agilidade e segurança.
    </p>
    </div>
    </div>
`);
$('.barra-inicial .lista-redes').removeClass('span3').appendTo($('.barra-inicial .canais-contato ul'));
$('.barra-inicial .conteiner > .row-fluid').prepend(`
    <div class="append-benefits">
       <div>
           <i></i><span>Keys originais</span>
       </div>
       <div>
           <i></i><span>Segurança garantida</span>
       </div>
     </div>
`);

var $slider = $('#listagemProdutos ul .flex-viewport > ul');

$slider.removeAttr('style');
$slider.find('li').removeAttr('style');

$slider.slick({
    dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                dots: true
            }
            }
        ]
});

// Categorias home
var categorias = [
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/apple-cat.svg",
        alt: "Categoria Apple",
        link: "/apple"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/google-cat.svg",
        alt: "Categoria Google",
        link: "/google"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/play-cat.svg",
        alt: "Categoria PlayStation",
        link: "/playstation"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/nintendo-cat.svg",
        alt: "Categoria Nintendo",
        link: "/nintendo"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/v-bucks-cat.svg",
        alt: "Categoria V-bucks",
        link: "/v-bucks"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/xbox-cat.svg",
        alt: "Categoria Xbox",
        link: "/xbox"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/apple-cat.svg",
        alt: "Categoria Apple",
        link: "/apple"
    },
    {
        img: "https://cdn.awsli.com.br/2830/2830294/arquivos/google-cat.svg",
        alt: "Categoria Google",
        link: "/google"
    }
];


// Insere a seção de categorias antes de .pagina-inicial #corpo
if ($('.pagina-inicial #corpo').length > 0) {
    var categoriasHtml = '<div class="categorias-section"><span class="titulo-categoria"><strong>Compre por marca ou jogo</strong></span><ul>';
    
    categorias.forEach(function(categoria) {
        categoriasHtml += '<li><a href="' + categoria.link + '"><img src="' + categoria.img + '" alt="' + categoria.alt + '" /></a></li>';
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

// TAGS DE PRÉ-VENDA E CUPOM POR PRODUTO
var tagsProdutos = [
    {
        id: '359139343', // ID do produto
        tags: [
            { tipo: 'pre-venda', texto: 'Pré-venda' },
            { tipo: 'cupom', texto: 'CUPOM: 10OFF' }
        ]
    },
    // Adicione mais objetos conforme necessário
];

tagsProdutos.forEach(function(produto) {
    var $item = $('.listagem-linha .prod-id-' + produto.id);
    if ($item.length) {
        var $bandeiras = $item.find('.bandeiras-produto');
        if ($bandeiras.length) {
            produto.tags.forEach(function(tag) {
                // Define o HTML correto para cada tipo de tag
                var tagHtml = '';
                if (tag.tipo === 'pre-venda') {
                    tagHtml = '<span class="bandeira-prevenda">' + tag.texto + '</span>';
                } else if (tag.tipo === 'cupom') {
                    tagHtml = '<span class="bandeira-cupom">' + tag.texto + '</span>';
                }
                $bandeiras.append(tagHtml);
            });
        }
    }

    // Adiciona as badges na página de produto
    var $nomeProduto = $('.produto-' + produto.id + ' .produto div.principal .nome-produto');
    if ($nomeProduto.length) {
        // Gera o HTML das tags dentro de uma div com a classe "append-flags"
        var tagsHtml = '';
        produto.tags.forEach(function(tag) {
            if (tag.tipo === 'pre-venda') {
                tagsHtml += '<span class="bandeira-prevenda">' + tag.texto + '</span>';
            } else if (tag.tipo === 'cupom') {
                tagsHtml += '<span class="bandeira-cupom">' + tag.texto + '</span>';
            }
        });
        // Envolve as tags na div "append-flags"
        var flagsDiv = '<div class="append-flags">' + tagsHtml + '</div>';
        // Adiciona antes do .nome-produto
        $nomeProduto.before(flagsDiv);
    }
});

// Para cada imagem que usa um map
$('img[usemap]').each(function() {
    var $img = $(this);
    var usemap = $img.attr('usemap'); // Ex: "#map-banner-4081482"
    if (!usemap) return;

    // Remove o "#" para buscar pelo atributo name
    var mapName = usemap.replace('#', '');
    var $map = $('map[name="' + mapName + '"]');

    // Se encontrou o map correspondente
    if ($map.length) {
        // Cria uma nova div
        var $newDiv = $('<div class="banner-map-group"></div>');

        // Move o <img> e o <map> para dentro da nova div
        // Também move o <a> pai do <img> se existir
        var $imgParent = $img.parent('a').length ? $img.parent('a') : $img;
        $imgParent.before($newDiv); // Insere a nova div antes do <img> ou <a>
        $newDiv.append($imgParent);
        $newDiv.append($map);
    }
});

// Defina os arrays conforme necessário
var numerosBanner = [1, 2]; // Exemplo: [1, 2] para o primeiro e segundo banner, etc.
var idsVitrine = ['23507360', '23387230']; // Exemplo: ['23507360', '23507361']

// Seleciona todos os banners ANTES de mover
var banners = $('.banner-map-group').toArray();

// Função para mover vários banners para várias vitrines
function moverBannersParaVitrines(numerosBanner, idsVitrine) {
  for (var i = 0; i < numerosBanner.length; i++) {
    var numeroBanner = numerosBanner[i];
    var idVitrine = idsVitrine[i];
    // Seleciona o banner pelo índice (começando do 1 para o usuário)
    var bannerSelecionado = $(banners[numeroBanner - 1]);
    // Monta o seletor da vitrine pelo ID
    var seletorVitrine = '.vitrine-' + idVitrine;
    // Move o banner antes da vitrine desejada
    $(seletorVitrine).before(bannerSelecionado);
  }
}

// Chame a função
moverBannersParaVitrines(numerosBanner, idsVitrine);


// Defina as variáveis para personalizar o banner
var bannerTitulo = "Marvel's Spider-Man 2";
var bannerDescricao = "Mascare-se para mais heroísmos emocionantes de arremessos de teias enquanto Marvel’s Spider-Man 2 chega ao PC.";
var bannerPreco = "R$ 299,99";
var bannerDesconto = "-10% OFF";
var bannerTextoBotao = "Comprar agora";
var bannerLinkBotao = "#";
var bannerVideoUrl = "https://www.youtube.com/embed/ENf1yjCMpZo";
var videoId = "ENf1yjCMpZo";
var bannerVideoWidth = 360;
var bannerVideoHeight = 202;

// Monta o HTML usando as variáveis acima
var htmlBanner = `
  <div class="banner-fundo">
    <div class="game-promo" >
        <div class="game-title">${bannerTitulo}</div>
        <div class="game-description">
            ${bannerDescricao}
        </div>
        <div class="game-price-section" >
            <span class="game-price">${bannerPreco}</span>
            <span class="discount-tag">${bannerDesconto}</span>
        </div>
        <a href="${bannerLinkBotao}" class="buy-now-btn">
            ${bannerTextoBotao}
        </a>
    </div>
    <div class="video-fundo">
      <iframe width="${bannerVideoWidth}" height="${bannerVideoHeight}" src="${bannerVideoUrl}?rel=0?version=3&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=${videoId}" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
`;

// Insere o HTML antes do seletor .secao-banners
$('.pagina-inicial .secao-banners').before(htmlBanner);

// Variáveis para personalizar as informações da tarja de benefícios
var benefit1Icon = "https://cdn.awsli.com.br/2830/2830294/arquivos/tarja-icon-mailcheck.svg";
var benefit1IconAlt = "Ícone de e-mail";
var benefit1Title = "Receba por e-mail";
var benefit1Description = "Seu código digital vai direto para o seu e-mail";

var benefit2Icon = "https://cdn.awsli.com.br/2830/2830294/arquivos/tarja-icon-send.svg";
var benefit2IconAlt = "Ícone de envio rápido";
var benefit2Title = "Entrega rápida e segura";
var benefit2Description = "Enviado logo após a confirmação do pagamento";

var benefit3Icon = "https://cdn.awsli.com.br/2830/2830294/arquivos/tarja-icon-star.svg";
var benefit3IconAlt = "Ícone de avaliação";
var benefit3Title = "Avaliação 4.9 dos clientes";
var benefit3Description = "Quem compra, recomenda.";

// Monta o HTML usando as variáveis acima
var htmlBenefits = `
  <div class="benefits-row">
    <div class="benefit-item">
      <img src="${benefit1Icon}" alt="${benefit1IconAlt}">
      <div>
        <span>${benefit1Title}</span>
        <p><strong>${benefit1Description}</strong></p>
      </div>
    </div>
    <div class="benefit-item">
      <img src="${benefit2Icon}" alt="${benefit2IconAlt}">
      <div>
        <span>${benefit2Title}</span>
        <p><strong>${benefit2Description}</strong></p>
      </div>
    </div>
    <div class="benefit-item">
      <img src="${benefit3Icon}" alt="${benefit3IconAlt}">
      <div>
        <span>${benefit3Title}</span>
        <p><strong>${benefit3Description}</strong></p>
      </div>
    </div>
  </div>
`;

// Insere o HTML no local desejado (substitua o seletor conforme necessário)
$('.pagina-inicial .secao-banners .conteiner').after(htmlBenefits);

// Ajusta as tags na vitrine
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


$('.pagina-produto .span5 > .principal').append(`<div class="append-share-fav"></div>`);
$('.append-share-fav').append($('.produto-compartilhar .lista-favoritos'));

// Botão de compartilhar nas redes sociais
var btnShare = $('<button type="button" class="btn-share">Compartilhar</button>');
$('.append-share-fav').append(btnShare);

btnShare.on('click', function() {
    var url = window.location.href;
    var title = document.title;

    // Opções de redes sociais
    var shareLinks = [
        {
            nome: 'Facebook',
            url: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url)
        },
        {
            nome: 'Twitter',
            url: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title)
        },
        {
            nome: 'WhatsApp',
            url: 'https://api.whatsapp.com/send?text=' + encodeURIComponent(title + ' ' + url)
        }
    ];

    // Cria um menu simples de compartilhamento
    var $menu = $('<div class="share-menu"></div>');
    shareLinks.forEach(function(rede) {
        var $link = $('<a href="' + rede.url + '" target="_blank" rel="noopener noreferrer">' + rede.nome + '</a><br>');
        $menu.append($link);
    });

    // Remove menu anterior, se existir
    $('.share-menu').remove();

    // Adiciona o menu após o botão
    btnShare.after($menu);

    // Fecha o menu ao clicar fora
    $(document).on('click.shareMenu', function(e) {
        if (!$(e.target).closest('.btn-share, .share-menu').length) {
            $('.share-menu').remove();
            $(document).off('click.shareMenu');
        }
    });
});


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

        $('.pagina-produto .span12.produto').prepend($('.info-principal-produto .breadcrumbs'));
        $('#cabecalho .conteudo-topo').prepend($('#cabecalho .menu.superior'));
        $('.pagina-produto').prepend($('.append-bg-product'));
        $('.pagina-categoria .conteudo').prepend($('.pagina-categoria .breadcrumbs'));
        $('.pagina-categoria .conteudo .ordenar-listagem.topo > .row-fluid').prepend($('.pagina-categoria .conteudo h1'));
        
        

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

        // Input de quantidade antes do botão de comprar
        $('.listagem-item .botao-comprar').each(function() {
            // Evita duplicar o input se já existir
            if($(this).prev('.quantidade-wrapper').length === 0) {
                var quantidadeHtml = '<div class="quantidade-wrapper">' +
                    '<button type="button" class="btn-quantidade btn-menos" >-</button>' +
                    '<input type="number" min="1" value="1" class="input-quantidade" />' +
                    '<button type="button" class="btn-quantidade btn-mais">+</button>' +
                    '</div>';
                $(quantidadeHtml).insertBefore($(this));
            }
        });

        // Após inserir os inputs, force o slick a recalcular
        $('.slick-initialized').slick('setPosition');

        // Atualiza o link ao alterar a quantidade
        function atualizarHref($input) {
            var quantidade = parseInt($input.val(), 10);
            if (isNaN(quantidade) || quantidade < 1) quantidade = 1;
            $input.val(quantidade);
            var $botao = $input.closest('.quantidade-wrapper').next('.botao-comprar');
            var hrefOriginal = $botao.attr('href').replace(/\/adicionar\/(\d+)?$/, '/adicionar');
            $botao.attr('href', hrefOriginal + '/' + quantidade);
        }

        // Eventos para input manual
        $(document).on('input change', '.input-quantidade', function() {
            atualizarHref($(this));
        });

        // Evento para botão de menos
        $(document).on('click', '.btn-menos', function() {
            var $input = $(this).siblings('.input-quantidade');
            var valorAtual = parseInt($input.val(), 10) || 1;
            if (valorAtual > 1) {
                $input.val(valorAtual - 1).trigger('change');
            }
        });

        // Evento para botão de mais
        $(document).on('click', '.btn-mais', function() {
            var $input = $(this).siblings('.input-quantidade');
            var valorAtual = parseInt($input.val(), 10) || 1;
            $input.val(valorAtual + 1).trigger('change');
        });
        

    } else {
        //mobile 
        $('#cabecalho .span3 > .logo').before($('.conteudo-topo .busca-mobile .atalho-menu'));
        $('#cabecalho .span3 > .logo').after($('.conteudo-topo .inferior .hidden-phone .carrinho'));
        $('.menu.superior').append('<button class="close-menu">X</button>');
        $('.close-menu').click(function(){
           $('.menu.superior .nivel-um').removeClass('active');
        });
        $('.menu.superior .nivel-um').prepend(`
            <div class="account-menu">
              <div class="hello-menu">
                <i></i>Olá, visitante!
              </div>
              <button class="myaccount">
                Minha conta
              </button>
              <button class="myorders">
                Meus pedidos
              </button>
            </div>
        `);

        $('body').append(`
            <div class="floating-bar">
              <a class="floating-bar-item" href="/contato">
                <span class="icon-contato"></span>
                <span class="floating-bar-label">Contato</span>
              </a>
              <a class="floating-bar-item" href="/conta/login">
                <span class="icon-conta"></span>
                <span class="floating-bar-label">Conta</span>
              </a>
              <a class="floating-bar-item" href="/conta/pedidos">
                <span class="icon-pedidos"></span>
                <span class="floating-bar-label">Pedidos</span>
              </a>
              <a class="floating-bar-item" href="/favoritos">
                <span class="icon-favoritos"></span>
                <span class="floating-bar-label">Favoritos</span>
              </a>
              <a class="floating-bar-item search-bar" href="#">
                <span class="icon-buscar"></span>
                <span class="floating-bar-label">Buscar</span>
              </a>
            </div>
        `);

        $('.search-bar').on('click', function () {
            $('.busca #form-buscar input#auto-complete').focus();
        });


        if ($('#cabecalho .sign-up-header').length === 0) {
            $('#cabecalho .span3 > .logo').after(`
                <div class="sign-up-header">
                    <a href="../conta/login?next=/conta/index">
                        <i class="user"></i>
                    </a>
                </div>    
            `);
        }

        // Array de banners: cada objeto define o seletor do li (ex: 'first-child', '2', 'nth-child(3)') e o link da imagem
        var banners = [
            { posicao: 'first-child', imagem: 'https://cdn.awsli.com.br/2830/2830294/arquivos/gow-r.png' },
            { posicao: '2', imagem: 'https://cdn.awsli.com.br/2830/2830294/arquivos/banner_m2.png' },
        ];

        banners.forEach(function(banner) {
            var seletorLi;
            // Se for um número, assume nth-child
            if (/^\d+$/.test(banner.posicao)) {
                seletorLi = 'li:nth-child(' + banner.posicao + ')';
            } else {
                seletorLi = 'li:' + banner.posicao;
            }
            $('.banner.cheio .slides ' + seletorLi + ' > a > img').attr('src', banner.imagem);
        });

        // Agora é possível alterar vários banners usando um array de objetos
        var bannersMapeados = [
            { map: '4080625', imagem: 'https://cdn.awsli.com.br/2830/2830294/arquivos/tempest-m1.png' },
            { map: '4081482', imagem: 'https://cdn.awsli.com.br/2830/2830294/arquivos/siege-m.png' }
        ];

        bannersMapeados.forEach(function(banner) {
            $('img[usemap="#map-banner-' + banner.map + '"]').attr('src', banner.imagem);
        });

        // Defina as variáveis para imagem, título e texto
        var featuredImg = "https://cdn.awsli.com.br/2830/2830294/arquivos/gta-v-featured.png";
        var featuredTitle = "GTA 6";
        var featuredText = "Será o oitavo título principal da franquia Grand Theft Auto, sendo o sucessor de GTA V.";

        // Só insere se ainda não existe o .append-featured
        if ($('#listagemProdutos > .vitrine-23499980+ul .listagem-linha .append-featured').length === 0) {
            $('#listagemProdutos > .vitrine-23499980+ul .listagem-linha').prepend(`
                <div class="append-featured">
                  <div class="featured-image">
                    <img src="${featuredImg}" alt="">
                  </div>
                  <div class="featured-title">
                    <h2>${featuredTitle}</h2>
                    <span>${featuredText}</span>
                  </div>
                </div>
            `);
        }
    }


// Estrutura para múltiplas categorias, cada uma com seu próprio FAQ e título customizável
var faqsPorCategoria = [
    {
        id: '23387220', // Exemplo de ID de categoria
        titulo: "PlayStation", // Título customizável para esta categoria
        faqs: [
            {
                pergunta: "O que é um Gift Card da PlayStation Store?",
                resposta: "Um Gift Card da PlayStation Store é um cartão pré-pago que pode ser utilizado para adicionar créditos à sua conta PlayStation, permitindo a compra de jogos, assinaturas e outros conteúdos digitais."
            },
            {
                pergunta: "Como posso resgatar um Gift Card da PlayStation Store?",
                resposta: "<ol><li>No console PlayStation 4 ou PlayStation 5:<ol type='a'><li>Acesse a PlayStation Store no menu principal.</li><li>Selecione 'Resgatar Códigos'.</li><li>Digite o código do Gift Card e siga as instruções.</li></ol></li><li>Pela web ou aplicativo do PlayStation App:<ol type='a'><li>Faça login na sua conta PlayStation.</li><li>No menu, selecione 'Resgatar Códigos'.</li><li>Digite o código de 12 dígitos do cartão.</li></ol></li></ol>"
            },
            {
                pergunta: "Onde posso comprar Gift Cards da PlayStation Store?",
                resposta: "Você pode adquirir Gift Cards em lojas físicas, supermercados, lojas online ou diretamente em revendedores autorizados."
            },
            {
                pergunta: "Posso usar um Gift Card para comprar assinaturas do PlayStation Plus?",
                resposta: "Sim, os créditos adicionados à sua conta com o Gift Card podem ser usados para adquirir assinaturas do PlayStation Plus."
            },
            {
                pergunta: "É possível comprar moedas virtuais de jogos, como V-Bucks do Fortnite, com um Gift Card?",
                resposta: "Sim, após resgatar o Gift Card, você pode usar o saldo para comprar moedas virtuais de diversos jogos disponíveis na PlayStation Store."
            }
        ]
    },
    // Adicione outros objetos de categoria conforme necessário, mudando o id, o título e as perguntas/respostas
];

// Função para criar o HTML do FAQ, agora aceita o título como parâmetro
function criarFaqHtml(faqs, titulo) {
    var html = '<div class="faq-categoria"><h2>' + (titulo || 'Perguntas Frequentes') + '</h2>';
    faqs.forEach(function(faq, idx) {
        html += `
        <div class="faq-item">
            <button class="faq-pergunta" type="button" aria-expanded="false" aria-controls="faq-resposta-${idx}">${faq.pergunta}</button>
            <div class="faq-resposta" id="faq-resposta-${idx}" style="display:none;">${faq.resposta}</div>
        </div>
        `;
    });
    html += '</div>';
    return html;
}

// Insere o FAQ em cada categoria definida, usando o título customizável se existir
faqsPorCategoria.forEach(function(cat) {
    var seletor = '.categoria-' + cat.id + ' .secao-principal .conteudo.span9';
    if ($(seletor).length > 0) {
        // Evita duplicação
        if ($(seletor + ' .faq-categoria').length === 0) {
            $(seletor).append(criarFaqHtml(cat.faqs, cat.titulo));
        }
    }
});

// Evento para abrir/fechar as respostas
$(document).on('click', '.faq-pergunta', function() {
    var $btn = $(this);
    var $resposta = $btn.next('.faq-resposta');
    var aberto = $btn.attr('aria-expanded') === 'true';
    $('.faq-pergunta').attr('aria-expanded', 'false');
    $('.faq-resposta').slideUp(200);
    if (!aberto) {
        $btn.attr('aria-expanded', 'true');
        $resposta.slideDown(200);
    }
});

});


