const BannerSwiper = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        1024: {
            slidesPerView: 1,

        }
    }
    }
);

const ProjectSwiper = new Swiper(".project-swiper", {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        1024: {
            slidesPerView: 3,
            spaceBetween: 40,

        },
    }
    }
);

const VideoSwiper = new Swiper(".video-swiper", {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        1024: {
            slidesPerView: 3,
            spaceBetween: 40,

        },
    }
    }
);

const CommentSwiper = new Swiper(".comment-swiper", {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        1024: {
            slidesPerView: 2,
            spaceBetween: 40,

        },
    }
    }
);

const ContactSwiper = new Swiper(".contact-swiper", {
    slidesPerView: 1,
    speed: 1000,
    // loop: true,
    // autoplay: {
    //     delay: 2000,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        prevEl: ".custom-prev-button",
        nextEl: ".custom-next-button",
       
    },

    breakpoints: {

        1024: {
            slidesPerView: 1,
            spaceBetween: 20,

        },
    }
    }
);
