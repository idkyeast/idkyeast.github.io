const galleryImages = [
    { url: "IMG_20240209_183944_080.jpg", alt: "Yellow Ethiopian Traditional Chiffon Dress" },
    { url: "Lem chiffon __ ለም ሽፎን Adres;-22,መርካቶ,ቦሌ phone;-0955455017_0994414419 Nb;-ውጭ ሀገር ና ክፍልሀገር ላሉ ደንበኞች እንልካለን!!!.jpeg", alt: "Orange Ethiopian Traditional Chiffon Dress" },
    { url: "IMG_20250129_210834_844.jpg", alt: "Pink Ethiopian Traditional Chiffon Dress" },
    { url: "IMG_20240209_183944_080.jpg", alt: "Green Ethiopian Traditional Chiffon Dress" },
    { url: "IMG_20240214_114307_491.jpg", alt: "Purple Ethiopian Traditional Chiffon Dress" },
    { url: "IMG_20250116_120040_902.jpg", alt: "Collection of Ethiopian Traditional Dresses" },
    { url: "IMG_20250129_210822_278.jpg", alt: "Elegant Habesha Chiffon Dress" },
    { url: "IMG_20250116_120041_233.jpg", alt: "Ethiopian Chiffon Dress" },
    { url: "IMG_20250116_120040_902.jpg", alt: "Habesha Chiffon Dress" },
    { url: "IMG_20250116_120041_248.jpg" , alt: "our best work" }
];

function createGalleryItems() {
    const galleryContainer = document.getElementById('galleryContainer');
    
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.alt;
        
        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createGalleryItems();

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    const toggleBtn = document.getElementById('toggleBtn');
    const navbar = document.querySelector('.navbar');
    
    toggleBtn.addEventListener('click', () => {
        navbar.classList.toggle('hidden');
        
     
        if (navbar.classList.contains('hidden')) {
            toggleBtn.innerHTML = '&#8595;'; 
        } else {
            toggleBtn.innerHTML = '&#8593;'; 
        }
    });
});
