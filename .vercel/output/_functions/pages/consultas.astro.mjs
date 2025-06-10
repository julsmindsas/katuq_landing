/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, f as renderScript, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import { a as $$Row, b as $$Col, e as $$Button, c as $$Section, d as $$Layout } from '../chunks/Col_C_37dWaI.mjs';
import { $ as $$Card } from '../chunks/Card_Dhq6N92R.mjs';
import { $ as $$CardBody } from '../chunks/CardBody_grAxSwyi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$ScheduleConsultation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ScheduleConsultation;
  const { id, title, text, classes } = Astro2.props;
  let selectedDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  let selectedTime = "09:00";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": id, "classes": classes, "data-astro-cid-p7g5xize": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-p7g5xize": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center", "classes": "mb-12 max-w-4xl mx-auto", "data-astro-cid-p7g5xize": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 class="text-3xl font-bold mb-4" data-astro-cid-p7g5xize>Agendar Consultoría</h2> <p class="text-lg leading-relaxed mb-8" data-astro-cid-p7g5xize>Seleccione el día y la hora para agendar una consultoría con nosotros.</p> ` })} ` })} ${renderComponent($$result2, "Row", $$Row, { "data-astro-cid-p7g5xize": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "classes": "relative", "data-astro-cid-p7g5xize": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$Card, { "classes": "max-w-xl mx-auto shadow-lg", "data-astro-cid-p7g5xize": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "CardBody", $$CardBody, { "data-astro-cid-p7g5xize": true }, { "default": ($$result6) => renderTemplate` <form id="schedule-form" onsubmit="handleSubmit(event)" data-astro-cid-p7g5xize> <h2 class="text-2xl font-semibold mb-6" data-astro-cid-p7g5xize>Seleccione la fecha y hora</h2> <div class="mb-4" data-astro-cid-p7g5xize> <label for="date" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-p7g5xize>Fecha</label> <input type="date" id="date" name="date"${addAttribute(selectedDate, "value")} class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required data-astro-cid-p7g5xize> </div> <div class="mb-4" data-astro-cid-p7g5xize> <label for="time" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-p7g5xize>Hora</label> <input type="time" id="time" name="time"${addAttribute(selectedTime, "value")} class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required data-astro-cid-p7g5xize> </div> <div class="mb-4" data-astro-cid-p7g5xize> <label for="name" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-p7g5xize>Nombre</label> <input type="text" id="name" name="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required data-astro-cid-p7g5xize> </div> ${renderComponent($$result6, "Button", $$Button, { "style": "primary", "type": "submit", "classes": "w-full py-2", "data-astro-cid-p7g5xize": true }, { "default": ($$result7) => renderTemplate`Agendar` })} </form> ` })} ` })} ` })} ` })} ` })} ${renderScript($$result, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/consultation/ScheduleConsultation.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/consultation/ScheduleConsultation.astro", void 0);

const $$Consultas = createComponent(($$result, $$props, $$slots) => {
  const SEO = {
    title: "Katuq | Realiza tus consultas",
    description: "Estamos aqu\xED para ayudarte. Realiza tus consultas a trav\xE9s de nuestro formulario y nos pondremos en contacto contigo lo antes posible."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ScheduleConsultation", $$ScheduleConsultation, { "id": "schedule-consultation" })} ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/pages/consultas.astro", void 0);

const $$file = "/Users/danielgarcia/Downloads/katuq_landing/src/pages/consultas.astro";
const $$url = "/consultas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Consultas,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
