import { d as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, f as renderSlot, e as renderHead, a as addAttribute, h as defineStyleVars, m as maybeRenderHead } from './astro/server_DVJ5F72b.mjs';
import 'kleur/colors';
/* empty css                          */
import { a as $$Footer, $ as $$VerticalBigNav } from './Footer_Z0x7l_nH.mjs';
/* empty css                                */
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://corisdevelopmentgroup.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { metaTags } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="robots" content="index, follow"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script><script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js"><\/script>', "</head> <body> <!-- Coming From stagging site Netlify Deploy staggin-- --> ", ' <div class="content_offset"> ', " </div> <!-- Footer --> ", ' <script>\n			// @ts-nocheck\n			// Storyblok Live Preview\n			document.addEventListener("storyblok-live-preview-updated", () => {\n				console.log("Live preview: body updated");\n			});\n\n			gsap.registerPlugin(ScrollTrigger);\n			// ScrollTrigger.normalizeScroll(true);\n			const lenis = new Lenis();\n\n			lenis.on("scroll", ScrollTrigger.update);\n			gsap.ticker.add((time) => {\n				lenis.raf(time * 1000);\n			});\n			gsap.ticker.lagSmoothing(0);\n\n			// Check if animated element exists\n			const aboutCTA = document.getElementsByClassName("about-cta");\n			const servicesCTA = document.getElementById("servicesCTA");\n			const splitText = document.getElementsByClassName("split-text");\n\n			if (aboutCTA.length > 0) {\n				//About Scroll\n				let tl = gsap.timeline({\n					scrollTrigger: {\n						trigger: ".about-cta",\n						start: "top center+=200",\n						end: "bottom center+=200",\n						scrub: 1,\n						// markers: true\n					},\n				});\n				gsap.set("#line2", { xPercent: -30 });\n				let tween = gsap.to(".word", { duration: 1, opacity: 1, stagger: 1 });\n				let scrollLeft = gsap.to("#line1", { xPercent: -30, duration: 10 });\n				let scrollRight = gsap.to("#line2", { xPercent: 0, duration: 10 });\n				tl.add(tween).add(scrollLeft, "<2").add(scrollRight, "<");\n			}\n\n			if (splitText.length > 0) {\n				//About Scroll\n				let tl = gsap.timeline({\n					scrollTrigger: {\n						trigger: ".split-text",\n						start: "top top+=20%",\n						end: "bottom-=10% top+=10%",\n						scrub: 1,\n						// markers: true\n					},\n				});\n				gsap.set("#line2", { xPercent: -30 });\n				let tween = gsap.to(".word", { duration: 1, opacity: 1, stagger: 1 });\n				let scrollLeft = gsap.to("#line1", { xPercent: -30, duration: 10 });\n				let scrollRight = gsap.to("#line2", { xPercent: 0, duration: 10 });\n				tl.add(tween).add(scrollLeft, "<2").add(scrollRight, "<");\n			}\n\n			if (servicesCTA) {\n				// Services Scroll\n				let ss = gsap.timeline({\n					scrollTrigger: {\n						trigger: "#servicesCTA",\n						start: "top bottom-=30%",\n						end: "center bottom",\n						scrub: 1,\n						// pin: true,\n						// pinSpacing: false,\n						// markers: true,\n					},\n				});\n				let textIn = gsap.to("#serviceHeadline", {\n					duration: 2,\n					opacity: 1,\n				});\n				let overlayClip = gsap.to(".overlay", {\n					duration: 2,\n					clipPath: "circle(110%)",\n				});\n				ss.add(textIn).add(overlayClip);\n			}\n		<\/script> </body> </html> '])), metaTags?.title, addAttribute(metaTags?.description, "content"), renderHead(), renderComponent($$result, "VerticalBigNav", $$VerticalBigNav, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://corisdevelopmentgroup.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    class: className,
    innerClassNames,
    text = "Button Default",
    link,
    background = "#111",
    shadowRGB = "145, 106, 61",
    gradientAnimated,
    gradient,
    outline
  } = Astro2.props;
  let defaultState = true;
  if (gradientAnimated || gradient || outline) {
    defaultState = false;
  } else {
    defaultState = true;
  }
  function defaultSettings() {
    let classString = "";
    classString += className?.includes("font-cg") ? "" : "flex font-cg text-xl uppercase";
    classString += className?.includes("text-white") ? "" : " text-white";
    return classString;
  }
  const $$definedVars = defineStyleVars([{ background, shadowRGB }]);
  return renderTemplate`${defaultState && renderTemplate`${maybeRenderHead()}<div${addAttribute(["my-4 rounded-lg", className, defaultSettings()], "class:list")} data-astro-cid-dggjxyhh${addAttribute($$definedVars, "style")}><a${addAttribute(link, "href")} class="glow text-center w-full rounded-lg px-6 py-3 transition duration-300 ease-in-out bg-golden-500 hover:bg-golden-400" data-astro-cid-dggjxyhh${addAttribute($$definedVars, "style")}>${text}</a></div>`}${gradientAnimated && renderTemplate`<div${addAttribute(["p-0.5 my-4 rounded-lg", className], "class:list")} data-astro-cid-dggjxyhh${addAttribute($$definedVars, "style")}><a${addAttribute(link, "href")}${addAttribute(["glow-on-hover flex-1 px-6 py-3 rounded-lg after:rounded-lg before:rounded-lg text-center", innerClassNames], "class:list")} data-astro-cid-dggjxyhh${addAttribute($$definedVars, "style")}>${text}</a></div>`}${gradient && renderTemplate`<div${addAttribute(["my-4 shadow rounded-lg", className], "class:list")} data-astro-cid-dggjxyhh${addAttribute($$definedVars, "style")}><a${addAttribute(link, "href")} class="glow gradient-animate w-full text-center rounded-lg px-6 py-3 bg-gradient-to-r from-golden-500 from-30% via-golden-300 via-55% to-golden-400 to-70%" data-astro-cid-dggjxyhh${addAttribute($$definedVars, "style")}>${text}</a></div>`}${outline && renderTemplate`<div${addAttribute(["my-4 rounded-lg", className], "class:list")} data-astro-cid-dggjxyhh${addAttribute($$definedVars, "style")}><a${addAttribute(link, "href")} class="glow text-center w-full rounded-lg px-6 py-3 bg-transparent border border-golden-400" data-astro-cid-dggjxyhh${addAttribute($$definedVars, "style")}>${text}</a></div>`}`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/components/utils/Button.astro", void 0);

export { $$Layout as $, $$Button as a };
