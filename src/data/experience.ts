export type WorkItem = {
  role: string;
  org: string;
  orgUrl?: string;
  period: string;
  description?: string;
  supervisor?: string;
  supervisorUrl?: string;
};

export const work: WorkItem[] = [
  {
    role: 'Research Intern',
    org: 'Alibaba DAMO Academy — Embodied Intelligence Team',
    period: '2024 – Present',
    description:
      'Research on embodied foundation models and multimodal reasoning, contributing to RynnBrain, RynnVLA-001, MMR1, and the VideoLLaMA series.',
  },
  {
    role: 'Research Assistant',
    org: 'StatNLP Lab, Singapore University of Technology and Design',
    orgUrl: 'https://statnlp-research.github.io/',
    period: 'Aug 2021 – Aug 2023',
    description: 'Research on NLP and multi-modal learning.',
    supervisor: 'Prof. Lu Wei',
    supervisorUrl: 'https://istd.sutd.edu.sg/people/faculty/lu-wei/',
  },
];
