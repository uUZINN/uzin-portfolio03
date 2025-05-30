import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function work() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll({
        allowNestedScroll: true
    });


    gsap.to(".parallax__item__bike", {
        xPercent: 130,
        ease: "none",
        duration: 0.1,
        scrollTrigger: {
            trigger: ".parallax__item__bike",
            start: "top-=450",
            end: "bottom",
            scrub: true,
        }
    })

    gsap.utils.toArray(".parallax__item__desc").forEach(item => {
        gsap.to(item, {
            yPercent: -30,
            ease: "none",
            duration: 0.5,
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                markers: false,
                scrub: 0.5
            }
        });
    });





}
// export function timeLine() {
//     gsap.registerPlugin(ScrollTrigger);
//     ScrollTrigger.normalizeScroll({
//         allowNestedScroll: true
//     });


//     const ani2 = gsap.timeline();
//     ani2.from(".mobile_ani .i2", { y: -200, autoAlpha: 0, borderRadius: 200 })
//         .from(".mobile_ani .i1", { y: 200, autoAlpha: 0, borderRadius: 200 })
//         .from(".mobile_ani .i3", { y: -200, autoAlpha: 0, borderRadius: 200 })

//     ScrollTrigger.create({
//         animation: ani2,
//         trigger: "#mainMobile",
//         start: "top top",
//         end: "+=2000",
//         scrub: true,
//         pin: true,
//         markers: true,
//         anticipatePin: 1,
//     });



// }
