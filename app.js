/**
 * Wenuri Sanjana - Portfolio Main Interactive Application
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNavigation();
  initActiveNavSpy();
  initBackToTop();
  initProjects();
  initCertifications();
  initVolunteerGallery();
  initBlogs();
  initContactForm();
  initScrollAnimations();
});

/* ----------------------------------------------------
   1. Theme Toggle (Dark / Light Mode)
---------------------------------------------------- */
function initThemeToggle() {
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  const html = document.documentElement;
  
  // Check local storage or system preference
  const savedTheme = localStorage.getItem('ws-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  
  updateThemeIcons();

  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      html.classList.toggle('dark');
      const isDark = html.classList.contains('dark');
      localStorage.setItem('ws-theme', isDark ? 'dark' : 'light');
      updateThemeIcons();
    });
  });

  function updateThemeIcons() {
    const isDark = html.classList.contains('dark');
    document.querySelectorAll('.theme-icon-sun').forEach(el => {
      el.style.display = isDark ? 'inline-block' : 'none';
    });
    document.querySelectorAll('.theme-icon-moon').forEach(el => {
      el.style.display = isDark ? 'none' : 'inline-block';
    });
  }
}

/* ----------------------------------------------------
   2. Responsive Mobile Navigation
---------------------------------------------------- */
function initMobileNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileMenuBtn || !mobileMenu) return;

  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ----------------------------------------------------
   3. Active Navigation Spy on Scroll
---------------------------------------------------- */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    desktopLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });

    mobileLinks.forEach(link => {
      link.classList.remove('text-[#2563EB]', 'font-semibold');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('text-[#2563EB]', 'font-semibold');
      }
    });
  });
}

/* ----------------------------------------------------
   4. Back To Top Button
---------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ----------------------------------------------------
   5. Interactive Projects Gallery & Modal View
---------------------------------------------------- */
function initProjects() {
  const container = document.getElementById('projectsContainer');
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('projectModalClose');
  const modalContent = document.getElementById('projectModalBody');

  if (!container || typeof PROJECTS_DATA === 'undefined') return;

  let currentCategory = 'All Projects';

  function renderProjects() {
    container.innerHTML = '';
    
    const filtered = currentCategory === 'All Projects'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(p => p.categories.includes(currentCategory));

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-gray-500">
          <p class="text-lg">No projects found in this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'portfolio-card bg-white dark:bg-[#1E293B] rounded-2xl border border-[#2563EB]/15 dark:border-[#38BDF8]/20 overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300';
      
      const techBadges = project.technologies.slice(0, 4).map(tech => 
        `<span class="text-xs px-2.5 py-1 rounded-md bg-[#2563EB]/10 dark:bg-[#38BDF8]/15 text-[#2563EB] dark:text-[#38BDF8] font-medium font-mono">${tech}</span>`
      ).join('');

      const categoryLabels = project.categories.join(' · ');

      card.innerHTML = `
        <div class="img-zoom-container relative aspect-[16/10] bg-gray-100 dark:bg-[#334155] overflow-hidden border-b border-[#2563EB]/10 dark:border-[#38BDF8]/15">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover object-top" loading="lazy" onerror="this.src='images/projects/Learning-Management-System.png'">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span class="text-white text-xs font-medium tracking-wide uppercase bg-[#2563EB] px-2.5 py-1 rounded-full">${project.tagline}</span>
          </div>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="text-xs text-[#2563EB] dark:text-[#38BDF8] font-semibold tracking-wider uppercase mb-1">
              ${categoryLabels}
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
              ${project.title}
            </h3>
            <p class="text-sm text-gray-600 dark:text-[#94A3B8] line-clamp-3 mb-4 leading-relaxed">
              ${project.subtitle}
            </p>
            <div class="flex flex-wrap gap-1.5 mb-6">
              ${techBadges}
              ${project.technologies.length > 4 ? `<span class="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-[#334155] text-gray-500 font-mono">+${project.technologies.length - 4}</span>` : ''}
            </div>
          </div>
          <div class="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2">
            <button class="view-project-btn text-sm font-semibold text-[#2563EB] dark:text-[#38BDF8] hover:underline flex items-center gap-1.5" data-id="${project.id}">
              <span>View Details</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
            <div class="flex items-center gap-2">
              ${project.sourceCode ? `
                <a href="${project.sourceCode}" target="_blank" rel="noopener noreferrer" class="p-2 text-gray-500 hover:text-[#2563EB] dark:hover:text-[#38BDF8] transition-colors" title="Source Code">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              ` : ''}
              ${project.liveDemo ? `
                <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#2563EB]/10 hover:bg-[#2563EB] text-[#2563EB] hover:text-white dark:bg-[#38BDF8]/15 dark:hover:bg-[#38BDF8] dark:text-[#38BDF8] dark:hover:text-[#0F172A] border border-[#2563EB]/20 dark:border-[#38BDF8]/25 transition-all shadow-sm" title="Live Preview">
                  Live Demo ↗
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    // Attach click handlers to "View Details"
    container.querySelectorAll('.view-project-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const proj = PROJECTS_DATA.find(p => p.id === id);
        if (proj) openProjectModal(proj);
      });
    });
  }

  function openProjectModal(proj) {
    if (!modal || !modalContent) return;
    
    modalContent.innerHTML = `
      <div class="relative">
        <div class="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6 max-h-[380px]">
          <img src="${proj.image}" alt="${proj.title}" class="w-full h-auto object-cover" onerror="this.src='images/projects/Learning-Management-System.png'">
        </div>
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xs px-2.5 py-1 rounded-full bg-[#2563EB]/15 text-[#2563EB] dark:text-[#38BDF8] font-semibold tracking-wide uppercase">
            ${proj.categories.join(' · ')}
          </span>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          ${proj.title}
        </h2>
        <p class="text-base font-medium text-[#2563EB] dark:text-[#38BDF8] mb-4">
          ${proj.tagline}
        </p>
        
        <div class="border-t border-b border-gray-100 dark:border-gray-800 py-4 my-4">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Overview</h4>
          <p class="text-gray-700 dark:text-[#94A3B8] leading-relaxed mb-4">
            ${proj.description}
          </p>
          ${proj.objectives ? `
            <h4 class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Project Objective</h4>
            <p class="text-gray-700 dark:text-[#94A3B8] leading-relaxed mb-4">
              ${proj.objectives}
            </p>
          ` : ''}
        </div>

        <div class="mb-6">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Key Features</h4>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-[#94A3B8]">
            ${proj.keyFeatures.map(feat => `
              <li class="flex items-start gap-2">
                <svg class="w-4 h-4 text-[#2563EB] dark:text-[#38BDF8] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                <span>${feat}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="mb-6">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Technologies Used</h4>
          <div class="flex flex-wrap gap-2">
            ${proj.technologies.map(t => `
              <span class="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-[#334155] text-gray-800 dark:text-[#E7F0EE] font-mono border border-gray-200 dark:border-gray-700">${t}</span>
            `).join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
          ${proj.liveDemo ? `
            <a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn-primary-gradient px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
              <span>View Live Project</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          ` : ''}
          ${proj.sourceCode ? `
            <a href="${proj.sourceCode}" target="_blank" rel="noopener noreferrer" class="btn-secondary-outline px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>GitHub Repository</span>
            </a>
          ` : ''}
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeModal();
  });

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderProjects();
    });
  });

  renderProjects();
}

/* ----------------------------------------------------
   6. Searchable & Filterable Certifications Gallery
---------------------------------------------------- */
function initCertifications() {
  const container = document.getElementById('certsContainer');
  const filterButtons = document.querySelectorAll('.cert-filter-btn');
  const searchInput = document.getElementById('certSearchInput');
  const modal = document.getElementById('certModal');
  const modalClose = document.getElementById('certModalClose');
  const modalContent = document.getElementById('certModalBody');

  if (!container || typeof CERTIFICATIONS_DATA === 'undefined') return;

  let currentCategory = 'All';
  let searchTerm = '';

  function renderCertifications() {
    container.innerHTML = '';

    const filtered = CERTIFICATIONS_DATA.filter(cert => {
      const matchesCat = currentCategory === 'All' || cert.category === currentCategory;
      const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            cert.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-gray-500">
          <p class="text-lg">No certifications match your search or filter.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'portfolio-card bg-white dark:bg-[#1E293B] rounded-2xl border border-[#2563EB]/15 dark:border-[#38BDF8]/20 overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300';
      const encodedImg = encodeURI(cert.image);
      
      card.innerHTML = `
        <div class="relative aspect-[16/11] bg-gray-50 dark:bg-[#334155] overflow-hidden border-b border-gray-100 dark:border-gray-800 cursor-pointer view-cert-img" data-id="${cert.id}">
          <img src="${encodedImg}" alt="${cert.title}" class="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300" loading="lazy" onerror="this.onerror=null; this.src='images/certificaates/Introduction to Python -  Sololearn.jpeg';">
          <div class="absolute top-3 right-3">
            <span class="text-xs px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur font-mono text-[#2563EB] dark:text-[#38BDF8] font-semibold border border-gray-200 dark:border-gray-700 shadow-sm">
              ${cert.credentialId || 'Verified'}
            </span>
          </div>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="text-xs text-[#2563EB] dark:text-[#38BDF8] font-semibold tracking-wider uppercase mb-1">
              ${cert.category}
            </div>
            <h3 class="text-base font-bold text-gray-900 dark:text-white mb-1.5 leading-snug">
              ${cert.title}
            </h3>
            <p class="text-xs text-gray-500 dark:text-[#94A3B8] font-medium mb-3">
              ${cert.issuer}
            </p>
            <p class="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4">
              ${cert.description}
            </p>
          </div>
          <div class="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <button class="view-cert-btn text-xs font-semibold text-[#2563EB] dark:text-[#38BDF8] hover:underline flex items-center gap-1" data-id="${cert.id}">
              <span>View Certificate</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </button>
            <a href="${encodedImg}" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" title="Open Full Image">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    // Attach click events
    container.querySelectorAll('.view-cert-btn, .view-cert-img').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-id');
        const cert = CERTIFICATIONS_DATA.find(c => c.id === id);
        if (cert) openCertModal(cert);
      });
    });
  }

  function openCertModal(cert) {
    if (!modal || !modalContent) return;

    const modalImg = encodeURI(cert.image);
    modalContent.innerHTML = `
      <div class="text-center">
        <div class="max-h-[70vh] overflow-hidden rounded-xl bg-gray-900/5 dark:bg-black/30 p-2 mb-4 flex items-center justify-center">
          <img src="${modalImg}" alt="${cert.title}" class="max-h-[64vh] w-auto max-w-full rounded shadow-md object-contain" onerror="this.onerror=null; this.src='images/certificaates/Introduction to Python -  Sololearn.jpeg';">
        </div>
        <div class="text-left px-2">
          <span class="text-xs px-2.5 py-1 rounded-full bg-[#2563EB]/15 text-[#2563EB] dark:text-[#38BDF8] font-semibold tracking-wide uppercase">
            ${cert.category}
          </span>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-1">${cert.title}</h3>
          <p class="text-sm text-[#2563EB] dark:text-[#38BDF8] font-medium mb-2">${cert.issuer} • ${cert.credentialId}</p>
          <p class="text-sm text-gray-600 dark:text-[#94A3B8] leading-relaxed mb-4">${cert.description}</p>
          <div class="flex items-center gap-3">
            <a href="${modalImg}" target="_blank" download="${cert.title}.png" class="btn-primary-gradient px-4 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5">
              <span>Open Original File</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeCertModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCertModal();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderCertifications();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      renderCertifications();
    });
  }

  renderCertifications();
}

/* ----------------------------------------------------
   7. Volunteer Experience Gallery
---------------------------------------------------- */
function initVolunteerGallery() {
  const container = document.getElementById('volunteerContainer');
  if (!container || typeof VOLUNTEER_DATA === 'undefined') return;

  container.innerHTML = '';

  VOLUNTEER_DATA.forEach((vol, volIdx) => {
    const card = document.createElement('div');
    card.className = 'portfolio-card bg-white dark:bg-[#1E293B] rounded-2xl border border-[#2563EB]/15 dark:border-[#38BDF8]/20 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300';

    // Build duplicated image list for seamless loop (8 + 8 = 16 items)
    const allImgs = [...vol.images, ...vol.images];
    const stripId = `vol-strip-${volIdx}`;
    const photoStrip = allImgs.map(img =>
      `<div class="flex-shrink-0 w-36 h-28 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 mr-2">
        <img src="${encodeURI(img)}" alt="${vol.title}" class="w-full h-full object-cover" loading="lazy"
          onerror="this.parentElement.style.display='none'">
      </div>`
    ).join('');

    card.innerHTML = `
      <div class="p-6">
        <div class="flex items-center justify-between gap-3 mb-3">
          <span class="text-xs px-3 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#38BDF8]/15 text-[#2563EB] dark:text-[#38BDF8] font-semibold">
            ${vol.role}
          </span>
          <span class="text-xs font-mono text-gray-400">
            ${vol.date}
          </span>
        </div>
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">
          ${vol.title}
        </h3>
        <p class="text-xs font-medium text-[#2563EB] dark:text-[#38BDF8] mb-3">
          ${vol.organization}
        </p>
        <p class="text-sm text-gray-600 dark:text-[#94A3B8] leading-relaxed mb-4">
          ${vol.description}
        </p>
      </div>
      <div class="border-t border-gray-100 dark:border-gray-800 overflow-hidden">
        <div id="${stripId}" class="flex py-3 px-1 vol-scroll-strip" style="width: max-content; animation: volScroll 24s linear infinite;">
          ${photoStrip}
        </div>
      </div>
    `;

    // Pause scroll on hover
    card.addEventListener('mouseenter', () => {
      const strip = card.querySelector('.vol-scroll-strip');
      if (strip) strip.style.animationPlayState = 'paused';
    });
    card.addEventListener('mouseleave', () => {
      const strip = card.querySelector('.vol-scroll-strip');
      if (strip) strip.style.animationPlayState = 'running';
    });

    container.appendChild(card);
  });
}


/* ----------------------------------------------------
   8. Blog Articles Section
---------------------------------------------------- */
function initBlogs() {
  const container = document.getElementById('blogsContainer');
  if (!container || typeof BLOGS_DATA === 'undefined') return;

  container.innerHTML = '';

  BLOGS_DATA.forEach(blog => {
    const card = document.createElement('article');
    card.className = 'portfolio-card bg-white dark:bg-[#1E293B] rounded-2xl border border-[#2563EB]/15 dark:border-[#38BDF8]/20 overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300';

    card.innerHTML = `
      <div class="img-zoom-container relative aspect-[16/10] bg-gray-100 dark:bg-[#334155] overflow-hidden">
        <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover" loading="lazy">
        <div class="absolute top-3 right-3">
          <span class="text-xs px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur font-mono">
            ${blog.readTime}
          </span>
        </div>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="text-xs text-[#2563EB] dark:text-[#38BDF8] font-semibold tracking-wider uppercase mb-1.5">
            ${blog.date}
          </div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug hover:text-[#2563EB] dark:hover:text-[#38BDF8] transition-colors">
            <a href="${blog.url}" target="_blank" rel="noopener noreferrer">${blog.title}</a>
          </h3>
          <p class="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">${blog.tagline}</p>
          <p class="text-sm text-gray-600 dark:text-[#94A3B8] line-clamp-3 leading-relaxed mb-4">
            ${blog.summary}
          </p>
        </div>
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <a href="${blog.url}" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-[#2563EB] dark:text-[#38BDF8] hover:underline flex items-center gap-1.5">
            <span>Read on Medium</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <span class="text-xs text-gray-400">Medium ↗</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ----------------------------------------------------
   9. Contact Form Handling
---------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  const submitBtn = document.getElementById('formSubmitBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['fullName'].value.trim();
    const email = form.elements['email'].value.trim();
    const subject = form.elements['subject'].value.trim();
    const message = form.elements['message'].value.trim();

    // Reset alert
    showAlert('', '');

    // Validation
    if (!name || !email || !subject || !message) {
      showAlert('error', 'Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert('error', 'Please enter a valid email address.');
      return;
    }

    // Set loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>Preparing mail draft...</span>
      `;
    }

    // Since client email credentials (EmailJS) are not provided in source repository,
    // we use standard mailto dispatch fallback to guarantee no false transmission claim.
    setTimeout(() => {
      const mailtoUrl = `mailto:wenuris2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
      
      showAlert('success', 'Your message details are prepared! Opening your mail client to send directly to wenuris2004@gmail.com.');
      
      window.location.href = mailtoUrl;

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Send Message</span>`;
      }
      form.reset();
    }, 600);
  });

  function showAlert(type, msg) {
    if (!alertBox) return;
    if (!msg) {
      alertBox.classList.add('hidden');
      alertBox.innerHTML = '';
      return;
    }

    alertBox.classList.remove('hidden');
    if (type === 'error') {
      alertBox.className = 'mb-4 p-4 rounded-xl text-sm bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400';
    } else {
      alertBox.className = 'mb-4 p-4 rounded-xl text-sm bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] dark:text-[#38BDF8]';
    }
    alertBox.innerHTML = msg;
  }
}

/* ----------------------------------------------------
   10. Scroll Triggered Fade-In Animations
---------------------------------------------------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}
