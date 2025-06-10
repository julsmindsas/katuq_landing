import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, d as renderSlot } from './astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                       */

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTA;
  const {
    title = "Get started now",
    text = "Get started today and see the difference for yourself!",
    mode,
    bg,
    classes
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["cta", { [`${classes}`]: classes }, { [`${mode}`]: mode }], "class:list")}${addAttribute(bg ? { backgroundImage: `url(${bg.src})` } : {}, "style")} data-astro-cid-ctop6wru> <div class="cta__body" data-astro-cid-ctop6wru> <h2 class="cta__heading" data-astro-cid-ctop6wru>${unescapeHTML(title)}</h2> <p class="cta__text" data-astro-cid-ctop6wru>${unescapeHTML(text)}</p> </div> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/CTA.astro", void 0);

export { $$CTA as $ };
