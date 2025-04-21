document.addEventListener('DOMContentLoaded', function(){
    /**
     * Activities titles
     */
    let activitiesTitles = document.querySelectorAll(
        ".activities__title__button"
    );
    activitiesTitles.forEach((title) => {
        //console.log(title);
        title.addEventListener('click', (t) => {
            //console.log(t);
            activitiesTitles.forEach((t) => t.classList.remove('active'));
            title.classList.add('active');

            let activitiesList = document.querySelectorAll('.activities__item');
            activitiesList.forEach((item) => {
                //console.log(item);
                item.style.display = "none";
                if(item.dataset.type === title.dataset.type || title.dataset.type === 'all'){
                    item.style.display = "block";
                }
            });
        });
    });

    /**
     * Testimonials Slider
     */

    class TestimonialsSlider{
        constructor(){
            this.wrapper = document.querySelector("testimonials__wrapper");
            this.slides = Array.from(document.querySelectorAll(".testimonials__slide"));
            this.controls = document.querySelectorAll(".testimonial__control");

            this.currentIndex = 0;
            this.slideCount = this.slides.length;

            this.init();
        }

        init(){
            this.controls.forEach((control) => {
                control.addEventListener('click', (e) => {
                    const direction = e.currentTarget.dataset.direction;
                    this.handleSlideChange(direction);
                });
            });
        }

        handleSlideChange(direction){
            this.slides[this.currentIndex].classList.remove('active');

            if(direction === "next"){
                this.currentIndex = (this.currentIndex + 1) % this.slideCount;
            }else{
                this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount; 
            }

            this.slides[this.currentIndex].classList.add('active');
        }
    }

    new TestimonialsSlider();

    /**
     * FAQS accordions
    */
    const accordions = document.querySelectorAll(".faqs__accordion");

    accordions.forEach((accordion) => {
        const answer = accordion.querySelector(".faqs__accordion__answer");

        accordion.addEventListener('click', () => {
            const isActive = accordion.classList.contains("active");

            accordions.forEach((item) => {
                const itemAnswer = item.querySelector(".faqs__accordion__answer");
                itemAnswer.classList.remove("active");
                itemAnswer.style.height = "0";
            });

            if(!isActive){
                accordion.classList.add(".active");
                answer.style.height = answer.scrollHeight + "px";
            }

        });
    });
});