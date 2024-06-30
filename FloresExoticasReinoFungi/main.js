document.addEventListener("DOMContentLoaded", function() {
    const florList = document.getElementById('flor-list');

    florData.forEach(flor => {
        const item = document.createElement('div');
        item.className = 'col-md-4 item';
        
        const img = document.createElement('img');
        img.src = flor.imagen;
        img.alt = flor.nombre;
        
        const nombre = document.createElement('h3');
        nombre.textContent = flor.nombre;
        
        const descripcion = document.createElement('p');
        descripcion.textContent = flor.descripcion;
        
        item.appendChild(img);
        item.appendChild(nombre);
        item.appendChild(descripcion);
        
        florList.appendChild(item);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const florList = document.getElementById("flor-list");
    flores.forEach(flor => {
        const florDiv = document.createElement("div");
        florDiv.className = "item";
        florDiv.innerHTML = `
            <img src="${flor.imagen}" alt="${flor.nombre}">
            <h3>${flor.nombre}</h3>
            <p>${flor.descripcion}</p>
        `;
        florList.appendChild(florDiv);
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    showSection("inicio");
});

