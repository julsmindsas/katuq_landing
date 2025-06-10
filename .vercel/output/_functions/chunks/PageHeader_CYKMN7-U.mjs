import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent } from './astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import { a as $$Row, b as $$Col, c as $$Section } from './Col_B--YWaUZ.mjs';
import { $ as $$Image } from './_astro_assets_rrntVZgH.mjs';
/* empty css                         */

const fraseLogo = new Proxy({"src":"/_astro/frase-logo.DCcvEElO.png","width":4826,"height":1941,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/frase-logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { id = "intro", title, text, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": id, "classes": `bg-neutral-50 dark:bg-neutral-900 ${classes}`, "data-astro-cid-bl63ps4a": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-bl63ps4a": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center", "data-astro-cid-bl63ps4a": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": fraseLogo, "alt": "Katuq incrementa y reduce", "class": "translate-y8 shadow-2xl shadow-neutral-200 dark:shadow-neutral-950 ", "format": "webp", "data-astro-cid-bl63ps4a": true })}` })} ` })} ` })} `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/hero/PageHeader.astro", void 0);

export { $$PageHeader as $ };
