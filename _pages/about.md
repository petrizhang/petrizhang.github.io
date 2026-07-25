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

I am an engineer and researcher at **Tencent Big Data**.

I received my Ph.D. degree from **Shanghai Jiao Tong University** under the supervision of [Prof. Bin Yao](https://www.cs.sjtu.edu.cn/jiaoshiml/yaobin.html). I enjoy turning research ideas into efficient, practical infrastructure. Currently, my work primarily focuses on **TEngine**, a general-purpose heterogeneous execution engine at Tencent. I also work on building distributed data-processing systems powered by TEngine, including the OLAP system **TEngineDB**, the batch-processing system **Spark**, the vector database **TEngineDB-V**, and the unified query gateway **SuperSQL**.

If you are interested in my research or potential collaborations, feel free to [get in touch](mailto:petrizhang@tencent.com).

# 🔬 Research Interests

- **Modern Execution Engine:** TEngine, vectorized execution, JIT compilation, and pipelined execution
- **Large-Scale Data Processing Systems:** distributed OLAP, batch processing, query optimization, and semantic caching
- **Vector Databases:** approximate nearest-neighbor search, filtered search, and high-dimensional pruning

# 🔥 News

- *2026.06*: CLIP, a lightweight cosine-law-based pruning method for IVF-based vector search, is available on arXiv.
- *2026.06*: TRIM was presented at ACM SIGMOD 2026.
- *2024.12*: UNIFY was accepted by VLDB 2025.
- *2024.10*: Gave a StarRocks × Tencent webinar on vector similarity search.

# 📝 Selected Publications

- **CLIP: Lightweight Cosine-Law-Based Inverted-List Pruning for IVF-Based Vector Search**<br>
  Y. Song, S. Lu, X. Zhou, **Pengcheng Zhang**, J. Xu. *arXiv preprint*, 2026.

- **Collaborative Prediction of Cloud DRAM Failures with Rules and Machine Learning**<br>
  Y. Yong, X. Du, Y. Wang, **Pengcheng Zhang**, X. Ma, B. Yao, X. Zheng, L. Jiang. *IEEE Transactions on Computers*, 2026.

- **TRIM: Accelerating High-Dimensional Vector Similarity Search with Enhanced Triangle-Inequality-Based Pruning**<br>
  Yitong Song, **Pengcheng Zhang**, Chao Gao, Bin Yao, Kai Wang, Zongyuan Wu, Lin Qu. *Proceedings of the ACM on Management of Data (SIGMOD 2026)*, 2025.

- **SOC: A Succinct Adaptive Semantic OLAP Caching**<br>
  J. You, Y. Wang, X. Huang, Z. Yi, W. Fu, K. Liu, **Pengcheng Zhang**, B. Yao. *Data Science and Engineering*, 2025.

- **UNIFY: Unified Index for Range Filtered Approximate Nearest Neighbors Search**<br>
  Anqi Liang, **Pengcheng Zhang**, Bin Yao, Zhongpu Chen, Yitong Song, Guangxu Cheng. *Proceedings of the VLDB Endowment*, 18(4), 2025.

- **Learning-Based Query Optimization for Multi-Probe Approximate Nearest Neighbor Search**<br>
  **Pengcheng Zhang**, Bin Yao, Chao Gao, Bin Wu, Xiao He, Feifei Li, Yuanfei Lu, Chaoqun Zhan, Feilong Tang. *The VLDB Journal*, 32(3), 2023.

- **Predicting DRAM-Caused Node Unavailability in Hyper-Scale Clouds**<br>
  **Pengcheng Zhang**, Yunong Wang, Xuhua Ma, Yaoheng Xu, Bin Yao, Xudong Zheng, Linquan Jiang. *IEEE/IFIP International Conference on Dependable Systems and Networks (DSN)*, 2022.

# 💼 Experience

- *Present*, Engineer and Researcher, **Tencent Big Data**, Shanghai, China.
- *2023.03 – 2024.06*, Intern, **Tencent**, OLAP & HSAP. Worked on Tencent's next-generation multimodal data retrieval and analytics system, focusing on the unified HSAP architecture, vector indexing and search, and OLAP execution engine design.
- *2021.06 – 2023.03*, Intern, **Alibaba Cloud**, ECS Reliability Modeling. Worked on intelligent operations for Alibaba Cloud ECS; this work resulted in a first-author paper at [DSN 2022](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pMSs9lsAAAAJ&citation_for_view=pMSs9lsAAAAJ:u5HHmVD_uO8C).

# 🎓 Education

- *2017.09 – 2024.06*, **Shanghai Jiao Tong University**, Ph.D. in Computer Science and Engineering.
- *2013.09 – 2017.06*, **Xidian University**, Bachelor's degree in Information Security (Experimental Program).
