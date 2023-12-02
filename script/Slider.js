export class Slider {
    constructor(rootElement, testimonials, options = {}) {
      this.rootElement = rootElement;
      this.testimonials = testimonials;
      this.options = options;
      this.currentIndex = 0;
      this.init();
    }
  
    init() {
      this.sliderContainer = this.rootElement.querySelector(".slider__container");
      this.dotsContainer = this.rootElement.querySelector(".slider__dots");
      this.nextBtn = this.rootElement.querySelector(".next_slide");
      this.prevBtn = this.rootElement.querySelector(".prev_slide");
  
      if (!this.sliderContainer || !this.dotsContainer || !this.nextBtn || !this.prevBtn) {
        console.error("Required elements are missing for the slider to function properly.");
        return;
      }
  
      this.createSlidesAndDots();
      this.updateSliderWidth();
      this.updateActiveDot();
      this.attachEventListeners();
      if (this.options.autoplay) {
        this.autoPlay(this.options.autoplay);
      }
    }
  
    createSlidesAndDots() {
      this.testimonials.forEach((testimonial, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slider__slide");
        slide.innerHTML = `
          <p class="testimonial__text">${testimonial.text || ""}</p>
          <img src="${testimonial.avatar || "default-avatar-url"}" alt="profile-pic" width="80" height="80"/>  
          <h3 class="testimonial__name">${testimonial.name || "Anonymous"}</h3>
          <p class="testimonial__role">${testimonial.role || "Unknown Role"}</p>
          <a href="${testimonial.resume || "#"}" target="_blank">View CV Sample</a>
        `;
        this.sliderContainer.appendChild(slide);
  
        const dot = document.createElement("button");
        dot.classList.add("dot");
        dot.setAttribute("aria-label", `Slide ${index + 1}`);
        dot.innerText = "⬤";
        dot.addEventListener("click", () => {
          this.currentIndex = index;
          this.updateSliderPosition();
        });
        this.dotsContainer.appendChild(dot);
      });
    }
  
    updateSliderWidth() {
      const firstSlide = this.sliderContainer.querySelector(".slider__slide");
      this.slideWidth = firstSlide ? firstSlide.clientWidth : 0;
    }
  
    updateSliderPosition() {
      this.sliderContainer.scrollTo({
        left: this.currentIndex * this.slideWidth,
        behavior: "smooth",
      });
      this.updateActiveDot();
    }
  
    updateActiveDot() {
      const dots = this.dotsContainer.querySelectorAll(".dot");
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === this.currentIndex);
      });
    }
  
    autoPlay(timeInMs) {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.updateSliderPosition();
      }, timeInMs);
    }
  
    attachEventListeners() {
      this.nextBtn.addEventListener("click", () => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.updateSliderPosition();
      });
  
      this.prevBtn.addEventListener("click", () => {
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
        this.updateSliderPosition();
      });
  
      window.addEventListener("resize", this.updateSliderWidth.bind(this));
    }
  }
  