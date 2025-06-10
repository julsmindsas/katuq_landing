import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot } from './astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { link, classes } = Astro2.props;
  return renderTemplate`${link ? renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(["card", { [`${classes}`]: classes }], "class:list")} data-astro-cid-eypzv45g>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<div${addAttribute(["card", { [`${classes}`]: classes }], "class:list")} data-astro-cid-eypzv45g>${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/cards/partials/Card.astro", void 0);

export { $$Card as $ };
