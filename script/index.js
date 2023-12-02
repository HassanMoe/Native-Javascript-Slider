import { Slider } from './Slider.js';
import { testimonials_one, testimonials_two } from '../db/store.js';

document.addEventListener("DOMContentLoaded", function () {
  // Assuming you have two sliders with different classes or IDs in your HTML
  const firstSliderElement = document.querySelector('.first-slider');
  const secondSliderElement = document.querySelector('.second-slider');

  if (firstSliderElement) {
    new Slider(firstSliderElement, testimonials_one, {
      autoplay: 5000, // Example configuration for the first slider
    });
  }

  if (secondSliderElement) {
    new Slider(secondSliderElement, testimonials_two, {
      autoplay: 3000, // Example configuration for the second slider
    });
  }
});
