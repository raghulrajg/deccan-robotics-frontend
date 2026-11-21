import type { IconName } from '@/lib/icons';

/* ── Ways to engage ─────────────────────────────────────────── */

export interface Engagement {
  id: 'consulting' | 'proof-of-concept' | 'prototyping';
  step: string;
  icon: IconName;
  name: string;
  tagline: string;
  duration: string;
  bestFor: string;
  deliverables: string[];
}

export const engagements: Engagement[] = [
  {
    id: 'consulting',
    step: '01',
    icon: 'messages-square',
    name: 'Consulting',
    tagline: 'Expert eyes on your idea, design or problem.',
    duration: '1–3 weeks',
    bestFor: 'Early ideas, stalled projects and technical due diligence.',
    deliverables: [
      'Feasibility & risk assessment',
      'System architecture & component selection',
      'BOM and cost estimates',
      'A written, costed roadmap',
    ],
  },
  {
    id: 'proof-of-concept',
    step: '02',
    icon: 'flask-conical',
    name: 'Proof of Concept',
    tagline: 'Answer the riskiest question with working hardware.',
    duration: '3–6 weeks',
    bestFor: 'Validating a core technology before you commit serious budget.',
    deliverables: [
      'A focused bench or field demonstrator',
      'Test data against agreed success criteria',
      'Go / no-go recommendation',
      'Plan and estimate for the prototype',
    ],
  },
  {
    id: 'prototyping',
    step: '03',
    icon: 'rocket',
    name: 'Prototyping',
    tagline: 'A functional prototype you can demo, test and pitch.',
    duration: '6–16 weeks',
    bestFor: 'Investor demos, pilot customers and user trials.',
    deliverables: [
      'Integrated mechanics, electronics & firmware',
      'Demo-ready units',
      'Test reports and known-issues log',
      'Full design files & documentation',
    ],
  },
];

/* ── Process ─────────────────────────────────────────────────── */

export interface Phase {
  n: string;
  name: string;
  duration: string;
  text: string;
  output: string;
  gate?: string;
}

export const phases: Phase[] = [
  {
    n: '01',
    name: 'Discover',
    duration: '1–2 weeks',
    text: 'Workshops, requirements and constraints. We map the technical risks and agree what success looks like.',
    output: 'Technical brief, risk map & plan',
    gate: 'Feasible?',
  },
  {
    n: '02',
    name: 'Prove',
    duration: '3–6 weeks',
    text: 'Targeted experiments on the riskiest assumptions — on the bench or in the field — before anything gets expensive.',
    output: 'Working proof of concept + test data',
    gate: 'Does it work?',
  },
  {
    n: '03',
    name: 'Prototype',
    duration: '6–16 weeks',
    text: 'Integrated design across mechanics, electronics, firmware and software, built and iterated in short cycles.',
    output: 'Functional, demo-ready prototype',
    gate: 'Is it right?',
  },
  {
    n: '04',
    name: 'Validate',
    duration: '2–6 weeks',
    text: 'Testing, refinement and design-for-manufacture review, then a clean handover to your team or manufacturer.',
    output: 'Validated design & handover pack',
  },
];

/* ── Silicon-to-cloud stack ─────────────────────────────────── */

export interface Layer {
  n: string;
  name: string;
  icon: IconName;
  text: string;
  tools: string[];
}

/** Ordered top → bottom. */
export const layers: Layer[] = [
  {
    n: '06',
    name: 'Cloud & fleet',
    icon: 'cloud',
    text: 'Telemetry pipelines, dashboards, OTA update infrastructure, fleet management and remote diagnostics.',
    tools: ['MQTT', 'AWS IoT', 'InfluxDB', 'Grafana', 'Docker'],
  },
  {
    n: '05',
    name: 'Autonomy & perception',
    icon: 'scan-eye',
    text: 'SLAM, localisation, path planning, computer vision and machine-learning inference at the edge.',
    tools: ['ROS 2 Nav2', 'OpenCV', 'PyTorch', 'TensorRT', 'PCL'],
  },
  {
    n: '04',
    name: 'Control & motion',
    icon: 'move-3d',
    text: 'Kinematics, trajectory planning, PID and model-predictive control, motor control and sensor fusion.',
    tools: ['MATLAB / Simulink', 'C++', 'Python', 'EtherCAT', 'CANopen'],
  },
  {
    n: '03',
    name: 'Firmware',
    icon: 'binary',
    text: 'Bare-metal and RTOS firmware, drivers, bootloaders, communication stacks and power management.',
    tools: ['C / C++', 'Rust', 'Zephyr', 'FreeRTOS', 'ESP-IDF'],
  },
  {
    n: '02',
    name: 'Electronics',
    icon: 'circuit-board',
    text: 'Schematics, multilayer PCB layout, power electronics, sensor front-ends and EMC-aware design.',
    tools: ['KiCad', 'Altium', 'LTspice', 'Bench test & debug'],
  },
  {
    n: '01',
    name: 'Mechanical',
    icon: 'cog',
    text: 'Mechanisms, enclosures, design for manufacture and assembly, 3D printing and CNC prototyping.',
    tools: ['Fusion 360', 'SolidWorks', 'FDM / SLA', 'CNC'],
  },
];

/* ── Industries ─────────────────────────────────────────────── */

export const industries: { icon: IconName; name: string; text: string }[] = [
  {
    icon: 'factory',
    name: 'Manufacturing',
    text: 'Line automation, special-purpose machines, vision QC and robot cells.',
  },
  {
    icon: 'warehouse',
    name: 'Warehousing & logistics',
    text: 'AMRs, conveyor and sortation control, inventory sensing.',
  },
  {
    icon: 'sprout',
    name: 'Agriculture',
    text: 'Field robots, precision irrigation, crop and soil sensing.',
  },
  {
    icon: 'heart-pulse',
    name: 'Healthcare & life sciences',
    text: 'Lab automation, assistive devices and connected monitoring hardware.',
  },
  {
    icon: 'zap',
    name: 'Energy & utilities',
    text: 'Solar-plant robotics, smart metering and remote asset monitoring.',
  },
  {
    icon: 'radio',
    name: 'Consumer electronics',
    text: 'Connected products, wearables and smart-home devices.',
  },
  {
    icon: 'graduation-cap',
    name: 'Education & research',
    text: 'Research robots, lab rigs and custom instrumentation.',
  },
  {
    icon: 'rocket',
    name: 'Hardware startups',
    text: 'From napkin sketch to investor-ready prototype.',
  },
];

/* ── Principles ─────────────────────────────────────────────── */

export const principles: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'flask-conical',
    title: 'Prototype early',
    text: 'Real hardware on the bench beats months of slides. We build to learn, then build to last.',
  },
  {
    icon: 'layers',
    title: 'One team, full stack',
    text: 'Mechanical, electronics, firmware and software engineers working from one plan — no hand-offs between vendors.',
  },
  {
    icon: 'milestone',
    title: 'Decision gates, no lock-in',
    text: 'Clear milestones and clean exits. You decide when to proceed, pivot or stop.',
  },
  {
    icon: 'file-text',
    title: 'Documentation is a deliverable',
    text: 'Source, schematics, CAD, BOMs and test reports — everything needed to carry the work forward.',
  },
  {
    icon: 'thermometer-sun',
    title: 'Built for the field',
    text: 'Heat, dust, vibration and patchy power are design inputs, not surprises.',
  },
  {
    icon: 'video',
    title: 'Progress you can see',
    text: 'Weekly demos and written updates, so you always know where the project stands.',
  },
];

/* ── Tools marquee ──────────────────────────────────────────── */

export const tools = [
  'ROS 2',
  'micro-ROS',
  'Gazebo',
  'NVIDIA Jetson',
  'Raspberry Pi',
  'STM32',
  'ESP32',
  'Nordic nRF',
  'Zephyr RTOS',
  'FreeRTOS',
  'KiCad',
  'Altium',
  'Fusion 360',
  'SolidWorks',
  'Siemens TIA Portal',
  'CODESYS',
  'OpenCV',
  'PyTorch',
  'MATLAB / Simulink',
  'Modbus',
  'CAN bus',
  'EtherCAT',
  'OPC UA',
  'MQTT',
  'LoRaWAN',
  'React',
  'Node.js',
  'Flutter',
  'AWS',
  'Docker',
];

/* ── General FAQs ───────────────────────────────────────────── */

export const faqs: { q: string; a: string }[] = [
  {
    q: 'What does a typical first engagement look like?',
    a: 'Usually a short discovery or consulting phase of one to two weeks. We clarify requirements, map the technical risks and give you a costed plan for a proof of concept or prototype. You can stop there with a useful document in hand — or move straight ahead.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. We are happy to sign a mutual NDA before you share anything sensitive — just mention it when you get in touch.',
  },
  {
    q: 'Who owns the intellectual property?',
    a: 'Under our standard terms, the project deliverables we create for you — designs, source code, schematics and CAD — are yours. Any pre-existing tools or libraries we bring are declared upfront.',
  },
  {
    q: 'Can you work alongside our in-house team?',
    a: 'Absolutely. We can own a complete subsystem, add engineering capacity on a retainer, or review and de-risk designs your team has already built.',
  },
  {
    q: 'Do you handle manufacturing?',
    a: 'We design for manufacture from the start, prepare production files and documentation, and support pilot builds with fabrication and assembly partners. We are not a contract manufacturer — but we will get you to one, ready.',
  },
  {
    q: 'How do you price projects?',
    a: 'Discovery and consulting are usually time-based. Proofs of concept and prototypes are scoped as fixed-price milestones wherever the requirements allow, so you know the cost of each phase before it starts.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. We work remotely with weekly demos, shared repositories and video walkthroughs, and ship hardware wherever it needs to go.',
  },
];
