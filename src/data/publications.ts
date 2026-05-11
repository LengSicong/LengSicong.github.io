export type PaperLinks = {
  paper?: string;
  code?: string;
  project?: string;
  data?: string;
  model?: string;
};

export type Publication = {
  title: string;
  /** Markdown-lite authors string. Wrap **Sicong Leng** in asterisks for bold; use \* for equal-contribution markers. */
  authors: string;
  venue: string;
  year: number;
  badges?: string[];
  links?: PaperLinks;
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title: 'RynnBrain: Open Embodied Foundation Models',
    authors:
      'Ronghao Dang\\*, Jiayan Guo\\*, Bohan Hou\\*, **Sicong Leng**\\*, Kehan Li\\*, Xin Li\\*, Jiangping Liu\\*, Yunxuan Mao\\*, Zhikai Wang\\*, Yuqian Yuan\\*, Minghao Zhu\\*, Xiao Lin, Yang Bai, Qian Jiang, Yaxi Zhao, Minghua Zeng, Junlong Gao, Yuming Jiang, Jun Cen, Siteng Huang, Liuyi Wang, Wenqiao Zhang, Chengju Liu, Jianfei Yang, Shijian Lu, Deli Zhao',
    venue: 'ArXiv',
    year: 2026,
    links: {
      paper: 'https://arxiv.org/abs/2602.14979v1',
      code: 'https://github.com/alibaba-damo-academy/RynnBrain',
      project: 'https://alibaba-damo-academy.github.io/RynnBrain.github.io/',
    },
    featured: true,
  },
  {
    title:
      'MMR1: Enhancing Multimodal Reasoning with Variance-Aware Sampling and Open Resources',
    authors:
      '**Sicong Leng**\\*, Jing Wang\\*, Jiaxi Li\\*, Hao Zhang\\*, Zhiqiang Hu, Boqiang Zhang, Yuming Jiang, Hang Zhang, Xin Li, Lidong Bing, Deli Zhao, Wei Lu, Yu Rong, Aixin Sun, Shijian Lu',
    venue: 'CVPR',
    year: 2026,
    links: {
      paper: 'https://arxiv.org/abs/2509.21268',
      code: 'https://github.com/LengSicong/MMR1',
      data: 'https://huggingface.co/MMR1/datasets',
      model: 'https://huggingface.co/MMR1/models',
    },
    featured: true,
  },
  {
    title: 'RynnVLA-001: Using Human Demonstrations to Improve Robot Manipulation',
    authors:
      'Yuming Jiang, Siteng Huang, Shengke Xue, Yaxi Zhao, Jun Cen, **Sicong Leng**, Kehan Li, Jiayan Guo, Kexiang Wang, Mingxiu Chen, Fan Wang, Deli Zhao, Xin Li',
    venue: 'ICRA',
    year: 2026,
    links: {
      paper: 'https://arxiv.org/abs/2509.15212',
      code: 'https://github.com/alibaba-damo-academy/RynnVLA-001',
    },
  },
  {
    title:
      'VideoLLaMA 3: Frontier Multimodal Foundation Models for Image and Video Understanding',
    authors:
      'Boqiang Zhang\\*, Kehan Li\\*, Zesen Cheng\\*, Zhiqiang Hu\\*, Yuqian Yuan\\*, Guanzheng Chen\\*, **Sicong Leng**\\*, Yuming Jiang\\*, Hang Zhang\\*, Xin Li\\*, Peng Jin, Wenqi Zhang, Fan Wang, Lidong Bing, Deli Zhao',
    venue: 'ArXiv',
    year: 2025,
    links: {
      paper: 'https://arxiv.org/abs/2501.13106',
      code: 'https://github.com/DAMO-NLP-SG/VideoLLaMA3',
    },
    featured: true,
  },
  {
    title:
      'Breaking the Memory Barrier: Near Infinite Batch Size Scaling for Contrastive Loss',
    authors:
      'Zesen Cheng, Hang Zhang, Kehan Li, **Sicong Leng**, Zhiqiang Hu, Fei Wu, Deli Zhao, Xin Li, Lidong Bing',
    venue: 'CVPR',
    year: 2025,
    badges: ['Highlight'],
    links: {
      paper: 'https://arxiv.org/abs/2410.17243',
      code: 'https://github.com/DAMO-NLP-SG/Inf-CLIP',
    },
  },
  {
    title:
      'The Curse of Multi-Modalities: Evaluating Hallucinations of Large Multimodal Models across Language, Visual, and Audio',
    authors:
      '**Sicong Leng**\\*, Yun Xing\\*, Zesen Cheng\\*, Yang Zhou, Hang Zhang, Xin Li, Deli Zhao, Shijian Lu, Chunyan Miao, Lidong Bing',
    venue: 'NeurIPS',
    year: 2025,
    links: {
      paper: 'https://arxiv.org/abs/2410.12787',
      code: 'https://github.com/DAMO-NLP-SG/CMM',
      project: 'https://cmm-damovl.site',
    },
    featured: true,
  },
  {
    title:
      'VideoLLaMA 2: Advancing Spatial-Temporal Modeling and Audio Understanding in Video-LLMs',
    authors:
      'Zesen Cheng\\*, **Sicong Leng**\\*, Hang Zhang\\*, Yifei Xin\\*, Xin Li\\*, Guanzheng Chen, Yongxin Zhu, Wenqi Zhang, Ziyang Luo, Deli Zhao, Lidong Bing',
    venue: 'ArXiv',
    year: 2024,
    links: {
      paper: 'https://arxiv.org/abs/2406.07476',
      code: 'https://github.com/DAMO-NLP-SG/VideoLLaMA2',
    },
    featured: true,
  },
  {
    title:
      'Mitigating Object Hallucinations in Large Vision-Language Models through Visual Contrastive Decoding',
    authors:
      '**Sicong Leng**\\*, Hang Zhang\\*, Guanzheng Chen, Xin Li, Shijian Lu, Chunyan Miao, Lidong Bing',
    venue: 'CVPR',
    year: 2024,
    badges: ['Highlight'],
    links: {
      paper:
        'https://openaccess.thecvf.com/content/CVPR2024/papers/Leng_Mitigating_Object_Hallucinations_in_Large_Vision-Language_Models_through_Visual_Contrastive_CVPR_2024_paper.pdf',
      code: 'https://github.com/DAMO-NLP-SG/VCD',
    },
    featured: true,
  },
  {
    title: 'Tell2Design: A Dataset for Language-Guided Floor Plan Generation',
    authors:
      '**Sicong Leng**\\*, Yang Zhou\\*, Mohammed Haroon Dupty, Wee Sun Lee, Sam Conrad Joyce, Wei Lu',
    venue: 'ACL',
    year: 2023,
    badges: ['Area Chair Award', 'Best Paper Nomination', 'Oral'],
    links: {
      paper: 'https://arxiv.org/abs/2311.15941',
      code: 'https://github.com/LengSicong/Tell2Design',
    },
    featured: true,
  },
];

export const scholarUrl =
  'https://scholar.google.com/citations?user=xQsBP6YAAAAJ&hl=en';
