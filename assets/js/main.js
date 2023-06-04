const imagen = document.getElementById("imagen-perfil");
const icono = document.getElementById("icono")

function openBtn(){
    document.getElementById("menu-mobil").style.width = "100%";
}

function closeBtn(){
    document.getElementById("menu-mobil").style.width = "0px";
}

function setDarkMode(){
    setUserTheme("dark");
    imagen.src = "assets/img/perfil-dark.png";
    icono.href = "assets/ico/icono-dark.ico"
}

function setLightMode(){
    setUserTheme("light");
    imagen.src = "assets/img/perfil-light.png";
    icono.href = "assets/ico/icono-light.ico"
}

function setUserTheme(newTheme){
    document.documentElement.setAttribute("data-theme", newTheme);
}