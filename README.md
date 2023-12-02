## Native Javascript Slider
---

#### DOCS
the following elements with specified classes are required in your HTML:
- `.slider__container`: A container for the slides.
- `.slider__dots`: A container for navigation dots.
- Two buttons with classes `.prev_slide` and `.next_slide` for navigation.


#### Functionality
- **Navigation Arrows**: Available in desktop view. The slider loops back to the first slide after reaching the last one.
- **Navigation Dots**: Accessible on both desktop and mobile for quick navigation and to indicate the active slide.
- **Configurable AutoPlay**: Automatically switches slides based on a set time duration. Configure this in `./script/index.js` by uncommenting and setting the `autoPlay` function with a desired duration in milliseconds (e.g., `5000` for 5 seconds).

#### Code Description
- written in native javascript.
- it supports multiple instances of the component in the same page with possibilities to assign
different configurations per instance, you just need to pass the div you need your slide into EX: `<div class="slider first-slider">`
the `slide` class is a MUST just add the second class like `first-slider` here add yours and pass it to the js you are apply the class to like so
```javascript
  const firstSliderElement = document.querySelector('.first-slider');

    if (firstSliderElement) {
    new Slider(firstSliderElement, testimonials_one, {
      autoplay: 5000,
    });
  }
```
- No external javascript or css dependencies to be used

#### Recommendations

### Personally I would use something like react for way better developer experience

#### I would highly suggest using Typescript to avoid bugs, and strict the use of the testimonal object to a specific scheme so the slider would work in maximum capacity
currently the code handles bugs like not passing name for example by rendering `Anonymous` but If we have a type like the commented interface in `store.js`
```ts
interface ITestimonial {
    name: string;
    resume: string;
    role: string;
    avatar: string;
    text: string;
}
```
and pass it to our data's array it will make sure that we are passing the write props and provides auto complete for the missing props.

#### I would also suggest creating an API and sending the data with GraphQL so that we won't fetch any unnecessary information, and enhance performance

#### utilize tools like Storybook to separate the component and accurately do a pixel perfect implementation

#### provide the design in a tool like Figma to have a specific spacings and colos guide for quicker implementation
for my implementation I used software called `instantEyeDropper` to get the exact colors

#### For multiple multiple instances I used classes but I would go for a different approach if used something more flexible like React.js and applied better design principles like `separation of concerns`

--- 

### Note
This documentation provides guidelines for a basic implementation of a native JavaScript slider. For complex applications, adopting modern frameworks and tools as suggested above is recommended for enhanced scalability and maintainability.


```
This revised README document provides a comprehensive overview of your native JavaScript slider, including its setup, functionality, and recommendations for advanced development practices.
```