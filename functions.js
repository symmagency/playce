$(document).ready(function() {

// alterações gerais
$('.conteudo-topo .inferior .busca-mobile input').attr('placeholder','Buscar...');

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