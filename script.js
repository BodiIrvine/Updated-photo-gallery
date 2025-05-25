// Set dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Album data with placeholder images
const albums = {
   'Disney Wonder (March, 2025)': {
        metadata: {
            timeOfYear: 'March 16-21, 2025',
            destination: 'Catalina, Mexico',
            type: 'Disney Wonder Cruise',
            description: 'A magical cruise adventure with Disney characters and family fun.'
        },
        photos: [
            { 
                src: 'images/family(4).jpeg', 
                thumb: 'images/family(4).jpeg', 
                caption: 'Departure', 
                tags: ['Family Photo', 'cruise'] 
            },
            
            // Horizontal Mickey Mouse
            { 
                src: 'images/char(20).jpeg', 
                thumb: 'images/char(20).jpeg', 
                caption: 'Mickey Mouse big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/char(21).jpeg', 
                thumb: 'images/char(21).jpeg', 
                caption: 'Mickey Mouse big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            
            // Horizontal Minnie Mouse
            { 
                src: 'images/char(1).jpg', 
                thumb: 'images/char(1).jpg', 
                caption: 'Minnie Mouse big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/char(3).jpeg', 
                thumb: 'images/char(3).jpeg', 
                caption: 'Minnie Mouse big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/char(4).jpeg', 
                thumb: 'images/char(4).jpeg', 
                caption: 'Minnie Mouse big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/char(8).jpeg', 
                thumb: 'images/char(8).jpeg', 
                caption: 'Minnie Mouse big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/char(28).jpeg', 
                thumb: 'images/char(28).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/char(30).jpeg', 
                thumb: 'images/char(30).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            
            // Horizontal Goofy
            { 
                src: 'images/char(2).jpeg', 
                thumb: 'images/char(2).jpeg', 
                caption: 'Goofy big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/char(26).jpeg', 
                thumb: 'images/char(26).jpeg', 
                caption: 'Goofy big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/char.jpeg', 
                thumb: 'images/char.jpeg', 
                caption: 'Goofy big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            
            // Horizontal Donald Duck
            { 
                src: 'images/char(2).jpg', 
                thumb: 'images/char(2).jpg', 
                caption: 'Donald Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/char(16).jpeg', 
                thumb: 'images/char(16).jpeg', 
                caption: 'Donald Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/char(17).jpeg', 
                thumb: 'images/char(17).jpeg', 
                caption: 'Donald Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            
            // Horizontal Daisy Duck
            { 
                src: 'images/char(9).jpg', 
                thumb: 'images/char(9).jpg', 
                caption: 'Daisy Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            
            // Horizontal Chip and Dale 
            { 
                src: 'images/char(13).jpeg', 
                thumb: 'images/char(13).jpeg', 
                caption: 'Chip and Dale big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/char(14).jpeg', 
                thumb: 'images/char(14).jpeg', 
                caption: 'Chip and Dale big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            
            // Horizontal Tiana
            { 
                src: 'images/char(23).jpeg',
                thumb: 'images/char(23).jpeg', 
                caption: 'Tiana small family photo', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            { 
                src: 'images/char(24).jpeg', 
                thumb: 'images/char(24).jpeg', 
                caption: 'Tiana small family photo', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            
            // Horizontal Ariel
            { 
                src: 'images/char(9).jpeg', 
                thumb: 'images/char(9).jpeg', 
                caption: 'Ariel small family photo', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            
            // Horizontal Belle
            { 
                src: 'images/char(10).jpeg', 
                thumb: 'images/char(10).jpeg', 
                caption: 'Belle small family photo', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            { 
                src: 'images/char(11).jpeg', 
                thumb: 'images/char(11).jpeg', 
                caption: 'Belle small family photo', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            
            // Black Panther
            { 
                src: 'images/char(31).jpeg', 
                thumb: 'images/char(31).jpeg', 
                caption: 'Black Panther small family photo', 
                tags: ['character', 'Marvel Fisheries', 'cruise'] 
            },
            
            // Horizontal Family
            { 
                src: 'images/family(2).jpeg', 
                thumb: 'images/family(2).jpeg', 
                caption: 'Big family photo at the "Sail-A-Wave Party"', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/family(5).jpeg', 
                thumb: 'images/family(5).jpeg', 
                caption: 'Big family photo before boarding the Disney Wonder', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/family.jpeg', 
                thumb: 'images/family.jpeg', 
                caption: 'Small family photo at the "Sail-A-Wave Party"', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/family(1).jpeg', 
                thumb: 'images/family(1).jpeg', 
                caption: 'Small family photo at the "Sail-A-Wave Party"', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/family(3).jpeg', 
                thumb: 'images/family(3).jpeg', 
                caption: 'Small family photo at the "Sail-A-Wave Party"', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/family(4).jpg', 
                thumb: 'images/family(4).jpg', 
                caption: 'Small family photo', 
                tags: ['cruise'] 
            },
            { 
                src: 'images/family(5).jpg', 
                thumb: 'images/family(5).jpg', 
                caption: 'Small family photo at the Walt Disney Theatre', 
                tags: ['cruise'] 
            },
            { 
                src: 'images/family(6).jpeg', 
                thumb: 'images/family(6).jpeg', 
                caption: 'Small family photo at dinner (Triton's)', 
                tags: ['Dinner', 'cruise'] 
            },
            { 
                src: 'images/family(9).jpeg', 
                thumb: 'images/family(9).jpeg', 
                caption: 'Big family photo at dinner (Animator's Palate)', 
                tags: ['Dinner', 'cruise'] 
            },
            { 
                src: 'images/family(7).jpeg', 
                thumb: 'images/family(7).jpeg', 
                caption: 'Small family photo at dinner (Animator's Palate)', 
                tags: ['Dinner', 'cruise'] 
            },
            { 
                src: 'images/Family(13).jpg', 
                thumb: 'images/Family(13).jpg', 
                caption: 'Big family photo on a mountain', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/mexico(1).jpg', 
                thumb: 'images/mexico(1).jpg', 
                caption: 'Big family photo on Catalina Island', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/ship(4).jpg', 
                thumb: 'images/ship(4).jpg', 
                caption: 'Big family photo with the Disney Wonder in the background', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/staff.jpeg', 
                thumb: 'images/staff.jpeg', 
                caption: 'Big family photo at Animator's Palate', 
                tags: ['Staff', 'Dinner', 'Family Photo', 'cruise'] 
            },
            
            // Horizontal Mexico 
            { 
                src: 'images/mexico(3).jpg', 
                thumb: 'images/mexico(3).jpg', 
                caption: 'Ensenada', 
                tags: ['Mexico', 'cruise'] 
            },
            
            // Horizontal Solo
            { 
                src: 'images/family(8).jpg', 
                thumb: 'images/family(8).jpg', 
                caption: 'Dramatic photo', 
                tags: ['Solo', 'cruise'] 
            },
            { 
                src: 'images/family(6).jpg', 
                thumb: 'images/family(6).jpg', 
                caption: 'Dramatic photo', 
                tags: ['Solo', 'cruise'] 
            },
            { 
                src: 'images/family(7).jpg', 
                thumb: 'images/family(7).jpg', 
                caption: 'Dramatic photo', 
                tags: ['Solo', 'cruise'] 
            },
            
            // Horizontal Ship
            { 
                src: 'images/room.jpg', 
                thumb: 'images/room.jpg', 
                caption: 'Disney Wonder room (March 2025)', 
                tags: ['Room', 'cruise'] 
            },
            { 
                src: 'images/ship(2).jpg', 
                thumb: 'images/ship(2).jpg', 
                caption: 'Disney Wonder', 
                tags: ['Ship', 'cruise'] 
            },
            { 
                src: 'images/ship(3).jpg', 
                thumb: 'images/ship(3).jpg', 
                caption: 'Disney Wonder Walt Disney Theatre', 
                tags: ['Ship', 'cruise'] 
            },
            
            // Horizontal Staff
            { 
                src: 'images/staff(3).jpg', 
                thumb: 'images/staff(3).jpg', 
                caption: 'Energy, Energy', 
                tags: ['Staff', 'cruise'] 
            },
            { 
                src: 'images/staff.jpg', 
                thumb: 'images/staff.jpg', 
                caption: 'Concierge Lounge', 
                tags: ['Staff', 'cruise'] 
            },
            
            // Mickey Mouse
            { 
                src: 'images/char.jpg', 
                thumb: 'images/char.jpg', 
                caption: 'Mickey Mouse on the stairs', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            
            // Minnie Mouse
            { 
                src: 'images/char(5).jpeg', 
                thumb: 'images/char(5).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/char(5).jpg', 
                thumb: 'images/char(5).jpg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/char(6).jpeg', 
                thumb: 'images/char(6).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/char(6).jpg', 
                thumb: 'images/char(6).jpg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/char(7).jpeg', 
                thumb: 'images/char(7).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/char(29).jpeg', 
                thumb: 'images/char(29).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/char(32).jpeg', 
                thumb: 'images/char(32).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            
            // Goofy
            { 
                src: 'images/char(1).jpeg', 
                thumb: 'images/char(1).jpeg', 
                caption: 'Goofy small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/char(27).jpeg', 
                thumb: 'images/char(27).jpeg', 
                caption: 'Goofy big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            
            // Donald Duck
            { 
                src: 'images/char(3).jpg', 
                thumb: 'images/char(3).jpg', 
                caption: 'Donald Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/char(18).jpeg', 
                thumb: 'images/char(18).jpeg', 
                caption: 'Donald Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            
            // Daisy Duck
            { 
                src: 'images/char(10).jpg', 
                thumb: 'images/char(10).jpg', 
                caption: 'Daisy Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/char(11).jpg', 
                thumb: 'images/char(11).jpg', 
                caption: 'Daisy Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/char(12).jpg', 
                thumb: 'images/char(12).jpg', 
                caption: 'Daisy Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            
            // Tiana
            { 
                src: 'images/char(4).jpg', 
                thumb: 'images/char(4).jpg', 
                caption: 'Tiana walking down the stairs', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            
            // Cinderella
            { 
                src: 'images/char(15).jpeg', 
                thumb: 'images/char(15).jpeg', 
                caption: 'Cinderella small family photo', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            
            // Black Panther
            { 
                src: 'images/char(12).jpeg', 
                thumb: 'images/char(12).jpeg', 
                caption: 'Black Panther small family photo', 
                tags: ['character', 'Marvel Superheroes', 'cruise'] 
            },
            
            // Spider-Man
            { 
                src: 'images/char(22).jpeg', 
                thumb: 'images/char(22).jpeg', 
                caption: 'Spider-Man small family photo', 
                tags: ['character', 'Marvel Superheroes', 'cruise'] 
            },
            
            // Family
            { 
                src: 'images/char(25).jpeg', 
                thumb: 'images/char(25).jpeg', 
                caption: 'Small family photo with a pirate backdrop', 
                tags: ['Pirate Night', 'cruise'] 
            },
            { 
                src: 'images/family(3).jpg', 
                thumb: 'images/family(3).jpg', 
                caption: 'Small family photo', 
                tags: ['cruise'] 
            },
            { 
                src: 'images/family(8).jpeg', 
                thumb: 'images/family(8).jpeg', 
                caption: 'Small family photo at dinner (Animator's Palate)', 
                tags: ['Dinner', 'cruise'] 
            },
            { 
                src: 'images/family(10).jpeg', 
                thumb: 'images/family(10).jpeg', 
                caption: 'Small family photo with a pirate backdrop', 
                tags: ['Pirate Night', 'cruise'] 
            },
            { 
                src: 'images/family(11).jpeg', 
                thumb: 'images/family(11).jpeg', 
                caption: 'Small family photo with a pirate backdrop',
                tags: ['Pirate Night', 'cruise'] 
            },
            { 
                src: 'images/family(12).jpeg', 
                thumb: 'images/family(12).jpeg', 
                caption: 'Small family photo with a pirate backdrop', 
                tags: ['Pirate Night', 'cruise'] 
            },
            { 
                src: 'images/family(11).jpg', 
                thumb: 'images/family(11).jpg', 
                caption: 'Small family photo on the ship', 
                tags: ['cruise'] 
            },
            
            // Mexico
            { 
                src: 'images/mexico(4).jpg', 
                thumb: 'images/mexico(4).jpg', 
                caption: 'Port of Ensenada', 
                tags: ['Mexico', 'cruise'] 
            },
            
            // Catalina
            { 
                src: 'images/mexico(2).jpg', 
                thumb: 'images/mexico(2).jpg', 
                caption: 'Catalina Island', 
                tags: ['Catalina', 'cruise'] 
            },
            
            //Traveling fun
            { 
                src: 'images/family.jpg', 
                thumb: 'images/family.jpg', 
                caption: 'Family walking to the car with our suitcases', 
                tags: ['Travel Fun', 'cruise'] 
            },
            
            // Food
            { 
                src: 'images/food(1) .jpg', 
                thumb: 'images/food(1).jpg', 
                caption: 'An Olaf coffee', 
                tags: ['Food', 'cruise'] 
            },
            { 
                src: 'images/food(2) .jpg', 
                thumb: 'images/food(2).jpg', 
                caption: 'A Mickey coffee', 
                tags: ['Food', 'cruise'] 
            },
            { 
                src: 'images/food.jpg', 
                thumb: 'images/food.jpg', 
                caption: 'An Elsa coffee', 
                tags: ['Food', 'cruise'] 
            },
            { 
                src: 'images/food(5) .jpg', 
                thumb: 'images/food(5).jpg', 
                caption: 'Chocolate sundae', 
                tags: ['Food', 'cruise'] 
            },
            
            // Ship
            { 
                src: 'images/ship.jpg', 
                thumb: 'images/ship.jpg', 
                caption: 'Disney Wonder Ariel statue', 
                tags: ['Ship', 'cruise'] 
            },
            { 
                src: 'images/ship(1) .jpg', 
                thumb: 'images/ship(1).jpg', 
                caption: 'Disney Wonder', 
                tags: ['Ship', 'cruise'] 
            },
            
            // Staff
            { 
                src: 'images/staff(4).jpg', 
                thumb: 'images/staff(4).jpg', 
                caption: 'Staff photo', 
                tags: ['Staff', 'cruise'] 
            },
            { 
                src: 'images/staff(5) .jpg', 
                thumb: 'images/staff(5).jpg', 
                caption: 'Cameraman', 
                tags: ['Staff', 'cruise'] 
            },
            { 
                src: 'images/staff(6).jpg', 
                thumb: 'images/staff(6).jpg', 
                caption: 'Pin Trading', 
                tags: ['Staff', 'cruise'] 
            }
        ]
    }
};

// Keep track of selected tags, lightbox state, and current album
let selectedTags = [];
let currentPhotos = [];
let currentIndex = 0;
let currentAlbumId = null;

// Page navigation
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

function switchPage(targetId) {
    pages.forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(targetId);
    if (targetPage) {
        targetPage.classList.add('active');
        navLinks.forEach(link => {
            if (link.getAttribute('href').substring(1) === targetId) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        switchPage(link.getAttribute('href').substring(1));
    });
});

// Render albums dynamically
function renderAlbums(container, albums) {
    container.innerHTML = '';
    Object.keys(albums).forEach(albumId => {
        const card = document.createElement('div');
        card.className = 'album-card';
        card.dataset.album = albumId;
        card.innerHTML = `
            <img src="${albums[albumId].photos[0].thumb}" alt="Cover for ${albumId} album">
            <div class="album-title">${albumId.charAt(0).toUpperCase() + albumId.slice(1)} Album</div>
        `;
        container.appendChild(card);
        card.addEventListener('click', () => showGallery(albumId));
    });
}

// Render albums on page load
renderAlbums(document.getElementById('home-albums-grid'), albums);
renderAlbums(document.getElementById('albums-page-grid'), albums);

// Show gallery for selected album
function showGallery(albumId) {
    currentAlbumId = albumId;
    if (!albums[albumId]) {
        const gallery = document.getElementById('photo-gallery');
        gallery.innerHTML = '<p>Sorry, this album was not found.</p>';
        switchPage('gallery');
        return;
    }
    switchPage('gallery');
    const galleryTitle = document.getElementById('gallery-title');
    galleryTitle.textContent = albumId.charAt(0).toUpperCase() + albumId.slice(1) + ' Album';
    const gallery = document.getElementById('photo-gallery');
    gallery.innerHTML = '<p>Loading...</p>';

    // Populate album info
    const albumInfo = document.getElementById('album-info');
    const metadata = albums[albumId].metadata || {};
    albumInfo.innerHTML = `
        <p><strong>Time of Year:</strong> ${metadata.timeOfYear || 'N/A'}</p>
        <p><strong>Destination:</strong> ${metadata.destination || 'N/A'}</p>
        <p><strong>Type:</strong> ${metadata.type || 'N/A'}</p>
        <p><strong>Description:</strong> ${metadata.description || 'No description available.'}</p>
    `;

    // Collect unique tags for the album
    const allTags = new Set();
    albums[albumId].photos.forEach(photo => {
        if (photo.tags) {
            photo.tags.forEach(tag => allTags.add(tag));
        }
    });

    // Render filter buttons
    const tagFilters = document.getElementById('tag-filters');
    tagFilters.innerHTML = '';
    allTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'tag-button';
        button.textContent = tag;
        button.dataset.tag = tag;
        button.addEventListener('click', () => toggleTagFilter(tag, albumId));
        tagFilters.appendChild(button);
    });

    // Render gallery
    renderGallery(albumId);
}

// Toggle tag filter
function toggleTagFilter(tag, albumId) {
    if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter(t => t !== tag);
    } else {
        selectedTags.push(tag);
    }
    updateTagButtonStyles();
    renderGallery(albumId);
}

// Clear all filters
function clearFilters(albumId) {
    selectedTags = [];
    updateTagButtonStyles();
    renderGallery(albumId);
}

// Update tag button styles based on selection
function updateTagButtonStyles() {
    const tagButtons = document.querySelectorAll('.tag-button');
    tagButtons.forEach(button => {
        if (selectedTags.includes(button.dataset.tag)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Render gallery with filtered photos
function renderGallery(albumId) {
    const gallery = document.getElementById('photo-gallery');
    gallery.innerHTML = '';
    console.log(`Rendering gallery for album: ${albumId}`);

    // Filter photos based on selected tags
    let filteredPhotos = albums[albumId].photos.filter(photo => {
        if (!photo.src || !photo.thumb) {
            console.warn(`Skipping invalid photo entry:`, photo);
            return false;
        }
        return true;
    });

    if (selectedTags.length > 0) {
        filteredPhotos = filteredPhotos.filter(photo =>
            selectedTags.every(tag => photo.tags && photo.tags.includes(tag))
        );
    }

    if (filteredPhotos.length === 0) {
        gallery.innerHTML = '<p>No photos match the selected tags.</p>';
        console.log('No photos to render after filtering');
        return;
    }

    // Store photos for lightbox navigation
    currentPhotos = filteredPhotos;
    console.log(`Rendering ${filteredPhotos.length} photos`);

    filteredPhotos.forEach((photo, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'gallery-image-container';
        const img = document.createElement('img');
        img.src = photo.thumb;
        img.alt = photo.caption;
        img.dataset.index = index;
        img.className = 'gallery-image';
        img.loading = 'lazy';
        img.addEventListener('click', () => {
            console.log(`Image clicked, index: ${index}, src: ${photo.thumb}`);
            openLightbox(index);
        });
        imgContainer.appendChild(img);
        gallery.appendChild(imgContainer);
        console.log(`Rendered image: ${photo.thumb}`);
    });
}

// Custom Lightbox Functions
const lightbox = document.getElementById('custom-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    console.log(`Lightbox opened at index: ${index}`);
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
    console.log('Lightbox closed');
}

function updateLightbox() {
    const photo = currentPhotos[currentIndex];
    lightboxImage.src = photo.src;
    lightboxImage.alt = photo.caption;
    lightboxCaption.textContent = photo.caption;
    lightboxPrev.style.display = currentIndex > 0 ? 'block' : 'none';
    lightboxNext.style.display = currentIndex < currentPhotos.length - 1 ? 'block' : 'none';
    console.log(`Lightbox updated: ${photo.src}`);
}

// Lightbox event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
lightboxPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateLightbox();
    }
});
lightboxNext.addEventListener('click', () => {
    if (currentIndex < currentPhotos.length - 1) {
        currentIndex++;
        updateLightbox();
    }
});

// Clear filters button listener
document.getElementById('clear-filters').addEventListener('click', () => {
    if (currentAlbumId) clearFilters(currentAlbumId);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            updateLightbox();
        } else if (e.key === 'ArrowRight' && currentIndex < currentPhotos.length - 1) {
            currentIndex++;
            updateLightbox();
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});
