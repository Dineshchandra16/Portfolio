import {
  siCplusplus,
  siCss,
  siDocker,
  siExpress,
  siGit,
  siHtml5,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

export type SkillIcon = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

// 3×5 grid — consumed by the 3D keyboard (one icon per keycap) and, on mobile,
// by the flat list below for the static skills grid that replaces the
// hover-driven keyboard interaction. Taglines live in the i18n dictionary
// under `keyboard.taglines.<slug>`.
export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
  [siJavascript, siTypescript, siPython, siCplusplus, siHtml5],
  [siCss, siTailwindcss, siReact, siNextdotjs, siNodedotjs],
  [siExpress, siPostgresql, siMongodb, siDocker, siGit],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();
