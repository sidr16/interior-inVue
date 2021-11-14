
const App = {
    data() {
        return {
            imgIndex: 0,
            sliderIndex: 0,
            imgArray: [
                'img/slider-img1.jpg',
                'img/slider-img2.jpg',
                'img/slider-img3.jpg',
                'img/slider-img4.jpg'
            ],
        }
    },

    methods: {
        ImgNext() {
            if(this.imgIndex == 3) {
                this.imgIndex = 0;
            } else {
                this.imgIndex++;
            }
        },

        ImgPrev() {
            if(this.imgIndex <= 0) {
                this.imgIndex = 3;
            } else {
                this.imgIndex--;
            }
        },

        SliderPrev() {
            slideTrack = document.querySelector('.slider__track')

            if (slideTrack.style.left >= 0 + 'px') {
                this.sliderIndex = 4
            }

            this.sliderIndex--

        },

        SliderNext() {

            slideTrack = document.querySelector('.slider__track')

            if(slideTrack.style.left == -1050 + 'px') {
                this.sliderIndex = 0 - 1
            }

            this.sliderIndex++
            
        }
    }
}

Vue.createApp(App).mount('#app')
