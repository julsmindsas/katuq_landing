/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent, d as renderSlot } from '../chunks/astro/server_DxIRt11M.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$Row, b as $$Col, d as $$Layout } from '../chunks/Col_B--YWaUZ.mjs';
import { $ as $$StickySidebar } from '../chunks/StickySidebar_DkDVsDoN.mjs';
/* empty css                                    */
import { $ as $$PageHeader } from '../chunks/PageHeader_CYKMN7-U.mjs';
import { $ as $$BasicDark } from '../chunks/BasicDark_DCCBuybE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://astro-theme-one.vercel.app/");
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Feature;
  const { type = "top-icon", title, icon = "rocket", iconStyle, align, classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "feature",
    { [`feature--${type}`]: type },
    { [`feature--${align}`]: align },
    { [`${classes}`]: classes }
  ], "class:list")} data-astro-cid-d3utdf5e> ${renderComponent($$result, "Icon", $$Icon, { "name": `${icon}`, "class:list": [
    "shrink-0",
    { [`size-6 text-primary-500`]: iconStyle != "square" },
    { [`size-10 rounded bg-primary-500 p-2 text-white`]: iconStyle === "square" }
  ], "data-astro-cid-d3utdf5e": true })} <div class="feature__body" data-astro-cid-d3utdf5e> ${title && renderTemplate`<h3${addAttribute([
    "feature__title",
    { [`mb-2 py-2`]: iconStyle === "square" && type === "side-icon" }
  ], "class:list")} data-astro-cid-d3utdf5e> ${title} </h3>`} ${renderSlot($$result, $$slots["default"])} </div>  </div>`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/ui/Feature.astro", void 0);

const $$Astro = createAstro("https://astro-theme-one.vercel.app/");
const $$FeatureSticky = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureSticky;
  const { title, text, data, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "StickySidebar", $$StickySidebar, { "classes": classes }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Row", $$Row, {}, { "default": ($$result3) => renderTemplate`${// Map through the filtered features and render them
  data.map((feature) => renderTemplate`${renderComponent($$result3, "Col", $$Col, { "span": "4" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Feature", $$Feature, { "title": feature.title, "icon": feature.icon, "align": "left", "classes": "mb-12" }, { "default": ($$result5) => renderTemplate`${feature.description}` })} ` })}`)}` })} `, "sidebar": ($$result2) => renderTemplate`${maybeRenderHead()}<header> ${title && renderTemplate`<h3 class="text-3xl">${title}</h3>`} ${text && renderTemplate`<p class="text-lg leading-relaxed">${text}</p>`} </header>` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/components/blocks/features/FeatureSticky.astro", void 0);

const featuresData = [
	{
		title: "Real-Time Analytics",
		icon: "chart-pie",
		description: "Gain valuable insights instantly with Katuq's real-time analytics. Track performance metrics, user behavior, and campaign effectiveness effortlessly.",
		category: "Analytics"
	},
	{
		title: "Customizable Dashboards",
		icon: "squares-plus",
		description: "Tailor your workspace with personalized dashboards that suit your workflow. Stay organized and focused on what matters most to your business.",
		category: "Analytics"
	},
	{
		title: "Task Management",
		icon: "cliboard-document-check",
		description: "Efficiently manage tasks and projects with Katuq's intuitive task management tools. Assign, track progress, and collaborate seamlessly.",
		category: "Productivity"
	},
	{
		title: "Third-Party Apps",
		icon: "rocket",
		description: "Connect Katuq with your favorite tools and apps effortlessly. Streamline workflows and enhance productivity with seamless integrations.",
		category: "Productivity"
	},
	{
		title: "Mobile Accessibility",
		icon: "device-phone-mobile",
		description: "Stay productive on the go with Katuq's mobile app. Access key features, collaborate with your team, and manage tasks anytime, anywhere.",
		category: "Support"
	},
	{
		title: "Dedicated Customer Support",
		icon: "trophy",
		description: "Receive exceptional customer support whenever you need it. Our dedicated team is here 24/7 to assist you with any questions or issues.",
		category: "Support"
	},
	{
		title: "Robust Data Security",
		icon: "shield-check",
		description: "Rest assured knowing your data is safe with Katuq's robust security measures. We employ industry-standard protocols to protect your information.",
		category: "Security"
	},
	{
		title: "Scalability",
		icon: "arrow-treding-up",
		description: "Grow your business with confidence using Katuq's scalable platform. Whether you're a startup or a large enterprise, our solution adapts to your needs.",
		category: "Security"
	},
	{
		title: "Real-Time Notifications",
		icon: "bell-alert",
		description: "Stay updated with real-time notifications for important events and updates. Never miss out on critical information with instant alerts.",
		category: "Security"
	},
	{
		title: "Advanced Reporting",
		icon: "clipboard-document-list",
		description: "Generate detailed reports with advanced analytics features. Customize reports to track key performance indicators and gain deeper insights.",
		category: "Analytics"
	},
	{
		title: "Team Collaboration Tools",
		icon: "user-group",
		description: "Enhance team collaboration with tools designed for effective communication and project management. Share updates, files, and feedback seamlessly.",
		category: "Productivity"
	},
	{
		title: "In-App Messaging",
		icon: "chat-bubble-left-right",
		description: "Communicate directly within the app using in-app messaging. Keep conversations organized and accessible without switching between tools.",
		category: "Integrations"
	},
	{
		title: "Multi-Device Sync",
		icon: "computer-desktop",
		description: "Ensure seamless access to your data across all devices. Sync your information in real-time, so you can work from anywhere with consistency.",
		category: "Support"
	},
	{
		title: "Customizable Alerts",
		icon: "bell",
		description: "Set up customizable alerts to notify you of important events and changes. Tailor notifications to your needs for better management and response.",
		category: "Support"
	},
	{
		title: "API Integrations",
		icon: "arrow-path-rounded-square",
		description: "Integrate with other systems and services using our flexible API. Expand functionality and connect with external tools effortlessly.",
		category: "Integrations"
	},
	{
		title: "User Role Management",
		icon: "user",
		description: "Manage user roles and permissions with ease. Control access levels and ensure the right people have the right permissions for your project.",
		category: "Security"
	},
	{
		title: "Custom Themes",
		icon: "paint-brush",
		description: "Customize the look and feel of your workspace with custom themes. Choose from various design options to match your brand's style.",
		category: "Analytics"
	},
	{
		title: "Data Backup",
		icon: "circle-stack",
		description: "Protect your data with regular backups. Ensure that your information is safe and recoverable in case of unexpected issues or data loss.",
		category: "Security"
	},
	{
		title: "Performance Tracking",
		icon: "arrow-trending-up",
		description: "Monitor and track performance metrics to ensure optimal efficiency. Use performance data to make informed decisions and improvements.",
		category: "Analytics"
	},
	{
		title: "Interactive Tutorials",
		icon: "document-chart-bar",
		description: "Access interactive tutorials to get the most out of our features. Learn new skills and improve your proficiency with guided, hands-on experiences.",
		category: "Support"
	},
	{
		title: "Custom Widgets",
		icon: "squares-plus",
		description: "Enhance your dashboard with custom widgets. Add and configure widgets to display the most relevant information for your needs.",
		category: "Analytics"
	},
	{
		title: "Data Visualization",
		icon: "eye",
		description: "Visualize your data with advanced charting and graphing tools. Create insightful visual representations to better understand your metrics.",
		category: "Analytics"
	},
	{
		title: "Integration Marketplace",
		icon: "shopping-cart",
		description: "Explore our marketplace for additional integrations and plugins. Extend the functionality of your platform with third-party solutions.",
		category: "Integrations"
	},
	{
		title: "Onboarding Assistance",
		icon: "user",
		description: "Get personalized onboarding assistance to help you set up and start using our platform effectively. Benefit from expert guidance to ensure a smooth start.",
		category: "Support"
	},
	{
		title: "Knowledge Base",
		icon: "document-text",
		description: "Access a comprehensive knowledge base with articles, guides, and FAQs. Find answers to common questions and learn how to make the most of our features.",
		category: "Support"
	},
	{
		title: "Live Chat Support",
		icon: "chat-bubble-left-ellipsis",
		description: "Connect with our support team via live chat for immediate assistance. Get answers to your questions and resolve issues in real time.",
		category: "Support"
	},
	{
		title: "Customizable Workspaces",
		icon: "cursor-arrow-ripple",
		description: "Personalize your workspace layout to fit your needs. Adjust and configure your workspace for maximum efficiency and comfort.",
		category: "Productivity"
	},
	{
		title: "Task Automation",
		icon: "rectangle-stack",
		description: "Automate routine tasks to improve efficiency and reduce manual work. Set up automated processes to streamline your workflow.",
		category: "Productivity"
	},
	{
		title: "Accessibility Features",
		icon: "eye-slash",
		description: "Explore features designed to enhance accessibility. Ensure your tools and workspace are usable for all team members, including those with disabilities.",
		category: "Security"
	},
	{
		title: "Enhanced Mobile Access",
		icon: "mobile",
		description: "Benefit from enhanced mobile access features. Use our app to stay connected and productive with improved functionality on mobile devices.",
		category: "Security"
	},
	{
		title: "Advanced Bug Tracking",
		icon: "bug-ant",
		description: "Track tasks and projects with advanced tracking features. Monitor progress, set milestones, and manage your projects more effectively.",
		category: "Productivity"
	},
	{
		title: "Comprehensive Balancer",
		icon: "scale",
		description: "Access comprehensive support resources to assist users at all levels. From troubleshooting to advanced tips, get the help you need.",
		category: "Support"
	},
	{
		title: "Voice Recordings",
		icon: "microphone",
		description: "Receive real-time updates on accessibility features and improvements. Stay informed about changes that impact your mobile and web access.",
		category: "Support"
	},
	{
		title: "User Identity Verification",
		icon: "identification",
		description: "Analyze productivity metrics to optimize performance. Gain insights into team and individual productivity to drive improvements.",
		category: "Productivity"
	},
	{
		title: "Payment Integrations",
		icon: "credit-card",
		description: "Communicate directly within the app using in-app messaging. Keep conversations organized and accessible without switching between tools.",
		category: "Integrations"
	},
	{
		title: "Transparent API ",
		icon: "cube-transparent",
		description: "Seamlessly integrate with third-party APIs to extend the functionality of your app. Enjoy smooth data exchange and enhanced performance.",
		category: "Integrations"
	},
	{
		title: "Clever CRM Integration",
		icon: "light-bulb",
		description: "Connect your app with popular CRM systems to streamline customer management. Synchronize data and improve customer relationship processes.",
		category: "Integrations"
	},
	{
		title: "API key Integration",
		icon: "key",
		description: "Integrate multiple payment gateways to offer diverse payment options. Ensure secure transactions and smooth payment processing for users.",
		category: "Integrations"
	}
];

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const featuresAnalytics = featuresData.filter((feature) => feature.category === "Analytics");
  const featuresProductivity = featuresData.filter((feature) => feature.category === "Productivity");
  const featuresSecurity = featuresData.filter((feature) => feature.category === "Security");
  const featuresIntegrations = featuresData.filter((feature) => feature.category === "Integrations");
  const featuresSupport = featuresData.filter((feature) => feature.category === "Support");
  const SEO = {
    title: "Katuq | Features to Boost Productivity & Security",
    description: "Explore Katuq's powerful features designed to enhance productivity, ensure top-notch security, and integrate seamlessly with your favorite tools. Join thousands of satisfied users and transform your workflow with Katuq today!"
  };
  const header = {
    title: "Why you and your team will <strong>love</strong> Katuq",
    text: "Streamline your tasks, protect your data, and enjoy working with our tools!"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": SEO.title, "description": SEO.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$PageHeader, { "title": header.title, "text": header.text })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Insightful Analytics", "text": "Delve into your data with precision and uncover actionable insights.", "data": featuresAnalytics })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Efficiency Unleashed", "text": "Streamline tasks and focus on what matters with tools designed to boost your productivity.", "data": featuresSecurity, "classes": "bg-neutral-50 dark:bg-neutral-900" })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Ultimate Data Protection", "text": "Keep your data safe with top-notch security measures and real-time threat detection.", "data": featuresProductivity })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "Seamless Connectivity", "text": "Effortlessly connect your favorite apps and automate workflows for a smoother workday.", "data": featuresIntegrations, "classes": "bg-neutral-50 dark:bg-neutral-900" })} ${renderComponent($$result2, "Feature", $$FeatureSticky, { "title": "24/7 Expert Help", "text": "Our friendly support team is always here to assist you with any questions or issues.", "data": featuresSupport })} ${renderComponent($$result2, "CTA", $$BasicDark, {})} ` })}`;
}, "/Users/danielgarcia/Downloads/katuq_landing/src/pages/features.astro", void 0);

const $$file = "/Users/danielgarcia/Downloads/katuq_landing/src/pages/features.astro";
const $$url = "/features";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Features,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
