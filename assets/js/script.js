// Arrays com os caminhos das imagens
const retratos = ["./assets/img/retrato1.jpg", "./assets/img/retrato2.jpg", "./assets/img/retrato3.jpg", "./assets/img/retrato4.jpg", "./assets/img/retrato5.jpg"];

const paisagens = ["./assets/img/paisagem1.jpg", "./assets/img/paisagem2.jpg", "./assets/img/paisagem3.jpg", "./assets/img/paisagem4.jpg", "./assets/img/paisagem5.jpg"];

const concertos = ["./assets/img/concerto1.jpg", "./assets/img/concerto2.jpg", "./assets/img/concerto3.jpg", "./assets/img/concerto4.jpg", "./assets/img/concerto5.jpg"];

const desportos = ["./assets/img/desporto1.jpg", "./assets/img/desporto2.jpg", "./assets/img/desporto3.jpg", "./assets/img/desporto4.jpg", "./assets/img/desporto5.jpg"];

//Função que determina qual array de imagens usar
function mostrarGaleria(galeria) {

  // Seleciona o container do carousel
  const carouselInner = document.querySelector(
    "#carouselExampleIndicators .carousel-inner"
  );

  // Define qual array usar
  let imagensSel = [];
  if (galeria === "retratos") {
    imagensSel = retratos;
  } else if (galeria === "paisagens") {
    imagensSel = paisagens;
  } else if (galeria === "concertos") {
    imagensSel = concertos;
  } else if (galeria === "desportos") {
    imagensSel = desportos;
  }

  // Limpa o carousel atual
  carouselInner.innerHTML = "";

  // Cria slides para cada imagem
  imagensSel.forEach((src, index) => {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    const img = document.createElement("img");
    img.src = src;
    img.classList.add("d-block", "w-100", "h-100");

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem);
  });
}
