$(document).ready(function() {

$(window).on('resize', function() {

    if ($(window).width() > 768) {
        //desktop
        $('.conteudo-topo .inferior .busca-mobile').after(`
        <div class="sign-up-header">
            <a href="./conta/login?next=/conta/index">
                <span>Entrar</span>
                <i class="user"></i>
            </a>
        </div>    
        `);

    } else {
        //mobile 

    }
});

});