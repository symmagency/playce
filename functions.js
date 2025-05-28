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
        //desktop
        $('.conteudo-topo .inferior .busca-mobile').after(`
        <div class="sign-up-header">
            <a href="../conta/login?next=/conta/index">
                <span>Entrar</span>
                <i class="user"></i>
            </a>
        </div>    
        `);

        $('#cabecalho .conteudo-topo').prepend($('#cabecalho .menu.superior'));

    } else {
        //mobile 

    }
});

});