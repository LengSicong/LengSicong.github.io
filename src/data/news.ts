export type NewsItem = {
  date: string; // YYYY-MM
  /** Markdown-lite body. Inline links are supported via [text](url). */
  body: string;
  highlight?: boolean;
};

export const news: NewsItem[] = [
  {
    date: '2026-05',
    body: 'New survey out: [World Model for Robot Learning: A Comprehensive Survey](https://arxiv.org/abs/2605.00080) — a policy-centric look at world models for robot learning.',
  },
  {
    date: '2026-04',
    body: 'New survey out: [Visual Generation in the New Era: An Evolution from Atomic Mapping to Agentic World Modeling](https://arxiv.org/abs/2604.28185) — a roadmap from atomic mapping to agentic world modeling.',
  },
  {
    date: '2026-02',
    body: '[MMR1](https://arxiv.org/abs/2509.21268) and [LongVT](https://arxiv.org/abs/2511.20785) accepted by **CVPR 2026**.',
    highlight: true,
  },
  {
    date: '2026-02',
    body: '[RynnBrain](https://alibaba-damo-academy.github.io/RynnBrain.github.io/) is released — open embodied foundation models for robotics.',
  },
  {
    date: '2026-01',
    body: '[RynnVLA-001](https://github.com/alibaba-damo-academy/RynnVLA-001) accepted by **ICRA 2026**.',
  },
  {
    date: '2025-09',
    body: '[MMR1](https://arxiv.org/abs/2509.21268) is out — variance-aware sampling for multimodal reasoning, with open-sourced [code](https://github.com/LengSicong/MMR1), [data](https://huggingface.co/MMR1/datasets), and [model](https://huggingface.co/MMR1/models).',
  },
  {
    date: '2025-09',
    body: '[CMM](https://arxiv.org/abs/2410.12787) and [Better MoE](https://arxiv.org/abs/2505.22323) accepted by **NeurIPS 2025** — Better MoE as **oral**.',
    highlight: true,
  },
  {
    date: '2025-08',
    body: '[RynnVLA-001](https://github.com/alibaba-damo-academy/RynnVLA-001) is released — a vision-language-action model pretrained on human demonstrations for robot manipulation.',
  },
  {
    date: '2025-06',
    body: '[Inf-CLIP](https://arxiv.org/abs/2410.17243) received the **CVPR 2025 Highlight**.',
    highlight: true,
  },
  {
    date: '2025-03',
    body: '[MMR1](https://github.com/LengSicong/MMR1) has been released — initial code drop for our multimodal reasoning research.',
  },
  {
    date: '2025-03',
    body: '[Inf-CLIP](https://arxiv.org/abs/2410.17243) and [AGLA](https://arxiv.org/abs/2406.12718) accepted by **CVPR 2025**.',
  },
  {
    date: '2025-01',
    body: '[VideoLLaMA 3](https://arxiv.org/abs/2501.13106) has been released.',
  },
  {
    date: '2024-10',
    body: 'Inf-CLIP has been released! [Project](https://github.com/DAMO-NLP-SG/Inf-CLIP).',
  },
  {
    date: '2024-10',
    body: 'CMM has been released! [Project](https://cmm-damovl.site).',
  },
  {
    date: '2024-09',
    body: '1 paper accepted by **NeurIPS 2024**!',
  },
  {
    date: '2024-06',
    body: 'VideoLLaMA 2 has been released! [Paper & code](https://github.com/DAMO-NLP-SG/VideoLLaMA2).',
  },
  {
    date: '2024-04',
    body: 'VCD received the **CVPR 2024 Highlight**.',
    highlight: true,
  },
  {
    date: '2024-03',
    body: '3 papers accepted by **CVPR 2024**!',
  },
  {
    date: '2023-11',
    body: 'VCD has been released! [Paper & code](https://github.com/DAMO-NLP-SG/VCD).',
  },
  {
    date: '2023-08',
    body: 'Presented our work at the Nvidia Internal Technical Sharing.',
  },
  {
    date: '2023-08',
    body: 'Presented our work at the AAAI 2023 Summer Symposium Series.',
  },
  {
    date: '2023-07',
    body: 'Tell2Design received the **Area Chair Award** and **Best Paper Nomination** at **ACL 2023**!',
    highlight: true,
  },
  {
    date: '2023-06',
    body: '[Tell2Design](https://arxiv.org/abs/2311.15941) accepted by **ACL 2023** as a long oral paper.',
  },
];
