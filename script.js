function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar  a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver lihgt mode, adicionar imagem light
    img.setAttribute("src","./assets/avatar.will.png")
  } else {
    //se tiver sem lihgt mode, adicionar imagem normal
    img.setAttribute("src", "./assets/will_night.png")
  }

}