$(document).ready(function() {

// alterações gerais

$('.conteudo-topo .inferior .busca-mobile input').attr('placeholder','Buscar...');
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

    } else {
        //mobile 

    }
});

});