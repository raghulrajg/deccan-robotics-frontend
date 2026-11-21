/**
 * ─────────────────────────────────────────────────────────────
 *  SITE SETTINGS — edit this file first.
 *  Everything company-specific (contact details, socials,
 *  form delivery) lives here so the rest of the code stays clean.
 * ─────────────────────────────────────────────────────────────
 */

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  foundingYear: number;
  /** Main contact address: shown across the site and used for project enquiries. */
  email: string;
  /** Support address for existing clients. Leave empty to hide. */
  supportEmail: string;
  /** Phone in international format. Leave empty to hide. */
  phone: string;
  location: { city: string; country: string };
  socials: { linkedin: string; github: string; x: string; youtube: string };
  form: { web3formsKey: string; endpoint: string };
}

export const site: SiteConfig = {
  name: 'Deccan Robotics',
  tagline: 'Robotics, embedded, automation & software engineering',
  description:
    'Deccan Robotics is an engineering studio for robotics, embedded systems, industrial automation and software development. We consult, build proofs of concept and deliver working prototypes.',
  foundingYear: 2026,

  email: 'vishal@deccanrobotics.in',
  supportEmail: 'support@deccanrobotics.in',
  phone: '+91 87782 41004',

  location: {
    /** Optional. Add your city to show it across the site, e.g. 'Hyderabad'. */
    city: '',
    country: 'India',
  },

  /** Optional profile URLs. Empty values are hidden automatically. */
  socials: {
    linkedin: '',
    github: '',
    x: '',
    youtube: '',
  },

  /**
   * Contact form delivery — choose one:
   * - web3formsKey: free access key from https://web3forms.com. Every enquiry is
   *   emailed to the address you registered the key with. The key is designed
   *   to be public, so it is safe to keep here.
   * - endpoint: any other service that accepts form POSTs (e.g. Formspree:
   *   'https://formspree.io/f/abcdwxyz').
   * With both empty, the form opens the visitor's email app with the message
   * pre-filled and addressed to `email`.
   */
  form: {
    web3formsKey: '',
    endpoint: '',
  },
};

export const locationLabel = site.location.city
  ? `${site.location.city}, ${site.location.country}`
  : site.location.country;

/** tel: link target, e.g. '+918778241004'. */
export const phoneHref = `tel:${site.phone.replace(/[^\d+]/g, '')}`;

export const services = [
  {
    slug: 'robotics',
    label: 'Robotics',
    blurb: 'Mobile robots, manipulators and autonomy',
  },
  {
    slug: 'embedded-systems',
    label: 'Embedded Systems',
    blurb: 'Custom electronics, PCBs and firmware',
  },
  {
    slug: 'industrial-automation',
    label: 'Industrial Automation',
    blurb: 'PLC, machine vision and smart factories',
  },
  {
    slug: 'software-development',
    label: 'Software Development',
    blurb: 'Web, mobile, cloud & AI software',
  },
] as const;

export const engagements = [
  { label: 'Consulting', blurb: 'Feasibility, architecture & reviews', anchor: 'consulting' },
  { label: 'Proof of Concept', blurb: 'Prove the riskiest idea, fast', anchor: 'proof-of-concept' },
  { label: 'Prototyping', blurb: 'Demo-ready, functional builds', anchor: 'prototyping' },
] as const;
