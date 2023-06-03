const imagen = document.getElementById("imagen-perfil");

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
    localStorage.setItem("theme", newTheme);
}