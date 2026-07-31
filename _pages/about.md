---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 👋 About Me

Pengcheng Zhang is a senior engineer and researcher at **Tencent Big Data**. He works on **TEngine**, a general-purpose heterogeneous query execution engine powering **TEngineDB (MPP)** and **TEngine Spark (BSP)**.

He received his Ph.D. from **Shanghai Jiao Tong University**, under the supervision of [Prof. Bin Yao](https://www.cs.sjtu.edu.cn/jiaoshiml/yaobin.html).

His research focuses on query execution, distributed data processing, and vector search, and the resulting systems are deployed at scale across Tencent’s big data infrastructure, serving ad-hoc analytics, batch-processing, and vector-search workloads across Hy LLMs, social platforms, gaming, advertising, financial services, and e-commerce. His work has appeared in VLDB, SIGMOD, DSN, *The VLDB Journal*, and *IEEE Transactions on Computers*. He was selected for the **Tencent Qingyun Plan** and received the **Alibaba Outstanding Academic Collaboration Project Award**.

<div class="about-zh" lang="zh-CN">
  <p>张鹏程现任腾讯大数据高级工程师，主要从事通用异构查询执行引擎 TEngine 的研发。TEngine 为 TEngineDB（MPP）和 TEngine Spark（BSP）提供执行能力。博士毕业于上海交通大学，师从姚斌教授。</p>
  <p>他的研究聚焦查询执行、分布式数据处理和向量检索，相关创新成果已应用于腾讯大数据基础设施并实现大规模部署，承载混元大模型、社交、游戏、广告、金融和电商等场景下的交互式分析、批处理与向量检索负载。相关工作发表于 VLDB、SIGMOD、DSN、The VLDB Journal 和 IEEE Transactions on Computers。入选腾讯青云计划，曾获阿里巴巴优秀学术合作项目奖。</p>
</div>

For internship opportunities at Tencent or research collaboration, feel free to [get in touch](mailto:petrizhang@tencent.com).

# 🔬 Research Interests

- **Query Execution:** vectorized execution, JIT query compilation, and heterogeneous CPU/GPU execution
- **Distributed Data Processing:** distributed OLAP, batch processing, and query optimization
- **Vector Search:** vector indexing, approximate nearest-neighbor search, and filtered search

# 🔥 News

- *2026.06*: TEngineDB-V, an OLAP-native vector search system for large-k workloads at Tencent, was accepted by VLDB 2026.
- *2026.06*: TRIM was presented at ACM SIGMOD 2026.
- *2024.12*: UNIFY was accepted by VLDB 2025.
- *2024.10*: Gave a StarRocks × Tencent webinar on vector similarity search.

# 📝 Selected Publications

<div class="pub-legend">
* Denotes the corresponding author.<br>
^ Denotes equal contribution.
</div>

- <span class="pub-venue">VLDB 2026</span> Xufei Wu<sup>^</sup>, **Pengcheng Zhang**<sup>^</sup>, Yitong Song, Xiaobo Zhang, Anqi Liang, Kai Wang, Jijun Du, Yidi Xiong, Guangxu Cheng, Zhe Chen, Peng Chen, Guoliang Li, Xuanhe Zhou, Fan Wu.<br>
  TEngineDB-V: An OLAP-Native Vector Search System for Large-k Workloads at Tencent. *Proceedings of the VLDB Endowment*, 2026.

- <span class="pub-venue">IEEE TC 2026</span> Yaoguang Yong, Xiaoming Du, Yunong Wang, **Pengcheng Zhang**, Xuhua Ma, Bin Yao, Xudong Zheng, Linquan Jiang.<br>
  Collaborative Prediction of Cloud DRAM Failures with Rules and Machine Learning. *IEEE Transactions on Computers*, 2026.

- <span class="pub-venue">SIGMOD 2026</span> Yitong Song, **Pengcheng Zhang**, Chao Gao, Bin Yao, Kai Wang, Zongyuan Wu, Lin Qu.<br>
  TRIM: Accelerating High-Dimensional Vector Similarity Search with Enhanced Triangle-Inequality-Based Pruning. *Proceedings of the ACM on Management of Data (SIGMOD 2026)*, 2025.

- <span class="pub-venue">DSE 2025</span> Jinguo You, Yuxuan Wang, Xingrui Huang, Zhenrui Yi, Wanting Fu, Kaiqi Liu, **Pengcheng Zhang**, Bin Yao.<br>
  SOC: A Succinct Adaptive Semantic OLAP Caching. *Data Science and Engineering*, 2025.

- <span class="pub-venue">VLDB 2025</span> Anqi Liang, **Pengcheng Zhang**, Bin Yao, Zhongpu Chen, Yitong Song, Guangxu Cheng.<br>
  UNIFY: Unified Index for Range Filtered Approximate Nearest Neighbors Search. *Proceedings of the VLDB Endowment*, 18(4), 2025.

- <span class="pub-venue">VLDBJ 2023</span> **Pengcheng Zhang**, Bin Yao, Chao Gao, Bin Wu, Xiao He, Feifei Li, Yuanfei Lu, Chaoqun Zhan, Feilong Tang.<br>
  Learning-Based Query Optimization for Multi-Probe Approximate Nearest Neighbor Search. *The VLDB Journal*, 32(3), 2023.

- <span class="pub-venue">DSN 2022</span> **Pengcheng Zhang**, Yunong Wang, Xuhua Ma, Yaoheng Xu, Bin Yao, Xudong Zheng, Linquan Jiang.<br>
  Predicting DRAM-Caused Node Unavailability in Hyper-Scale Clouds. *IEEE/IFIP International Conference on Dependable Systems and Networks (DSN)*, 2022.

# 🏆 Honors & Awards

- *2024.07*, Selected for the **Tencent Qingyun Plan**.
- *2023*, **Alibaba Outstanding Academic Collaboration Project Award**, for the Alibaba Cloud ECS AIOps system.
- *2015*, **MATLAB Innovation Award**, China Undergraduate Mathematical Contest in Modeling (awarded to 1 of 25,558 teams).
- *2015*, **National First Prize**, China Undergraduate Mathematical Contest in Modeling.

# 💼 Experience

- *2024.07 – Present*, Senior Engineer, **Tencent Big Data**. Working on TEngine (CPU & GPU) and TEngine-based systems (TEngineDB & Spark).
- *2023.03 – 2024.07*, Intern, **Tencent Big Data**. Led the development of [TenANN](https://github.com/StarRocks/tenann) and contributed [vector search capabilities](https://github.com/StarRocks/starrocks/issues/46678) to the StarRocks open-source community.
- *2021.06 – 2023.03*, Intern, **Alibaba Cloud**. Worked on XBrain, an AIOps system deployed in production at Alibaba Cloud ECS. This work resulted in a first-author paper at [DSN 2022](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pMSs9lsAAAAJ&citation_for_view=pMSs9lsAAAAJ:u5HHmVD_uO8C).

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
