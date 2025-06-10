import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from './astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import { a as $$Row, b as $$Col, c as $$Section } from './Col_C_37dWaI.mjs';
/* empty css                         */

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$TextImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextImage;
  const {
    id,
    title,
    image,
    imageWidth,
    imageHeight,
    mobileImage,
    imagePosition = "right",
    text,
    classes,
    offsetImage = false,
    image2,
    image2Width,
    image2Height,
    image2Position
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": id, "classes": classes, "data-astro-cid-l3b76b2h": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-l3b76b2h": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "6", "classes": "relative", "data-astro-cid-l3b76b2h": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<picture${addAttribute(`text-image__picture ${offsetImage ? "text-image__picture--offset" : ""} ${imagePosition === "right" ? "text-image__picture--offset-right" : ""}`, "class")} data-astro-cid-l3b76b2h> ${mobileImage && renderTemplate`<source${addAttribute(mobileImage.src, "srcset")} media="(max-width: 1024px)" data-astro-cid-l3b76b2h>`} <img${addAttribute(image.src, "src")}${addAttribute(title, "alt")}${addAttribute(imageWidth, "width")}${addAttribute(imageHeight, "height")} data-astro-cid-l3b76b2h> </picture> ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "6", "classes": `self-center ${imagePosition === "right" ? "lg:-order-1" : ""}`, "data-astro-cid-l3b76b2h": true }, { "default": ($$result4) => renderTemplate` <div class="text-image__content" data-astro-cid-l3b76b2h> <h2 class="text-image__heading" data-astro-cid-l3b76b2h>${unescapeHTML(title)}</h2> <p class="text-image__text" data-astro-cid-l3b76b2h>${text}</p> </div> ${image2 && renderTemplate`<picture${addAttribute(`text-image__picture ${offsetImage ? "text-image__picture--offset" : ""} ${image2Position === "right" ? "text-image__picture--offset-right" : ""}`, "class")} data-astro-cid-l3b76b2h> <img${addAttribute(image2.src, "src")}${addAttribute(title, "alt")}${addAttribute(image2Width, "width")}${addAttribute(image2Height, "height")} data-astro-cid-l3b76b2h> </picture>`}` })} ` })} ` })} `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/basic/TextImage.astro", void 0);

export { $$TextImage as $ };
