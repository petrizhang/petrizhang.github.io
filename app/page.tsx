const scholarUrl =
  "https://scholar.google.com/citations?user=pMSs9lsAAAAJ&hl=en&oi=ao";

const publications = [
  {
    year: "2026",
    title:
      "CLIP: Lightweight Cosine-Law-Based Inverted-List Pruning for IVF-Based Vector Search",
    authors: (
      <>
        Y. Song, S. Lu, X. Zhou, <strong>Pengcheng Zhang</strong>, and J. Xu
      </>
    ),
    venue: "arXiv preprint, 2026",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2606.29968" }],
  },
  {
    year: "2026",
    title:
      "Collaborative Prediction of Cloud DRAM Failures with Rules and Machine Learning",
    authors: (
      <>
        Y. Yong, X. Du, Y. Wang, <strong>Pengcheng Zhang</strong>, X. Ma, B.
        Yao, X. Zheng, and L. Jiang
      </>
    ),
    venue: "IEEE Transactions on Computers, 2026",
    links: [{ label: "Scholar", href: scholarUrl }],
  },
  {
    year: "2025",
    title:
      "TRIM: Accelerating High-Dimensional Vector Similarity Search with Enhanced Triangle-Inequality-Based Pruning",
    authors: (
      <>
        Yitong Song, <strong>Pengcheng Zhang</strong>, Chao Gao, Bin Yao, Kai
        Wang, Zongyuan Wu, and Lin Qu
      </>
    ),
    venue: "Proceedings of the ACM on Management of Data (SIGMOD 2026), 2025",
    links: [
      { label: "Paper", href: "https://doi.org/10.1145/3769838" },
      { label: "Code", href: "https://github.com/petrizhang/TRIM" },
    ],
  },
  {
    year: "2025",
    title: "SOC: A Succinct Adaptive Semantic OLAP Caching",
    authors: (
      <>
        J. You, Y. Wang, X. Huang, Z. Yi, W. Fu, K. Liu,{" "}
        <strong>Pengcheng Zhang</strong>, and B. Yao
      </>
    ),
    venue: "Data Science and Engineering, 2025",
    links: [{ label: "Scholar", href: scholarUrl }],
  },
  {
    year: "2025",
    title:
      "UNIFY: Unified Index for Range Filtered Approximate Nearest Neighbors Search",
    authors: (
      <>
        Anqi Liang, <strong>Pengcheng Zhang</strong>, Bin Yao, Zhongpu Chen,
        Yitong Song, and Guangxu Cheng
      </>
    ),
    venue: "Proceedings of the VLDB Endowment, 18(4), 2025",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2412.02448" },
      { label: "DOI", href: "https://doi.org/10.14778/3717755.3717770" },
    ],
  },
  {
    year: "2023",
    title:
      "Learning-Based Query Optimization for Multi-Probe Approximate Nearest Neighbor Search",
    authors: (
      <>
        <strong>Pengcheng Zhang</strong>, Bin Yao, Chao Gao, Bin Wu, Xiao He,
        Feifei Li, Yuanfei Lu, Chaoqun Zhan, and Feilong Tang
      </>
    ),
    venue: "The VLDB Journal, 32(3), 2023",
    links: [
      {
        label: "Paper",
        href: "https://doi.org/10.1007/s00778-022-00762-0",
      },
      { label: "Code", href: "https://github.com/petrizhang/leqat" },
    ],
  },
  {
    year: "2022",
    title: "Predicting DRAM-Caused Node Unavailability in Hyper-Scale Clouds",
    authors: (
      <>
        <strong>Pengcheng Zhang</strong>, Yunong Wang, Xuhua Ma, Yaoheng Xu,
        Bin Yao, Xudong Zheng, and Linquan Jiang
      </>
    ),
    venue: "IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), 2022",
    links: [{ label: "Scholar", href: scholarUrl }],
  },
] as const;

const projects = [
  {
    name: "TRIM",
    href: "https://github.com/petrizhang/TRIM",
    description:
      "A header-only C++ library with Python bindings for accelerating high-dimensional vector search through enhanced triangle-inequality pruning.",
    tags: "C++ · Python · Vector Search",
  },
  {
    name: "LEQAT",
    href: "https://github.com/petrizhang/leqat",
    description:
      "Reference implementation for learning-based query optimization in multi-probe approximate nearest-neighbor search.",
    tags: "Python · ANN · Query Optimization",
  },
  {
    name: "ANN Papers",
    href: "https://github.com/petrizhang/ANN-Papers",
    description:
      "A curated reading list covering approximate nearest-neighbor search and modern vector indexing.",
    tags: "Reading List · Vector Index",
  },
  {
    name: "Crisp",
    href: "https://github.com/petrizhang/crisp",
    description:
      "A compile-time Lisp interpreter implemented as a header-only library with C++ templates.",
    tags: "C++ · Lisp · Programming Languages",
  },
] as const;

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#about-me">
        Skip to content
      </a>

      <header className="masthead">
        <nav className="nav-inner" aria-label="Primary navigation">
          <a className="home-link" href="#about-me">
            Homepage
          </a>
          <div className="nav-links">
            <a href="#about-me">About Me</a>
            <a href="#education">Education</a>
            <a href="#publications">Publications</a>
            <a href="#talks">Talks</a>
            <a href="#projects">Projects</a>
          </div>
        </nav>
      </header>

      <main id="main" className="site-shell">
        <aside className="profile-sidebar" aria-label="Profile">
          <div className="profile-card">
            <img
              className="avatar"
              src="/pengcheng-zhang.png"
              alt="Pengcheng Zhang"
              width="460"
              height="460"
            />
            <div className="profile-copy">
              <h1 className="profile-name">Pengcheng Zhang</h1>
              <p className="profile-affiliation">Tencent Big Data</p>
              <p className="profile-bio">
                Researcher &amp; Engineer
                <br />
                Vector Databases · OLAP
              </p>
            </div>
          </div>

          <ul className="profile-links">
            <li>
              <span aria-hidden="true">⌖</span> Shanghai, China
            </li>
            <li>
              <ExternalLink href="mailto:petrizhang@tencent.com">
                <span aria-hidden="true">✉</span> Email
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://github.com/petrizhang">
                <span aria-hidden="true">◖</span> GitHub
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={scholarUrl}>
                <span aria-hidden="true">◎</span> Google Scholar
              </ExternalLink>
            </li>
          </ul>
        </aside>

        <article className="page-content">
          <section id="about-me" className="page-section first-section">
            <p>
              I am a researcher and engineer at <strong>Tencent Big Data</strong>
              , working on data-intensive systems. My research interests lie at
              the intersection of vector databases, approximate nearest-neighbor
              search, OLAP systems, and multi-modal lakehouses.
            </p>
            <p>
              I received my Ph.D. from Shanghai Jiao Tong University. I enjoy
              building practical systems that turn research ideas into efficient
              and usable infrastructure.
            </p>

            <h2>Research Areas</h2>
            <ul>
              <li>
                <strong>Vector Databases:</strong> approximate nearest-neighbor
                search, filtered search, and high-dimensional pruning
              </li>
              <li>
                <strong>OLAP Systems:</strong> query optimization, vectorized
                execution, JIT compilation, and semantic caching
              </li>
              <li>
                <strong>Multi-modal Lakehouse:</strong> unified systems for
                structured and unstructured data analytics
              </li>
            </ul>
          </section>

          <section id="education" className="page-section">
            <h2>Education &amp; Experience</h2>
            <ul className="timeline-list">
              <li>
                <span className="timeline-date">Present</span>
                <span>
                  Researcher and Engineer, <strong>Tencent Big Data</strong>,
                  Shanghai, China
                </span>
              </li>
              <li>
                <span className="timeline-date">Ph.D.</span>
                <span>
                  <strong>Shanghai Jiao Tong University</strong>
                </span>
              </li>
            </ul>
          </section>

          <section id="publications" className="page-section">
            <div className="section-heading-row">
              <h2>Publications</h2>
              <ExternalLink href={scholarUrl} className="section-link">
                Google Scholar ↗
              </ExternalLink>
            </div>
            <ol className="publication-list">
              {publications.map((publication) => (
                <li
                  className="publication"
                  key={`${publication.year}-${publication.title}`}
                >
                  <div className="publication-year">{publication.year}</div>
                  <div>
                    <h3>{publication.title}</h3>
                    <p className="authors">{publication.authors}</p>
                    <p className="venue">
                      {publication.venue}
                      <span className="paper-links">
                        {publication.links.map((link) => (
                          <ExternalLink href={link.href} key={link.label}>
                            [{link.label}]
                          </ExternalLink>
                        ))}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="talks" className="page-section">
            <h2>Talks</h2>
            <ul className="talk-list">
              <li>
                <strong>Introducing Vector Similarity Search</strong>, StarRocks
                × Tencent webinar, October 2024.{" "}
                <ExternalLink href="https://celerdata.com/events">
                  [Event]
                </ExternalLink>
              </li>
            </ul>
          </section>

          <section id="projects" className="page-section">
            <h2>Selected Projects</h2>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project" key={project.name}>
                  <h3>
                    <ExternalLink href={project.href}>
                      {project.name}
                    </ExternalLink>
                  </h3>
                  <p>{project.description}</p>
                  <p className="project-tags">{project.tags}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="page-section contact-section">
            <h2>Contact</h2>
            <p>
              If you are interested in my research or potential collaborations,
              feel free to{" "}
              <ExternalLink href="mailto:petrizhang@tencent.com">
                get in touch
              </ExternalLink>
              .
            </p>
          </section>
        </article>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Pengcheng Zhang · Built with the{" "}
          <ExternalLink href="https://github.com/RayeRen/acad-homepage.github.io">
            AcadHomepage
          </ExternalLink>{" "}
          layout.
        </p>
      </footer>
    </>
  );
}
