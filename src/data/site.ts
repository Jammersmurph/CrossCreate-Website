export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface Feature {
  readonly index: string;
  readonly icon: 'gear' | 'link' | 'world';
  readonly title: string;
  readonly body: string;
  readonly tag: string;
}

export interface Step {
  readonly title: string;
  readonly body: string;
}

export interface Edition {
  readonly id: 'java' | 'bedrock';
  readonly eyebrow: string;
  readonly name: string;
  readonly badge: string;
  readonly pill: string;
  readonly steps: readonly Step[];
  readonly status: 'ready' | 'pending';
  readonly statusLabel: string;
}

export interface Faq {
  readonly question: string;
  readonly answer: string;
}

export const site = {
  name: 'CrossCreate',
  url: 'https://crosscreate.org',
  hostname: 'mc.CrossCreate.org',
  description:
    'Create’s kinetic engineering meets Java and Bedrock crossplay. A shared Minecraft survival world where the only limit is the next idea.',
  repository: 'https://github.com/Jammersmurph/CrossCreate-Website',
  /**
   * Single source of truth for the brand mark. Swap public/logo.svg
   * (or point this at another file) to use an official logo.
   * Set wordmark to false if the replacement already includes the name.
   */
  logo: {
    src: '/logo.svg',
    alt: 'CrossCreate',
    wordmark: true,
  },
  status: 'Assembly in progress',
  version: { minecraft: '1.21.1', loader: 'NeoForge', create: '6.0.10' },
} as const;

export const navLinks: readonly NavLink[] = [
  { label: 'The machine', href: '#machine' },
  { label: 'Assembly', href: '#join' },
  { label: 'Notes', href: '#notes' },
];

export const tickerItems: readonly string[] = [
  'JAVA × BEDROCK',
  'CREATE 6.0.10',
  'MINECRAFT 1.21.1',
  'NEOFORGE',
  'ONE SHARED WORLD',
  'ASSEMBLY IN PROGRESS',
];

export const features: readonly Feature[] = [
  {
    index: '01',
    icon: 'gear',
    title: 'Kinetic building',
    body: 'Shafts, gearboxes, belts and bearings. Wire a workshop together and watch ore become motion, motion become machines.',
    tag: 'Powered by Create 6.0.10',
  },
  {
    index: '02',
    icon: 'link',
    title: 'Cross-edition link',
    body: 'Java and Bedrock, meshed like two gears. One shared world, whichever platform your friends logged in from.',
    tag: 'Crossplay link — in testing',
  },
  {
    index: '03',
    icon: 'world',
    title: 'Shared survival',
    body: 'Claim a patch of wilderness, lay your first rail, and build a factory worth visiting. The world is the blueprint.',
    tag: 'Survival, engineered together',
  },
];

export const specs: readonly { value: string; label: string }[] = [
  { value: site.version.minecraft, label: 'Minecraft' },
  { value: site.version.create, label: 'Create' },
  { value: '2', label: 'Editions' },
  { value: '∞', label: 'Contraptions' },
];

export const editions: readonly Edition[] = [
  {
    id: 'java',
    eyebrow: 'The original workshop',
    name: 'Java Edition',
    badge: 'J',
    pill: 'Modded',
    status: 'ready',
    statusLabel: 'Kit in preparation',
    steps: [
      {
        title: 'Assemble the client',
        body: 'Minecraft 1.21.1, NeoForge and Create 6.0.10. The exact mod list will ship with the official pack.',
      },
      {
        title: 'Install the pack',
        body: 'A one-click modpack and setup notes are being prepared for launch.',
      },
      {
        title: 'Connect to the workshop',
        body: 'Point Java Edition at mc.CrossCreate.org when the gate opens.',
      },
    ],
  },
  {
    id: 'bedrock',
    eyebrow: 'A new way to create',
    name: 'Bedrock Edition',
    badge: 'B',
    pill: 'Crossplay',
    status: 'pending',
    statusLabel: 'Link pending',
    steps: [
      {
        title: 'Wait for the linkage',
        body: 'Crossplay support is experimental. We’re testing a custom Create bridge for Bedrock.',
      },
      {
        title: 'Install the bridge pack',
        body: 'Supported Bedrock versions, resource packs and connection details are still being finalized.',
      },
      {
        title: 'Bring a controller or keyboard',
        body: 'Device support will be documented per platform, including console limits.',
      },
    ],
  },
];

export const faqs: readonly Faq[] = [
  {
    question: 'What exactly is CrossCreate?',
    answer:
      'A Minecraft survival server project bringing together the Java Create mod and Java–Bedrock crossplay. The goal: one world where friends on different editions can build together.',
  },
  {
    question: 'Can I join right now?',
    answer:
      'Not publicly yet. The server and crossplay integration are in development. The planned hostname is mc.CrossCreate.org; confirmed ports, access requirements and setup instructions will appear here before public launch.',
  },
  {
    question: 'Will I need to install mods?',
    answer:
      'Java players should expect a matching modded client. The current server uses Minecraft 1.21.1, NeoForge and Create 6.0.10. Bedrock setup and resource-pack requirements will be documented after compatibility testing. There is no official client download available here yet.',
  },
  {
    question: 'Will every Create feature work on Bedrock?',
    answer:
      'That’s what we’re exploring. This is an experimental integration, and rendering, interactions and supported features may differ between editions. We’ll publish tested capabilities and known limitations rather than promise full parity.',
  },
  {
    question: 'Can I play on console or mobile?',
    answer:
      'Device support is still being tested. Some consoles restrict adding custom servers, so Bedrock support does not automatically mean every console can connect. A device-specific guide will be provided once the supported setup is confirmed.',
  },
  {
    question: 'Where will the setup details be published?',
    answer:
      'Here, on this site, and in the public GitHub repository. Launch notes will cover the modpack, supported Bedrock versions, connection addresses and known limitations.',
  },
];
