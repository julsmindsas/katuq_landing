/* empty css                                  */
import { a as createComponent, r as renderTemplate, e as renderComponent } from '../chunks/astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import { d as $$Layout } from '../chunks/Col_B--YWaUZ.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_CYKMN7-U.mjs';
import { $ as $$BlogPosts } from '../chunks/BlogPosts_DzAVn-5H.mjs';
import { g as getCollection } from '../chunks/_astro_content_B3cUVTtK.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const SEO = {
    title: "Katuq | Latest Katuq News and updates",
    description: "Explore Katuq's latest news designed to enhance productivity, ensure top-notch security, and integrate seamlessly with your favorite tools. Join thousands of satisfied users and transform your workflow with Katuq today!"
  };
  const header = {
    title: "The <strong>Katuq</strong> Blog. Tips, Updates & Stories",
    text: "Stay informed, stay productive. All the latest from the world of Katuq"
  };
  const allPosts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "title": header.title, "text": header.text })} ${renderComponent($$result2, "BlogPosts", $$BlogPosts, { "data": allPosts })} ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/pages/blog/index.astro", void 0);

const $$file = "/Users/danielgarcia/Downloads/katuq_landing/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
