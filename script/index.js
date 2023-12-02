import { Slider } from './Slider.js';
import { testimonials_one, testimonials_two } from '../db/store.js';

document.addEventListener("DOMContentLoaded", function () {
  const firstSliderElement = document.querySelector('.first-slider');
  const secondSliderElement = document.querySelector('.second-slider');

  if (firstSliderElement) {
    new Slider(firstSliderElement, testimonials_one, {
      autoplay: 5000,
    });
  }

  if (secondSliderElement) {
    new Slider(secondSliderElement, testimonials_two, {
      autoplay: false, // you can just delete it and it will be false by default
    });
  }
});
