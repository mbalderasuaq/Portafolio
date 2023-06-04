const imagen = document.getElementById("imagen-perfil");

function openBtn(){
    document.getElementById("menu-mobil").style.width = "100%";
}

function closeBtn(){
    document.getElementById("menu-mobil").style.width = "0px";
}

function setDarkMode(){
    setUserTheme("dark");
    imagen.src = "assets/img/perfil.png";
}

function setLightMode(){
    setUserTheme("light");
    imagen.src = "assets/img/perfil2.png";
}

function setUserTheme(newTheme){
    document.documentElement.setAttribute("data-theme", newTheme);
}