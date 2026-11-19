/**
 * ─────────────────────────────────────────────────────────────
 *  SITE SETTINGS — edit this file first.
 *  Everything company-specific (contact details, socials,
 *  form endpoint) lives here so the rest of the code stays clean.
 * ─────────────────────────────────────────────────────────────
 */

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  foundingYear: number;
  email: string;
  phone: string;
  location: { city: string; country: string };
  socials: { linkedin: string; github: string; x: string; youtube: string };
  formEndpoint: string;
}

export const site: SiteConfig = {
  name: 'Deccan Robotics',
  tagline: 'Robotics, embedded systems & industrial automation engineering',
  description:
    'Deccan Robotics is an engineering studio for robotics, embedded systems and industrial automation. We consult, build proofs of concept and deliver working prototypes.',
  foundingYear: 2026,

  /** TODO: replace with your real inbox before going live. */
  email: 'hello@deccanrobotics.com',
  /** Optional. Leave empty to hide. Use international format, e.g. '+91 98765 43210'. */
  phone: '',

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
   * Contact form delivery.
   * - Leave empty: the form opens the visitor's email app with the message pre-filled.
   * - Set to a form-backend URL (Formspree, Web3Forms, Getform, your own API…)
   *   and submissions are POSTed there as form data, with no page reload.
   *   Example: 'https://formspree.io/f/abcdwxyz'
   */
  formEndpoint: '',
};

export const locationLabel = site.location.city
  ? `${site.location.city}, ${site.location.country}`
  : site.location.country;

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
] as const;

export const engagements = [
  { label: 'Consulting', blurb: 'Feasibility, architecture & reviews', anchor: 'consulting' },
  { label: 'Proof of Concept', blurb: 'Prove the riskiest idea, fast', anchor: 'proof-of-concept' },
  { label: 'Prototyping', blurb: 'Demo-ready, functional builds', anchor: 'prototyping' },
] as const;
