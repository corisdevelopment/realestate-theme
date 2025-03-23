import { d as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, b as renderComponent, r as renderTemplate, g as Fragment, u as unescapeHTML, a as addAttribute, h as defineStyleVars, i as renderScript } from './astro/server_DVJ5F72b.mjs';
import 'kleur/colors';
import { x as xe, R as Re, b as LogoImg, E as Ee, v } from './Footer_Z0x7l_nH.mjs';
import { $ as $$Layout, a as $$Button$1 } from './Button_CuWxHUZa.mjs';
import { $ as $$Image } from './_astro_assets_B1zK5J2g.mjs';
/* empty css                          */
import 'clsx';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const $$Astro$E = createAstro("https://corisdevelopmentgroup.com");
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$Page;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main${spreadAttributes(xe(blok))}> ${blok.body?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </main>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/Page.astro", void 0);

const $$Astro$D = createAstro("https://corisdevelopmentgroup.com");
const $$Homepage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$Homepage;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main${spreadAttributes(xe(blok))}> ${blok.body?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </main>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/Homepage.astro", void 0);

const $$Astro$C = createAstro("https://corisdevelopmentgroup.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { blok } = Astro2.props;
  const content = Re(blok.content);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article${spreadAttributes(xe(blok))} class="bg-white"> <h1>${blok.title}</h1> <p>${blok.description}</p> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(content)}` })} ${blok.components?.map((blok2) => {
    return renderTemplate`${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </article> ` })}`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/BlogPost.astro", void 0);

const $$Astro$B = createAstro("https://corisdevelopmentgroup.com");
const $$HeroCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$HeroCTA;
  const { blok, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(xe(blok))}${addAttribute(["hero-section", className], "class:list")}> ${blok.hero?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </section>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/HeroCTA.astro", void 0);

const $$Astro$A = createAstro("https://corisdevelopmentgroup.com");
const $$TwoColumn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$TwoColumn;
  const {
    // title, 
    blok,
    content = Re(blok.content),
    image = blok.image,
    reverse = blok.layout
  } = Astro2.props;
  const layout = reverse != "false" ? "order-last" : "";
  image.alt = image.alt != null ? image.alt : "";
  image.alt = image.name != null ? image.name : image.alt;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(xe(blok))} id="twoColumn" class="w-full flex justify-center"> <div class="container mx-auto p-8 mb-8 grid grid-cols-1 lg:grid-cols-2 gap-x-6"> <div${addAttribute(["flex-1 text-md lg:text-xl mb-8", layout], "class:list")} aria-label="Text Content"> <h2 class="py-4 text-4xl lg:text-6xl">${blok.title}</h2> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })} </div> <div class="image flex-1 rounded-md lg:rounded-2xl shadow-2xl"> ${renderComponent($$result, "Image", $$Image, { "width": 830, "height": 540, "src": image?.filename, "alt": image?.alt, "class": "aspect-auto inset-0 rounded-md", "aria-describedby": "Image content" })} </div> </div> </section>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/TwoColumn.astro", void 0);

const $$Astro$z = createAstro("https://corisdevelopmentgroup.com");
const $$ServicesCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$ServicesCTA;
  const { blok, image = blok.image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-qvvdtqwf> <div id="servicesCTA" class="bg-golden-300 w-full flex justify-center text-golden-950 " data-astro-cid-qvvdtqwf> <div class="absolute top-[10%] left-0 w-full max-lg:px-8" data-astro-cid-qvvdtqwf> <h2 id="serviceHeadline" class="text-center text-6xl lg:text-8xl font-cg" data-astro-cid-qvvdtqwf> ${blok.headline} </h2> </div> <div id="circleReveal" class="overlay py-48" data-astro-cid-qvvdtqwf> <div class="circles" data-astro-cid-qvvdtqwf> <div${spreadAttributes(xe(blok))} class="container mx-auto p-8 mt-32 grid grid-cols-1 lg:grid-cols-2 gap-x-6" data-astro-cid-qvvdtqwf> <div class="flex-1 text-md lg:text-xl mb-8" aria-label="Text Content" data-astro-cid-qvvdtqwf> ${blok.services?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-qvvdtqwf": true })}`;
  })} </div> <div class="image flex-1 self-center rounded-md lg:rounded-2xl shadow-2xl" data-astro-cid-qvvdtqwf> ${renderComponent($$result, "Image", $$Image, { "width": 1080, "height": 600, "src": image.filename, "alt": image.alt, "class": "aspect-auto", "aria-describedby": "Image content", "data-astro-cid-qvvdtqwf": true })} </div> </div> </div> </div> </div> </section> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/ServicesCTA.astro", void 0);

const $$Astro$y = createAstro("https://corisdevelopmentgroup.com");
const $$AboutCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$AboutCTA;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(xe(blok))} class="about-cta bg-golden-300" data-astro-cid-lxkllyfb> <div class="container mx-auto max-content max-content-mobile lg:mt-36 md:max-xl:px-8" data-astro-cid-lxkllyfb> <h2 class="scrollFadeIn font-cg font-semibold text-golden-950" data-astro-cid-lxkllyfb> ${blok.textTop?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-lxkllyfb": true })}`;
  })} </h2> </div> <div class="horizontal-gallery overflow-hidden my-4 lg:my-12 py-4 w-full" data-astro-cid-lxkllyfb> <div id="line1" class="line-container flex items-end gap-2 my-2 lg:gap-8 lg:my-8" data-astro-cid-lxkllyfb> ${blok.imageLine1?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-lxkllyfb": true })}`;
  })} </div> <div id="line2" class="line-container flex items-end gap-2 my-2 lg:gap-8 lg:my-8" data-astro-cid-lxkllyfb> ${blok.imageLine2?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-lxkllyfb": true })}`;
  })} </div> </div> <div class="container mx-auto max-content max-content-mobile lg:mb-36 md:max-xl:px-8" data-astro-cid-lxkllyfb> <h2 class="scrollFadeIn font-cg font-semibold text-golden-950" data-text="Timelessly Moderm" data-astro-cid-lxkllyfb> ${blok.textBottom?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-lxkllyfb": true })}`;
  })} </h2> ${blok.description?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-lxkllyfb": true })}`;
  })} </div> </section> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/AboutCTA.astro", void 0);

const $$Astro$x = createAstro("https://corisdevelopmentgroup.com");
const $$PropertySection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$PropertySection;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="property-highlight" data-astro-cid-3lem5aiw> <div class="max-content container mx-auto text-white" data-astro-cid-3lem5aiw> <div${spreadAttributes(xe(blok))} class="row flex justify-center" data-astro-cid-3lem5aiw> <div class="flex items-center" data-astro-cid-3lem5aiw> <h2 class="subtle-fade text-center text-3xl lg:text-5xl capitalize font-thin" data-astro-cid-3lem5aiw>${blok.title}</h2> </div> </div> <div class="row" data-astro-cid-3lem5aiw> <div class="props flex items-center max-md:flex-col lg:flex-row gap-4 lg:gap-8" data-astro-cid-3lem5aiw> ${blok.property?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-3lem5aiw": true })}`;
  })} </div> </div> </div> </section> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/PropertySection.astro", void 0);

const $$Astro$w = createAstro("https://corisdevelopmentgroup.com");
const $$ImageGalleryDiamond = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$ImageGalleryDiamond;
  const { blok } = Astro2.props;
  function setClass(index) {
    let cssString = "";
    switch (index) {
      case 0:
        cssString = "col-start-3 col-span-2 row-start-1 row-span-2";
        break;
      case 1:
        cssString = "col-start-2 col-span-2 row-span-2 row-start-2";
        break;
      case 2:
        cssString = "col-start-4 col-span-2 row-span-2 row-start-2";
        break;
      case 3:
        cssString = "col-start-1 col-span-2 row-span-2 row-start-3";
        break;
      // case 4:
      //   cssString = 'col-start-3 col-span-2 row-span-2 row-start-3'
      //   break;
      case 4:
        cssString = "col-start-5 col-span-2 row-span-2 row-start-3";
        break;
      case 5:
        cssString = "col-start-2 col-span-2 row-span-2 row-start-4";
        break;
      case 6:
        cssString = "col-start-4 col-span-2 row-span-2 row-start-4";
        break;
      case 7:
        cssString = "col-start-3 col-span-2 row-span-2 row-start-5";
        break;
      default:
        cssString = "col-start-3 col-span-2 row-span-2 row-start-3";
    }
    return cssString;
  }
  return renderTemplate`${maybeRenderHead()}<section class="gallery-diamond" data-astro-cid-wmuyvz47> <div${spreadAttributes(xe(blok))} class="gallery-wrapper p-8" data-astro-cid-wmuyvz47> <div class="gallery grid grid-cols-6 gap-2 text-white" data-astro-cid-wmuyvz47> ${blok.images.slice(0, 4).map((blok2, index) => renderTemplate`<div${addAttribute(setClass(index), "class")} data-astro-cid-wmuyvz47> <div class="rotate overflow-hidden" data-astro-cid-wmuyvz47> ${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-wmuyvz47": true })} </div> </div>`)} <div class="col-start-3 col-span-2 row-span-2 row-start-3" data-astro-cid-wmuyvz47> <div class="rotate overflow-hidden rounded-lg" data-astro-cid-wmuyvz47> <div class="logo bg-golden-600" data-astro-cid-wmuyvz47> <img${addAttribute(LogoImg.src, "src")} alt="logo" data-astro-cid-wmuyvz47> </div> </div> </div> ${blok.images.slice(4, 8).map((blok2, index) => renderTemplate`<div${addAttribute(setClass(index + 4), "class")} data-astro-cid-wmuyvz47> <div class="rotate overflow-hidden" data-astro-cid-wmuyvz47> ${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-wmuyvz47": true })} </div> </div>`)} </div> </div> </section> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/ImageGalleryDiamond.astro", void 0);

const $$Config = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div></div>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/Config.astro", void 0);

const $$Astro$v = createAstro("https://corisdevelopmentgroup.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Button;
  let {
    blok,
    defaultState,
    outline = false,
    gradient = false,
    gradientAnimated = false,
    className = "",
    innerClassNames = "",
    width = blok.width,
    addedClass = blok.tailwindCSS,
    font = blok.font,
    fontSize = blok.font_size,
    fontColor = blok.font_color
  } = Astro2.props;
  switch (blok.button_type) {
    case "outline":
      outline = true;
      break;
    case "gradient":
      gradient = true;
      break;
    case "animated":
      gradientAnimated = true;
      break;
    default:
      defaultState = true;
  }
  const bgColor = blok.backgroundColor != "" ? blok.backgroundColor : "bg-golden-400 hover:bg-golden-300";
  const background = blok.animatedColor != "" ? blok.animatedColor : "#111";
  innerClassNames = blok.animatedColor === "transparent" ? "hover:text-golden-900" : "";
  const shadowRGB = "145, 106, 61";
  console.log("Button: ", outline);
  const $$definedVars = defineStyleVars([{ background, shadowRGB }]);
  return renderTemplate`${defaultState && renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))}${addAttribute(["my-4 rounded-lg flex uppercase golden-950 golden-600 golden-500 golden-400", className, width, addedClass, font, fontSize, fontColor], "class:list")} data-astro-cid-s4fdibxz${addAttribute($$definedVars, "style")}><a${addAttribute(blok.url, "href")}${addAttribute(["glow text-center w-full rounded-lg px-6 py-3 transition duration-300 ease-in-out", bgColor], "class:list")} data-astro-cid-s4fdibxz${addAttribute($$definedVars, "style")}>${blok.text}</a></div>`}${gradientAnimated && renderTemplate`<div${spreadAttributes(xe(blok))}${addAttribute(["p-0.5 my-4 rounded-lg text-dark-gold flex uppercase", className, width, addedClass, font, fontSize, fontColor], "class:list")} data-astro-cid-s4fdibxz${addAttribute($$definedVars, "style")}><a${addAttribute(blok.url, "href")}${addAttribute(["glow-on-hover w-full px-6 py-3 rounded-lg after:rounded-lg before:rounded-lg text-center border border-golden-500", innerClassNames], "class:list")} data-astro-cid-s4fdibxz${addAttribute($$definedVars, "style")}>${blok.text}</a></div>`}${gradient && renderTemplate`<div${spreadAttributes(xe(blok))}${addAttribute(["my-4 shadow rounded-lg", className], "class:list")} data-astro-cid-s4fdibxz${addAttribute($$definedVars, "style")}><a${addAttribute(blok.url, "href")} class="glow gradient-animate w-full text-center rounded-lg px-6 py-3 bg-gradient-to-r from-golden-500 from-30% via-golden-300 via-55% to-golden-400 to-70%" data-astro-cid-s4fdibxz${addAttribute($$definedVars, "style")}>${blok.text}</a></div>`}${outline && renderTemplate`<div${spreadAttributes(xe(blok))}${addAttribute(["my-4 rounded-lg", className], "class:list")} data-astro-cid-s4fdibxz${addAttribute($$definedVars, "style")}><a${addAttribute(blok.url, "href")} class="glow text-center w-full rounded-lg px-6 py-3 bg-transparent border border-golden-400" data-astro-cid-s4fdibxz${addAttribute($$definedVars, "style")}>${blok.text}</a></div>`}`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/utils/Button.astro", void 0);

const $$Astro$u = createAstro("https://corisdevelopmentgroup.com");
const $$ImageBlok = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$ImageBlok;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="image-container min-w-[120px] max-w-[340px]" data-astro-cid-geki4lgf> ${renderComponent($$result, "Image", $$Image, { ...xe(blok), "src": blok.image.filename, "inferSize": true, "widths": [540, 720], "sizes": `(max-with: 720px) 540px, (max-width: 1024) 720px`, "alt": blok.image.alt, "class": "flex", "data-astro-cid-geki4lgf": true })} </div> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/utils/ImageBlok.astro", void 0);

const $$Astro$t = createAstro("https://corisdevelopmentgroup.com");
const $$SplitText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$SplitText;
  const { blok } = Astro2.props;
  const textArray = blok.text.split(" ");
  return renderTemplate`${maybeRenderHead()}<span${spreadAttributes(xe(blok))} class="flex flex-wrap text-golden-950 font-semibold pl-4" data-astro-cid-jfassng2> ${textArray.map((text) => renderTemplate`<div class="word" data-astro-cid-jfassng2>${text}&nbsp</div>`)} </span> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/utils/SplitText.astro", void 0);

const $$Astro$s = createAstro("https://corisdevelopmentgroup.com");
const $$SnippetCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$SnippetCTA;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))} class="cta my-6 pl-4 lg:my-16 lg:w-3/4"> <p class="text-golden-950 font-light py-6 text-lg lg:text-3xl">${blok.description}</p> ${renderComponent($$result, "Button", $$Button$1, { "outline": true, "text": blok.button[0].text, "link": blok.button[0]?.url?.story?.url, "class": "mt-8 md:w-1/2 flex font-cg font-light text-2xl uppercase text-golden-400 bg-golden-950" })} </div>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/utils/SnippetCTA.astro", void 0);

const $$Astro$r = createAstro("https://corisdevelopmentgroup.com");
const $$Service = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Service;
  const { blok } = Astro2.props;
  const url = blok.button[0].url.cached_url;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))} class="mb-8 md:w-3/4 lg:w-full"> <h2 class="py-2 text-2xl lg:text-4xl font-light">${blok.title}</h2> <p class="text-lg font-light">${blok.content}</p> ${renderComponent($$result, "Button", $$Button$1, { "outline": true, "text": blok.button[0].text, "link": url, "class": "mt-4 md:w-3/4 flex font-cg font-light text-xl uppercase text-golden-400" })} </div>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/utils/Service.astro", void 0);

const $$Astro$q = createAstro("https://corisdevelopmentgroup.com");
const $$HeroCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$HeroCard;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))} class="hero-card flex p-8 rounded backdrop-blur-md bg-white/80 shadow-xl md:w-4/6  lg:max-w-xl"> <div class="card-inner"> <h2 class="headline capitalize pb-3 text-4xl lg:text-5xl lg:leading-[1.2] font-bold">${blok.title}</h2> <hr class="divider my-4 border border-dark-gold"> <p class="content py-4 text-lg">${blok.content}</p> <div class="footer mt-10 mb-4 w-full"> ${renderComponent($$result, "Button", $$Button$1, { "gradientAnimated": true, "text": blok.button[0].text, "link": blok.button[0].url.story.url, "background": "white", "innerClassNames": "border border-golden-400", "class": "text-golden-400 md:flex font-cg font-light text-lg md:text-2xl uppercase md:w-3/4" })} </div> </div> </div>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/utils/HeroCard.astro", void 0);

const $$Astro$p = createAstro("https://corisdevelopmentgroup.com");
const $$PropertyCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$PropertyCard;
  const { blok } = Astro2.props;
  const url = "/" + blok?.button[0].url.cached_url;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))} class="col flex flex-1 max-md:mx-4 relative glow border border-golden-400 max-h-[580px]" data-astro-cid-czfvj6if> <div class="media-container w-full h-full overflow-hidden" data-astro-cid-czfvj6if> ${renderComponent($$result, "Image", $$Image, { ...xe(blok), "src": blok.image.filename, "inferSize": true, "alt": blok.image.alt, "class": "object-cover w-full h-full", "data-astro-cid-czfvj6if": true })} </div> <div class="content-container py-2 px-4 flex flex-col content-end w-full h-full absolute top-0 left-0 z-10" data-astro-cid-czfvj6if> <div class="top-container flex flex-1" data-astro-cid-czfvj6if> <h3 class="pt-4 font-thin text-xl" data-astro-cid-czfvj6if>${blok.tagline}</h3> </div> <div class="bottom-container flex justify-between items-center" data-astro-cid-czfvj6if> <div class="title flex-1 uppercase text-xl xl:text-4xl" data-astro-cid-czfvj6if> <p data-astro-cid-czfvj6if>${blok.title}</p> </div> <div class="button hidden  lg:flex flex-1 w-full justify-end" data-astro-cid-czfvj6if> ${renderComponent($$result, "Button", $$Button$1, { "gradient": true, "text": blok?.button[0].text, "link": url, "class": "flex flex-shrink-0 font-cg font-light text-xl uppercase text-golden-900", "data-astro-cid-czfvj6if": true })} </div> </div> </div> <a${addAttribute(url, "href")} class="absolute top-0 left-0 w-full h-full z-20" data-astro-cid-czfvj6if></a> </div> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/utils/PropertyCard.astro", void 0);

const $$Astro$o = createAstro("https://corisdevelopmentgroup.com");
const $$ImageBlokGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$ImageBlokGallery;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { ...xe(blok), "src": blok.image.filename, "inferSize": true, "alt": blok.image.alt, "class": "rounded-lg", "data-astro-cid-6f7g4u22": true })} `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/utils/ImageBlokGallery.astro", void 0);

const $$Astro$n = createAstro("https://corisdevelopmentgroup.com");
const $$HeroBlok = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$HeroBlok;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="hero-blok border-b-8 border-golden-600" data-astro-cid-xk7pmso4> <div${spreadAttributes(xe(blok))} class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl xl:max-w-6xl" data-astro-cid-xk7pmso4> <div class="w-full h-64 lg:w-1/2 lg:h-auto" data-astro-cid-xk7pmso4> ${renderComponent($$result, "Image", $$Image, { ...xe(blok), "src": blok.image.filename, "inferSize": true, "widths": [540, 720], "sizes": `(max-with: 720px) 540px, (max-width: 1024) 720px`, "loading": "eager", "alt": blok.image.alt, "class": "h-full w-full object-cover", "data-astro-cid-xk7pmso4": true })} </div> <div class="hero-text w-full lg:max-w-2xl md:z-10 md:shadow-lg lg:absolute lg:top-0 lg:mt-28 lg:w-3/5 lg:left-0 xl:mt-24 backdrop-blur-sm" data-astro-cid-xk7pmso4> <!-- Text Wrapper --> <div class="flex flex-col p-4 md:px-16 max-lg:text-center" data-astro-cid-xk7pmso4> <h2 class="text-4xl font-light capitalize text-golden-950 lg:text-6xl xl:text-7xl" data-astro-cid-xk7pmso4>${blok.headline}</h2> </div> <!-- Close Text Wrapper --> </div> </div> </div> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/utils/HeroBlok.astro", void 0);

const $$Astro$m = createAstro("https://corisdevelopmentgroup.com");
const $$HeroStyleOne = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$HeroStyleOne;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(xe(blok))} class="hero border-b-8 border-golden-600 pb-24" data-astro-cid-j52d5d4t> <div class="md:px-8" data-astro-cid-j52d5d4t> <div class="border-y-8 border-golden-600" data-astro-cid-j52d5d4t> ${renderComponent($$result, "Image", $$Image, { ...xe(blok), "src": blok.image.filename, "inferSize": true, "widths": [540, 720], "sizes": `(max-with: 720px) 540px, (max-width: 1024) 720px`, "alt": blok.image.alt, "class": "flex max-h-[92vh] md:max-h-[72vh] w-full object-cover", "data-astro-cid-j52d5d4t": true })} </div> <div class="mt-[-16%] z-10 relative" data-astro-cid-j52d5d4t> <div class="max-contain mx-auto px-8" data-astro-cid-j52d5d4t> ${blok.content?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-j52d5d4t": true })}`;
  })} <div class="icon md:w-4/6 lg:max-w-xl flex justify-center my-8 text-golden-600" data-astro-cid-j52d5d4t> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" data-astro-cid-j52d5d4t> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18" d="m112 268l144 144l144-144M256 392V100" data-astro-cid-j52d5d4t></path> </svg> </div> </div> </div> </div> </section> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/utils/heros/HeroStyleOne.astro", void 0);

const $$Astro$l = createAstro("https://corisdevelopmentgroup.com");
const $$HeroStyleTwo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$HeroStyleTwo;
  const { blok } = Astro2.props;
  const listing = blok.listing[0];
  const detailsObj = listing.content?.details[0];
  const featuredImage = listing.content.featured_media[0];
  const listingUrl = listing.content?.listing_url[0];
  const pAddress = listing.content?.property_address[0];
  const line2 = pAddress?.line_2 !== "" ? ` ${pAddress?.line_2}` : pAddress?.line_2;
  const address = `${pAddress?.line_1}${line2}, ${pAddress?.city}, ${pAddress?.state}  ${pAddress?.zipcode}`;
  const squareFeet = Number(detailsObj?.square_feet).toLocaleString("en-US");
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))} class="hero-two p-4 pb-24 mb-16 min-h-[80vh] h-[100%] max-h-min" data-astro-cid-mi3nviby> <div class="max-contain mx-auto" data-astro-cid-mi3nviby> <div class="relative flex justify-center min-h-[450px] sm:min-h-[550px] lg:min-h-[650px]" data-astro-cid-mi3nviby> <div class="animated-border-box-glow rounded-md" data-astro-cid-mi3nviby></div> <div class="animated-border-box rounded-md" data-astro-cid-mi3nviby> <!-- Masonary Layout --> <div class="masonry h-full rounded-md" data-astro-cid-mi3nviby> <div class="grid grid-flow-col grid-rows-3 md:grid-rows-2 gap-1 h-full" data-astro-cid-mi3nviby> <div class="row-span-2 md:row-span-2 col-span-2 bgrd-image rounded-sm overflow-hidden h-full" data-astro-cid-mi3nviby> ${featuredImage.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": featuredImage.image.filename, "inferSize": true, "widths": [540, 720], "sizes": `(max-with: 720px) 540px, (max-width: 1024) 720px`, "alt": "", "class": "flex h-full w-full object-cover", "data-astro-cid-mi3nviby": true })}`} </div> <div class="bgrd-image rounded-sm h-full overflow-hidden" data-astro-cid-mi3nviby> ${featuredImage.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": featuredImage.image.filename, "inferSize": true, "widths": [540, 720], "sizes": `(max-with: 720px) 540px, (max-width: 1024) 720px`, "alt": "", "class": "flex h-full w-full object-cover", "data-astro-cid-mi3nviby": true })}`} </div> <div class="bgrd-image rounded-sm h-full overflow-hidden" data-astro-cid-mi3nviby> ${featuredImage.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": featuredImage.image.filename, "inferSize": true, "widths": [540, 720], "sizes": `(max-with: 720px) 540px, (max-width: 1024) 720px`, "alt": "", "class": "flex h-full w-full object-cover", "data-astro-cid-mi3nviby": true })}`} </div> </div> </div> </div> </div> <!-- Text Section --> <div class="property-section px-4 md:px-4 lg:px-8 relative z-2 h-full" data-astro-cid-mi3nviby> <div class="grid md:grid-cols-3 gap-4 lg:gap-8 h-full" data-astro-cid-mi3nviby> <!-- Column 1 --> <div class="md:col-span-2 flex min-h-[100px] p-8 mt-4 mb-4 md:mt-[-30px] lg:mt-[-40px] rounded-sm border-2 border-golden-300 backdrop-blur-[6px] bg-white/65" data-astro-cid-mi3nviby> <div class="property-info p-2 content-between flex flex-col w-full 2xl:w-3/4 self-center" data-astro-cid-mi3nviby> <div class="property-text h-full text-black flex flex-col" data-astro-cid-mi3nviby> <div class="flex flex-col justify-between" data-astro-cid-mi3nviby> <!-- Title --> <h2 class="text-2xl md:text-4xl lg:text-6xl font-semibold" data-astro-cid-mi3nviby> ${listing?.name} </h2> <!-- Price --> <h3 class="text-lg md:text-2xl font-light pt-2" data-astro-cid-mi3nviby> ${listing.content?.price[0].text} </h3> </div> <hr class="my-1 border-golden-500" data-astro-cid-mi3nviby> <!-- Address --> <div class="flex font-extralight text-md" data-astro-cid-mi3nviby> <p data-astro-cid-mi3nviby>${address}</p> </div> <hr class="my-1 border-golden-500" data-astro-cid-mi3nviby> <!-- Features: Mobile --> <div class="property-features md:hidden font-light text-xl py-6 grid grid-cols-2" data-astro-cid-mi3nviby> <p data-astro-cid-mi3nviby>${detailsObj?.bedrooms} Bedroom</p> <p data-astro-cid-mi3nviby>${detailsObj?.full_baths} Full Baths</p> <p data-astro-cid-mi3nviby>${squareFeet} sqft</p> <p data-astro-cid-mi3nviby>${detailsObj?.style}</p> </div> </div> <!-- Description --> <div class="property-description font-extralight py-4" data-astro-cid-mi3nviby> <hr class="border-golden-500 my-2 md:hidden" data-astro-cid-mi3nviby> <p data-astro-cid-mi3nviby> ${blok?.description} </p> </div> <div class="property-link" data-astro-cid-mi3nviby> <button class="my-4 rounded-lg" data-astro-cid-mi3nviby> <a${addAttribute(listingUrl?.url.url, "href")} target="_blank" class="bg-golden-500 text-white text-xl uppercase font-cg text-center w-full rounded-lg px-12 py-4 transition duration-300 ease-in-out border border-golden-500 hover:bg-golden-400 hover:text-black" data-astro-cid-mi3nviby> ${listingUrl?.text} </a> </button> </div> </div> </div> <div class="flex w-3/4 max-md:hidden mx-auto justify-center place-self-center text-golden-300" data-astro-cid-mi3nviby> <div class="property-features text-center font-extralight text-2xl" data-astro-cid-mi3nviby> <h3 class="text-2xl md:text-3xl font-light" data-astro-cid-mi3nviby>Features</h3> <hr class="border-golden-300 my-2" data-astro-cid-mi3nviby> <p data-astro-cid-mi3nviby>${detailsObj?.bedrooms} Bedroom</p> <p data-astro-cid-mi3nviby>${detailsObj?.full_baths} Full Baths</p> <p data-astro-cid-mi3nviby>${squareFeet} sqft</p> <p data-astro-cid-mi3nviby>${detailsObj?.style}</p> </div> </div> </div> </div> </div> </div> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/utils/heros/HeroStyleTwo.astro", void 0);

const $$Astro$k = createAstro("https://corisdevelopmentgroup.com");
const $$TextWithHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$TextWithHeading;
  const { blok } = Astro2.props;
  const renderText = () => {
    if (typeof blok.text === "string") {
      return `<p>${blok.text}</p>`;
    }
    return Re(blok.text);
  };
  const richText = renderText();
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(xe(blok))} class="mx-auto text-center"> <div${addAttribute(["mx-auto max-w-screen-lg py-12 px-8", blok.css], "class:list")}> <h2${addAttribute([
    "mb-4 text-4xl tracking-tight font-extrabold",
    blok.heading_css
  ], "class:list")}> ${blok?.heading} </h2> <div${addAttribute(["my-4 font-light lg:my-8 sm:text-xl text-black"], "class:list")}> ${richText && renderTemplate`<div${addAttribute(["prose mx-auto", blok.text_css], "class:list")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(richText)}` })} </div>`} </div> ${blok.button && blok.button?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </div> </section>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/layout/TextWithHeading.astro", void 0);

const $$Astro$j = createAstro("https://corisdevelopmentgroup.com");
const $$TextWithImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$TextWithImage;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(xe(blok))}${addAttribute(blok.css, "class:list")}> <div${addAttribute(["gap-8 py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6", blok.item_align], "class:list")}> <img${addAttribute(["w-full", blok.layout], "class:list")}${addAttribute(blok.image?.filename, "src")}${addAttribute(blok.image?.alt, "alt")}> <div class="mt-4 md:mt-0"> <h2${addAttribute(["mb-4 text-4xl tracking-tight font-extrabold", blok.title_css], "class:list")}>${blok.title}</h2> <p${addAttribute(["mb-6 font-light md:text-lg", blok.text_css], "class:list")}>${blok.text}</p> </div> </div> </section>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/layout/TextWithImage.astro", void 0);

const $$Astro$i = createAstro("https://corisdevelopmentgroup.com");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Container;
  const { blok } = Astro2.props;
  const sizeClass = blok.fullWidth ? "w-full" : "max-content";
  const classNames = `wrapper w-full pt-12 pb-12 bg-no-repeat bg-center ${blok.css}`;
  let imageUrl = "none";
  if (blok.image && blok.image.id) {
    imageUrl = `url('${blok.image.filename}')`;
  }
  const $$definedVars = defineStyleVars([{ imageUrl }]);
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))}${addAttribute(classNames, "class")} data-astro-cid-djwbrbed${addAttribute($$definedVars, "style")}> <div${addAttribute(["mx-auto", sizeClass], "class:list")} data-astro-cid-djwbrbed${addAttribute($$definedVars, "style")}> ${blok.container_bloks?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-djwbrbed": true })}`;
  })} </div> </div> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/layout/Container.astro", void 0);

const $$Astro$h = createAstro("https://corisdevelopmentgroup.com");
const $$Columns = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Columns;
  const { blok } = Astro2.props;
  let columnNum;
  if (blok.column_number > 0) {
    columnNum = `md:grid-cols-${blok.column_number}`;
  } else {
    columnNum = `md:grid-cols-${blok.columns.length}`;
  }
  const fullWidth = blok.full_width ? "w-full" : "max-w-screen-xl";
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(xe(blok))}${addAttribute(blok.css, "class:list")}> <div${addAttribute(["gap-8 py-8 lg:py-4 px-4 mx-auto xl:gap-12 md:grid sm:py-16 lg:px-6", columnNum, blok.item_align, fullWidth], "class:list")}> ${blok.columns?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </div> </section>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/layout/Columns.astro", void 0);

const $$Astro$g = createAstro("https://corisdevelopmentgroup.com");
const $$Column = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Column;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))}${addAttribute(["min-h-3 mb-8 md:mb-4", blok.css], "class:list")}> ${blok.bloks?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </div>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/layout/Column.astro", void 0);

const $$Astro$f = createAstro("https://corisdevelopmentgroup.com");
const $$ComposableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ComposableText;
  const { blok } = Astro2.props;
  const content = Re(blok.content);
  return renderTemplate`${maybeRenderHead()}<div class="prose prose-headings:text-inherit prose-p:text-inherit" data-astro-cid-cemxrh6b> <div${spreadAttributes(xe(blok))}${addAttribute(["", blok.css], "class:list")} data-astro-cid-cemxrh6b> ${blok.title != "" && renderTemplate`<h2${addAttribute(blok.title_css, "class")} data-astro-cid-cemxrh6b>${blok.title}</h2>`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })} </div> </div> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/content/ComposableText.astro", void 0);

const $$Astro$e = createAstro("https://corisdevelopmentgroup.com");
const $$SingleImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SingleImage;
  const { blok } = Astro2.props;
  const imageAlt = blok.alt != "" ? blok.alt : blok.image.alt;
  blok.lazy_load ? "lazy" : "eager";
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))}${addAttribute(blok.css, "class")}> ${renderComponent($$result, "Image", $$Image, { "src": blok.image.filename, "inferSize": true, "widths": [540, 720], "sizes": `(max-with: 720px) 540px, (max-width: 1024) 720px`, "alt": imageAlt, "class:list": ["flex", blok.image_css] })} </div>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/content/SingleImage.astro", void 0);

const $$Astro$d = createAstro("https://corisdevelopmentgroup.com");
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Heading;
  const { blok } = Astro2.props;
  const Element = blok.type;
  const divClass = `max-contain mx-auto font-extrabold text-center mb-4 capitalize ${blok.css}`;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))}${addAttribute(divClass, "class")}> ${renderComponent($$result, "Element", Element, { "class": blok.text_size }, { "default": ($$result2) => renderTemplate`${blok.title}` })} </div>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/content/Heading.astro", void 0);

const $$Astro$c = createAstro("https://corisdevelopmentgroup.com");
const $$Divider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Divider;
  const { blok } = Astro2.props;
  const size = `border-${blok.size}`;
  return renderTemplate`${maybeRenderHead()}<hr${spreadAttributes(xe(blok))}${addAttribute(["w-full border-golden-600", size, blok.css], "class:list")}>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/content/Divider.astro", void 0);

const $$Astro$b = createAstro("https://corisdevelopmentgroup.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Card;
  const { blok } = Astro2.props;
  blok.background = blok.background != void 0 ? blok.background : "bg-white";
  const urlObj = blok.button[0]?.url;
  const cachedUrl = urlObj?.cached_url;
  const buttonUrl = cachedUrl;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))}${addAttribute(["hero-card flex py-8 lg:py-16 rounded lg:rounded-lg shadow-xl lg:container h-full", blok.css, blok.background], "class:list")}> <div class="card-inner pr-8 xl:pr-16"> <h2 class="headline capitalize pl-8 xl:pl-16 pb-3 text-2xl lg:text-4xl font-bold">${blok.title}</h2> <hr class="divider my-4 border-4 border-dark-gold"> <p class="content pl-8 xl:pl-16 py-3 lg:text-lg">${blok.content}</p> <div class="footer w-full"> ${blok.button[0] && renderTemplate`${renderComponent($$result, "Button", $$Button$1, { "gradientAnimated": true, "text": blok.button[0].text, "link": buttonUrl, "background": "white", "innerClassNames": "border border-golden-400", "class": "text-golden-400 mx-auto md:flex font-cg font-light text-lg md:text-2xl uppercase md:w-3/4" })}`} </div> </div> </div>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/content/Card.astro", void 0);

const $$Astro$a = createAstro("https://corisdevelopmentgroup.com");
const $$ButtonBlok = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ButtonBlok;
  const { blok } = Astro2.props;
  const type = {
    gradAnim: blok.type === "gradientAnimated" ? true : false,
    gradient: blok.type === "gradient" ? true : false,
    outline: blok.type === "outline" ? true : false
  };
  const noPadding = blok.noPadding ? "" : "p-4";
  blok.backgroundColor = blok.backgroundColor != "" ? blok.backgroundColor : "#111";
  const border = !blok.borderColor || blok.borderColor === "" || void 0 ? "" : `border ${blok.borderColor}`;
  const url = blok.url.url != "" ? blok.url.url : `/${blok.url.cached_url}`;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))}${addAttribute(["mx-auto flex container max-content", blok.align, noPadding], "class:list")}> ${renderComponent($$result, "Button", $$Button$1, { "gradientAnimated": type.gradAnim, "gradient": type.gradient, "outline": type.outline, "text": blok.text, "link": url, "background": blok.backgroundColor, "innerClassNames": [blok.innerCss, border], "class": ["font-light flex w-full", blok.css, blok.size, blok.font] })} </div>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/content/ButtonBlok.astro", void 0);

const $$Astro$9 = createAstro("https://corisdevelopmentgroup.com");
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<figure${spreadAttributes(xe(blok))}${addAttribute([
    "flex flex-col justify-center items-center rounded-lg p-8 text-center bg-gray-50 border border-golden-300 md:p-12",
    blok.css
  ], "class:list")}> <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500"> <h3${addAttribute(["text-lg font-semibold text-gray-900", blok.headline_css], "class:list")}> ${blok.headline} </h3> <p class="my-4">${blok.text}</p> </blockquote> <figcaption class="flex justify-center items-center"> <div class="space-y-0.5 font-medium text-left"> <div>${blok.author}</div> </div> </figcaption> </figure>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/content/Testimonial.astro", void 0);

const $$Astro$8 = createAstro("https://corisdevelopmentgroup.com");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const { blok } = Astro2.props;
  let imageUrl = "";
  if (blok.image) {
    imageUrl = `url('${blok.image.filename}')`;
  }
  const $$definedVars = defineStyleVars([{ imageUrl }]);
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(xe(blok))}${addAttribute(["bg-center bg-no-repeat bg-zinc-700 bg-blend-multiply", blok.css], "class:list")} data-astro-cid-mbpb3wnv${addAttribute($$definedVars, "style")}> <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56" data-astro-cid-mbpb3wnv${addAttribute($$definedVars, "style")}> <h1${addAttribute(["mb-4 text-4xl font-extrabold tracking-tight leading-none text-golden-300 capitalize font-cg md:text-5xl lg:text-6xl", blok.title_css], "class:list")} data-astro-cid-mbpb3wnv${addAttribute($$definedVars, "style")}>${blok.title}</h1> <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48" data-astro-cid-mbpb3wnv${addAttribute($$definedVars, "style")}>${blok.text}</p> <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0" data-astro-cid-mbpb3wnv${addAttribute($$definedVars, "style")}> ${blok.button?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2, "data-astro-cid-mbpb3wnv": true })}`;
  })} </div> </div> </section> `;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/content/HeroSection.astro", void 0);

const $$Astro$7 = createAstro("https://corisdevelopmentgroup.com");
const $$EmbededHTML = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$EmbededHTML;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))} class="iframe"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(blok.html)}` })} </div>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/content/EmbededHTML.astro", void 0);

const $$Astro$6 = createAstro("https://corisdevelopmentgroup.com");
const $$ImageCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ImageCarousel;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${spreadAttributes(xe(blok))}${addAttribute(["carousel relative w-full", blok.css], "class:list")} data-astro-cid-gw33n27g> <div class="relative max-h-[312px] lg:max-h-fit overflow-hidden" data-astro-cid-gw33n27g> <div class="carousel-size flex py-12 pl-4" data-astro-cid-gw33n27g> ${blok.images.map((image) => renderTemplate`<div class="carousel-item rounded-lg" data-astro-cid-gw33n27g> <img${addAttribute(image.filename, "src")}${addAttribute(image.alt, "alt")} class="px-4 max-h-[240px] md:max-h-[320px] lg:max-h-full max-w-[320px] md:max-w-[720px] h-full object-cover" data-astro-cid-gw33n27g> </div>`)} </div> </div> </div>  ${renderScript($$result, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/content/ImageCarousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/content/ImageCarousel.astro", void 0);

const $$Astro$5 = createAstro("https://corisdevelopmentgroup.com");
const $$Listing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Listing;
  const { blok } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main${spreadAttributes(xe(blok))}> ${blok.body?.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </main>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/listing/Listing.astro", void 0);

function ListingFilter({ listings, residentialListings, commercialListings }) {
  const [filter, setFilter] = useState("all");
  const filteredListings = {
    all: listings,
    residential: residentialListings,
    commercial: commercialListings
  }[filter];
  const title = {
    all: "All Listings",
    residential: "Residential Listings",
    commercial: "Commercial Listings"
  }[filter];
  const opacityAll = filter === "all" ? "opacity-80" : "opacity-50";
  const opacityRes = filter === "residential" ? "opacity-80" : "opacity-50";
  const opacityCom = filter === "commercial" ? "opacity-80" : "opacity-50";
  const getDetailsSummaryFrom = (item) => {
    if (item.details.length) {
      const details = [...item.details].shift();
      const list = {
        bedrooms: `${details.bedrooms} Bedroom`,
        fullBaths: details.full_baths !== "" ? ` | ${details.full_baths} Full Baths` : "",
        halfBaths: details.half_baths !== "" ? ` | ${details.half_baths} Half Baths` : "",
        sqft: details.square_feet !== "" ? ` | ${details.square_feet} sqft` : ""
      };
      return Object.values(list);
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "list-header w-full flex justify-between text-grey-500\n        px-4 md:px-8 lg:px-12 py-8 border-b border-golden-200 shadow-sm",
        children: [
          /* @__PURE__ */ jsx("div", { className: "title content-center uppercase font-extralight", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl", children: title }) }),
          /* @__PURE__ */ jsxs("div", { className: "filters content-center flex gap-1 md:gap-2 h-full ml-1", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setFilter("all"),
                type: "button",
                className: `border border-gray-500 font-medium ${opacityAll} rounded-lg
            text-xs md:text-sm px-4 md:px-10 py-1.5 md:py-2.5 focus:outline-none flex`,
                children: "All"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setFilter("residential"),
                type: "button",
                className: `border border-gray-500 opacity-50 font-medium ${opacityRes} rounded-lg
            text-xs md:text-sm px-4 md:zpx-5 py-1.5 md:py-2.5 focus:outline-none flex`,
                children: "Residential"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setFilter("commercial"),
                type: "button",
                className: `border border-gray-500 opacity-50 font-medium ${opacityCom} rounded-lg
            text-xs md:text-sm px-4 md:px-5 py-1.5 md:py-2.5 focus:outline-none flex`,
                children: "Commercial"
              }
            )
          ] })
        ]
      }
    ),
    filteredListings.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-3xl font-light text-center pt-12", children: "No listings available for this filter." }) : (
      // <!-- List -->
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 my-8 px-4 md:px-8", children: filteredListings.map((listing) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "rounded-sm border border-golden-200 bg-white shadow-md p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-6 gap-4 md:m-4", children: [
        /* @__PURE__ */ jsx("div", { className: "card-image col-span-6 sm:col-span-3 lg:col-span-2", children: /* @__PURE__ */ jsx("div", { className: "min-h-72 h-full w-full rounded-md overflow-hidden", children: /* @__PURE__ */ jsx("a", { href: listing.slug, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: listing.content.featured_media[0].image.filename,
            srcSet: `${listing.content.featured_media[0].image.filename} 540w, ${listing.content.featured_media[0].image.filename} 720w`,
            sizes: "(max-with: 720px) 540px, (max-width: 1024) 720px",
            alt: listing.content.featured_media[0].image.alt,
            width: "1200",
            height: "804",
            loading: "lazy",
            decoding: "async",
            className: "flex object-cover h-full"
          }
        ) }) }) }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "card-details col-span-6 sm:col-span-3 lg:col-span-4 \n                  grid grid-rows-3 px-4",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-col sm:flex sm:justify-between", children: [
                /* @__PURE__ */ jsx("div", { className: "listing-name", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl", children: listing.name }) }),
                /* @__PURE__ */ jsx("div", { className: "status", children: /* @__PURE__ */ jsxs("button", { className: "flex rounded-sm px-4 py-1 mt-1 mb-2 md:py-2 text-xs md:text-sm capitalize border border-golden-400 text-golden-400 opacity-75", children: [
                  /* @__PURE__ */ jsxs("p", { children: [
                    listing.content.details[0].category,
                    " | "
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 pl-1", children: listing.content.status })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "listing-details text-2xl font-light pb-2 content-center", children: /* @__PURE__ */ jsx("p", { children: getDetailsSummaryFrom(listing.content) }) }),
              /* @__PURE__ */ jsxs("div", { className: "card-footer justify-between flex sm:flex-col lg:flex-row", children: [
                /* @__PURE__ */ jsx("p", { className: "text-3xl place-self-end sm:max-lg:place-self-center mr-1 pb-2", children: listing.content.price[0].text }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "place-self-end sm:max-lg:place-self-center\n                      px-6 py-1 mt-1 mb-2 md:py-2 lg:px-12\n                      text-xs md:text-sm capitalize\n                      border border-golden-400 text-golden-400 opacity-75 shadow-md",
                    children: /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: listing.slug,
                        className: "text-xl uppercase font-semibold",
                        children: "See Listing"
                      }
                    )
                  }
                )
              ] })
            ]
          }
        )
      ] }) }) }, listing.id)) })
    )
  ] });
}

const $$Astro$4 = createAstro("https://corisdevelopmentgroup.com");
const $$AllListings = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AllListings;
  const { blok } = Astro2.props;
  const storyblokApi = Ee();
  const { data } = await storyblokApi.get(`cdn/stories`, {
    version: "published",
    starts_with: "listings/",
    is_startpage: false
  });
  const listings = data.stories;
  const residentialListings = listings.filter(
    (listing) => listing.content.details[0].category === "residential"
  );
  const commercialListings = listings.filter(
    (listing) => listing.content.details[0].category === "commercial"
  );
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-100 lg:py-4 lg:px-4"> <div class="max-contain mx-auto lg:rounded-md border border-golden-400 bg-gray-100 min-h-[80vh]"${spreadAttributes(xe(blok))}> ${renderComponent($$result, "ListingFilter", ListingFilter, { "client:load": true, "listings": listings, "residentialListings": residentialListings, "commercialListings": commercialListings, "client:component-hydration": "load", "client:component-path": "@components/ListingsFilter", "client:component-export": "default" })} </div> </section>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/listing/AllListings.astro", void 0);

const $$Astro$3 = createAstro("https://corisdevelopmentgroup.com");
const $$FeaturedImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FeaturedImage;
  const { blok } = Astro2.props;
  const image = blok.image;
  return renderTemplate`${maybeRenderHead()}<div class="featured-image lg:px-12"> ${renderComponent($$result, "Image", $$Image, { ...xe(blok), "src": image.filename, "inferSize": true, "widths": [540, 720], "sizes": `(max-with: 720px) 540px, (max-width: 1024) 720px`, "alt": image.alt, "class": "flex max-h-[60vh] w-full mx-auto max-contain object-cover" })} </div>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/listing/FeaturedImage.astro", void 0);

const $$Astro$2 = createAstro("https://corisdevelopmentgroup.com");
const $$ListingDetails = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ListingDetails;
  const { blok, address, zoning } = Astro2.props;
  function toNumberString(input, tail, nose) {
    nose = !nose ? "" : nose;
    tail = !tail ? "" : tail;
    return nose + parseInt(input).toLocaleString() + tail;
  }
  blok.lot_size = toNumberString(blok.lot_size, " sqft");
  blok.square_feet = toNumberString(blok.square_feet, " sqft");
  const filteredObject = Object.fromEntries(Object.entries(blok).filter(([key]) => !key.startsWith("_") && !key.startsWith("compo") && !key.startsWith("category")));
  const mergedObj = { ...filteredObject, ...address, ...zoning };
  const filteredArray = Object.entries(mergedObj);
  const order = [
    "address",
    "county",
    "property_type",
    "sub_type",
    "square_feet",
    "bedrooms",
    "full_baths",
    "half_baths",
    "style",
    "purchase_type",
    "category",
    "zone_type",
    "zone_area",
    "subdivision",
    "lot_size",
    "year_built",
    "acres"
  ];
  const sortedArray = filteredArray.sort(([keyA], [keyB]) => {
    return order.indexOf(keyA) - order.indexOf(keyB);
  });
  const textFiltered = sortedArray.map(([key, value]) => [
    key.replace(/_/g, " "),
    value.replace(/_/g, " ")
  ]);
  function splitArrayHalf(arr) {
    const half = Math.ceil(arr.length / 2);
    const first2 = arr.slice(0, half);
    const last2 = arr.slice(half);
    return [first2, last2];
  }
  const [first, last] = splitArrayHalf(textFiltered);
  return renderTemplate`${maybeRenderHead()}<div class="property-details mt-8"> <h2 class="text-4xl uppercase font-semibold">Key Details</h2> <hr class="my-2"> <div${spreadAttributes(xe(blok))} class="grid grid-cols-2 gap-4 capitalize font-light leading-8"> ${[first, last].map((first2, last2) => renderTemplate`<ul> ${first2.map(([key, value]) => {
    return renderTemplate`<li><strong>${key}:</strong> ${value}</li>`;
  })} </ul>`)} </div> </div>`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/listing/ListingDetails.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://corisdevelopmentgroup.com");
const $$ListingGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListingGallery;
  const { blok } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<div", ' class="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 h-full my-12 py-8"> ', ' </div> <div id="modal" class="hidden fixed top-0 left-0 z-70\n    w-screen h-screen flex\n    justify-center items-center"> <div class="absolute top-0 left-0\n    w-screen h-screen bg-black/70 flex justify-center items-center z-70" onclick="closeModal()"></div> <div class="relative"> <a class="absolute z-90 top-2 right-4\n    text-white text-5xl font-light" href="javascript:void(0)" onclick="closeModal()">\n\xD7\n</a> <img id="modal-img" class="max-w-[800px] max-h-[600px] object-cover z-80"> </div> </div> <script>\n  var images = document.querySelectorAll(".grid img");\n  images.forEach(function (img) {\n    img.addEventListener("click", function () {\n      showModal(img.src);\n    });\n  });\n  var modal = document.getElementById("modal");\n  var modalImg = document.getElementById("modal-img");\n  function showModal(src) {\n    modal.classList.remove("hidden");\n    modalImg.src = src;\n  }\n  function closeModal() {\n    modal.classList.add("hidden");\n  }\n<\/script>'])), maybeRenderHead(), spreadAttributes(xe(blok)), blok.images?.map((image) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image.filename, "inferSize": true, "widths": [540, 720], "sizes": `(max-with: 720px) 540px, (max-width: 1024) 720px`, "alt": image.alt, "class": "flex object-cover h-full" })}`));
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/src/storyblok/listing/ListingGallery.astro", void 0);

const components = {page: $$Page,homePage: $$Homepage,blogPost: $$BlogPost,heroCta: $$HeroCTA,twoColumn: $$TwoColumn,servicesCta: $$ServicesCTA,aboutCta: $$AboutCTA,propertySection: $$PropertySection,imageGalleryDiamond: $$ImageGalleryDiamond,config: $$Config,button: $$Button,image: $$ImageBlok,splitText: $$SplitText,snippetWithButton: $$SnippetCTA,serviceBlok: $$Service,heroCard: $$HeroCard,propertyCard: $$PropertyCard,imageBlokGallery: $$ImageBlokGallery,heroBlok: $$HeroBlok,heroStyleOne: $$HeroStyleOne,heroStyleTwo: $$HeroStyleTwo,textWithHeading: $$TextWithHeading,textWithImage: $$TextWithImage,container: $$Container,columnsSection: $$Columns,column: $$Column,composableText: $$ComposableText,singleImage: $$SingleImage,heading: $$Heading,divider: $$Divider,card: $$Card,buttonBlok: $$ButtonBlok,testimonial: $$Testimonial,heroSection: $$HeroSection,embededHtml: $$EmbededHTML,imageCarousel: $$ImageCarousel,listing: $$Listing,allListings: $$AllListings,featuredImage: $$FeaturedImage,listingDetails: $$ListingDetails,listingGallery: $$ListingGallery};

const $$Astro = createAstro("https://corisdevelopmentgroup.com");
const $$StoryblokComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StoryblokComponent;
  const { blok, ...props } = Astro2.props;
  if (!blok) {
    throw new Error(
      "Cannot render StoryblokComponent. 'blok' prop is undefined."
    );
  }
  let key = v(blok.component);
  const componentFound = key in components;
  let Component;
  if (!componentFound) {
    throw new Error(
        `Component could not be found for blok "${blok.component}"! Is it defined in astro.config.mjs?`
      );
  } else {
    Component = components[key];
  }
  return renderTemplate`${renderComponent($$result, "Component", Component, { "blok": blok, ...props })}`;
}, "/Users/kylesturman/WebDev/Projects/AstroProjects/CorisTheme/astro-realestate-theme/node_modules/@storyblok/astro/dist/components/StoryblokComponent.astro", void 0);

export { $$StoryblokComponent as $ };
