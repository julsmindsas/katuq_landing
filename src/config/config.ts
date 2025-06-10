// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Katuq',
	siteDescription:
		'Empower your business with advanced AI and automated solutions from sales to delivery.',
	ogImage: '/faviconkatuq.png',
	logo: {
		src: '/logo.svg',
		alt: 'Katuq logo'
	},
	canonical: true,
	noindex: false,
	mode: 'dark',
	scrollAnimations: true
}

// Google Calendar Appointment Scheduling
export const appointmentConfig = {
	demoBookingUrl: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Ha4_YfWOkb8PQUBRxuhcaFGxrgEDheIJQgZLlo7poujTrimqSLqEzT_jUCWVNA0i_yg4_FolX',
	buttonColor: '#9b00ff',
	buttonText: 'Agendar Demo Gratuita'
}

// Contact Buttons Configuration
export const contactConfig = {
	phoneNumber: '573104082376',
	whatsappMessage: '¡Hola! Me interesa conocer más sobre Katuq 😊',
	position: 'bottom-right' as const,
	showWhatsApp: true,
	showPhone: true
}
