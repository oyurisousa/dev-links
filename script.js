function toggleMode(){
    const html = document.querySelector("html")
    html.classList.toggle("light")
    
    const profile = document.querySelector("#profile img")
    if (html.classList.contains("light")){
        profile.setAttribute("src","./assets/profile-light.svg")
    }else{
        profile.setAttribute("src","./assets/profile-yondaime.svg")

    }
}