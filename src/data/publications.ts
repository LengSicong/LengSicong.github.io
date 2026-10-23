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
  key?: "flora" | "rynnbrain" | "vesta";
  shortTitle?: string;
  summary?: string;
  impact?: string;
  topic?: string;
  authorPreview?: string;
  contribution?: string;
  video?: { src: string; poster: string };
};

export const publications: Publication[] = [
  {
    key: "flora",
    shortTitle: "Flora",
    title: "Flora: An Open Model Suite for Scaling Robotics Data Engines",
    authors:
      '**Sicong Leng**, Yunze Man, Zhiqi Li, Jing Wang, Yuhe Zhang, Ryan Punamiya, Siddharth Patki, Kaiyuan Zheng, Zi-ang Cao, Zhiding Yu, Sifei Liu, Danfei Xu, Ben Levin, Jan Kautz, Yuke Zhu, Johan Bjorck, Linxi "Jim" Fan',
    authorPreview: "**Sicong Leng**, Yunze Man, Zhiqi Li, et al.",
    contribution: "First author",
    venue: "Technical report",
    year: 2026,
    topic: "Robotics data engines",
    impact: "Making robot learning scale with experience.",
    summary:
      "Turning human and robot video into action captions and rewards, so rich supervision can grow with the data.",
    video: {
      src: "videos/flora-release.mp4",
      poster: "images/flora-release.jpg",
    },
    links: {
      paper:
        "https://research.nvidia.com/labs/gear/flora/assets/paper/flora.pdf",
      project: "https://research.nvidia.com/labs/gear/flora/",
      model: "https://huggingface.co/collections/nvidia/flora",
    },
    featured: true,
  },
  {
    key: "rynnbrain",
    shortTitle: "RynnBrain 1.1",
    title:
      "RynnBrain 1.1: Towards More Capable and Generalizable Embodied Foundation Model",
    authors:
      "Kehan Li, Bohan Hou, Minghao Zhu, Tianyi Zhang, Zesen Cheng, Zhikai Wang, **Sicong Leng**, Xin Li, Xiao Lin, Biying Yao, Minghua Zeng, Jiangpin Liu, Ronghao Dang, Jiayan Guo, Siteng Huang, Haoyu Zhao, Heng Ping, Yaxi Zhao, Tong Zhao, Kexiang Wang, Tong Lu, Shengke Xue, Jiahao Tang, Yulei Wang, Zejing Wang, Jianwei Gao, Shijian Lu, Chengju Liu, Jianfei Yang, Mingxiu Chen, Deli Zhao",
    authorPreview:
      "Kehan Li, Bohan Hou, Minghao Zhu, …, **Sicong Leng**, et al.",
    contribution: "Core contributor",
    venue: "arXiv",
    year: 2026,
    topic: "Embodied foundation models",
    impact: "Towards robots that generalize beyond a single task.",
    summary:
      "Connecting perception, spatial reasoning, and action in a shared foundation for learning across tasks and embodiments.",
    video: {
      src: "videos/rynnbrain-release.mp4",
      poster: "images/rynnbrain-release.jpg",
    },
    links: {
      paper: "https://arxiv.org/abs/2607.17977",
      project: "https://alibaba-damo-academy.github.io/RynnBrain/",
      code: "https://github.com/alibaba-damo-academy/RynnBrain",
      model:
        "https://huggingface.co/collections/Alibaba-DAMO-Academy/rynnbrain-11",
    },
    featured: true,
  },
  {
    key: "vesta",
    shortTitle: "Vesta",
    title: "Vesta: A Generalist Embodied Reasoning Model",
    authors:
      'Johan Bjorck, Zhiqi Li, Yunze Man, Jing Wang, An-Chieh Cheng, Sifei Liu, Shihao Wang, Zhiding Yu, Abhishek Badki, Stan Birchfield, Valts Blukis, Yevgen Chebotar, Siyi Chen, **Sicong Leng**, Yu-Cheng Chou, Tianli Ding, Boyi Li, Zhengyi Luo, Hang Su, Jonathan Tremblay, Tingwu Wang, Bowen Wen, Jimmy Wu, Xianghui Xie, Hanrong Ye, Hongxu Yin, K.R. Zentner, Liangyan Gui, Yu-Xiong Wang, Yuke Zhu, Linxi "Jim" Fan, Jan Kautz',
    authorPreview:
      "Johan Bjorck, Zhiqi Li, Yunze Man, …, **Sicong Leng**, et al.",
    contribution: "Co-author",
    venue: "arXiv",
    year: 2026,
    topic: "Embodied reasoning",
    summary:
      "One generalist model for localization, navigation, spatial reasoning, and long-horizon planning. A multimodal memory connects past observations to the next action.",
    links: {
      paper: "https://arxiv.org/abs/2606.20905",
      project: "https://research.nvidia.com/labs/gear/vesta/",
    },
    featured: false,
  },
  {
    title: "RynnBrain: Open Embodied Foundation Models",
    authors:
      "Ronghao Dang\\*, Jiayan Guo\\*, Bohan Hou\\*, **Sicong Leng**\\*, Kehan Li\\*, Xin Li\\*, Jiangping Liu\\*, Yunxuan Mao\\*, Zhikai Wang\\*, Yuqian Yuan\\*, Minghao Zhu\\*, Xiao Lin, Yang Bai, Qian Jiang, Yaxi Zhao, Minghua Zeng, Junlong Gao, Yuming Jiang, Jun Cen, Siteng Huang, Liuyi Wang, Wenqiao Zhang, Chengju Liu, Jianfei Yang, Shijian Lu, Deli Zhao",
    venue: "ArXiv",
    year: 2026,
    links: {
      paper: "https://arxiv.org/abs/2602.14979v1",
      code: "https://github.com/alibaba-damo-academy/RynnBrain",
      project: "https://alibaba-damo-academy.github.io/RynnBrain.github.io/",
    },
    featured: false,
  },
  {
    title:
      "MMR1: Enhancing Multimodal Reasoning with Variance-Aware Sampling and Open Resources",
    authors:
      "**Sicong Leng**\\*, Jing Wang\\*, Jiaxi Li\\*, Hao Zhang\\*, Zhiqiang Hu, Boqiang Zhang, Yuming Jiang, Hang Zhang, Xin Li, Lidong Bing, Deli Zhao, Wei Lu, Yu Rong, Aixin Sun, Shijian Lu",
    venue: "CVPR",
    year: 2026,
    links: {
      paper: "https://arxiv.org/abs/2509.21268",
      code: "https://github.com/LengSicong/MMR1",
      data: "https://huggingface.co/MMR1/datasets",
      model: "https://huggingface.co/MMR1/models",
    },
    featured: false,
  },
  {
    title:
      "RynnVLA-001: Using Human Demonstrations to Improve Robot Manipulation",
    authors:
      "Yuming Jiang, Siteng Huang, Shengke Xue, Yaxi Zhao, Jun Cen, **Sicong Leng**, Kehan Li, Jiayan Guo, Kexiang Wang, Mingxiu Chen, Fan Wang, Deli Zhao, Xin Li",
    venue: "ICRA",
    year: 2026,
    links: {
      paper: "https://arxiv.org/abs/2509.15212",
      code: "https://github.com/alibaba-damo-academy/RynnVLA-001",
    },
  },
  {
    title:
      "VideoLLaMA 3: Frontier Multimodal Foundation Models for Image and Video Understanding",
    authors:
      "Boqiang Zhang\\*, Kehan Li\\*, Zesen Cheng\\*, Zhiqiang Hu\\*, Yuqian Yuan\\*, Guanzheng Chen\\*, **Sicong Leng**\\*, Yuming Jiang\\*, Hang Zhang\\*, Xin Li\\*, Peng Jin, Wenqi Zhang, Fan Wang, Lidong Bing, Deli Zhao",
    venue: "ArXiv",
    year: 2025,
    links: {
      paper: "https://arxiv.org/abs/2501.13106",
      code: "https://github.com/DAMO-NLP-SG/VideoLLaMA3",
    },
    featured: false,
  },
  {
    title:
      "Breaking the Memory Barrier: Near Infinite Batch Size Scaling for Contrastive Loss",
    authors:
      "Zesen Cheng, Hang Zhang, Kehan Li, **Sicong Leng**, Zhiqiang Hu, Fei Wu, Deli Zhao, Xin Li, Lidong Bing",
    venue: "CVPR",
    year: 2025,
    badges: ["Highlight"],
    links: {
      paper: "https://arxiv.org/abs/2410.17243",
      code: "https://github.com/DAMO-NLP-SG/Inf-CLIP",
    },
  },
  {
    title:
      "The Curse of Multi-Modalities: Evaluating Hallucinations of Large Multimodal Models across Language, Visual, and Audio",
    authors:
      "**Sicong Leng**\\*, Yun Xing\\*, Zesen Cheng\\*, Yang Zhou, Hang Zhang, Xin Li, Deli Zhao, Shijian Lu, Chunyan Miao, Lidong Bing",
    venue: "NeurIPS",
    year: 2025,
    links: {
      paper: "https://arxiv.org/abs/2410.12787",
      code: "https://github.com/DAMO-NLP-SG/CMM",
      project: "https://cmm-damovl.site",
    },
    featured: false,
  },
  {
    title:
      "VideoLLaMA 2: Advancing Spatial-Temporal Modeling and Audio Understanding in Video-LLMs",
    authors:
      "Zesen Cheng\\*, **Sicong Leng**\\*, Hang Zhang\\*, Yifei Xin\\*, Xin Li\\*, Guanzheng Chen, Yongxin Zhu, Wenqi Zhang, Ziyang Luo, Deli Zhao, Lidong Bing",
    venue: "ArXiv",
    year: 2024,
    links: {
      paper: "https://arxiv.org/abs/2406.07476",
      code: "https://github.com/DAMO-NLP-SG/VideoLLaMA2",
    },
    featured: false,
  },
  {
    title:
      "Mitigating Object Hallucinations in Large Vision-Language Models through Visual Contrastive Decoding",
    authors:
      "**Sicong Leng**\\*, Hang Zhang\\*, Guanzheng Chen, Xin Li, Shijian Lu, Chunyan Miao, Lidong Bing",
    venue: "CVPR",
    year: 2024,
    badges: ["Highlight"],
    links: {
      paper:
        "https://openaccess.thecvf.com/content/CVPR2024/papers/Leng_Mitigating_Object_Hallucinations_in_Large_Vision-Language_Models_through_Visual_Contrastive_CVPR_2024_paper.pdf",
      code: "https://github.com/DAMO-NLP-SG/VCD",
    },
    featured: false,
  },
  {
    title: "Tell2Design: A Dataset for Language-Guided Floor Plan Generation",
    authors:
      "**Sicong Leng**\\*, Yang Zhou\\*, Mohammed Haroon Dupty, Wee Sun Lee, Sam Conrad Joyce, Wei Lu",
    venue: "ACL",
    year: 2023,
    badges: ["Area Chair Award", "Best Paper Nomination", "Oral"],
    links: {
      paper: "https://arxiv.org/abs/2311.15941",
      code: "https://github.com/LengSicong/Tell2Design",
    },
    featured: false,
  },
];

export const scholarUrl =
  "https://scholar.google.com/citations?user=xQsBP6YAAAAJ&hl=en";
