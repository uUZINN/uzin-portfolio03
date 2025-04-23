import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function timeLine() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll({
        allowNestedScroll: true
    });



    const ani2 = gsap.timeline();
    ani2.from(".mobile_ani .i2", { y: -200, autoAlpha: 0, borderRadius: 200 })
        .from(".mobile_ani .i1", { y: 200, autoAlpha: 0, borderRadius: 200 })
        .from(".mobile_ani .i3", { y: -200, autoAlpha: 0, borderRadius: 200 })

    ScrollTrigger.create({
        animation: ani2,
        trigger: ".main_mobile",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    });

}

