const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        if (el.classList.contains('card')) {
            el.classList.add('show');
        }

        if (el.classList.contains('tech-stack')) {
            el.querySelectorAll('img')
              .forEach(img => img.classList.add('animate'));
        }

        if (el.classList.contains('certificate')) {
            el.querySelectorAll('a')
              .forEach(a => a.classList.add('animate'));
        }

        if (
            el.classList.contains('title-1') ||
            el.classList.contains('title-2') ||
            el.classList.contains('title-3')
        ) {
            el.classList.add('show');
        }

        if (
            el.classList.contains('squid') ||
            el.classList.contains('caterpillar')
        ) {
            el.classList.add('show');
        }
    });
}, {
    threshold: 0.3
});

document.querySelectorAll(
    '.card, .tech-stack, .certificate, .title-1, .title-2, .title-3, .squid, .caterpillar'
).forEach(el => observer.observe(el));

const lightbox = GLightbox({
    touchNavigation: true,
    loop: true
});

const slider = document.querySelector('.slider');
const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        slider.style.transform = `translateX(${index * 100}%)`;
    });
});

const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(c => c.classList.remove('active'));

        const target = document.getElementById(tab.dataset.target);
        target.classList.add('active');

        if (tab.dataset.target === "tech") {

            const images = target.querySelectorAll('img');

            images.forEach(img => {
                img.classList.remove('animate'); 
                void img.offsetWidth; 
                img.classList.add('animate');
            });
        }
    });
});

const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status");
const inputs = form.querySelectorAll("input, textarea");

inputs.forEach(input => {
    input.addEventListener("input", () => {
        const errorText = input.parentElement.querySelector(".error-message");
        errorText.innerText = "";
        input.classList.remove("error");
    });
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let isValid = true;

    status.innerText = "";
    status.className = "";

    inputs.forEach(input => {
        const errorText = input.parentElement.querySelector(".error-message");

        errorText.innerText = "";
        input.classList.remove("error");

        if (!input.value.trim()) {
            errorText.innerText = "Required";
            input.classList.add("error");
            isValid = false;
        }

        if (input.type === "email" && input.value) {
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if (!emailPattern.test(input.value)) {
                errorText.innerText = "Invalid email";
                input.classList.add("error");
                isValid = false;
            }
        }
    });

    if (!isValid) return;

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        status.innerText = "Message sent successfully!";
        status.classList.add("success");
        form.reset();

        setTimeout(() => {
            status.innerText = "";
            status.className = "";
        }, 3000);
    }
});

