/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent, f as renderScript, u as unescapeHTML, k as defineScriptVars } from '../chunks/astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import { $ as $$Icon, f as $$Form, g as $$FormField, h as $$InputField, e as $$Button, a as $$Row, b as $$Col, c as $$Section, i as appointmentConfig, d as $$Layout } from '../chunks/Col_B--YWaUZ.mjs';
import { $ as $$Card } from '../chunks/Card_Dhq6N92R.mjs';
import { $ as $$CardBody } from '../chunks/CardBody_grAxSwyi.mjs';
/* empty css                                   */
import 'clsx';
import { $ as $$BasicCard } from '../chunks/BasicCard_BkZSSmgI.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://astro-theme-one.vercel.app/");
const $$TextArea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TextArea;
  const { id, label, iconName, iconPosition, helperText, required, disabled, value, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "input",
    { [`input--icon-${iconPosition}`]: iconPosition },
    ,
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-5ltckmgw> <textarea${addAttribute(id, "id")} rows="7"${addAttribute(id, "name")}${addAttribute(label, "placeholder")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(value, "value")} class="input__field peer" data-astro-cid-5ltckmgw></textarea> <label${addAttribute(id, "for")}${addAttribute(`input__label ${iconPosition === "lead" ? "peer-placeholder-shown:left-10 peer-focus:left-2" : ""}`, "class")} data-astro-cid-5ltckmgw> ${label} </label> ${iconName && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": "input__icon", "data-astro-cid-5ltckmgw": true })}`} ${helperText && renderTemplate`<small class="input__helper-text" data-astro-cid-5ltckmgw> <span data-astro-cid-5ltckmgw> ${helperText} </span> </small>`} </div> `;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/forms/form-elements/TextArea.astro", void 0);

const $$ContactFormHandler = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/danielgarcia/Downloads/katuq_landing/src/components/scripts/ContactFormHandler.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/scripts/ContactFormHandler.astro", void 0);

const $$Astro$3 = createAstro("https://astro-theme-one.vercel.app/");
const $$BasicForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BasicForm;
  const { classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "classes": classes }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardBody", $$CardBody, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Form", $$Form, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 class="text-2xl">Get in Touch</h2> ${renderComponent($$result4, "FormField", $$FormField, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "InputField", $$InputField, { "type": "email", "id": "email", "name": "email", "label": "Email", "required": true, "value": "Ejemplo@email.com" })} ` })} ${renderComponent($$result4, "FormField", $$FormField, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "InputField", $$InputField, { "type": "email", "id": "email", "label": "Email", "required": true, "value": "Ejemplo@email.com" })} ` })} ${renderComponent($$result4, "FormField", $$FormField, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "TextArea", $$TextArea, { "id": "message", "name": "message", "label": "Mensaje" })} ` })} ${renderComponent($$result4, "Button", $$Button, { "style": "primary", "type": "submit" }, { "default": ($$result5) => renderTemplate`Enviar` })} ` })} ` })} ` })} ${renderComponent($$result, "ContactFormHandler", $$ContactFormHandler, {})}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/contact/BasicForm.astro", void 0);

const $$Astro$2 = createAstro("https://astro-theme-one.vercel.app/");
const $$ContactHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactHero;
  const { id, title, text, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": id, "classes": classes }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "6", "classes": `self-center` }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<header class="max-w-xl"> <h1>${unescapeHTML(title)}</h1> <p class="text-lg leading-relaxed">${text}</p> </header> <a href="/consultas"> ${renderComponent($$result4, "Button", $$Button, { "style": "primary", "type": "button" }, { "default": ($$result5) => renderTemplate`Agendar consultoría` })} </a> ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "6", "classes": "relative" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Form", $$BasicForm, { "classes": "max-w-xl" })} ` })} ` })} ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/hero/ContactHero.astro", void 0);

const $$Astro$1 = createAstro("https://astro-theme-one.vercel.app/");
const $$ContactCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactCards;
  const { classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "requests", "classes": classes }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "12", "align": "center", "classes": "mb-12 max-w-4xl mx-auto" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 class="text-balance">¿Tiene una petición especial? Estamos aquí para <strong>Ayudar!</strong></h2> <p class="pb-0 text-lg">
Elija una de las siguientes opciones para obtener la ayuda específica que necesita. Ya sea que se trate de atención al cliente, consultas de ventas, solicitudes de funciones o comentarios generales, estamos aquí para brindarle la mejor asistencia posible.
</p> ` })} ` })} ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Col", $$Col, { "span": "3" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$BasicCard, { "title": "Customer Support", "subtitle": "Need help with Katuq? Our support team is available 24/7 to assist you with any issues or questions you might have.", "icon": "rocket", "classes": "text-center dark:!bg-neutral-800/50", "link": "/contact" })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "3" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$BasicCard, { "title": "Sales Inquiries ", "subtitle": "Interested in our plans or want a custom solution? Get in touch with our sales team to find the perfect fit. ", "icon": "document-text", "classes": "text-center dark:!bg-neutral-800/50", "link": "/contact" })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "3" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$BasicCard, { "title": "Feature Requests", "subtitle": "Have an idea to make Katuq even better? We\u2019d love to hear from you! Share your feature requests and help us improve ", "icon": "bolt", "classes": "text-center dark:!bg-neutral-800/50", "link": "/contact" })} ` })} ${renderComponent($$result3, "Col", $$Col, { "span": "3", "classes": "flex flex-col gap-6" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Card", $$BasicCard, { "title": "General Feedback", "subtitle": "Your feedback is invaluable to us. Let us know how we\u2019re doing and how we can improve. ", "icon": "chat-bubble-left-ellipsis", "classes": "text-center dark:!bg-neutral-800/50", "link": "/contact" })} ` })} ` })} ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/contact/ContactCards.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$SimpleDemoBooking = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SimpleDemoBooking;
  const {
    appointmentUrl = appointmentConfig.demoBookingUrl,
    buttonColor = appointmentConfig.buttonColor,
    buttonText = appointmentConfig.buttonText,
    classes
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", ' <!-- Google Calendar Appointment Scheduling Script --> <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet"> <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async><\/script> <script>(function(){', "\nlet fallbackShown = false;\n\ndocument.addEventListener('DOMContentLoaded', function() {\n	// Check if Google Calendar script is loaded and we have a valid URL\n	if (typeof calendar !== 'undefined' && calendar.schedulingButton && appointmentUrl !== 'YOUR_GOOGLE_CALENDAR_APPOINTMENT_URL') {\n		try {\n			calendar.schedulingButton.load({\n				url: appointmentUrl,\n				color: buttonColor,\n				label: buttonText,\n				target: document.getElementById('google-appointment-button')\n			});\n			// Wait a bit to see if the button loaded successfully\n			setTimeout(checkIfButtonLoaded, 1000);\n		} catch (error) {\n			console.error('Error loading Google Calendar button:', error);\n			showFallbackButton();\n		}\n	} else {\n		// Show fallback button if Google script fails to load or no URL configured\n		setTimeout(showFallbackButton, 2000);\n	}\n});\n\nfunction checkIfButtonLoaded() {\n	const googleButton = document.getElementById('google-appointment-button');\n	if (googleButton && googleButton.children.length === 0 && !fallbackShown) {\n		// Google Calendar button didn't load, show fallback\n		setTimeout(showFallbackButton, 2000);\n	}\n}\n\nfunction showFallbackButton() {\n	if (fallbackShown) return; // Prevent multiple calls\n	\n	const googleButton = document.getElementById('google-appointment-button');\n	const fallbackButton = document.getElementById('fallback-demo-button');\n	\n	if (googleButton && fallbackButton) {\n		googleButton.style.display = 'none';\n		fallbackButton.classList.remove('hidden');\n		fallbackShown = true;\n	}\n}\n})();<\/script> "])), renderComponent($$result, "Card", $$Card, { "classes": classes, "data-astro-cid-ginfsv2i": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardBody", $$CardBody, { "data-astro-cid-ginfsv2i": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center space-y-6" data-astro-cid-ginfsv2i> <div class="space-y-4" data-astro-cid-ginfsv2i> <div class="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-4" data-astro-cid-ginfsv2i> <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ginfsv2i> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-ginfsv2i></path> </svg> </div> <h2 class="text-3xl font-bold text-neutral-900 dark:text-white" data-astro-cid-ginfsv2i>
Agenda tu Demo de Katuq
</h2> <p class="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto" data-astro-cid-ginfsv2i>
Descubre cómo nuestras soluciones de IA pueden transformar tu negocio. 
					Agenda una demo personalizada de 30 minutos con nuestro equipo.
</p> </div> <!-- Google Calendar Appointment Button --> <div id="google-appointment-button" class="my-8" data-astro-cid-ginfsv2i> <!-- Button will be inserted here by Google's script --> </div> <!-- Fallback button --> <div id="fallback-demo-button" class="hidden" data-astro-cid-ginfsv2i> <a${addAttribute(appointmentUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 transform hover:scale-105" data-astro-cid-ginfsv2i> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ginfsv2i> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-ginfsv2i></path> </svg> ${buttonText} </a> </div> <!-- What to expect --> <div class="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 space-y-4" data-astro-cid-ginfsv2i> <h3 class="text-xl font-semibold text-neutral-900 dark:text-white" data-astro-cid-ginfsv2i>
¿Qué esperar en la demo?
</h3> <div class="grid md:grid-cols-2 gap-4 text-left" data-astro-cid-ginfsv2i> <div class="flex items-start space-x-3" data-astro-cid-ginfsv2i> <svg class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-ginfsv2i> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-ginfsv2i></path> </svg> <span class="text-neutral-700 dark:text-neutral-300" data-astro-cid-ginfsv2i>Análisis de tus necesidades específicas</span> </div> <div class="flex items-start space-x-3" data-astro-cid-ginfsv2i> <svg class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-ginfsv2i> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-ginfsv2i></path> </svg> <span class="text-neutral-700 dark:text-neutral-300" data-astro-cid-ginfsv2i>Demo en vivo de nuestras funcionalidades</span> </div> <div class="flex items-start space-x-3" data-astro-cid-ginfsv2i> <svg class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-ginfsv2i> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-ginfsv2i></path> </svg> <span class="text-neutral-700 dark:text-neutral-300" data-astro-cid-ginfsv2i>Propuesta personalizada de implementación</span> </div> <div class="flex items-start space-x-3" data-astro-cid-ginfsv2i> <svg class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-ginfsv2i> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-ginfsv2i></path> </svg> <span class="text-neutral-700 dark:text-neutral-300" data-astro-cid-ginfsv2i>Sesión de preguntas y respuestas</span> </div> </div> </div> </div> ` })} ` }), defineScriptVars({ appointmentUrl, buttonColor, buttonText }));
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/contact/SimpleDemoBooking.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const SEO = {
    title: "Katuq | P\xF3ngase en contacto con nosotros",
    description: "Estamos aqu\xED para ayudarte. Ponte en contacto con nosotros a trav\xE9s de cualquiera de los siguientes m\xE9todos."
  };
  const header = {
    title: "Obtenga respuestas a sus preguntas sobre Katuq.",
    text: "Ya sea que tenga una pregunta, necesite ayuda o simplemente quiera compartir sus comentarios, somos todo o\xEDdos. Ponte en contacto con nosotros y nos pondremos en contacto contigo lo antes posible."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormHero", $$ContactHero, { "title": header.title, "text": header.text, "id": "contact", "classes": "bg-neutral-50 dark:bg-neutral-950/80" })} ${renderComponent($$result2, "ContactCards", $$ContactCards, { "classes": "dark:bg-neutral-950/80" })} ${renderComponent($$result2, "SimpleDemoBooking", $$SimpleDemoBooking, { "classes": "dark:bg-neutral-950/80" })}   ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/pages/contact.astro", void 0);

const $$file = "/Users/danielgarcia/Downloads/katuq_landing/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
