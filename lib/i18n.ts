export type Lang = "es" | "en";

export const LANGUAGES: Lang[] = ["en"];
export const DEFAULT_LANG: Lang = "en";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).en === "string";
}

const en = (value: string): Leaf => ({ es: value, en: value });

export const DICT = {
  picker: {
    season: en("Season"),
    language: en("Language"),
  },
  seasons: {
    spring: en("Spring"),
    summer: en("Summer"),
    autumn: en("Autumn"),
    winter: en("Winter"),
  },
  nav: {
    aria: en("Sections"),
    home: en("Home"),
    stack: en("Stack"),
    project: en("Project"),
    contact: en("Contact"),
  },
  header: {
    availability: en("Open to opportunities"),
  },
  hero: {
    greeting: en("Hi, I am"),
    roleLine: en("Full Stack Developer."),
    tagline: en(
      "Building secure, scalable applications with the MERN stack, AI-integrated features, and REST API development."
    ),
    cv: en("Download Resume"),
    hire: en("Contact me"),
    scroll: en("Scroll to explore"),
    keysHint: en("- hover over the keys"),
  },
  stack: {
    title: en("Tech Stack"),
    hint: en("(hint: hover over a key)"),
    hintMobile: en("The tools I build with."),
  },
  projects: {
    kicker: en("project"),
    viewMore: en("View more"),
    openSite: en("Open project"),
    viewCode: en("View code"),
    close: en("Close"),
    stackLabel: en("Stack"),
    overview: en("Overview"),
  },
  contact: {
    kicker: en("contact"),
    title: en("Let's talk?"),
    body: en(
      "If you are looking for a fresher full stack developer who can build practical, secure, and scalable applications, I would be glad to connect."
    ),
    copyEmail: en("Copy email"),
    openMail: en("Open mail"),
    github: en("GitHub"),
    linkedin: en("LinkedIn"),
    emailToast: en("Email copied"),
    footer: en("2026 Dinesh Chandra. All rights reserved."),
  },
  keyboard: {
    taglines: {
      javascript: en("Interactive logic, dynamic UI, and full stack foundations."),
      typescript: en("JavaScript with stronger contracts and safer refactors."),
      python: en("Data, automation, machine learning, and backend scripting."),
      cplusplus: en("Core programming, problem solving, and performance thinking."),
      html5: en("Semantic structure for accessible web pages."),
      css: en("Responsive layouts, polish, and visual details."),
      tailwindcss: en("Fast, consistent styling for responsive interfaces."),
      react: en("Component-driven interfaces and stateful user flows."),
      nextdotjs: en("React framework for routing, rendering, and production apps."),
      nodedotjs: en("JavaScript on the server for APIs and backend logic."),
      express: en("REST APIs, routing, middleware, and backend services."),
      postgresql: en("Relational data, queries, and reliable persistence."),
      mongodb: en("Document data for MERN applications."),
      docker: en("Portable environments for development and deployment."),
      git: en("Version control for clean, trackable collaboration."),
      tensorflow: en("Deep learning experiments and model training."),
      numpy: en("Numerical computing for data and ML workflows."),
    },
  },
} as const satisfies Record<string, Node>;

export function translate(path: string, lang: Lang): string {
  const parts = path.split(".");
  let ref: Node = DICT as unknown as Node;
  for (const p of parts) {
    if (isLeaf(ref)) return path;
    ref = (ref as { [key: string]: Node })[p];
    if (ref === undefined) return path;
  }
  if (isLeaf(ref)) return ref[lang] ?? ref.en ?? path;
  return path;
}
