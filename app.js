/**
 * Salah Elbakri - Portfolio Application Logic
 * Dynamic rendering, category filters, interactive modals, theme management
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("Portfolio data not found.");
    return;
  }

  // --- SVG Icons Map ---
  const icons = {
    bot: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
    eye: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    "bar-chart": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`,
    database: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    zap: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    cpu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
    github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    external: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`,
    download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    copy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`
  };

  // --- Theme Controller ---
  const themeToggle = document.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", storedTheme);
  updateThemeIcon(storedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    themeToggle.innerHTML = theme === "dark" ? icons.sun : icons.moon;
    themeToggle.setAttribute("title", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
  }

  // --- Render Stats ---
  const statsContainer = document.getElementById("statsContainer");
  if (statsContainer && data.stats) {
    statsContainer.innerHTML = data.stats
      .map(
        (s) => `
        <div class="stat-item">
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `
      )
      .join("");
  }

  // --- Render Projects & Filter Logic ---
  const projectsGrid = document.getElementById("projectsGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderProjects(category = "all") {
    if (!projectsGrid) return;
    const filtered =
      category === "all"
        ? data.projects
        : data.projects.filter((p) => p.category === category);

    projectsGrid.innerHTML = filtered
      .map(
        (project) => `
        <article class="project-card" data-id="${project.id}">
          <div class="project-card-header">
            <span class="project-badge">${project.badge}</span>
            <span class="project-org">${project.organization}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.summary}</p>
          
          <div class="tags-wrap">
            ${project.tags.slice(0, 4).map((t) => `<span class="tag-badge">${t}</span>`).join("")}
            ${project.tags.length > 4 ? `<span class="tag-badge">+${project.tags.length - 4}</span>` : ""}
          </div>

          <div class="project-card-footer">
            <button class="card-link deep-dive-btn" data-id="${project.id}">
              <span>View Case Study</span>
              ${icons.external}
            </button>
            ${
              project.links && project.links.tableau
                ? `<a href="${project.links.tableau}" target="_blank" rel="noopener noreferrer" class="card-link" style="color: var(--accent-cyan);">
                    <span>Tableau</span>
                    ${icons.external}
                   </a>`
                : ""
            }
          </div>
        </article>
      `
      )
      .join("");

    // Attach click handlers to "View Case Study"
    document.querySelectorAll(".deep-dive-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        openProjectModal(id);
      });
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });

  renderProjects("all");

  // --- Project Modal Controller ---
  const modalOverlay = document.getElementById("projectModal");
  const modalClose = document.getElementById("modalClose");
  const modalContent = document.getElementById("modalContent");

  function openProjectModal(projectId) {
    const project = data.projects.find((p) => p.id === projectId);
    if (!project) return;

    modalContent.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
        <span class="project-badge">${project.badge}</span>
        <span style="font-size: 0.85rem; color: var(--text-muted);">${project.period} • ${project.organization}</span>
      </div>
      <h2 style="font-size: 1.65rem; font-weight: 800; line-height: 1.3; margin-bottom: 1rem; color: var(--text-primary);">${project.title}</h2>
      
      <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 1.5rem;">
        ${project.overview}
      </p>

      <div class="highlight-box" style="margin-bottom: 1.5rem;">
        <strong>Key Result & Impact:</strong> ${project.impact}
      </div>

      <h4 class="modal-section-title">Key Engineering Challenges</h4>
      <ul class="modal-list">
        ${project.challenges.map((c) => `<li>${c}</li>`).join("")}
      </ul>

      <h4 class="modal-section-title">Architectural Solutions & Implementation</h4>
      <ul class="modal-list">
        ${project.solutions.map((s) => `<li>${s}</li>`).join("")}
      </ul>

      <h4 class="modal-section-title">Technologies & Methodologies</h4>
      <div class="tags-wrap" style="margin-top: 0.75rem;">
        ${project.tags.map((t) => `<span class="tag-badge" style="font-size: 0.825rem; padding: 0.3rem 0.65rem;">${t}</span>`).join("")}
      </div>

      <div style="display: flex; gap: 1rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle); flex-wrap: wrap;">
        ${
          project.links && project.links.tableau
            ? `<a href="${project.links.tableau}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                <span>Open Interactive Dashboard</span>
                ${icons.external}
               </a>`
            : ""
        }
        ${
          project.links && project.links.github
            ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                ${icons.github}
                <span>GitHub Repository</span>
               </a>`
            : ""
        }
        <button class="btn btn-outline btn-sm copy-email-btn">
          ${icons.mail}
          <span>Discuss this project</span>
        </button>
      </div>
    `;

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";

    // Bind copy email inside modal if present
    const modalDiscuss = modalContent.querySelector(".copy-email-btn");
    if (modalDiscuss) {
      modalDiscuss.addEventListener("click", () => copyEmailToClipboard());
    }
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });

  // --- Render Skills Matrix ---
  const skillsContainer = document.getElementById("skillsContainer");
  if (skillsContainer && data.skills) {
    const categories = [
      { key: "aiMl", title: "AI, Machine Learning & LLMs", icon: icons.bot },
      { key: "programming", title: "Languages & Frameworks", icon: icons.cpu },
      { key: "dataCloud", title: "Data Systems, BI & Cloud", icon: icons.database },
      { key: "engineering", title: "Power & Systems Engineering", icon: icons.zap }
    ];

    skillsContainer.innerHTML = categories
      .map((cat) => {
        const list = data.skills[cat.key] || [];
        return `
        <div class="skill-category-card">
          <div class="skill-category-title">
            <span style="color: var(--accent-cyan); display: flex;">${cat.icon}</span>
            <span>${cat.title}</span>
          </div>
          <div class="skill-pills">
            ${list.map((skill) => `<span class="skill-pill">${skill}</span>`).join("")}
          </div>
        </div>
      `;
      })
      .join("");
  }

  // --- Render Experience & Education ---
  const experienceContainer = document.getElementById("experienceContainer");
  if (experienceContainer && data.experience) {
    experienceContainer.innerHTML = data.experience
      .map(
        (exp) => `
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-card">
            <div class="timeline-header">
              <h3 class="timeline-role">${exp.role}</h3>
              <span class="timeline-period">${exp.period}</span>
            </div>
            <div class="timeline-company">${exp.company} • <span style="font-weight: 400; color: var(--text-muted);">${exp.location}</span></div>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.85rem;">${exp.description}</p>
            <ul class="timeline-bullets">
              ${exp.bullets.map((b) => `<li>${b}</li>`).join("")}
            </ul>
          </div>
        </div>
      `
      )
      .join("");
  }

  const educationContainer = document.getElementById("educationContainer");
  if (educationContainer && data.education) {
    educationContainer.innerHTML = data.education
      .map(
        (edu) => `
        <div class="timeline-item">
          <div class="timeline-marker" style="border-color: var(--accent-cyan);"></div>
          <div class="timeline-card">
            <div class="timeline-header">
              <h3 class="timeline-role">${edu.degree}</h3>
              <span class="timeline-period">${edu.period}</span>
            </div>
            <div class="timeline-company">${edu.institution} • <span style="font-weight: 400; color: var(--text-muted);">${edu.location}</span></div>
            <p style="font-size: 0.925rem; color: var(--text-secondary);">${edu.details}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  // --- Render Community & Leadership ---
  const communityContainer = document.getElementById("communityContainer");
  if (communityContainer && data.community) {
    communityContainer.innerHTML = data.community
      .map(
        (item) => `
        <div class="community-card">
          <div style="font-size: 0.825rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; margin-bottom: 0.4rem;">${item.role}</div>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">${item.title}</h3>
          <p style="font-size: 0.925rem; color: var(--text-secondary); line-height: 1.6;">${item.description}</p>
        </div>
      `
      )
      .join("");
  }

  // --- Copy Email to Clipboard & Toast ---
  const toast = document.getElementById("toast");
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  function copyEmailToClipboard() {
    const email = data.profile.email;
    navigator.clipboard
      .writeText(email)
      .then(() => {
        showToast(`Copied ${email} to clipboard!`);
      })
      .catch(() => {
        showToast(`Email: ${email}`);
      });
  }

  document.querySelectorAll(".copy-email-action").forEach((btn) => {
    btn.addEventListener("click", copyEmailToClipboard);
  });

  // --- Smooth Scroll Spy for Active Navigation ---
  const navSections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 120;

    navSections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
