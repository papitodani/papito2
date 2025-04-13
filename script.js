document.addEventListener("DOMContentLoaded", () => {
    // Progress Bar
    window.addEventListener("scroll", () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      document.getElementById("progressBar").style.width = scrolled + "%"
    })
  
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menuToggle")
    const mobileMenu = document.getElementById("mobileMenu")
  
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
      document.body.classList.toggle("menu-open")
    })
  
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll(".mobile-nav-link")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        document.body.classList.remove("menu-open")
      })
    })
  
    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById("scrollToTop")
  
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("active")
      } else {
        scrollToTopBtn.classList.remove("active")
      }
    })
  
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
   // Testimonials Slider
const testimonialSlides = document.querySelectorAll(".testimonial-slide")
const dots = document.querySelectorAll(".dot")
const prevBtn = document.getElementById("testimonialPrev")
const nextBtn = document.getElementById("testimonialNext")
let currentSlide = 0

function showSlide(n) {
  // Removemos la clase 'active' de todos los slides y dots
  testimonialSlides.forEach((slide) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  // Calculamos el índice correcto (en bucle)
  currentSlide = (n + testimonialSlides.length) % testimonialSlides.length

  // Mostramos el slide y activamos el dot correspondiente
  testimonialSlides[currentSlide].classList.add("active")
  dots[currentSlide].classList.add("active")
}

// Eventos de click para navegación manual
prevBtn.addEventListener("click", () => showSlide(currentSlide - 1))
nextBtn.addEventListener("click", () => showSlide(currentSlide + 1))

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index))
})

// Arrancamos mostrando el primer slide si no lo está ya
showSlide(currentSlide)

// Auto-rotación del slider: Cambia de testimonio cada 5 segundos
setInterval(() => {
  showSlide(currentSlide + 1)
}, 5000)

  
    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item")
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
  
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active")
  
        // Close all FAQ items
        faqItems.forEach((faqItem) => {
          faqItem.classList.remove("active")
        })
  
        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add("active")
        }
      })
    })
  
    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")
  
    window.addEventListener("scroll", () => {
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href").substring(1) === current) {
          link.classList.add("active")
        }
      })
    })
  
    // Form Submission
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Here you would typically send the form data to a server
        // For demonstration, we'll just show a success message
  
        const formData = new FormData(contactForm)
        const formValues = Object.fromEntries(formData.entries())
  
        console.log("Form submitted with values:", formValues)
  
        // Reset form and show success message
        contactForm.reset()
        alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.")
      })
    }
  
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
  
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  })
  