const ul = document.getElementsByTagName('ul');
const menuBtn = document.querySelector('.menu-btn i');

/* Show Menu */
function menuShow() {
    if (ul[0].classList.contains('open')) {
        ul[0].classList.remove('open');
    }else{
        ul[0].classList.add('open');
    }
}

/* Função que renderiza a navBar */
function showNavBar(){
    const nav = document.createElement('header');
    nav.innerHTML = `
    <nav>
            <div class="ajustaLogo">
                <!-- Colocar a logo aqui -->
                <img src="../assets/img/logo.png" alt="Logo" class="logoImg">
                <a class="logo" href="#">Finange</a>
            </div>
            <!-- Menu Responsivo -->
            <div class="menu-btn">
                <i class="fa fa-bars fa-2x" onclick="menuShow()"></i>
            </div>
            <!-- x Menu Responsivo x -->
            <ul class="nav-list">
                <!--  Links para proximas pag  -->
                <!-- Class="active" mostra qual pág está selecionada -->
                <li><a href="#" class="active">Inicio</a></li>
                <li><a href="#">Dashboard</a></li>
                <li>
                    <div class="login-btn">
                        <a href="/pages/login.html">
                            <span>Login</span>
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    `;
    //Injeta a nav no <body>
    document.body.prepend(nav);
}

// Quando a pagina terminar de carregar a nav irá carregar
document.addEventListener("DOMContentLoaded", function(event) {
    showNavBar()
});