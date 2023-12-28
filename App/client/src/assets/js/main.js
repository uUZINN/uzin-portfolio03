import { work } from "./work.js";
import { smooth } from "./smooth.js";
import { circle } from "./circle.js";
import { link } from "./link.js";
import { setFlowBanner } from "./setFlowBanner.js";
import { typing } from "./typing.js";


window.addEventListener("load", function () {
    circle();
    link();
    work();
    typing();
    smooth();
    setFlowBanner();
})
