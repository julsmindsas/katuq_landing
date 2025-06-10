import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot } from './astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$CardBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardBody;
  const { classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["card__body", { [`${classes}`]: classes }], "class:list")} data-astro-cid-4v6mohoo> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/cards/partials/CardBody.astro", void 0);

export { $$CardBody as $ };
