/* empty css                                        */
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent } from '../../../chunks/astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import { d as $$Layout } from '../../../chunks/Col_C_37dWaI.mjs';
import { $ as $$PageHeader } from '../../../chunks/PageHeader_CO_USJuN.mjs';
import { $ as $$BlogPosts } from '../../../chunks/BlogPosts_D-ATcn6k.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_B3cUVTtK.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const uniqueTags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.data.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  const SEO = {
    title: `Katuq | posts tagges as ` + tag,
    description: "Explore Katuq's latest news designed to enhance productivity, ensure top-notch security, and integrate seamlessly with your favorite tools. Join thousands of satisfied users and transform your workflow with Katuq today!"
  };
  const header = {
    title: `Katuq posts about <br><strong>` + tag + `</strong>`,
    text: `Stay informed, stay productive with all the latest fromKatuq`
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "title": header.title, "text": header.text })} ${renderComponent($$result2, "BlogPosts", $$BlogPosts, { "data": posts })} ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/pages/blog/tags/[tag].astro", void 0);

const $$file = "/Users/danielgarcia/Downloads/katuq_landing/src/pages/blog/tags/[tag].astro";
const $$url = "/blog/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
