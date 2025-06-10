import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent } from './astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Col_B--YWaUZ.mjs';
/* empty css                           */

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Accordion;
  const {
    title = "Katuq Tailwind CSS Astro Starter Kit by Oxygenna",
    text = "Katuq is a design and development agency that specializes in creating beautiful and functional websites.",
    open = false,
    classes
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details${addAttribute(["accordion group", { [`${classes}`]: classes }], "class:list")}${addAttribute(open ? true : void 0, "open")} data-astro-cid-wx4eh2ni> <summary class="accordion__summary" data-astro-cid-wx4eh2ni> ${title} ${renderComponent($$result, "Icon", $$Icon, { "name": "plus", "class": "accordion__icon", "data-astro-cid-wx4eh2ni": true })} </summary> <p class="accordion__text" data-astro-cid-wx4eh2ni> ${text} </p> </details> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/Accordion.astro", void 0);

export { $$Accordion as $ };
