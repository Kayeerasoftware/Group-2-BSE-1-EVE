// Slideshow (Home Page)
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
    let currentSlide = 0;
    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    setInterval(showNextSlide, 5000);
}

// Tabs (About Us)
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

// Accordion (Academics)
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === 'block';
    document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
    content.style.display = isOpen ? 'none' : 'block';
}

// Dynamic Table (Academics)
const subjects = [
    { subject: 'Mathematics', teacher: 'Mr. Okello, Mr.Kaiza Peter, Mr Knoxwell Luzige, Mr.Allan Ssentumbwe, Mr.Ssempa Paul, Mr.Ntare Elvin' },
    { subject: 'English', teacher: 'Ms. Namutebi, Ms. Joan Kimuli, Mr.Raymond Kageri, Mr.Moses Komunina' },
    { subject: 'Biology', teacher: 'Mr. Martin Shikuku, Ms. Rogers Naturinda, Mr.Kayeera Nathan, Mr.Joseph Sentamu' },
    { subject: 'Physics', teacher: 'Ms.Esther Nansukusa, Mr.Damian Karabo, Ms.Nankya Ingrid, Ms.Nabunya Desire' },
    { subject: 'Chemistry', teacher: 'Ms.kalanzi Mark, Mr.Ojok Erick, Mr.Lubega Henry' },
    { subject: 'Economics', teacher: 'Ms.Kityingi John, Mr.Lynette Kabagaju, Ms.Ptricia Kuheebwa' },
    { subject: 'History', teacher: 'Mr.Laban Kamara, Ms.Kizito Grace , Ms.Nakintu Tyra' },
    { subject: 'Geography', teacher: ' Mr.Lubega Grace, Ms.Kyomuhangi Martha, Ms.Mellisa Atim' },
    { subject: 'Luganda', teacher: 'Ms.Namakola Stacy, Ms.Amasha Deborah,Mr.Gyagenda Mark' },
    { subject: 'Germany', teacher: 'Mr.Htla Otim, Ms.Vicky Atwaro, Ms.Mdondo Alexa ' },
    { subject: 'French', teacher: 'Mr.Ssebunya Alex, Mr.Kiconco Doreen, Ms.Nakigudde Damalie' },
    { subject: 'Computer', teacher: 'Mr.Mugisha Andrew , Ms.Tendo Nalukenge, Mr.Tom Mugerwa' },
];
const tableBody = document.querySelector('#subjects-table tbody');
if (tableBody) {
    subjects.forEach(sub => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = sub.subject;
        row.insertCell().textContent = sub.teacher;
    });
}

// News Form (News & Events)
const newsForm = document.getElementById('news-form');
if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;
        if (title && date && description) {
            const eventsList = document.getElementById('events-list');
            const newEvent = document.createElement('li');
            newEvent.textContent = `${date}: ${title} - ${description}`;
            eventsList.appendChild(newEvent);
            newsForm.reset();
            alert('Event submitted successfully!');
        } else {
            alert('Please fill all fields.');
        }
    });
}

// Lightbox
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}


// Gallery Lightbox
const galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('lightbox');
        modal.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="${img.alt}">
                <span class="close">&times;</span>
            </div>
        `;
        document.body.appendChild(modal);
        modal.querySelector('.close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) document.body.removeChild(modal);
        });
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('There are missing fielsd, please fill!.');
        }
    });
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}
