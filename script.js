// Lista de todas las imágenes de camisetas en la carpeta
const imagenesCamisetas = [
    "Image/Camisetas/boxy Waffle frizado negro 1.png",
    "Image/Camisetas/boxy Waffle frizado negro 2.png",
    "Image/Camisetas/musculosa negro off-white 1.png",
    "Image/Camisetas/musculosa negro off-white 2.png",
    "Image/Camisetas/r.boxy azul liquid 1.png",
    "Image/Camisetas/r.boxy azul liquid 2.png",
    "Image/Camisetas/r.boxy blanca liquid 1.png",
    "Image/Camisetas/r.boxy blanca liquid 2.png",
    "Image/Camisetas/r.boxy blanca swet 1.png",
    "Image/Camisetas/r.boxy blanca swet 2.png",
    "Image/Camisetas/r.boxy blanca unknow. 1.png",
    "Image/Camisetas/r.boxy blanca unknow. 2.png",
    "Image/Camisetas/r.boxy celeste new division 1.png",
    "Image/Camisetas/r.boxy celeste new division 2.png",
    "Image/Camisetas/r.boxy celeste spirit 1.png",
    "Image/Camisetas/r.boxy celeste spirit 2.png",
    "Image/Camisetas/r.boxy morocco surf trip 1.png",
    "Image/Camisetas/r.boxy morocco surf trip 2.png",
    "Image/Camisetas/r.boxy negra liquid 1.png",
    "Image/Camisetas/r.boxy negra liquid 2.png",
    "Image/Camisetas/r.boxy negro Open GFX 1.png",
    "Image/Camisetas/r.boxy negro Open GFX 2.png",
    "Image/Camisetas/r.boxy nevada cobre half-half 1.png",
    "Image/Camisetas/r.boxy nevada cobre half-half 2.png",
    "Image/Camisetas/r.boxy nevada negro half-half 1.png",
    "Image/Camisetas/r.boxy nevada negro half-half 2.png",
    "Image/Camisetas/r.boxy nevada negro Noir 1.png",
    "Image/Camisetas/r.boxy nevada negro Noir 2.png",
    "Image/Camisetas/r.boxy nevada negro risk 1.png",
    "Image/Camisetas/r.boxy nevada negro risk 2.png",
    "Image/Camisetas/r.oversized blanca delayed visions 1.png",
    "Image/Camisetas/r.oversized blanca delayed visions 2.png",
    "Image/Camisetas/r.oversized blanca echelon clothing 1.png",
    "Image/Camisetas/r.oversized blanca echelon clothing 2.png",
    "Image/Camisetas/r.oversized blanca grish 1.png",
    "Image/Camisetas/r.oversized blanca grish 2.png",
    "Image/Camisetas/r.oversized blanca mount everest 1.png",
    "Image/Camisetas/r.oversized blanca mount everest 2.png",
    "Image/Camisetas/r.oversized blanca mythical creatures 1.png",
    "Image/Camisetas/r.oversized blanca mythical creatures 2.png",
    "Image/Camisetas/r.oversized blanca street 1.png",
    "Image/Camisetas/r.oversized blanca street 2.png",
    "Image/Camisetas/r.oversized blanca Stüssy 1.png",
    "Image/Camisetas/r.oversized blanca Stüssy 2.png",
    "Image/Camisetas/r.oversized blanca us-nyc 1.png",
    "Image/Camisetas/r.oversized blanca us-nyc 2.png",
    "Image/Camisetas/r.oversized crema take off 1.png",
    "Image/Camisetas/r.oversized crema take off 2.png",
    "Image/Camisetas/r.oversized gris claro palm angels 1.png",
    "Image/Camisetas/r.oversized gris claro palm angels 2.png",
    "Image/Camisetas/r.oversized gris claro you are too close 1.png",
    "Image/Camisetas/r.oversized gris claro you are too close 2.png",
    "Image/Camisetas/r.oversized negro palm angels 1.png",
    "Image/Camisetas/r.oversized negro palm angels 2.png",
    "Image/Camisetas/r.oversized nevada azul distortion world 1.png",
    "Image/Camisetas/r.oversized nevada azul distortion world 2.png",
    "Image/Camisetas/r.oversized nevada rojo start great 1.png",
    "Image/Camisetas/r.oversized nevada rojo start great 2.png",
    "Image/Camisetas/r.regular another day crema 1.png",
    "Image/Camisetas/r.regular another day crema 2.png",
    "Image/Camisetas/r.regular another day negro 1.png",
    "Image/Camisetas/r.regular another day negro 2.png",
    "Image/Camisetas/r.regular blanca EST 2022 1.png",
    "Image/Camisetas/r.regular blanca EST 2022 2.png",
    "Image/Camisetas/r.regular blanca Vision 1.png",
    "Image/Camisetas/r.regular blanca Vision 2.png",
    "Image/Camisetas/r.regular Contrast Stitch negra 1.png",
    "Image/Camisetas/r.regular Contrast Stitch negra 2.png",
    "Image/Camisetas/r.regular lisa gris 1.png",
    "Image/Camisetas/r.regular lisa gris 2.png",
    "Image/Camisetas/r.regular nevada negra atelier amelot 1.png",
    "Image/Camisetas/r.regular nevada negra atelier amelot 2.png",
    "Image/Camisetas/r.regular nevada negro SSS 1.png",
    "Image/Camisetas/r.regular nevada negro SSS 2.png",
    "Image/Camisetas/r.regular rojo endlessly 1.png",
    "Image/Camisetas/r.regular rojo endlessly 2.png",
    "Image/Camisetas/remera boxy custom motors negra 1.png",
    "Image/Camisetas/remera boxy custom motors negra 2.png",
    "Image/Camisetas/remera boxy custom motors verde 1.png",
    "Image/Camisetas/remera boxy custom motors verde 2.png",
    "Image/Camisetas/remera boxy morley rayada beige 1.png",
    "Image/Camisetas/remera boxy morley rayada beige 2.png",
    "Image/Camisetas/remera boxy negro Swet 1.png",
    "Image/Camisetas/remera boxy negro Swet 2.png",
    "Image/Camisetas/remera boxy nevada negra 1.png",
    "Image/Camisetas/remera boxy nevada negra 2.png",
    "Image/Camisetas/remera boxy nevada negra colab 1.png",
    "Image/Camisetas/remera boxy nevada negra colab 2.png",
    "Image/Camisetas/remera champion L salmon 1.png",
    "Image/Camisetas/remera champion L salmon 2.png",
    "Image/Camisetas/remera L levi's amarilla 1.png",
    "Image/Camisetas/remera L levi's amarilla 2.png",
    "Image/Camisetas/remera L levi's verde 1.png",
    "Image/Camisetas/remera L levi's verde 2.png",
    "Image/Camisetas/remera M celeste Nike  1.png",
    "Image/Camisetas/remera M celeste Nike  2.png",
    "Image/Camisetas/remera oversized acids 1.png",
    "Image/Camisetas/remera oversized acids 2.png",
    "Image/Camisetas/remera oversized Dream crema 1.png",
    "Image/Camisetas/remera oversized Dream crema 2.png",
    "Image/Camisetas/remera oversized Dream negra 1.png",
    "Image/Camisetas/remera oversized Dream negra 2.png",
    "Image/Camisetas/remera oversized marron dollar 1.png",
    "Image/Camisetas/remera oversized marron dollar 2.png",
    "Image/Camisetas/remera oversized negra DR 1.png",
    "Image/Camisetas/remera oversized negra DR 2.png",
    "Image/Camisetas/remera oversized negro ocs 1.png",
    "Image/Camisetas/remera oversized negro ocs 2.png",
    "Image/Camisetas/remera XL Hilfiger 1.png",
    "Image/Camisetas/remera XL Hilfiger 2.png",
    "Image/Camisetas/remera XL marron tommy hilfiger 1.png",
    "Image/Camisetas/remera XL marron tommy hilfiger 2.png"
];

// Función para codificar URLs de imágenes con espacios
function codificarURLImagen(url) {
    // Usar encodeURI que codifica espacios pero mantiene las barras /
    // Esto es más apropiado para URLs completas de archivos
    return encodeURI(url);
}

// Función para extraer el nombre base de una imagen (sin número y extensión)
function obtenerNombreBase(imagen) {
    // Remover la ruta y obtener solo el nombre del archivo
    const nombreArchivo = imagen.split('/').pop();
    // Remover la extensión
    const sinExtension = nombreArchivo.replace(/\.(png|jpg|jpeg|heic|HEIC)$/i, '');
    // Remover comillas y espacios extra
    let nombreLimpio = sinExtension.replace(/[""]/g, '').trim();
    // Remover el número final (formato: "nombre 1", "nombre 2", "nombre-1", "nombre-2")
    // Buscar guión o espacio seguido de número al final
    let nombreBase = nombreLimpio.replace(/[- ]+\d+$/, '');
    
    // Normalizar casos especiales: "remera oversized acids" y "remera oversized blanca acids" deben ser el mismo
    if (nombreBase.includes('remera oversized') && nombreBase.includes('acids')) {
        // Si contiene "blanca acids", reemplazar por solo "acids"
        nombreBase = nombreBase.replace(/\s+blanca\s+acids$/, ' acids');
    }
    
    return nombreBase;
}

// Función para formatear el nombre del producto (más legible)
function formatearNombreProducto(nombreBase) {
    // Remover prefijos comunes como "r.", "r.boxy", etc.
    let nombre = nombreBase.replace(/^r\./i, '').trim();
    // Capitalizar primera letra de cada palabra
    // Manejar tanto espacios como guiones
    if (nombre.includes('-')) {
        // Si tiene guiones, dividir por guiones y capitalizar cada parte
        nombre = nombre.split('-').map(palabra => {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        }).join('-');
    } else {
        // Si tiene espacios, dividir por espacios y capitalizar cada parte
        nombre = nombre.split(' ').map(palabra => {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        }).join(' ');
    }
    return nombre;
}

// Función para agrupar imágenes por nombre base y generar productos
function generarProductosDesdeImagenes() {
    const grupos = {};
    
    // Agrupar imágenes por nombre base
    imagenesCamisetas.forEach(imagen => {
        const nombreBase = obtenerNombreBase(imagen);
        if (!grupos[nombreBase]) {
            grupos[nombreBase] = [];
        }
        grupos[nombreBase].push(imagen);
    });
    
    // Ordenar imágenes dentro de cada grupo (1, 2, 3...)
    Object.keys(grupos).forEach(nombreBase => {
        grupos[nombreBase].sort((a, b) => {
            // Buscar número al final del nombre (puede estar con espacio o guión antes del número)
            const numA = parseInt(a.match(/[-\s]+(\d+)\./)?.[1] || '0');
            const numB = parseInt(b.match(/[-\s]+(\d+)\./)?.[1] || '0');
            return numA - numB;
        });
    });
    
    // Generar productos
    const productosCamisetas = [];
    let idCounter = 1000; // Empezar desde 1000 para evitar conflictos
    
    Object.keys(grupos).forEach(nombreBase => {
        const imagenes = grupos[nombreBase];
        const nombreProducto = formatearNombreProducto(nombreBase);
        
        // Asignar precio según el nombre del producto
        let precio = "$25.000"; // Precio por defecto
        const nombreLower = nombreProducto.toLowerCase();
        if (nombreLower.includes('waffle') || nombreLower.includes('morley rayada beige') || nombreLower.includes('nevada')) {
            precio = "$28.000";
        }
        
        productosCamisetas.push({
            id: idCounter++,
            nombre: nombreProducto,
            categoria: "camisetas",
            precio: precio,
            imagen: imagenes[0], // Primera imagen como principal
            imagenes: imagenes, // Todas las imágenes del grupo
            descripcion: `${nombreProducto}. Diseño único y moderno.`
        });
    });
    
    return productosCamisetas;
}

// Generar productos de camisetas automáticamente
const productosCamisetasAutomaticos = generarProductosDesdeImagenes();

// Datos de productos (mantener productos que no sean camisetas y agregar las camisetas generadas)
const productos = [
    {
        id: 3,
        nombre: "Coming Soon",
        categoria: "pantalones",
        precio: "xx.xx",
        imagen: "Image/coming soo.jpg",
        imagenes: ["Image/coming soo.jpg"],
        descripcion: "Pantalón clásico en color negro. Corte regular, ideal para uso diario y ocasiones formales."
    },
    {
        id: 4,
        nombre: "Coming Soon",
        categoria: "pantalones",
        precio: "xx.xx",
        imagen: "Image/coming soo.jpg",
        imagenes: ["Image/coming soo.jpg"],
        descripcion: "Pantalón en tono gris medio. Estilo versátil que combina con cualquier look."
    },
    {
        id: 5,
        nombre: "Chaqueta Negra",
        categoria: "chaquetas",
        precio: "$129.99",
        imagen: "chaqueta-negra",
        imagenes: ["chaqueta-negra-frontal", "chaqueta-negra-lateral", "chaqueta-negra-detalle", "chaqueta-negra-completa"],
        descripcion: "Chaqueta elegante en color negro. Perfecta para abrigar sin perder estilo."
    },
    {
        id: 6,
        nombre: "Chaqueta Gris",
        categoria: "chaquetas",
        precio: "$129.99",
        imagen: "chaqueta-gris",
        imagenes: ["chaqueta-gris-frontal", "chaqueta-gris-lateral", "chaqueta-gris-detalle", "chaqueta-gris-completa"],
        descripcion: "Chaqueta en tono gris. Diseño moderno y funcional."
    },
    {
        id: 7,
        nombre: "Gorra Negra",
        categoria: "accesorios",
        precio: "$24.99",
        imagen: "gorra-negra",
        imagenes: ["gorra-negra-frontal", "gorra-negra-lateral", "gorra-negra-detalle", "gorra-negra-completa"],
        descripcion: "Gorra ajustable en color negro. Estilo urbano y casual."
    },
    {
        id: 8,
        nombre: "Bufanda Gris",
        categoria: "accesorios",
        precio: "$19.99",
        imagen: "bufanda-gris",
        imagenes: ["bufanda-gris-frontal", "bufanda-gris-detalle", "bufanda-gris-enrollada", "bufanda-gris-completa"],
        descripcion: "Bufanda suave en tono gris. Abriga y complementa tu outfit."
    },
    {
        id: 10,
        nombre: "coming soon",
        categoria: "pantalones",
        precio: "xx.xx",
        imagen: "Image/coming soo.jpg",
        imagenes: ["Image/coming soo.jpg"],
        descripcion: "Pantalón de corte slim fit en color negro. Estilo moderno y ajustado."
    },
    {
        id: 11,
        nombre: "Chaqueta Blanca",
        categoria: "chaquetas",
        precio: "$139.99",
        imagen: "chaqueta-blanca",
        imagenes: ["chaqueta-blanca-frontal", "chaqueta-blanca-lateral", "chaqueta-blanca-detalle", "chaqueta-blanca-completa"],
        descripcion: "Chaqueta elegante en color blanco. Diseño minimalista y sofisticado."
    },
    {
        id: 12,
        nombre: "Cinturón Negro",
        categoria: "accesorios",
        precio: "$34.99",
        imagen: "cinturon-negro",
        imagenes: ["cinturon-negro-frontal", "cinturon-negro-detalle", "cinturon-negro-broche", "cinturon-negro-completo"],
        descripcion: "Cinturón de cuero genuino en color negro. Ajustable y duradero."
    },
    // Agregar productos de camisetas generados automáticamente
    ...productosCamisetasAutomaticos
];

// Función para animar productos cuando se renderizan
function animarProductos() {
    const productCards = document.querySelectorAll('.product-card:not(.animated)');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.classList.add('animated');
                
                // Delay escalonado para efecto cascada
                const delay = (index % 3) * 0.1;
                entry.target.style.animationDelay = `${delay}s`;
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    productCards.forEach(card => {
        observer.observe(card);
    });
}

// Función para renderizar productos por categoría
function renderizarProductosPorCategoria(categoria) {
    const productsGrid = document.getElementById(`productsGrid-${categoria}`);
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';

    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);

    if (productosFiltrados.length === 0) {
        productsGrid.innerHTML = '<p style="text-align: center; color: var(--color-gray-medium); padding: 40px;">No hay productos en esta categoría.</p>';
        return;
    }

    productosFiltrados.forEach((producto, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-product-id', producto.id);
        const imagenSrc = producto.imagen || 'Image/coming soo.jpg';
        // Codificar la URL para manejar espacios y caracteres especiales
        const imagenSrcEncoded = codificarURLImagen(imagenSrc);
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${imagenSrcEncoded}" alt="${producto.nombre}" />
            </div>
            <div class="product-info">
                <div class="product-category">${producto.categoria}</div>
                <h3 class="product-name">${producto.nombre}</h3>
                <div class="product-price">${producto.precio}</div>
            </div>
        `;
        
        // Agregar evento click para mostrar detalle
        productCard.addEventListener('click', () => {
            mostrarDetalleProducto(producto);
        });
        
        productsGrid.appendChild(productCard);
    });
    
    // Animar productos después de renderizar
    setTimeout(() => {
        animarProductos();
        // Inicializar carrusel para esta categoría
        inicializarCarruselPorCategoria(categoria);
    }, 100);
}

// Función para renderizar todos los productos por categoría
function renderizarTodosLosProductos() {
    const categorias = ['camisetas', 'pantalones'];
    categorias.forEach(categoria => {
        renderizarProductosPorCategoria(categoria);
    });
}

// Función para renderizar productos (mantener compatibilidad con filtros)
function renderizarProductos(filtro = 'todos') {
    if (filtro === 'todos') {
        renderizarTodosLosProductos();
    } else {
        renderizarProductosPorCategoria(filtro);
    }
}

// Función para manejar filtros
function inicializarFiltros() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterGroup = document.querySelector('.filter-group');
    
    // Animar filtros al cargar
    if (filterGroup) {
        setTimeout(() => {
            filterGroup.style.animation = 'fadeInUp 0.8s ease-out forwards';
            filterGroup.style.opacity = '1';
        }, 600);
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            // Obtener el filtro
            const filtro = button.getAttribute('data-filter');
            
            // Categorías que deben mostrarse como grid completo
            const categoriasGrid = ['chaquetas', 'accesorios'];
            
            // Mostrar/ocultar secciones según el filtro
            const categorias = ['camisetas', 'pantalones'];
            categorias.forEach(categoria => {
                const carousel = document.getElementById(`productsGrid-${categoria}`);
                const section = carousel ? carousel.closest('.category-section') : null;
                const wrapper = carousel ? carousel.closest('.products-carousel-wrapper') : null;
                const leftBtn = wrapper ? wrapper.querySelector('.carousel-btn-left') : null;
                const rightBtn = wrapper ? wrapper.querySelector('.carousel-btn-right') : null;
                
                if (section) {
                    if (filtro === 'todos' || filtro === categoria) {
                        section.style.display = 'block';
                        
                        // Si es una categoría que debe mostrarse como grid y está filtrada
                        if (categoriasGrid.includes(categoria) && filtro === categoria) {
                            // Cambiar a modo grid completo
                            carousel.classList.add('products-grid-full');
                            wrapper.classList.add('grid-mode');
                            // Ocultar botones del carrusel
                            if (leftBtn) leftBtn.style.display = 'none';
                            if (rightBtn) rightBtn.style.display = 'none';
                        } else {
                            // Modo carrusel normal
                            carousel.classList.remove('products-grid-full');
                            wrapper.classList.remove('grid-mode');
                            // Mostrar botones del carrusel (restaurar display original)
                            if (leftBtn) {
                                leftBtn.style.display = 'flex';
                                leftBtn.style.opacity = '1';
                                leftBtn.style.pointerEvents = 'auto';
                            }
                            if (rightBtn) {
                                rightBtn.style.display = 'flex';
                                rightBtn.style.opacity = '1';
                                rightBtn.style.pointerEvents = 'auto';
                            }
                            // Reinicializar carrusel para actualizar estado de botones
                            setTimeout(() => {
                                inicializarCarruselPorCategoria(categoria);
                            }, 100);
                        }
                    } else {
                        section.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Variable global para el intervalo del carrusel
let carruselInterval = null;
let imagenesProducto = [];
let indiceImagenActual = 0;

// Función para cambiar la imagen
function cambiarImagen(indice) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const detailName = document.getElementById('detailName');
    const nombreProducto = detailName ? detailName.textContent : 'Producto';
    
    if (imagenesProducto.length > 0 && indice >= 0 && indice < imagenesProducto.length) {
        indiceImagenActual = indice;
        const imagenSrc = imagenesProducto[indice] || 'Image/coming soo.jpg';
        const imagenSrcEncoded = codificarURLImagen(imagenSrc);
        mainImage.innerHTML = `<img src="${imagenSrcEncoded}" alt="${nombreProducto}" id="mainProductImage" />`;
        
        // Actualizar botón de zoom
        const mainImageContainer = mainImage.closest('.main-image-container');
        const zoomBtn = mainImageContainer.querySelector('.zoom-btn');
        if (zoomBtn) {
            zoomBtn.replaceWith(zoomBtn.cloneNode(true));
            const newZoomBtn = mainImageContainer.querySelector('.zoom-btn');
            newZoomBtn.addEventListener('click', () => {
                abrirZoomImagen(imagenSrc, nombreProducto);
            });
        }
        
        // Agregar evento de click a la imagen para zoom
        setTimeout(() => {
            const imgElement = document.getElementById('mainProductImage');
            if (imgElement) {
                imgElement.style.cursor = 'zoom-in';
                imgElement.addEventListener('click', () => {
                    abrirZoomImagen(imagenSrc, nombreProducto);
                });
            }
        }, 100);
        
        // Actualizar miniatura activa
        thumbnails.forEach((thumb, index) => {
            if (index === indice) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }
}

// Función para iniciar el carrusel automático
function iniciarCarrusel() {
    // Limpiar intervalo anterior si existe
    if (carruselInterval) {
        clearInterval(carruselInterval);
    }
    
    // Solo iniciar si hay más de una imagen
    if (imagenesProducto.length > 1) {
        carruselInterval = setInterval(() => {
            indiceImagenActual = (indiceImagenActual + 1) % imagenesProducto.length;
            cambiarImagen(indiceImagenActual);
        }, 3000); // Cambia cada 3 segundos
    }
}

// Función para detener el carrusel
function detenerCarrusel() {
    if (carruselInterval) {
        clearInterval(carruselInterval);
        carruselInterval = null;
    }
}

// Función para abrir zoom de imagen
function abrirZoomImagen(imagenSrc, nombreProducto) {
    // Crear modal de zoom si no existe
    let zoomModal = document.getElementById('zoomModal');
    if (!zoomModal) {
        zoomModal = document.createElement('div');
        zoomModal.id = 'zoomModal';
        zoomModal.className = 'zoom-modal';
        zoomModal.innerHTML = `
            <div class="zoom-modal-overlay"></div>
            <div class="zoom-modal-content">
                <button class="zoom-close-btn" id="zoomCloseBtn">&times;</button>
                <button class="zoom-prev-btn" id="zoomPrevBtn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button class="zoom-next-btn" id="zoomNextBtn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
                <img class="zoom-image" id="zoomImage" src="" alt="" />
            </div>
        `;
        document.body.appendChild(zoomModal);
        
        // Eventos del modal
        const overlay = zoomModal.querySelector('.zoom-modal-overlay');
        const closeBtn = zoomModal.querySelector('#zoomCloseBtn');
        
        const cerrarZoom = () => {
            zoomModal.classList.remove('active');
            document.body.style.overflow = '';
        };
        
        overlay.addEventListener('click', cerrarZoom);
        closeBtn.addEventListener('click', cerrarZoom);
        
        // Cerrar con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && zoomModal.classList.contains('active')) {
                cerrarZoom();
            }
        });
        
        // Navegación entre imágenes
        const prevBtn = zoomModal.querySelector('#zoomPrevBtn');
        const nextBtn = zoomModal.querySelector('#zoomNextBtn');
        const zoomImage = zoomModal.querySelector('#zoomImage');
        
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (imagenesProducto.length > 1) {
                indiceImagenActual = (indiceImagenActual - 1 + imagenesProducto.length) % imagenesProducto.length;
                zoomImage.src = codificarURLImagen(imagenesProducto[indiceImagenActual]);
            }
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (imagenesProducto.length > 1) {
                indiceImagenActual = (indiceImagenActual + 1) % imagenesProducto.length;
                zoomImage.src = codificarURLImagen(imagenesProducto[indiceImagenActual]);
            }
        });
        
        // Mostrar/ocultar botones de navegación según cantidad de imágenes
        if (imagenesProducto.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }
    }
    
    // Actualizar imagen y mostrar modal
    const zoomImage = zoomModal.querySelector('#zoomImage');
    zoomImage.src = codificarURLImagen(imagenSrc);
    zoomImage.alt = nombreProducto;
    
    // Mostrar/ocultar botones de navegación
    const prevBtn = zoomModal.querySelector('#zoomPrevBtn');
    const nextBtn = zoomModal.querySelector('#zoomNextBtn');
    if (imagenesProducto.length > 1) {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
    
    zoomModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para mostrar el detalle del producto
function mostrarDetalleProducto(producto) {
    const detailSection = document.getElementById('productDetail');
    const mainImage = document.getElementById('mainImage');
    const thumbnailImages = document.getElementById('thumbnailImages');
    const detailName = document.getElementById('detailName');
    const detailCategory = document.getElementById('detailCategory');
    const detailPrice = document.getElementById('detailPrice');
    const detailDescription = document.getElementById('detailDescription');
    
    // Detener carrusel anterior si existe
    detenerCarrusel();
    
    // Actualizar información del producto
    detailName.textContent = producto.nombre;
    detailCategory.textContent = producto.categoria;
    detailPrice.textContent = producto.precio;
    detailDescription.textContent = producto.descripcion || '';
    
    // Limpiar imágenes anteriores
    thumbnailImages.innerHTML = '';
    
    // Mostrar primera imagen como principal
    if (producto.imagenes && producto.imagenes.length > 0) {
        imagenesProducto = producto.imagenes;
        indiceImagenActual = 0;
        
        const primeraImagen = producto.imagenes[0] || producto.imagen || 'Image/coming soo.jpg';
        // Usar la misma codificación que funciona para las miniaturas
        // La ruta ya viene como "Image/Camisetas/boxy Waffle frizado negro 1.png" (relativa a la carpeta del proyecto)
        let primeraImagenEncoded;
        if (window.location.protocol === 'file:') {
            // Para file://, codificar cada parte de la ruta por separado (igual que las miniaturas)
            const partes = primeraImagen.split('/');
            primeraImagenEncoded = partes.map(part => encodeURIComponent(part)).join('/');
        } else {
            primeraImagenEncoded = codificarURLImagen(primeraImagen);
        }
        console.log('Ruta relativa desde proyecto:', primeraImagen);
        console.log('Ruta codificada:', primeraImagenEncoded);
        const mainImageContainer = mainImage.closest('.main-image-container');
        
        // Agregar botón de zoom si no existe
        let zoomBtn = mainImageContainer.querySelector('.zoom-btn');
        if (!zoomBtn) {
            zoomBtn = document.createElement('button');
            zoomBtn.className = 'zoom-btn';
            zoomBtn.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
            `;
            zoomBtn.setAttribute('aria-label', 'Ampliar imagen');
            zoomBtn.addEventListener('click', () => {
                abrirZoomImagen(primeraImagen, producto.nombre);
            });
            mainImageContainer.appendChild(zoomBtn);
        } else {
            // Actualizar el evento del botón existente
            zoomBtn.replaceWith(zoomBtn.cloneNode(true));
            const newZoomBtn = mainImageContainer.querySelector('.zoom-btn');
            newZoomBtn.addEventListener('click', () => {
                abrirZoomImagen(primeraImagen, producto.nombre);
            });
        }
        
        // Crear miniaturas PRIMERO (que sí funcionan)
        producto.imagenes.forEach((img, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail' + (index === 0 ? ' active' : '');
            const imgSrc = img || producto.imagen || 'Image/coming soo.jpg';
            // Aplicar la misma codificación especial para file:// que usamos en la imagen principal
            let imgSrcEncoded;
            if (window.location.protocol === 'file:') {
                // Para file://, codificar cada parte de la ruta por separado
                const partes = imgSrc.split('/');
                imgSrcEncoded = partes.map(part => encodeURIComponent(part)).join('/');
            } else {
                imgSrcEncoded = codificarURLImagen(imgSrc);
            }
            thumbnail.innerHTML = `<img src="${imgSrcEncoded}" alt="${producto.nombre}" />`;
            
            thumbnail.addEventListener('click', () => {
                // Detener el carrusel cuando el usuario hace clic manualmente
                detenerCarrusel();
                // Cambiar imagen principal
                cambiarImagen(index);
                // Reiniciar el carrusel después de 5 segundos
                setTimeout(() => {
                    iniciarCarrusel();
                }, 5000);
            });
            
            thumbnailImages.appendChild(thumbnail);
        });
        
        // Cargar la imagen principal DESPUÉS de las miniaturas, usando exactamente el mismo método
        // Esto asegura que use el mismo contexto y timing que las miniaturas que sí funcionan
        setTimeout(() => {
            // Limpiar el contenedor primero
            mainImage.innerHTML = '';
            
            // Crear la imagen exactamente como las miniaturas
            const imgElement = document.createElement('img');
            imgElement.src = primeraImagenEncoded;
            imgElement.alt = producto.nombre;
            imgElement.id = 'mainProductImage';
            imgElement.style.cursor = 'zoom-in';
            imgElement.style.width = '100%';
            imgElement.style.height = '100%';
            imgElement.style.objectFit = 'cover';
            imgElement.style.objectPosition = 'center';
            
            // Agregar evento de click para zoom
            imgElement.addEventListener('click', () => {
                abrirZoomImagen(primeraImagen, producto.nombre);
            });
            
            // Verificar si hay error al cargar
            imgElement.onerror = () => {
                console.error('Error cargando imagen principal:', primeraImagen);
                console.error('URL codificada:', primeraImagenEncoded);
                console.error('URL completa del navegador:', window.location.href);
                // Intentar con la segunda imagen como fallback
                if (producto.imagenes.length > 1) {
                    const segundaImagen = producto.imagenes[1];
                    let segundaImagenEncoded;
                    if (window.location.protocol === 'file:') {
                        const partes = segundaImagen.split('/');
                        segundaImagenEncoded = partes.map(part => encodeURIComponent(part)).join('/');
                    } else {
                        segundaImagenEncoded = codificarURLImagen(segundaImagen);
                    }
                    console.log('Intentando con segunda imagen:', segundaImagenEncoded);
                    imgElement.src = segundaImagenEncoded;
                }
            };
            
            imgElement.onload = () => {
                console.log('Imagen principal cargada exitosamente:', primeraImagenEncoded);
            };
            
            mainImage.appendChild(imgElement);
        }, 50);
        
        // Iniciar carrusel automático
        iniciarCarrusel();
    } else {
        // Si no hay múltiples imágenes, usar la imagen principal
        imagenesProducto = [];
        const imagenSrc = producto.imagen || 'Image/coming soo.jpg';
        const imagenSrcEncoded = codificarURLImagen(imagenSrc);
        const mainImageContainer = mainImage.closest('.main-image-container');
        
        // Agregar botón de zoom si no existe
        let zoomBtn = mainImageContainer.querySelector('.zoom-btn');
        if (!zoomBtn) {
            zoomBtn = document.createElement('button');
            zoomBtn.className = 'zoom-btn';
            zoomBtn.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
            `;
            zoomBtn.setAttribute('aria-label', 'Ampliar imagen');
            zoomBtn.addEventListener('click', () => {
                abrirZoomImagen(imagenSrc, producto.nombre);
            });
            mainImageContainer.appendChild(zoomBtn);
        } else {
            // Actualizar el evento del botón existente
            zoomBtn.replaceWith(zoomBtn.cloneNode(true));
            const newZoomBtn = mainImageContainer.querySelector('.zoom-btn');
            newZoomBtn.addEventListener('click', () => {
                abrirZoomImagen(imagenSrc, producto.nombre);
            });
        }
        
        mainImage.innerHTML = `<img src="${imagenSrcEncoded}" alt="${producto.nombre}" id="mainProductImage" />`;
        
        // Agregar evento de click a la imagen para zoom
        setTimeout(() => {
            const imgElement = document.getElementById('mainProductImage');
            if (imgElement) {
                imgElement.style.cursor = 'zoom-in';
                imgElement.addEventListener('click', () => {
                    abrirZoomImagen(imagenSrc, producto.nombre);
                });
            }
        }, 100);
    }
    
    // Mostrar sección de detalle
    detailSection.style.display = 'block';
    
    // Scroll suave a la sección de detalle
    setTimeout(() => {
        detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Función para cerrar el detalle
function cerrarDetalle() {
    // Detener el carrusel
    detenerCarrusel();
    
    const detailSection = document.getElementById('productDetail');
    detailSection.style.display = 'none';
    
    // Scroll de vuelta a los productos
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Función para animar elementos al entrar en el viewport
function inicializarAnimacionesScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos del hero
    const heroH2 = document.querySelector('.hero h2');
    const heroP = document.querySelector('.hero p');
    if (heroH2) observer.observe(heroH2);
    if (heroP) observer.observe(heroP);

    // Observar filtros
    const filterGroup = document.querySelector('.filter-group');
    if (filterGroup) {
        observer.observe(filterGroup);
        filterGroup.addEventListener('animationend', () => {
            filterGroup.style.opacity = '1';
        });
    }

    // Observar productos
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        observer.observe(card);
        // Agregar delay escalonado
        if (index % 3 === 1) {
            card.classList.add('animate-delay-1');
        } else if (index % 3 === 2) {
            card.classList.add('animate-delay-2');
        }
    });

    // Observar footer
    const footer = document.querySelector('footer');
    if (footer) {
        observer.observe(footer);
        footer.addEventListener('animationend', () => {
            footer.style.opacity = '1';
        });
    }

    return observer;
}

// Animación inicial del hero al cargar la página
function animarHeroInicial() {
    const heroH2 = document.querySelector('.hero h2');
    const heroP = document.querySelector('.hero p');
    
    setTimeout(() => {
        if (heroH2) {
            heroH2.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    }, 100);
    
    setTimeout(() => {
        if (heroP) {
            heroP.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    }, 300);
}

// Objeto para almacenar los estados de los carruseles
const carruselesInicializados = {};

// Función para inicializar el carrusel por categoría
function inicializarCarruselPorCategoria(categoria) {
    const carousel = document.getElementById(`productsGrid-${categoria}`);
    const leftBtn = document.querySelector(`.carousel-btn-left[data-category="${categoria}"]`);
    const rightBtn = document.querySelector(`.carousel-btn-right[data-category="${categoria}"]`);
    
    if (!carousel || !leftBtn || !rightBtn) return;
    
    // Asegurarse de que los botones estén visibles
    if (leftBtn) {
        leftBtn.style.display = 'flex';
    }
    if (rightBtn) {
        rightBtn.style.display = 'flex';
    }
    
    // Si ya está inicializado, solo actualizar botones
    if (carruselesInicializados[categoria]) {
        actualizarBotonesCarrusel(categoria, carousel, leftBtn, rightBtn);
        return;
    }
    
    // Función para actualizar visibilidad de botones
    function actualizarBotones() {
        // Asegurarse de que los botones estén visibles primero
        if (leftBtn) {
            leftBtn.style.display = 'flex';
        }
        if (rightBtn) {
            rightBtn.style.display = 'flex';
        }
        
        const scrollLeft = carousel.scrollLeft;
        const scrollWidth = carousel.scrollWidth;
        const clientWidth = carousel.clientWidth;
        
        // Si no hay scroll (todo cabe en pantalla), centrar y ocultar ambos botones
        if (scrollWidth <= clientWidth + 10) {
            carousel.classList.add('centered');
            if (leftBtn) {
                leftBtn.style.opacity = '0.3';
                leftBtn.style.pointerEvents = 'none';
            }
            if (rightBtn) {
                rightBtn.style.opacity = '0.3';
                rightBtn.style.pointerEvents = 'none';
            }
            return;
        } else {
            carousel.classList.remove('centered');
        }
        
        // Ocultar botón izquierdo si está al inicio
        if (scrollLeft <= 10) {
            if (leftBtn) {
                leftBtn.style.opacity = '0.3';
                leftBtn.style.pointerEvents = 'none';
            }
        } else {
            if (leftBtn) {
                leftBtn.style.opacity = '1';
                leftBtn.style.pointerEvents = 'auto';
            }
        }
        
        // Ocultar botón derecho si está al final
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
            if (rightBtn) {
                rightBtn.style.opacity = '0.3';
                rightBtn.style.pointerEvents = 'none';
            }
        } else {
            if (rightBtn) {
                rightBtn.style.opacity = '1';
                rightBtn.style.pointerEvents = 'auto';
            }
        }
    }
    
    // Función para calcular el ancho de scroll
    function calcularAnchoScroll() {
        const isMobile = window.innerWidth <= 480;
        if (isMobile) {
            // En móviles, calcular el ancho del producto + gap
            const firstCard = carousel.querySelector('.product-card');
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth;
                const gap = 20; // gap del carrusel
                return cardWidth + gap;
            }
            return window.innerWidth - 80; // fallback
        }
        return 320; // desktop
    }
    
    // Scroll izquierdo
    leftBtn.addEventListener('click', () => {
        const scrollAmount = calcularAnchoScroll();
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Scroll derecho
    rightBtn.addEventListener('click', () => {
        const scrollAmount = calcularAnchoScroll();
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Actualizar botones al hacer scroll
    carousel.addEventListener('scroll', actualizarBotones);
    
    // Actualizar botones al cambiar tamaño de ventana
    window.addEventListener('resize', actualizarBotones);
    
    // Actualizar botones inicialmente (con más tiempo para asegurar que el DOM esté listo)
    setTimeout(actualizarBotones, 300);
    setTimeout(actualizarBotones, 600);
    
    carruselesInicializados[categoria] = true;
}

// Función auxiliar para actualizar botones
function actualizarBotonesCarrusel(categoria, carousel, leftBtn, rightBtn) {
    // Asegurarse de que los botones estén visibles primero
    if (leftBtn) {
        leftBtn.style.display = 'flex';
    }
    if (rightBtn) {
        rightBtn.style.display = 'flex';
    }
    
    const scrollLeft = carousel.scrollLeft;
    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;
    
    // Si no hay scroll (todo cabe en pantalla), centrar y ocultar ambos botones
    if (scrollWidth <= clientWidth + 10) {
        carousel.classList.add('centered');
        if (leftBtn) {
            leftBtn.style.opacity = '0.3';
            leftBtn.style.pointerEvents = 'none';
        }
        if (rightBtn) {
            rightBtn.style.opacity = '0.3';
            rightBtn.style.pointerEvents = 'none';
        }
        return;
    } else {
        carousel.classList.remove('centered');
    }
    
    if (scrollLeft <= 10) {
        if (leftBtn) {
            leftBtn.style.opacity = '0.3';
            leftBtn.style.pointerEvents = 'none';
        }
    } else {
        if (leftBtn) {
            leftBtn.style.opacity = '1';
            leftBtn.style.pointerEvents = 'auto';
        }
    }
    
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
        if (rightBtn) {
            rightBtn.style.opacity = '0.3';
            rightBtn.style.pointerEvents = 'none';
        }
    } else {
        if (rightBtn) {
            rightBtn.style.opacity = '1';
            rightBtn.style.pointerEvents = 'auto';
        }
    }
}

// Función para inicializar todos los carruseles
function inicializarCarrusel() {
    const categorias = ['camisetas', 'pantalones'];
    categorias.forEach(categoria => {
        inicializarCarruselPorCategoria(categoria);
    });
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    // Animar hero inicialmente
    animarHeroInicial();
    
    // Renderizar todos los productos por categoría
    renderizarTodosLosProductos();
    inicializarFiltros();
    
    // Inicializar todos los carruseles
    setTimeout(() => {
        inicializarCarrusel();
    }, 300);
    
    // Inicializar animaciones de scroll
    setTimeout(() => {
        inicializarAnimacionesScroll();
        animarProductos();
        animarTitulosCategorias();
    }, 500);
    
    // Evento para cerrar detalle
    const closeBtn = document.getElementById('closeDetailBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', cerrarDetalle);
    }
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            cerrarDetalle();
        }
    });
});

// Función para animar títulos de categorías
function animarTitulosCategorias() {
    const titulos = document.querySelectorAll('.category-title');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    titulos.forEach(titulo => {
        observer.observe(titulo);
    });
}

// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Función para renderizar catálogo completo (para páginas de categorías)
function renderizarCatalogoCompleto(categoria) {
    const catalogGrid = document.getElementById('catalogGrid');
    const productsCount = document.getElementById('productsCount');
    
    if (!catalogGrid) return;
    
    catalogGrid.innerHTML = '';
    
    // Filtrar productos por categoría
    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    
    // Actualizar contador
    if (productsCount) {
        productsCount.textContent = `${productosFiltrados.length} productos`;
    }
    
    if (productosFiltrados.length === 0) {
        catalogGrid.innerHTML = '<p style="text-align: center; color: var(--color-gray-medium); padding: 40px; grid-column: 1 / -1;">No hay productos en esta categoría.</p>';
        return;
    }
    
    // Renderizar productos
    productosFiltrados.forEach((producto) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-product-id', producto.id);
        const imagenSrc = producto.imagen || 'Image/coming soo.jpg';
        const imagenSrcEncoded = codificarURLImagen(imagenSrc);
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${imagenSrcEncoded}" alt="${producto.nombre}" />
            </div>
            <div class="product-info">
                <div class="product-category">${producto.categoria}</div>
                <h3 class="product-name">${producto.nombre}</h3>
                <div class="product-price">${producto.precio}</div>
            </div>
        `;
        
        // Agregar evento click para mostrar detalle
        productCard.addEventListener('click', () => {
            mostrarDetalleProducto(producto);
        });
        
        catalogGrid.appendChild(productCard);
    });
    
    // Animar productos después de renderizar
    setTimeout(() => {
        animarProductos();
    }, 100);
    
    // Inicializar ordenamiento
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            ordenarProductos(e.target.value, productosFiltrados);
        });
    }
}

// Función para ordenar productos
function ordenarProductos(orden, productosLista) {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;
    
    let productosOrdenados = [...productosLista];
    
    switch(orden) {
        case 'price-asc':
            productosOrdenados.sort((a, b) => {
                const precioA = parseFloat(a.precio.replace('$', '').replace(',', ''));
                const precioB = parseFloat(b.precio.replace('$', '').replace(',', ''));
                return precioA - precioB;
            });
            break;
        case 'price-desc':
            productosOrdenados.sort((a, b) => {
                const precioA = parseFloat(a.precio.replace('$', '').replace(',', ''));
                const precioB = parseFloat(b.precio.replace('$', '').replace(',', ''));
                return precioB - precioA;
            });
            break;
        case 'name-asc':
            productosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'name-desc':
            productosOrdenados.sort((a, b) => b.nombre.localeCompare(a.nombre));
            break;
        default:
            // Mantener orden original
            break;
    }
    
    // Limpiar grid
    catalogGrid.innerHTML = '';
    
    // Renderizar productos ordenados
    productosOrdenados.forEach((producto) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-product-id', producto.id);
        const imagenSrc = producto.imagen || 'Image/coming soo.jpg';
        const imagenSrcEncoded = codificarURLImagen(imagenSrc);
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${imagenSrcEncoded}" alt="${producto.nombre}" />
            </div>
            <div class="product-info">
                <div class="product-category">${producto.categoria}</div>
                <h3 class="product-name">${producto.nombre}</h3>
                <div class="product-price">${producto.precio}</div>
            </div>
        `;
        
        // Agregar evento click para mostrar detalle
        productCard.addEventListener('click', () => {
            mostrarDetalleProducto(producto);
        });
        
        catalogGrid.appendChild(productCard);
    });
    
    // Animar productos después de ordenar
    setTimeout(() => {
        animarProductos();
    }, 100);
}

