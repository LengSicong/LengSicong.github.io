export type Supervisor = {
  name: string;
  url?: string;
};

export type WorkItem = {
  role: string;
  org: string;
  orgUrl?: string;
  period: string;
  description?: string;
  supervisors?: Supervisor[];
};

export const work: WorkItem[] = [
  {
    role: "Robotic Research",
    org: "NVIDIA GEAR",
    orgUrl: "https://research.nvidia.com/labs/gear/",
    period: "May 2026 – Present",
    description:
      "Building GR00T through robotics data engines and embodied reasoning.",
  },
  {
    role: "Embodied Intern",
    org: "Alibaba DAMO Academy",
    period: "Aug 2023 – May 2026",
    description:
      "Multimodal models and robot learning: VideoLLaMA, MMR1, RynnVLA, and RynnBrain. Alibaba Talent Program.",
    supervisors: [
      { name: "Xin Li", url: "https://lixin4ever.github.io/" },
      { name: "Deli Zhao", url: "https://zhaodeli.github.io/" },
    ],
  },
  {
    role: "Research Officer",
    org: "StatNLP Lab, SUTD",
    period: "Sep 2021 – Aug 2023",
    description:
      "NLP and multimodal learning, including language-guided floor plan generation with Tell2Design.",
    supervisors: [{ name: "Prof. Lu Wei", url: "https://luwei.name/" }],
  },
];
