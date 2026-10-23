# October 2026 homepage refresh

The homepage highlights Flora and RynnBrain 1.1, in that order, with Vesta and earlier selected work in the compact publication list. The publication archive retains full author lists; Google Scholar is the complete bibliography.

## Content and sources

- Biography: fourth-year PhD at NTU; current robotics research at NVIDIA GEAR.
- Experience titles and dates follow [LinkedIn](https://www.linkedin.com/in/sicong-leng-203516179/): NVIDIA GEAR, Robotic Research, May 2026–Present; Alibaba DAMO Academy, Embodied Intern, Aug 2023–May 2026; SUTD, Research Officer, Sep 2021–Aug 2023.
- [Google Scholar](https://scholar.google.com/citations?user=xQsBP6YAAAAJ&hl=en) and [X](https://x.com/Leon_L_S_C) provide publication and release references.
- [Flora](https://research.nvidia.com/labs/gear/flora/) is a technical report. Its official page supplies the paper, model links, authors and release video.
- [RynnBrain 1.1](https://arxiv.org/abs/2607.17977) credits Sicong as a core contributor. The [project page](https://alibaba-damo-academy.github.io/RynnBrain/) supplies the release video and model links.
- [Vesta](https://arxiv.org/abs/2606.20905) appears in the compact list, with its [project page](https://research.nvidia.com/labs/gear/vesta/).
- [Tell2Design](https://arxiv.org/abs/2311.15941) grounds the SUTD description in language-guided floor plan generation.

Project descriptions pair concrete capabilities with their research purpose. Generalization goals are framed as research directions rather than additional benchmark claims. Full author order is retained in disclosures and the archive.

## Design and implementation

The design draws on Flora's light release theme: warm paper, restrained green, Inter, IBM Plex Mono, and thin dividers. The portrait and Jim Fan quote are retained. LinkedIn leads the social links.

Main reading text uses 15–19px type, project outlooks use 20–21px, and links and credits use 12–14px. The desktop layout is 1160px wide; research introductions and experience entries stack on mobile.

The official release videos are converted to 720p H.264/AAC MP4 with fast-start metadata, retaining their full duration and audio:

- Flora: `https://research.nvidia.com/labs/gear/flora/assets/video/flora.mp4?v=4`; poster from the same official page.
- RynnBrain 1.1: `https://media.githubusercontent.com/media/alibaba-damo-academy/RynnBrain.github.io/main/assets1.1/RynnBrain1.1-intro.mov`; poster from the introduction's title frame.

Native video controls use inline playback, no preload, and no autoplay. Author and news disclosures use native `details`; no client framework is needed. Internal routes and assets use `withBase` to support both the production root and isolated review subpaths. Canonical URLs point to production.

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`. Production builds run without `SITE_BASE` and deploy at `https://lengsicong.github.io/`. Review builds can set `SITE_BASE=/unique-review-slug/`.
