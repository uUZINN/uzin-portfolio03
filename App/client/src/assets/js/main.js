import { work } from "./work.js";
import { smooth } from "./smooth.js";
import { circle } from "./circle.js";
import { link } from "./link.js";
import { setFlowBanner } from "./setFlowBanner.js";
import { typing } from "./typing.js";


window.addEventListener("load", function () {



    link();



    requestAnimationFrame(() => {
        window.scrollTo(0, 1);
        window.scrollTo(0, 0);
    });
})
