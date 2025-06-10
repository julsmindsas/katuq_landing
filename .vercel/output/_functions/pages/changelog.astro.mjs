/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, e as renderComponent } from '../chunks/astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import { a as $$Row, b as $$Col, c as $$Section, $ as $$Icon, e as $$Button, d as $$Layout } from '../chunks/Col_C_37dWaI.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_CO_USJuN.mjs';
import 'clsx';
/* empty css                                     */
import { $ as $$CTA } from '../chunks/CTA_BHrMOHSh.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://astro-theme-one.vercel.app/");
const $$Feed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Feed;
  const { data, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul aria-label="Changelog feed" role="feed"${addAttribute(["feed", { [`${classes}`]: classes }], "class:list")} data-astro-cid-ynmpfzgx> ${data.map((item) => renderTemplate`<li role="article" class="feed__item" data-astro-cid-ynmpfzgx> <span class="feed__item-date" data-astro-cid-ynmpfzgx> ${item.date}</span> <div class="feed__item-container" data-astro-cid-ynmpfzgx> <h4 class="feed__item-header" data-astro-cid-ynmpfzgx> ${item.title} <span data-astro-cid-ynmpfzgx> - ${item.date}</span> </h4> ${item.image && renderTemplate`<div class="feed__item-image" data-astro-cid-ynmpfzgx> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} width="1000" height="500" data-astro-cid-ynmpfzgx> </div>`} <div class="feed__item-text basic-text" data-astro-cid-ynmpfzgx>${unescapeHTML(item.text)}</div> </div> </li>`)} </ul> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/Feed.astro", void 0);

const $$Astro$1 = createAstro("https://astro-theme-one.vercel.app/");
const $$BasicFeed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BasicFeed;
  const { data, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "changelog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "2" })} ${renderComponent($$result3, "Col", $$Col, { "span": "8" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Feed", $$Feed, { "data": data, "classes": classes })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "2" })} ` })} ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/feeds/BasicFeed.astro", void 0);

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$Rating = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Rating;
  const { rating = 0, size = "base", elevated, title, text, helperText, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "rating",
    { ["rating--elevated"]: elevated },
    { [`rating--${size}`]: size },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-ev5oopnm> ${title && renderTemplate`<h4 class="rating__title" data-astro-cid-ev5oopnm>${title}</h4>`} <span class="rating__body" data-astro-cid-ev5oopnm> <span class="rating__stars" role="img"${addAttribute(`Rating: ${rating} out of 5 stars`, "aria-label")} data-astro-cid-ev5oopnm> ${Array.from({ length: 5 }, (_, index) => renderTemplate`<span aria-hidden="true" data-astro-cid-ev5oopnm> ${renderComponent($$result, "Icon", $$Icon, { "name": index < rating ? "filled-star" : "empty-star", "data-astro-cid-ev5oopnm": true })} </span>`)} </span> ${text && renderTemplate`<span data-astro-cid-ev5oopnm>${text}</span>`} </span> ${helperText && renderTemplate`<span class="rating__helper-text" data-astro-cid-ev5oopnm> ${helperText} </span>`} </div> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/Rating.astro", void 0);

const $$BasicLight = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "1" })} ${renderComponent($$result3, "Col", $$Col, { "span": "10" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CTA", $$CTA, { "title": "Join the Katuq Revolution!", "text": "Discover why thousands of professionals trust our platform to streamline their workflow and enhance productivity. Get started today and see the difference for yourself!", "classes": "!shadow-none" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Ratings", $$Rating, { "rating": 5, "text": "30K customer ratings", "classes": "mb-4" })} ${renderComponent($$result5, "Button", $$Button, { "size": "lg", "style": "primary" }, { "default": ($$result6) => renderTemplate` Get started now! ` })} ` })} ${renderComponent($$result4, "Col", $$Col, { "span": "1" })} ` })} ` })} ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/CTA/BasicLight.astro", void 0);

const feedData = [
	{
		title: "v1.0.6: Enhanced Security Features",
		date: "2024-07-01",
		text: "<p>We've implemented new security protocols to safeguard your data. Enjoy peace of mind with improved encryption and multi-factor authentication.</p> <ul><li>2FA enabled by default</li><li>HubSpot integration</li><li>Zoho CRM integration</li></ul>",
		image: "/feeds/feed-01.png"
	},
	{
		title: "v1.0.5: User Interface Improvements",
		date: "2024-06-15",
		text: "<p>Our latest update brings a revamped user interface for a more intuitive and visually appealing experience. Navigation and usability have been greatly enhanced.</p><ul><li>Updated dashboard layout</li><li>Improved accessibility features</li><li>Streamlined navigation menus</li></ul>",
		image: "/feeds/feed-02.png"
	},
	{
		title: "v1.0.4: New In-App Messaging",
		date: "2024-05-20",
		text: "<p>Introducing in-app messaging! Communicate directly within the app to keep conversations organized and accessible without switching between tools.</p>"
	},
	{
		title: "v1.0.3: Performance Enhancements",
		date: "2024-04-10",
		text: "<p>We've optimized the app to run faster and smoother. Experience improved load times and overall performance.</p>",
		image: "/feeds/feed-03.png"
	},
	{
		title: "v1.0.2: CRM Integration",
		date: "2024-03-25",
		text: "<p>Connect your app with popular CRM systems to streamline customer management. Synchronize data and improve customer relationship processes.</p><ul><li>Salesforce integration</li><li>HubSpot integration</li><li>Zoho CRM integration</li></ul>"
	},
	{
		title: "v1.0.1: Third-Party API Support",
		date: "2024-02-15",
		text: "<p>Seamlessly integrate with third-party APIs to extend the functionality of your app. Enjoy smooth data exchange and enhanced performance.</p>",
		image: "/feeds/feed-04.png"
	}
];

const $$Changelog = createComponent(($$result, $$props, $$slots) => {
  const SEO = {
    title: "Katuq | Version Updates and Improvements",
    description: "Explore Katuq's powerful features designed to enhance productivity, ensure top-notch security, and integrate seamlessly with your favorite tools. Join thousands of satisfied users and transform your workflow with Katuq today!"
  };
  const header = {
    title: "Katuq Version Updates and <strong>Enhancements</strong>",
    text: "Stay informed about all the new updates and improvements in Katuq"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "title": header.title, "text": header.text })} ${renderComponent($$result2, "SimpleFeed", $$BasicFeed, { "data": feedData })} ${renderComponent($$result2, "CTA", $$BasicLight, {})} ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/pages/changelog.astro", void 0);

const $$file = "/Users/danielgarcia/Downloads/katuq_landing/src/pages/changelog.astro";
const $$url = "/changelog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Changelog,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
