const cantidadImagenes = 8;  // Número total de imágenes en la carpeta
const galeria = document.getElementById("galeria");

for (let i = 1; i <= cantidadImagenes; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = `imagenes/${i}.jpeg`; // Ajuste a formato .jpeg
    imgElement.classList.add("img-fluid", "rounded", "border", "border-danger", "shadow", "col-md-4");
    imgElement.alt = `Imagen de masaje ${i}`;
    galeria.appendChild(imgElement);
}
