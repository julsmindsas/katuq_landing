/* empty css                                  */
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, c as createAstro, b as addAttribute } from '../chunks/astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import { a as $$Row, b as $$Col, e as $$Button, c as $$Section, d as $$Layout } from '../chunks/Col_C_37dWaI.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_rrntVZgH.mjs';
/* empty css                                 */
import { $ as $$BasicCard } from '../chunks/BasicCard_Dc2PVnvi.mjs';
import { $ as $$TextImage } from '../chunks/TextImage_DWT26nBL.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const heroImage = new Proxy({"src":"/_astro/hero-01.3A_0Ka7Q.png","width":4258,"height":2219,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/hero-01.png";
							}
							
							return target[name];
						}
					});

const hero2Image = new Proxy({"src":"/_astro/hero-02.CfOHRGrH.png","width":2388,"height":2205,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/hero-02.png";
							}
							
							return target[name];
						}
					});

const $$HomeCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "intro", "padding": "top", "classes": "bg-neutral-50 dark:bg-neutral-900", "data-astro-cid-ieiizvsv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-ieiizvsv": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "2", "data-astro-cid-ieiizvsv": true })} ${renderComponent($$result3, "Col", $$Col, { "span": "8", "align": "center", "data-astro-cid-ieiizvsv": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h1 class="" data-astro-cid-ieiizvsv>Simplifica tus procesos,</h1> <h1 class="" data-astro-cid-ieiizvsv>Aumenta tus resultados</h1> <p class="pb-0 text-lg" data-astro-cid-ieiizvsv>Automatiza, optimiza y conquista tu mercado.</p> ${renderComponent($$result4, "Button", $$Button, { "size": "xl", "link": "/", "data-astro-cid-ieiizvsv": true }, { "default": ($$result5) => renderTemplate`Conoce más` })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "2", "data-astro-cid-ieiizvsv": true })} ${renderComponent($$result3, "Col", $$Col, { "span": "2", "data-astro-cid-ieiizvsv": true })} ${renderComponent($$result3, "Col", $$Col, { "span": "8", "data-astro-cid-ieiizvsv": true }, { "default": ($$result4) => renderTemplate` <div class="image-container" data-astro-cid-ieiizvsv> ${renderComponent($$result4, "Image", $$Image, { "src": heroImage, "alt": "Katuq rentabilidad y eficiencia", "class": "translate-y+8 shadow-2xl shadow-neutral-200 dark:shadow-neutral-950 ", "data-astro-cid-ieiizvsv": true })} ${renderComponent($$result4, "Image", $$Image, { "src": hero2Image, "alt": "Katuq incrementa y reduce", "class": "translate-y8 shadow-2xl shadow-neutral-200 dark:shadow-neutral-950 ", "format": "webp", "data-astro-cid-ieiizvsv": true })}</div> ${renderComponent($$result4, "Col", $$Col, { "span": "2", "data-astro-cid-ieiizvsv": true })} ` })} ` })} ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/hero/HomeCTA.astro", void 0);

const $$Astro$1 = createAstro("https://astro-theme-one.vercel.app/");
const $$FeatureCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeatureCard;
  const { title, subtitle, image, link } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$BasicCard, { "title": title, "subtitle": subtitle, "titleSize": "xl", "link": link, "image": image, "type": "image-full", "classes": "!bg-neutral-50 !shadow-none dark:!bg-neutral-900 h-full justify-between border border-neutral-100 dark:border-neutral-800" })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/cards/FeatureCard.astro", void 0);

const feature01 = new Proxy({"src":"/_astro/feature-01.DwXCzYBE.png","width":2316,"height":5110,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/cards/feature-01.png";
							}
							
							return target[name];
						}
					});

const feature02 = new Proxy({"src":"/_astro/feature-02.Cxe46YdI.png","width":2261,"height":2471,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/cards/feature-02.png";
							}
							
							return target[name];
						}
					});

const feature03 = new Proxy({"src":"/_astro/feature-03.CHCM419W.png","width":2294,"height":2471,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/cards/feature-03.png";
							}
							
							return target[name];
						}
					});

const feature04 = new Proxy({"src":"/_astro/feature-04.Ov6OiGJy.png","width":2273,"height":2457,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/cards/feature-04.png";
							}
							
							return target[name];
						}
					});

const feature05 = new Proxy({"src":"/_astro/feature-05.DfjbjRhO.png","width":2337,"height":2459,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/cards/feature-05.png";
							}
							
							return target[name];
						}
					});

const Recurso8ktuq = new Proxy({"src":"/_astro/Recurso8ktuq.D1JXIsv_.png","width":3799,"height":1344,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/Recurso8ktuq.png";
							}
							
							return target[name];
						}
					});

const $$FeatureCards = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "features", "data-astro-cid-t4aqtgdz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-t4aqtgdz": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center", "classes": "mb-12 max-w-4xl mx-auto", "data-astro-cid-t4aqtgdz": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": Recurso8ktuq, "alt": "All your data in one place", "data-astro-cid-t4aqtgdz": true })} ` })} ` })} ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-t4aqtgdz": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "4", "data-astro-cid-t4aqtgdz": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$FeatureCard, { "image": feature01, "link": "/", "data-astro-cid-t4aqtgdz": true })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "4", "classes": "flex flex-col gap-6", "data-astro-cid-t4aqtgdz": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$FeatureCard, { "image": feature02, "link": "/", "data-astro-cid-t4aqtgdz": true })} ${renderComponent($$result4, "Card", $$FeatureCard, { "image": feature03, "link": "/", "data-astro-cid-t4aqtgdz": true })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "4", "classes": "flex flex-col gap-6", "data-astro-cid-t4aqtgdz": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$FeatureCard, { "image": feature04, "link": "/", "data-astro-cid-t4aqtgdz": true })} ${renderComponent($$result4, "Card", $$FeatureCard, { "image": feature05, "link": "/", "data-astro-cid-t4aqtgdz": true })} ` })} ` })} ` })} `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/features/FeatureCards.astro", void 0);

const highlight01 = new Proxy({"src":"/_astro/highlight-01.DUMmtOwb.png","width":3237,"height":3558,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/highlights/highlight-01.png";
							}
							
							return target[name];
						}
					});

const highlight02 = new Proxy({"src":"/_astro/highlight-02.q8yFYzTD.png","width":2052,"height":2412,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/highlights/highlight-02.png";
							}
							
							return target[name];
						}
					});

const highlight02s = new Proxy({"src":"/_astro/highlight-02-2.BswodtEp.png","width":2657,"height":1282,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/highlights/highlight-02-2.png";
							}
							
							return target[name];
						}
					});

const highlight03 = new Proxy({"src":"/_astro/highlight-03.DRvN5P3z.png","width":2519,"height":2701,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/highlights/highlight-03.png";
							}
							
							return target[name];
						}
					});

const highlight04 = new Proxy({"src":"/_astro/highlight-04.2C7sI8ig.png","width":1528,"height":1569,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/highlights/highlight-04.png";
							}
							
							return target[name];
						}
					});

const highlight04s = new Proxy({"src":"/_astro/highlight-04-2.Dimavdzx.png","width":3067,"height":1531,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/danielgarcia/Downloads/katuq_landing/src/assets/highlights/highlight-04-2.png";
							}
							
							return target[name];
						}
					});

const $$HightlightRows = createComponent(($$result, $$props, $$slots) => {
  const highlightBlocks = [
    {
      title: "MARCAS QUE SE <strong>TRANSFORMAN</strong>",
      text: "Desde que Katuq apareci\xF3, la magia est\xE1 en el aire. \xA1Hacemos que las empresas fluyan como un r\xEDo! Nuestros clientes ahorran un 35% en costos y sus clientes regresan como imanes.\xA1El \xE9xito nunca fue tan automatizado!",
      image: highlight01,
      imageWidth: highlight01.width,
      imageHeight: highlight01.height,
      mobileImage: highlight01,
      imagePosition: "right"
    },
    {
      image: highlight02,
      mobileImage: highlight02,
      imageWidth: highlight02.width,
      imageHeight: highlight02.height,
      imagePosition: "left",
      image2: highlight02s,
      image2Position: "right",
      image2Height: highlight02s.height,
      image2Width: highlight02s.width
    },
    {
      title: "<strong>CENTRALIZA Y PROCESA</strong>  TUS PEDIDOS CON KATUQ DESDE MULTIPLES CANALES",
      text: "Canales de comunicacion como WhatsApp, Messen- ger, Telegram, Correo, llamadas.Tu sitio web y landing pages. Equipo de ventas interno. Puntos de ventas f\xEDsicos. Vendedores externos. Redes sociales. Marketplaces. ",
      image: highlight03,
      mobileImage: highlight03,
      imageWidth: highlight03.width,
      imageHeight: highlight03.height,
      imagePosition: "right"
    },
    {
      image: highlight04,
      mobileImage: highlight04,
      imageWidth: highlight04.width / 2,
      imageHeight: highlight04.height / 2,
      imagePosition: "left",
      image2: highlight04s,
      image2Position: "right",
      image2Height: highlight04s.height,
      image2Width: highlight04s.width
    }
  ];
  return renderTemplate`${highlightBlocks.map((highlight, key) => renderTemplate`${renderComponent($$result, "TextImage", $$TextImage, { "id": `highlight-${key}`, "title": highlight.title, "text": highlight.text, "image": highlight.image, "imageWidth": highlight.imageWidth, "imageHeight": highlight.imageHeight, "mobileImage": highlight.mobileImage, "imagePosition": highlight.imagePosition, "image2": highlight.image2, "image2Position": highlight.image2Position, "image2Height": highlight.image2Height, "image2Width": highlight.image2Width, "classes": `${key === 0 ? "!pb-0" : key === highlightBlocks.length - 1 ? "!pt-0" : "!py-0"} ${key === highlightBlocks.length - 1 ? "last-image" : ""}` })}`)}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/highlights/HightlightRows.astro", void 0);

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$SectionKatuq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionKatuq;
  const { bg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section-katuq"${addAttribute(`background-image: url(${bg});`, "style")} data-astro-cid-hcimwr2a></section> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/SectionKatuq.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const SEO = {
    title: "Katuq | El \xE9xito esta en los detalles",
    description: "Katuq is a powerful productivity toolkit designed to enhance your workflow and boost your productivity. With features like analytics, security, and integrations, Katuq is the perfect solution for your business."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$HomeCTA, {})} ${renderComponent($$result2, "Features", $$FeatureCards, {})} ${renderComponent($$result2, "SectionKatuq", $$SectionKatuq, { "bg": "src/assets/Katuq.jpg" })} ${renderComponent($$result2, "HighlightBlocks", $$HightlightRows, {})} ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/pages/index.astro", void 0);

const $$file = "/Users/danielgarcia/Downloads/katuq_landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
