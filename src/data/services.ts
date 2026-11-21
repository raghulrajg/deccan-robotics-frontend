import type { IconName } from '@/lib/icons';

export type Illustration = 'amr' | 'pcb' | 'conveyor' | 'software';

export interface Service {
  slug: 'robotics' | 'embedded-systems' | 'industrial-automation' | 'software-development';
  name: string;
  icon: IconName;
  illustration: Illustration;
  /** SEO */
  seoTitle: string;
  seoDescription: string;
  /** Card on the home page */
  summary: string;
  highlights: string[];
  /** Service page */
  headline: string;
  lead: string;
  capabilities: { icon: IconName; title: string; text: string }[];
  projects: { title: string; text: string; timeline: string; tags: string[] }[];
  stack: { group: string; items: string[] }[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'robotics',
    name: 'Robotics',
    icon: 'bot',
    illustration: 'amr',
    seoTitle: 'Robotics Engineering: AMRs, Manipulators & ROS 2 Development',
    seoDescription:
      'Robot design, ROS 2 software, motion control, perception and system integration. Deccan Robotics takes mobile robots and manipulators from proof of concept to field-ready prototype.',
    summary: 'Mobile robots, manipulators and the autonomy that drives them.',
    highlights: [
      'Robot design & system integration',
      'ROS 2 software & simulation',
      'Motion control & kinematics',
      'Perception, SLAM & navigation',
    ],
    headline: 'Robots that leave the lab and do real work.',
    lead: 'We design, build and integrate mobile robots, manipulators and custom robotic systems, from mechanisms and motor control to ROS 2 autonomy, perception and fleet software.',
    capabilities: [
      {
        icon: 'route',
        title: 'Mobile robots (AMR / AGV)',
        text: 'Differential, omni and Ackermann platforms with mapping, navigation, docking and safety behaviours.',
      },
      {
        icon: 'grab',
        title: 'Manipulators & end-effectors',
        text: 'Arm integration, custom grippers, kinematics and trajectory planning for pick-and-place and assembly.',
      },
      {
        icon: 'code-xml',
        title: 'ROS 2 software',
        text: 'Clean, tested ROS 2 architectures: hardware drivers, behaviour trees, launch systems and CI.',
      },
      {
        icon: 'scan-eye',
        title: 'Perception & SLAM',
        text: 'LiDAR- and camera-based mapping, localisation, object detection and tracking.',
      },
      {
        icon: 'boxes',
        title: 'Simulation & digital twins',
        text: 'Gazebo and Isaac Sim environments to test behaviours and edge cases before hardware exists.',
      },
      {
        icon: 'network',
        title: 'Fleet orchestration',
        text: 'Task allocation, traffic management and operator dashboards for multi-robot operations.',
      },
    ],
    projects: [
      {
        title: 'Autonomous material transport',
        text: 'An AMR that maps a facility, navigates between stations, docks and hands off loads, with obstacle avoidance and speed zones.',
        timeline: 'POC 4–6 weeks',
        tags: ['ROS 2 Nav2', 'LiDAR SLAM', 'Docking'],
      },
      {
        title: 'Vision-guided pick-and-place cell',
        text: 'Camera-based part detection feeding a collaborative or industrial arm fitted with a custom gripper.',
        timeline: 'POC 3–5 weeks',
        tags: ['MoveIt 2', '3D vision', 'Gripper design'],
      },
      {
        title: 'Inspection robot',
        text: 'A teleoperated or semi-autonomous platform that carries cameras and sensors into places people shouldn’t go.',
        timeline: 'Prototype 8–14 weeks',
        tags: ['Teleoperation', 'Sensor payloads', 'Rugged design'],
      },
      {
        title: 'Multi-robot task scheduler',
        text: 'Assigns jobs across a robot fleet, prevents deadlocks at shared resources and exposes a live operator view.',
        timeline: 'POC 3–6 weeks',
        tags: ['Scheduling', 'Traffic control', 'Dashboards'],
      },
    ],
    stack: [
      { group: 'Middleware & simulation', items: ['ROS 2', 'micro-ROS', 'Nav2', 'MoveIt 2', 'Gazebo', 'Isaac Sim'] },
      { group: 'Perception', items: ['OpenCV', 'PCL', 'YOLO', 'Depth cameras', '2D/3D LiDAR'] },
      { group: 'Compute', items: ['NVIDIA Jetson', 'Raspberry Pi', 'x86 industrial PCs', 'STM32 co-processors'] },
      { group: 'Motion', items: ['BLDC / FOC', 'Steppers & servos', 'EtherCAT', 'CANopen'] },
    ],
    outcomes: [
      'Robot software in a clean, documented ROS 2 workspace',
      'Mechanical CAD, wiring diagrams and BOM',
      'Simulation environment for regression testing',
      'Test logs and a field-readiness report',
    ],
    faqs: [
      {
        q: 'Do you build robots from scratch or integrate existing ones?',
        a: 'Both. We integrate commercial arms and mobile bases when that is the fastest path, and design custom mechanisms when off-the-shelf hardware won’t fit the job.',
      },
      {
        q: 'Can you add autonomy to a machine we already have?',
        a: 'Often, yes. We retrofit sensors, compute and ROS 2 software onto existing vehicles and machines, starting with a short feasibility check of the platform.',
      },
      {
        q: 'Do you still work with ROS 1?',
        a: 'We can maintain and migrate ROS 1 systems, but we recommend ROS 2 for anything new. It is where the ecosystem, tooling and long-term support are.',
      },
    ],
  },
  {
    slug: 'embedded-systems',
    name: 'Embedded Systems',
    icon: 'cpu',
    illustration: 'pcb',
    seoTitle: 'Embedded Systems: PCB Design, Firmware & IoT Product Development',
    seoDescription:
      'Custom electronics and firmware: schematic and PCB design, bare-metal and RTOS firmware, sensors, connectivity, low-power design and OTA updates, from prototype to production-ready.',
    summary: 'Custom electronics and firmware that are reliable, efficient and connected.',
    highlights: [
      'Schematic & PCB design',
      'Bare-metal & RTOS firmware',
      'Sensors, motors & power',
      'BLE, Wi-Fi, LoRa & cellular IoT',
    ],
    headline: 'Electronics and firmware you can build a product on.',
    lead: 'From schematic to shipping firmware, we design custom electronics that are reliable, power-efficient and connected, and make sure they can be manufactured, tested and updated in the field.',
    capabilities: [
      {
        icon: 'circuit-board',
        title: 'Schematic & PCB design',
        text: 'Multilayer, mixed-signal and power boards with DFM, test points and assembly planned from day one.',
      },
      {
        icon: 'binary',
        title: 'Firmware development',
        text: 'Bare-metal and RTOS firmware in C, C++ and Rust: drivers, state machines, bootloaders and tests.',
      },
      {
        icon: 'activity',
        title: 'Sensors & actuators',
        text: 'IMUs, gas, environmental and industrial sensors; motor drivers, power stages and signal conditioning.',
      },
      {
        icon: 'wifi',
        title: 'Connectivity & IoT',
        text: 'BLE, Wi-Fi, LoRaWAN, cellular and field buses, with secure provisioning and cloud integration.',
      },
      {
        icon: 'battery-charging',
        title: 'Low-power design',
        text: 'Power budgets, sleep strategies and battery management for devices that last months, not days.',
      },
      {
        icon: 'refresh-cw',
        title: 'OTA updates & edge AI',
        text: 'Fail-safe over-the-air updates and on-device ML inference on microcontrollers and edge SoCs.',
      },
    ],
    projects: [
      {
        title: 'Connected sensor node',
        text: 'A battery-powered device that measures, logs and reports over BLE or LoRaWAN, with remote configuration and OTA updates.',
        timeline: 'POC 3–5 weeks',
        tags: ['Low power', 'LoRaWAN / BLE', 'OTA'],
      },
      {
        title: 'Motor controller board',
        text: 'BLDC or stepper control with FOC, current sensing, protections and a CAN or RS-485 interface.',
        timeline: 'Prototype 6–10 weeks',
        tags: ['Power electronics', 'FOC', 'CAN'],
      },
      {
        title: 'Dev-board to custom PCB',
        text: 'Turn a working Arduino, ESP32 or Raspberry Pi prototype into a compact, robust, manufacturable board.',
        timeline: 'Prototype 5–8 weeks',
        tags: ['Re-architecture', 'DFM', 'Cost-down'],
      },
      {
        title: 'Edge gateway',
        text: 'A Linux-based gateway that bridges field buses to the cloud, with local processing and remote management.',
        timeline: 'POC 4–6 weeks',
        tags: ['Embedded Linux', 'Modbus', 'MQTT'],
      },
    ],
    stack: [
      { group: 'MCUs & SoCs', items: ['STM32', 'ESP32', 'Nordic nRF52/53', 'RP2040', 'NXP i.MX'] },
      { group: 'RTOS & frameworks', items: ['Zephyr', 'FreeRTOS', 'ESP-IDF', 'Embedded Linux / Yocto', 'MicroPython'] },
      { group: 'Design & test', items: ['KiCad', 'Altium Designer', 'LTspice', 'Logic analysers', 'Oscilloscopes'] },
      { group: 'Protocols', items: ['I²C / SPI / UART', 'CAN', 'Modbus', 'BLE', 'MQTT', 'LoRaWAN'] },
    ],
    outcomes: [
      'Schematics, PCB layout, Gerbers and assembly files',
      'BOM with sourcing notes and alternates',
      'Version-controlled firmware with build instructions',
      'Bring-up and test reports',
    ],
    faqs: [
      {
        q: 'Can you take our dev-board prototype to a custom PCB?',
        a: 'Yes. It is one of the most common starting points. We re-architect for cost, size, reliability and manufacturability while keeping what already works.',
      },
      {
        q: 'Do you help with certification?',
        a: 'We design with EMC and safety requirements in mind from the first schematic, and can prepare your design and documentation for pre-compliance and certification testing with accredited labs.',
      },
      {
        q: 'Who maintains the firmware after handover?',
        a: 'Your choice. We can stay on to maintain and extend it, or hand over a clean, documented and tested codebase to your team.',
      },
    ],
  },
  {
    slug: 'industrial-automation',
    name: 'Industrial Automation',
    icon: 'factory',
    illustration: 'conveyor',
    seoTitle: 'Industrial Automation: PLC, Machine Vision, Retrofits & IIoT',
    seoDescription:
      'PLC and SCADA programming, machine retrofits, machine-vision inspection, material handling and IIoT monitoring. Automation designed for real plant conditions.',
    summary: 'Smarter lines, safer machines and data you can act on.',
    highlights: [
      'PLC, HMI & SCADA',
      'Machine retrofits & special-purpose machines',
      'Machine vision inspection',
      'IIoT monitoring & dashboards',
    ],
    headline: 'Automation that pays for itself on the shop floor.',
    lead: 'We help manufacturers automate repetitive work, modernise existing machines and turn machine data into decisions, with PLC, vision, robotics and IIoT solutions built for real plant conditions.',
    capabilities: [
      {
        icon: 'sliders-horizontal',
        title: 'PLC, HMI & SCADA',
        text: 'Control logic, operator screens and supervisory systems that are structured, commented and maintainable.',
      },
      {
        icon: 'wrench',
        title: 'Retrofits & special-purpose machines',
        text: 'Upgrade legacy machines and design custom machines for processes nobody sells a solution for.',
      },
      {
        icon: 'scan-line',
        title: 'Machine vision inspection',
        text: 'Camera-based defect detection, measurement and verification at line speed, with full traceability.',
      },
      {
        icon: 'package',
        title: 'Material handling',
        text: 'Conveyors, sorting, pick-and-place and palletising, integrated with your existing line.',
      },
      {
        icon: 'gauge',
        title: 'IIoT & machine monitoring',
        text: 'Retrofit sensors, collect machine data and visualise OEE, downtime and energy use in real time.',
      },
      {
        icon: 'clipboard-check',
        title: 'Test rigs & fixtures',
        text: 'Automated end-of-line testers, jigs and data logging for consistent, auditable quality.',
      },
    ],
    projects: [
      {
        title: 'Vision-based quality inspection',
        text: 'Detect defects, verify assembly and reject bad parts automatically, with images logged for traceability.',
        timeline: 'POC 3–5 weeks',
        tags: ['Machine vision', 'Reject logic', 'Traceability'],
      },
      {
        title: 'Legacy machine retrofit',
        text: 'Replace relay logic or obsolete controllers with a modern PLC, HMI and properly designed safety circuit.',
        timeline: 'Project 6–12 weeks',
        tags: ['PLC migration', 'HMI', 'Safety'],
      },
      {
        title: 'Machine monitoring (IIoT)',
        text: 'Non-invasive sensors and a dashboard that shows OEE, downtime reasons and energy, without touching the PLC.',
        timeline: 'Pilot 3–6 weeks',
        tags: ['Retrofit sensors', 'OEE', 'Dashboards'],
      },
      {
        title: 'End-of-line test station',
        text: 'Automated functional testing with pass/fail logic, barcode traceability and reports your QA team can trust.',
        timeline: 'Prototype 6–10 weeks',
        tags: ['Test automation', 'Fixtures', 'Data logging'],
      },
    ],
    stack: [
      { group: 'Controllers', items: ['Siemens S7 / TIA Portal', 'Allen-Bradley', 'Mitsubishi', 'Delta', 'CODESYS'] },
      { group: 'HMI & SCADA', items: ['WinCC', 'Ignition', 'Node-RED', 'Grafana'] },
      { group: 'Vision', items: ['Industrial cameras', 'OpenCV', 'Deep-learning inspection', 'Barcode / OCR'] },
      { group: 'Protocols', items: ['Modbus TCP/RTU', 'OPC UA', 'PROFINET', 'EtherNet/IP', 'MQTT'] },
    ],
    outcomes: [
      'Commented PLC and HMI source, plus I/O lists',
      'Electrical drawings and panel documentation',
      'Commissioning checklist and FAT/SAT records',
      'Operator and maintenance guides',
    ],
    faqs: [
      {
        q: 'Can you work with the PLC brand we already use?',
        a: 'Yes. We work across the major PLC platforms and follow your plant’s standards for code structure, naming and documentation.',
      },
      {
        q: 'Will automation disrupt our production?',
        a: 'We plan installation around your schedule, bench-test and simulate logic before we touch the line, and commission in stages to keep downtime to a minimum.',
      },
      {
        q: 'How do we know automation is worth the investment?',
        a: 'We start with a short assessment that estimates payback from cycle time, labour, scrap and downtime, so you can decide before committing to a build.',
      },
    ],
  },
  {
    slug: 'software-development',
    name: 'Software Development',
    icon: 'code-xml',
    illustration: 'software',
    seoTitle: 'Software Development: Web & Mobile Apps, IoT Platforms & AI',
    seoDescription:
      'Custom software for connected products and industry: web and mobile apps, IoT and cloud platforms, dashboards, integrations and AI, built by engineers who understand the hardware underneath.',
    summary: 'Web, mobile and cloud software that connects your machines to your business.',
    highlights: [
      'Web apps & dashboards',
      'Android & iOS apps',
      'IoT & cloud platforms',
      'AI & computer vision',
    ],
    headline: 'Software that connects machines to your business.',
    lead: 'We build the web apps, mobile apps, cloud platforms and AI that sit on top of your hardware, so devices, data and people work as one system. Engineered by a team that understands the hardware underneath.',
    capabilities: [
      {
        icon: 'layout-dashboard',
        title: 'Web apps & dashboards',
        text: 'Operator dashboards, customer portals and internal tools that are responsive, secure and fast.',
      },
      {
        icon: 'smartphone',
        title: 'Mobile apps',
        text: 'Android and iOS apps that set up, control and monitor your devices over Bluetooth, Wi-Fi or the cloud.',
      },
      {
        icon: 'cloud-cog',
        title: 'IoT & cloud platforms',
        text: 'Device provisioning, telemetry pipelines, OTA updates and APIs that scale from ten devices to ten thousand.',
      },
      {
        icon: 'brain-circuit',
        title: 'AI & computer vision',
        text: 'Detection, inspection and prediction models trained on your data and deployed at the edge or in the cloud.',
      },
      {
        icon: 'plug-zap',
        title: 'Integrations & APIs',
        text: 'Connect machines and devices to ERP, MES, CRM and third-party services through clean, documented APIs.',
      },
      {
        icon: 'git-merge',
        title: 'Testing, DevOps & support',
        text: 'Automated tests, CI/CD, monitoring and long-term maintenance, so the software keeps working after launch.',
      },
    ],
    projects: [
      {
        title: 'IoT monitoring platform',
        text: 'Collect data from devices or machines, store it securely and show live dashboards and alerts to operators and customers.',
        timeline: 'MVP 6–10 weeks',
        tags: ['MQTT', 'Time-series data', 'Dashboards'],
      },
      {
        title: 'Companion mobile app',
        text: 'An Android and iOS app that pairs with your device over Bluetooth, sets it up and shows its data, with cloud sync.',
        timeline: 'MVP 6–10 weeks',
        tags: ['BLE', 'Flutter', 'Cloud sync'],
      },
      {
        title: 'Vision AI for quality checks',
        text: 'Train and deploy a model that spots defects or counts parts from camera images, on an edge device or in the cloud.',
        timeline: 'POC 3–5 weeks',
        tags: ['PyTorch', 'OpenCV', 'Edge deployment'],
      },
      {
        title: 'Factory systems integration',
        text: 'Connect machines to ERP or MES so production data, orders and maintenance flow automatically. No more spreadsheets.',
        timeline: 'Project 4–8 weeks',
        tags: ['OPC UA', 'REST APIs', 'ERP / MES'],
      },
    ],
    stack: [
      { group: 'Web & backend', items: ['React', 'Next.js', 'Astro', 'Node.js', 'Python / FastAPI', 'PostgreSQL'] },
      { group: 'Mobile', items: ['Flutter', 'React Native', 'Kotlin', 'Swift'] },
      { group: 'Cloud & IoT', items: ['AWS', 'Azure', 'Docker', 'MQTT', 'InfluxDB', 'Grafana'] },
      { group: 'AI & data', items: ['PyTorch', 'OpenCV', 'TensorRT', 'ONNX', 'pandas'] },
    ],
    outcomes: [
      'Source code in your own repository, with documentation',
      'Deployed, monitored application and infrastructure as code',
      'Automated test suite and CI/CD pipeline',
      'Admin and user guides, plus a handover session',
    ],
    faqs: [
      {
        q: 'Do you only build software for hardware products?',
        a: 'No. Our sweet spot is software that talks to devices and machines, but we also build standalone web apps, mobile apps, internal tools and integrations.',
      },
      {
        q: 'Who owns the code?',
        a: 'You do, under our standard terms. Everything lives in your repository from day one, so you are never locked in.',
      },
      {
        q: 'Can you maintain the software after launch?',
        a: 'Yes. We offer support and maintenance retainers covering updates, monitoring, security patches and new features.',
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
