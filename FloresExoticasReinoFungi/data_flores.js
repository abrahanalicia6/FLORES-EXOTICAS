
const florData = [
    {
     nombre: "Orquídea Fantasma", 
     descripcion: "Una flor exótica y rara que crece en los pantanos.",
     imagen: "https://i.postimg.cc/FzDz5Pxg/1.jpg" },
    {  
    nombre: "Rafflesia Arnoldii", 
    descripcion: "La flor más grande del mundo, conocida por su fuerte olor.",
    imagen: "https://i.postimg.cc/908mNDWL/2.jpg" },
    { 
    nombre: "Flor de Kadupul",
    descripcion: "Una flor nocturna que florece solo una vez al año.",
    imagen: "https://i.postimg.cc/76qqH3hB/3.jpg" },
    { 
    nombre: "Dama de Noche", 
    descripcion: "Conocida por su fragancia intensa que se libera por la noche.",
    imagen: "https://i.postimg.cc/W4nQ7Qpn/5.jpg" },
    { 
     nombre: "Flor de Cadáver",
    descripcion: "Emite un olor fuerte y desagradable para atraer polinizadores.", 
    imagen: "https://i.postimg.cc/QN9jXddZ/6.jpg" },
    { 
    nombre: "Orquídea Azul", 
    descripcion: "Con pétalos de un color azul brillante y raro.", 
    imagen: "https://i.postimg.cc/t4ybtdt9/7.jpg" },
    { 
    nombre: "Flor de Jade", 
    descripcion: "Con pétalos de un vibrante color azul verdoso.", 
    imagen: "https://i.postimg.cc/GhxVRWG1/8.jpg" },
    { 
    nombre: "Rosa del Desierto", 
    descripcion: "Una planta suculenta con flores de colores brillantes.", 
    imagen: "https://i.postimg.cc/fLdqrpDp/9.jpg" },
    { 
     nombre: "Ave del Paraíso", 
     descripcion: "Con flores que se asemejan a un pájaro en vuelo.", 
     imagen: "https://i.postimg.cc/D0BrjPJR/10.jpg" },
    { 
    nombre: "Loto Sagrado", 
     descripcion: "Símbolo de pureza y belleza en muchas culturas.", 
     imagen: "https://i.postimg.cc/bN4Dz5h3/11.jpg" },
    { 
    nombre: "Flor de Llama", 
    descripcion: "Con pétalos de color rojo brillante que parecen llamas.", 
    imagen: "https://i.postimg.cc/0Q5rWRY2/12.jpg" },
    { 
    nombre: "Campanilla Azul", 
    descripcion: "Conocida por su color azul y su forma de campana.", 
    imagen: "https://i.postimg.cc/4NRyq9bS/13.jpg" },
    { 
    nombre: "Flor de Mariposa", 
    descripcion: "Con pétalos que se asemejan a alas de mariposa.", 
    imagen: "https://i.postimg.cc/MGnzv6mB/14.jpg" },
    { 
     nombre: "Hibisco", 
     descripcion: "Una flor tropical con pétalos grandes y vistosos.", 
     imagen: "https://i.postimg.cc/SQ6kXtCg/15.jpg" },
    {
     nombre: "Flor de Cerezo", 
     descripcion: "Símbolo de la primavera en Japón, con flores rosadas.", 
     imagen: "https://i.postimg.cc/B6Wfbx6W/16.jpg" },
    {
     nombre: "Flor de Loto Azul", 
     descripcion: "Una variante rara del loto con pétalos azules.", 
     imagen: "https://i.postimg.cc/kMvPMRPZ/17.jpg" },
    { 
    nombre: "Girasol Gigante", 
    descripcion: "Conocido por su gran tamaño y su seguimiento del sol.", 
    imagen: "https://i.postimg.cc/Tw2qrshn/18.jpg" },
    { 
    nombre: "Flor de Chocolate", 
    descripcion: "Emite un aroma que se asemeja al chocolate.", 
    imagen: "https://i.postimg.cc/ZYMFdVmy/19.jpg" },
    {
     nombre: "Protea", 
     descripcion: "Con flores grandes y vistosas, originarias de Sudáfrica.", 
     imagen: "https://i.postimg.cc/G2pGBsSQ/20.jpg" },
    {
    nombre: "Flor de Tigridia", 
    descripcion: "Conocida por sus colores vibrantes y patrones moteados.", 
    imagen: "https://i.postimg.cc/ZKN3ymj1/21.jpg" },
    { 
    nombre: "Flor de Lirio de los Incas", 
    descripcion: "Con pétalos coloridos y rayados, nativa de América del Sur.",
    imagen: "https://i.postimg.cc/wMmtJ55h/22.jpg" },
    { 
    nombre: "Flor de Loto Rosa", 
    descripcion: "Una variante del loto con pétalos rosados.", 
    imagen: "https://i.postimg.cc/DzvC76Lp/23.jpg" },
    {
     nombre: "Flor de Luna", 
     descripcion: "Florece de noche y tiene pétalos blancos y fragantes.", 
     imagen: "https://i.postimg.cc/DZb1h4jY/P8260011-thumb.jpg" },
    {
     nombre: "Flor de Nenúfar", 
     descripcion: "Conocida por flotar en el agua y sus grandes pétalos.", 
     imagen: "https://i.postimg.cc/QxMxWZsj/9aa54e6e94371adbcd464c420639dcbe.jpg" },
    { 
    nombre: "Orquídea Negra", 
    descripcion: "Una rara orquídea con pétalos de color negro profundo.", 
    imagen: "https://i.postimg.cc/Znm8bKyP/orquidea-negra.jpg" },
    { 
    nombre: "Flor de Pasiflora", 
    descripcion: "Con pétalos y estambres que forman un intrincado diseño.", 
    imagen: "https://i.postimg.cc/nz4mPbwX/Passion-Flower-Osaka.jpg" },
    { 
    nombre: "Flor de Cactus", 
    descripcion: "Flores que emergen de los cactus, a menudo de colores brillantes.", 
    imagen: "https://i.postimg.cc/PfMZbHwc/que-son-los-cactus-1636-0-600.jpg" },
    {
     nombre: "Flor de Belladonna", 
     descripcion: "Conocida por su belleza y su toxicidad.", 
     imagen: "https://i.postimg.cc/NjZrGf3y/flores-amaryllis-belladonna-rosa.jpg" },
    { 
    nombre: "Flor de Crisantemo", 
    descripcion: "Símbolo de longevidad y rejuvenecimiento.",
    imagen: "https://i.postimg.cc/DZTJspyn/crisantemo-scaled-1.jpg" },
    { 
    nombre: "Flor de Lirio de Agua", 
    descripcion: "Con grandes pétalos y colores variados, común en estanques.", 
    imagen: "https://i.postimg.cc/6q68b7vP/lirio-de-agua-cuidados-y-significado-1842-orig.jpg" }
];
