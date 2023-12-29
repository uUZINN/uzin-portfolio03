import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

export function typing() {
    gsap.registerPlugin(ScrollTrigger);



    const target = gsap.utils.toArray(".split");

    target.forEach(target => {
        let splitClient = new SplitType(target, { type: "line, word, char" });
        let lines = splitClient.lines;
        //let words = splitClient.words;
        //let chars = splitClient.chars;

        gsap.from(lines, {
            yPercent: 100,
            opacity: 0,

            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: target,
                start: "top bottom",
                end: "+400",
            }
        })
    });



    gsap.utils.toArray(".colorChange").forEach(item => {
        gsap.to(item, {
            duration: 5,
            color: '#88EAD2',
            ease: 'power1.inOut'
        });
    });


}

