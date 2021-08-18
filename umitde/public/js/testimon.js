var Testimonial = /** @class */ (function () {
    function Testimonial() {
        this.mainOffset = 0;
        this.testimonials = [];
    }
    Testimonial.prototype.getTranslateValues = function (element) {
        var style = window.getComputedStyle(element);
        var matrix = style['transform'];
        // No transform property. Simply return 0 values.
        if (matrix === 'none') {
            return {
                x: 0,
                y: 0,
                z: 0
            };
        }
        // Can either be 2d or 3d transform
        var matrixType = '2d';
        var matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
        // 2d matrices have 6 values
        // Last 2 values are X and Y.
        // 2d matrices does not have Z value.
        if (matrixType === '2d') {
            return {
                x: matrixValues[4],
                y: matrixValues[5],
                z: 0
            };
        }
    };
    Testimonial.prototype.init = function () {
        var _this = this;
        this.testimonialWrapper = document.querySelector(".testimonials_container .testimonial");
        this.mainOffset = this.testimonialWrapper.offsetLeft;
        var testimons = document.querySelectorAll(".testimonials_container .testimonial .testimonial__item");
        testimons.forEach(function (testi) {
            _this.testimonials.push(testi);
        });
        this.dotsWrapper = document.querySelector(".testimonials_container .actions .dots");
        this.testimonialWrapper.style.left = this.mainOffset + "px";
        var leftButton = document.querySelector(".testimonials_container .testimonial_arrow_left");
        var rightButton = document.querySelector(".testimonials_container .testimonial_arrow_right");
        leftButton.addEventListener('click', function (e) {
            e.preventDefault();
            _this.toRight();
        });
        rightButton.addEventListener('click', function (e) {
            e.preventDefault();
            _this.toLeft();
        });
        // Creating dots
        for (var i = 0; i < this.testimonials.length; i++) {
            if (i == 0) {
                this.dotsWrapper.innerHTML = '<div class="dot active"></div>';
            }
            else {
                this.dotsWrapper.innerHTML += '<div class="dot"></div>';
            }
        }
        console.log("Testimonial initialized with offset: " + this.mainOffset);
        window.addEventListener('resize', function () {
            console.log("objecresizt");
            _this.mainOffset = _this.testimonialWrapper.offsetLeft;
            _this.wrapperTranslate();
        });
    };
    Testimonial.prototype.getActivatedIndex = function () {
        var activatedIndex = 0;
        var i = 0;
        this.testimonials.forEach(function (test) {
            if (test.classList.contains("active")) {
                activatedIndex = i;
            }
            i++;
        });
        return activatedIndex;
    };
    Testimonial.prototype.toLeft = function () {
        var activatedIndex = this.getActivatedIndex() ? this.getActivatedIndex() : 0;
        try {
            this.testimonials[activatedIndex].classList.remove("active");
            this.testimonials[activatedIndex + 1].classList.add("active");
        }
        catch (e) { // The last item
            this.testimonials[this.testimonials.length - 1].classList.remove("active");
            this.testimonials[0].classList.add("active");
        }
        this.wrapperTranslate();
    };
    Testimonial.prototype.toRight = function () {
        var activatedIndex = this.getActivatedIndex() ? this.getActivatedIndex() : 0;
        try {
            this.testimonials[activatedIndex].classList.remove("active");
            this.testimonials[activatedIndex - 1].classList.add("active");
        }
        catch (e) { // The last item
            this.testimonials[this.testimonials.length - 1].classList.add("active");
            this.testimonials[0].classList.remove("active");
        }
        this.wrapperTranslate();
    };
    Testimonial.prototype.wrapperTranslate = function () {
        var activatedIndex = this.getActivatedIndex() ? this.getActivatedIndex() : 0;
        for (var i = 0; i < this.dotsWrapper.children.length; i++) {
            this.dotsWrapper.children[i].classList.remove("active");
        }
        this.dotsWrapper.children[activatedIndex].classList.add("active");
        var w = window.innerWidth;
        var testItemWidth = 645;
        if (w <= 820 && w > 600) {
            testItemWidth = 400;
        }
        else if (w <= 600) {
            testItemWidth = 352;
        }
        if (activatedIndex == 0) {
            this.testimonialWrapper.style.left = this.mainOffset + "px";
        }
        else {
            this.testimonialWrapper.style.left = this.mainOffset - ((activatedIndex) * testItemWidth) + "px";
        }
    };
    return Testimonial;
}());
