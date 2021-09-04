declare var Swiper: any;
declare var Skills: any;

const runJs = () => {
      setTimeout(() => {
      var SwiperConf = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        // loop: true,
        // infinite: true,
        speed: 1000,
        centeredSlides: true,
        slidesPerView: 1.10,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
        },
        slideActiveClass: "active",
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        keyboard: {
          enabled: true,
        },
    
        breakpoints: {
          370: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1.2,
          },
          600: {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1.3,
            spaceBetween: 40,
          },
          1100: {
            slidesPerView: 1.8,
            spaceBetween: 40,
          }
        }
      });
    
      var skills_wrapper = document.getElementById("tech_wrapper");
      var info_wrapper = document.getElementById("skills_info_wrapper")
      var skills_obj = new Skills(skills_wrapper, info_wrapper);
      }, 1000);
}

export default runJs;