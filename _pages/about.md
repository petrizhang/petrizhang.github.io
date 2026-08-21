---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

# 👋 About Me

Pengcheng Zhang is a senior engineer and researcher at **Tencent Big Data**. His work focuses on efficient, scalable data infrastructure for multimodal AI workloads on heterogeneous hardware. Currently, he works on **TEngine**, a general-purpose, high-performance execution engine that powers **SuperSQL (MPP & BSP)** across CPUs, GPUs, and NPUs.

He was a core contributor to the **SuperSQL TPC-DS project**, which set [a new 100TB TPC-DS world record](https://www.tpc.org/5017) at **653.6M QphDS**.

He received his Ph.D. from **Shanghai Jiao Tong University**, under the supervision of [Prof. Bin Yao](https://www.cs.sjtu.edu.cn/jiaoshiml/yaobin.html).

His research spans **query execution, distributed data processing, and vector search**, with the resulting systems deployed at scale within Tencent, serving ad-hoc analytics, batch-processing, and vector-search workloads across Hy LLMs, social platforms, gaming, advertising, financial services, and e-commerce. His work has appeared in VLDB, SIGMOD, DSN, *The VLDB Journal*, and *IEEE Transactions on Computers*. He was selected for the **Tencent Qingyun Plan** and received the **Alibaba Outstanding Academic Collaboration Project Award**.

<div class="about-zh" lang="zh-CN">
  <p>张鹏程聚焦新一代多模态 AI 负载的异构计算需求，致力于构建统一、高效、可扩展的数据计算基础设施。现任腾讯大数据高级工程师，从事通用异构计算引擎 TEngine 的研发。TEngine 通过软硬件协同优化，为 SuperSQL（MPP 与 BSP）提供跨 CPU、GPU 和 NPU 的统一高性能执行能力。</p>
  <p>他是 SuperSQL TPC-DS 打榜项目的核心贡献者；该项目以 653.6M QphDS 创造了 TPC-DS 100TB 新世界纪录。</p>
  <p>博士毕业于上海交通大学，师从姚斌教授。</p>
  <p>他的研究涵盖查询执行、分布式数据处理和向量检索，相关创新成果已应用于腾讯大数据基础设施并实现大规模部署，承载混元大模型、社交、游戏、广告、金融和电商等场景下的交互式分析、批处理与向量检索负载。相关工作发表于 VLDB、SIGMOD、DSN、The VLDB Journal 和 IEEE Transactions on Computers。入选腾讯青云计划，曾获阿里巴巴优秀学术合作项目奖。</p>
</div>

For internship opportunities at Tencent or research collaboration, feel free to [get in touch](mailto:petrizhang@tencent.com).

# 🔥 News

- *2026.08*: SuperSQL set [a new 100TB TPC-DS world record](https://www.tpc.org/5017) at **653.6M QphDS**, delivering approximately **10× the previous best performance** and **5.6× better price-performance**.
- *2026.06*: TEngineDB-V, an OLAP-native vector search system for large-k workloads at Tencent, was accepted by VLDB 2026.
- *2026.06*: TRIM was presented at ACM SIGMOD 2026.
- *2024.12*: UNIFY was accepted by VLDB 2025.
- *2024.10*: Gave a StarRocks × Tencent webinar on vector similarity search.

# 🚀 Selected Projects

<article id="parqdb-project" class="project-feature" aria-labelledby="parqdb-project-title">
  <div class="project-feature__content">
    <div class="project-feature__meta">
      <span class="project-feature__status"><span aria-hidden="true"></span>Open source</span>
      <span>Creator &amp; maintainer · 2026</span>
    </div>

    <a class="project-feature__logo" href="https://github.com/parqdb-io/parqdb" target="_blank" rel="noopener" aria-label="ParqDB on GitHub">
      <img src="{{ '/assets/images/projects/parqdb/logo.svg' | relative_url }}" alt="ParqDB">
    </a>

    <a class="project-feature__repo-stats" href="https://github.com/parqdb-io/parqdb/stargazers" target="_blank" rel="noopener" aria-label="See people who starred ParqDB on GitHub">
      <img src="https://img.shields.io/github/stars/parqdb-io/parqdb?style=for-the-badge&amp;logo=github&amp;label=Stars&amp;labelColor=0B2A68&amp;color=6E2BF2" alt="ParqDB GitHub stars">
    </a>

    <h2 id="parqdb-project-title" class="project-feature__title">Billion-scale vector search, built on open data.</h2>
    <p class="project-feature__description">
      An embedded vector database for larger-than-memory search and analytics on multimodal data—powered entirely by Parquet storage and Arrow-native execution.
    </p>

    <div class="project-feature__metrics" aria-label="ParqDB benchmark highlights">
      <div><strong>1B</strong><span>vectors</span></div>
      <div><strong>63.05 ms</strong><span>median latency</span></div>
      <div><strong>4 GB</strong><span>memory</span></div>
    </div>

    <ul class="project-feature__tags" aria-label="ParqDB technologies">
      <li>Parquet</li>
      <li>Arrow</li>
      <li>Rust</li>
      <li>Python</li>
      <li>WebAssembly</li>
    </ul>

    <div class="project-feature__actions">
      <a class="project-feature__button project-feature__button--primary" href="https://search.parqdb.io/" target="_blank" rel="noopener">
        Try live demo <span aria-hidden="true">↗</span>
      </a>
      <a class="project-feature__button" href="https://github.com/parqdb-io/parqdb" target="_blank" rel="noopener">
        <i class="fab fa-github" aria-hidden="true"></i> GitHub
      </a>
    </div>
  </div>

  <a class="project-feature__demo" href="https://search.parqdb.io/" target="_blank" rel="noopener" aria-label="Open the ParqDB live browser demo">
    <div class="project-feature__browser-bar" aria-hidden="true">
      <span></span><span></span><span></span>
      <div>search.parqdb.io</div>
    </div>
    <img src="{{ '/assets/images/projects/parqdb/browser-demo.gif' | relative_url }}" alt="ParqDB searching a published Wikipedia vector index directly in the browser" loading="lazy" decoding="async">
    <div class="project-feature__demo-caption">
      <span><i aria-hidden="true"></i> Interactive browser demo</span>
      <span>WASM · HTTP Range · no query server</span>
    </div>
  </a>
</article>

# 📝 Selected Publications

<div class="pub-legend">
* Denotes the corresponding author.<br>
^ Denotes equal contribution.
</div>

- <span class="pub-venue">VLDB 2026</span> Xufei Wu<sup>^</sup>, **Pengcheng Zhang**<sup>^</sup>, Yitong Song, Xiaobo Zhang, Anqi Liang, Kai Wang, Jijun Du, Yidi Xiong, Guangxu Cheng, Zhe Chen, Peng Chen, Guoliang Li, Xuanhe Zhou, Fan Wu.<br>
  TEngineDB-V: An OLAP-Native Vector Search System for Large-k Workloads at Tencent. *Proceedings of the VLDB Endowment*, to appear, 2026.
  <a class="pub-resource" href="https://arxiv.org/abs/2608.00650" target="_blank" rel="noopener"><i class="ai ai-arxiv ai-fw" aria-hidden="true"></i>arXiv</a><a class="pub-resource" href="https://github.com/petrizhang/relify" target="_blank" rel="noopener"><i class="fas fa-link fa-fw" aria-hidden="true"></i>Code</a>

- <span class="pub-venue">IEEE TC 2026</span> Yaoguang Yong, Xiaoming Du, Yunong Wang, **Pengcheng Zhang**, Xuhua Ma, Bin Yao, Xudong Zheng, Linquan Jiang.<br>
  Collaborative Prediction of Cloud DRAM Failures with Rules and Machine Learning. *IEEE Transactions on Computers*, 75(4): 1622–1635, 2026.
  <a class="pub-resource" href="https://doi.org/10.1109/TC.2026.3655008" target="_blank" rel="noopener"><i class="fas fa-link fa-fw" aria-hidden="true"></i>Link</a>

- <span class="pub-venue">SIGMOD 2026</span> Yitong Song, **Pengcheng Zhang**, Chao Gao, Bin Yao, Kai Wang, Zongyuan Wu, Lin Qu.<br>
  TRIM: Accelerating High-Dimensional Vector Similarity Search with Enhanced Triangle-Inequality-Based Pruning. *Proceedings of the ACM on Management of Data*, 3(6): 1–26, 2025.
  <a class="pub-resource" href="{{ '/files/papers/SIGMOD26-TRIM.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fas fa-file-pdf fa-fw" aria-hidden="true"></i>Pdf</a><a class="pub-resource" href="https://github.com/petrizhang/TRIM" target="_blank" rel="noopener"><i class="fas fa-link fa-fw" aria-hidden="true"></i>Code</a>

- <span class="pub-venue">DSE 2025</span> Jinguo You, Yuxuan Wang, Xingrui Huang, Zhenrui Yi, Wanting Fu, Kaiqi Liu, **Pengcheng Zhang**, Bin Yao.<br>
  SOC: A Succinct Adaptive Semantic OLAP Caching. *Data Science and Engineering*, 10(4): 621–638, 2025.
  <a class="pub-resource" href="{{ '/files/papers/DSE25-SOC.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fas fa-file-pdf fa-fw" aria-hidden="true"></i>Pdf</a><a class="pub-resource" href="https://github.com/bizard-lab/soc_cache" target="_blank" rel="noopener"><i class="fas fa-link fa-fw" aria-hidden="true"></i>Code</a>

- <span class="pub-venue">VLDB 2025</span> Anqi Liang, **Pengcheng Zhang**, Bin Yao, Zhongpu Chen, Yitong Song, Guangxu Cheng.<br>
  UNIFY: Unified Index for Range Filtered Approximate Nearest Neighbors Search. *Proceedings of the VLDB Endowment*, 18(4): 1118–1130, 2024.
  <a class="pub-resource" href="{{ '/files/papers/VLDB25-UNIFY.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fas fa-file-pdf fa-fw" aria-hidden="true"></i>Pdf</a><a class="pub-resource" href="https://github.com/sjtu-dbgroup/UNIFY" target="_blank" rel="noopener"><i class="fas fa-link fa-fw" aria-hidden="true"></i>Code</a>

- <span class="pub-venue">VLDBJ 2023</span> **Pengcheng Zhang**, Bin Yao, Chao Gao, Bin Wu, Xiao He, Feifei Li, Yuanfei Lu, Chaoqun Zhan, Feilong Tang.<br>
  Learning-Based Query Optimization for Multi-Probe Approximate Nearest Neighbor Search. *The VLDB Journal*, 32(3): 623–645, 2023.
  <a class="pub-resource" href="https://doi.org/10.1007/s00778-022-00762-0" target="_blank" rel="noopener"><i class="fas fa-link fa-fw" aria-hidden="true"></i>Link</a>

- <span class="pub-venue">DSN 2022</span> **Pengcheng Zhang**, Yunong Wang, Xuhua Ma, Yaoheng Xu, Bin Yao, Xudong Zheng, Linquan Jiang.<br>
  Predicting DRAM-Caused Node Unavailability in Hyper-Scale Clouds. *IEEE/IFIP International Conference on Dependable Systems and Networks*, 275–286, 2022.
  <a class="pub-resource" href="{{ '/files/papers/DSN22-XBrainM.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fas fa-file-pdf fa-fw" aria-hidden="true"></i>Pdf</a>

# 🏆 Honors & Awards

- *2024.07*, Selected for the **Tencent Qingyun Plan**.
- *2023*, **Alibaba Outstanding Academic Collaboration Project Award**, for the Alibaba Cloud ECS AIOps system.
- *2015*, **MATLAB Innovation Award**, China Undergraduate Mathematical Contest in Modeling (awarded to 1 of 25,558 teams).
- *2015*, **National First Prize**, China Undergraduate Mathematical Contest in Modeling.

# 💼 Experience

- *2024.07 – Present*, Senior Engineer, **Tencent Big Data**. Working on **TEngine**, a general-purpose, high-performance execution engine that powers **SuperSQL (MPP & BSP)** across CPUs, GPUs, and NPUs.
- *2023.03 – 2024.07*, Intern, **Tencent Big Data**. Led the development of [TenANN](https://github.com/StarRocks/tenann) and contributed [vector search capabilities](https://github.com/StarRocks/starrocks/issues/46678) to [StarRocks](https://github.com/StarRocks/starrocks), a leading open-source OLAP database widely used by Airbnb, Alibaba, Tencent, and Xiaohongshu.
- *2021.06 – 2023.03*, Intern, **Alibaba Cloud**. Worked on **XBrainM**, an AIOps system that has run in the Alibaba Cloud ECS production environment for years, supporting intelligent operations across more than one million nodes and reducing DRAM-caused node unavailability by 60%. This work resulted in a first-author paper at [DSN 2022](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pMSs9lsAAAAJ&citation_for_view=pMSs9lsAAAAJ:u5HHmVD_uO8C).

# 🎓 Education

- *2017.09 – 2024.06*, **Shanghai Jiao Tong University**, Ph.D. in Computer Science and Engineering.
- *2013.09 – 2017.06*, **Xidian University**, Bachelor's degree in Information Security (Experimental Program).

# 📜 Selected Patents

- <span class="pub-venue">授权</span> 王雨农、**张鹏程**、杜小明、马旭华。<br>
  特征提取方法、装置、电子设备及存储介质。中国发明专利 CN116127292B，2026（申请号 CN202211543083.X）。

- <span class="pub-venue">申请</span> **张鹏程**、程广旭、蒋杰、刘煜宏、陈鹏、罗韩梅、杜佶峻、赵裕隆。<br>
  数据查询方法及其相关产品。中国发明专利申请 CN202411255378.6（公开号 CN121636545A），2026。

- <span class="pub-venue">申请</span> **张鹏程**、程广旭、陈奕安。<br>
  数据处理方法、装置、设备、存储介质和产品。中国发明专利申请 CN202410039737.8（公开号 CN120296039A），2025。

- <span class="pub-venue">授权</span> 徐姚亨、姚斌、**张鹏程**、唐飞龙、沈耀、郑文立。<br>
  一种基于Spark的大规模高维数据近似近邻查询系统和方法。中国发明专利 CN114329094B，2024（申请号 CN202111672312.3）。

- <span class="pub-venue">授权</span> 陆元飞、魏闯先、楼仁杰、吴斌、姚斌、**张鹏程**、高超。<br>
  一种向量检索方法及装置。中国发明专利 CN113449132B，2022（申请号 CN202110991057.2）。

# 🌍 Visitor Map

<div class="visitor-map-card">
  <div class="visitor-map-visual">
    <div
      id="visitor-world-map"
      class="visitor-world-map"
      aria-label="All-time visitor distribution by country or region"
    ></div>
    <div id="visitor-map-selection" class="visitor-map-selection" aria-live="polite"></div>
  </div>

  <aside class="visitor-map-stats" aria-label="All-time visitor statistics">
    <div class="visitor-map-stats__eyebrow">ALL TIME</div>
    <div class="visitor-map-stats__totals">
      <div>
        <strong id="visitor-total">0</strong>
        <span>Visitors</span>
      </div>
      <div>
        <strong id="visitor-country-total">0</strong>
        <span>Countries / Regions</span>
      </div>
    </div>
    <div class="visitor-map-stats__heading">Top countries / regions</div>
    <ol id="visitor-top-countries" class="visitor-map-stats__list">
      <li class="visitor-map-stats__empty">No visitor data yet</li>
    </ol>
  </aside>
</div>
