import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_rrntVZgH.mjs';
import { $ as $$Icon } from './Col_C_37dWaI.mjs';
import { $ as $$Card } from './Card_Dhq6N92R.mjs';

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$BasicCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BasicCard;
  const { title = "", subtitle, titleSize = "xl", image, icon, link, type, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "classes": classes, "link": link }, { "default": ($$result2) => renderTemplate`${image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": title, "class": type === "image-full" ? "order-2" : "", "width": 600, "height": 400 })}`}${icon && renderTemplate`${maybeRenderHead()}<div class="px-6 pt-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": `${icon}`, "class": "card__icon" })} </div>`}` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/cards/BasicCard.astro", void 0);

export { $$BasicCard as $ };
