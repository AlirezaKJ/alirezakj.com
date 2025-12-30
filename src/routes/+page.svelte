<section class="about min-h-screen flex flex-col justify-start relative overflow-hidden">
  <!-- Decorative background elements -->
  <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
  <div class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary-100/30 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

  <div class="max-w-[var(--keyw)] mx-auto w-full">
    <!-- Hero Header -->
    <div class="space-y-6 animate-fade-in-up">
      <h1 class="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-primary-950">
        <span class="block">Web Developer</span>
        <span class="block text-primary-600">& Designer</span>
      </h1>
      <p class="text-xl md:text-3xl text-primary-800 font-light max-w-4xl tracking-wide">
        Crafting Digital Experiences
      </p>
    </div>

    <!-- Intro Text -->
    <div class="mt-16 md:mt-24 grid md:grid-cols-12 gap-12">
      <div class="md:col-span-7 space-y-8 text-lg md:text-xl text-primary-900 leading-relaxed opacity-90">
        <p>
          Full-stack web developer and UI/UX designer based in Melbourne, Australia. Specializing in modern web technologies, responsive design, and high-performance applications. Currently studying IT and cybersecurity fundamentals while delivering freelance projects.
        </p>
        <p>
          I'm a self-taught web developer with a passion for creating intuitive, visually appealing digital solutions. With expertise in SvelteKit, React, Tailwind CSS, and modern web standards, I build websites and applications that solve real problems while maintaining clean, maintainable code.
        </p>
        <p>
          I combine technical depth with design thinking—understanding both the backend infrastructure and frontend user experience. Currently expanding my knowledge in cybersecurity, ISO 27001 compliance standards, and headless CMS systems to offer more comprehensive solutions.
        </p>
      </div>

      <!-- Key Strengths -->
      <div class="md:col-span-5">
        <div class="bg-primary-50/50 backdrop-blur-sm p-8 rounded-2xl border border-primary-100 hover:border-primary-200 transition-colors duration-300">
          <h3 class="font-serif text-2xl font-bold text-primary-800 mb-6">Key Strengths</h3>
          <ul class="space-y-4">
            {#each [
              'Full-stack web development',
              'UI/UX design principles',
              'Responsive design',
              'Version control (Git)',
              'Cloud deployment',
              'Cybersecurity fundamentals'
            ] as strength}
              <li class="flex items-center gap-3 text-primary-800">
                <span class="w-2 h-2 rounded-full bg-accent-500"></span>
                {strength}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="projects py-24 px-6 md:px-20 bg-primary-950 text-white min-h-screen">
  <div class="max-w-7xl mx-auto">
    <h2 class="font-serif text-5xl md:text-7xl font-bold mb-16 text-center">Selected Projects</h2>

    <div class="grid md:grid-cols-2 gap-10">
      <!-- Project 1: Font Explorer -->
      <article class="group bg-primary-900/50 border border-primary-800 rounded-3xl p-8 hover:bg-primary-900 transition-all duration-500 flex flex-col">
        <div class="flex justify-between items-start mb-6">
          <span class="text-accent-400 font-mono text-sm tracking-wider">Aug 2023</span>
          <a href="https://github.com/AlirezaKJ" target="_blank" aria-label="View Source on GitHub" class="p-2 bg-primary-800 rounded-full hover:bg-accent-500 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
        <h3 class="font-serif text-4xl mb-2 group-hover:text-accent-300 transition-colors">Font Explorer</h3>
        <p class="text-lg text-primary-200 mb-6">A web application designed to help designers and developers explore, preview, and compare fonts with various styling options and decorations.</p>
        
        <div class="mt-auto">
          <div class="flex flex-wrap gap-2 mb-4">
            {#each ['HTML', 'CSS', 'JavaScript', 'Web Fonts API'] as tech}
              <span class="px-3 py-1 bg-primary-800/50 rounded-full text-sm text-primary-200">{tech}</span>
            {/each}
          </div>
        </div>
      </article>

      <!-- Project 2: BetterSoundCloud -->
      <article class="group bg-primary-900/50 border border-primary-800 rounded-3xl p-8 hover:bg-primary-900 transition-all duration-500 flex flex-col">
        <div class="flex justify-between items-start mb-6">
          <span class="text-accent-400 font-mono text-sm tracking-wider">May 2023</span>
          <a href="https://github.com/AlirezaKJ" target="_blank" aria-label="View Source on GitHub" class="p-2 bg-primary-800 rounded-full hover:bg-accent-500 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
        <h3 class="font-serif text-4xl mb-2 group-hover:text-accent-300 transition-colors">BetterSoundCloud</h3>
        <p class="text-lg text-primary-200 mb-6">An optimized and themed modification of SoundCloud with performance enhancements, custom themes, and improved user interface.</p>
        
        <div class="mt-auto">
          <div class="flex flex-wrap gap-2 mb-4">
            {#each ['JavaScript', 'React/Svelte', 'Web Audio API'] as tech}
              <span class="px-3 py-1 bg-primary-800/50 rounded-full text-sm text-primary-200">{tech}</span>
            {/each}
          </div>
        </div>
      </article>

      <!-- Project 3: Periodic Table -->
      <article class="group bg-primary-900/50 border border-primary-800 rounded-3xl p-8 hover:bg-primary-900 transition-all duration-500 flex flex-col">
        <div class="flex justify-between items-start mb-6">
          <span class="text-accent-400 font-mono text-sm tracking-wider">Apr 2023</span>
          <a href="https://github.com/AlirezaKJ" target="_blank" aria-label="View Source on GitHub" class="p-2 bg-primary-800 rounded-full hover:bg-accent-500 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
        <h3 class="font-serif text-4xl mb-2 group-hover:text-accent-300 transition-colors">Periodic Table</h3>
        <p class="text-lg text-primary-200 mb-6">An educational tool that brings the periodic table to life with interactive features, detailed element cards, and search capabilities.</p>
        
        <div class="mt-auto">
          <div class="flex flex-wrap gap-2 mb-4">
            {#each ['HTML', 'CSS', 'JavaScript'] as tech}
              <span class="px-3 py-1 bg-primary-800/50 rounded-full text-sm text-primary-200">{tech}</span>
            {/each}
          </div>
        </div>
      </article>

      <!-- Project 4: Custom Web Design (Featured/Different style?) -->
      <article class="group md:col-span-1 bg-gradient-to-br from-primary-800 to-primary-900 border border-primary-700 rounded-3xl p-8 transition-all duration-500 flex flex-col relative overflow-hidden">
        <div class="absolute top-0 right-0 p-4 opacity-10">
           <svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </div>
        
        <div class="flex justify-between items-start mb-6 relative z-10">
          <span class="text-accent-300 font-mono text-sm tracking-wider uppercase animate-pulse">Ongoing</span>
        </div>
        <h3 class="font-serif text-4xl mb-2 relative z-10">Freelance Services</h3>
        <p class="text-lg text-primary-100 mb-6 relative z-10">
          Website redesigns (Lenexa Medical, Ouroborus Projects) and custom web applications. Focusing on modernizing digital presence with SvelteKit and Tailwind.
        </p>
        
        <div class="mt-auto relative z-10">
          <div class="flex flex-wrap gap-2 mb-4">
            {#each ['SvelteKit', 'Tailwind', 'Node.js', 'TypeScript'] as tech}
              <span class="px-3 py-1 bg-white/10 rounded-full text-sm text-white">{tech}</span>
            {/each}
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<div class="skills py-24 px-6 md:px-20 bg-primary-50">
  <div class="max-w-7xl mx-auto">
    <h2 class="font-serif text-5xl md:text-7xl font-bold mb-16 text-primary-950 text-center">Skills & Expertise</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- Frontend -->
      <div class="bg-white p-8 rounded-3xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
        <h3 class="text-2xl font-bold mb-6 text-primary-800 flex items-center gap-3">
          <svg class="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          Frontend
        </h3>
        <ul class="space-y-3">
          {#each ['React, SvelteKit, Svelte', 'Tailwind CSS, SASS', 'Semantic HTML5 & a11y', 'JavaScript (ES6+) & TypeScript', 'Responsive Design'] as skill}
            <li class="flex items-start gap-3 text-primary-700">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0"></span>
              {skill}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Backend -->
      <div class="bg-white p-8 rounded-3xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
        <h3 class="text-2xl font-bold mb-6 text-primary-800 flex items-center gap-3">
          <svg class="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
          Backend
        </h3>
        <ul class="space-y-3">
          {#each ['Node.js', 'SQL & Database Design', 'RESTful APIs', 'Authentication Systems'] as skill}
            <li class="flex items-start gap-3 text-primary-700">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0"></span>
              {skill}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Design -->
      <div class="bg-white p-8 rounded-3xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
        <h3 class="text-2xl font-bold mb-6 text-primary-800 flex items-center gap-3">
          <svg class="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
          Design & UI/UX
        </h3>
        <ul class="space-y-3">
          {#each ['Figma (Prototyping)', 'User Research & Wireframing', 'Branding & Logo Design', 'Typography & Color Theory'] as skill}
            <li class="flex items-start gap-3 text-primary-700">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0"></span>
              {skill}
            </li>
          {/each}
        </ul>
      </div>

       <!-- Security -->
       <div class="bg-white p-8 rounded-3xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
        <h3 class="text-2xl font-bold mb-6 text-primary-800 flex items-center gap-3">
          <svg class="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          Cybersecurity
        </h3>
        <ul class="space-y-3">
          {#each ['Secure Coding Practices', 'ISO 27001 Fundamentals', 'Network Administration', 'HTTPS/SSL/TLS Basics'] as skill}
            <li class="flex items-start gap-3 text-primary-700">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0"></span>
              {skill}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Tools -->
      <div class="bg-white p-8 rounded-3xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow md:col-span-2">
        <h3 class="text-2xl font-bold mb-6 text-primary-800 flex items-center gap-3">
          <svg class="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          Tools & Devops
        </h3>
        <div class="flex flex-wrap gap-3">
            {#each ['Git/GitHub', 'Cloud/DNS', 'npm/yarn', 'Vite/Webpack', 'Linux Fundamentals', 'Python Scripting'] as tool}
            <span class="px-4 py-2 bg-primary-50 rounded-lg text-primary-700 border border-primary-100 font-medium">
              {tool}
            </span>
          {/each}
        </div>
      </div>

    </div>
  </div>
</div>

<section class="experiences py-24 px-6 md:px-20 bg-white min-h-screen">
  <div class="max-w-4xl mx-auto">
    <h2 class="font-serif text-5xl md:text-7xl font-bold mb-20 text-primary-950 text-center">Experience & Achievements</h2>

    <div class="relative border-l-2 border-primary-100 ml-3 md:ml-6 space-y-16">
      
      <!-- Current Role -->
      <div class="relative pl-8 md:pl-12">
        <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-accent-500 ring-4 ring-white"></div>
        <div class="mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 class="text-2xl font-bold text-primary-900">Freelance Web Developer & Designer</h3>
          <span class="inline-block px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">Ongoing</span>
        </div>
        <p class="text-lg text-primary-600 mb-4 font-serif italic">Self-Employed • Melbourne, Australia</p>
        <p class="text-primary-700 leading-relaxed mb-4">
          Designing and developing custom websites and web applications with a focus on performance and SEO.
        </p>
        <ul class="list-disc list-inside space-y-2 text-primary-700 marker:text-accent-500">
           <li>Conducting UI/UX audits and implementing improvements.</li>
           <li>Managing project timelines and client communication.</li>
           <li>Redesigned Lenexa Medical website and built Ouroborus Projects branding.</li>
        </ul>
      </div>

       <!-- Softpedia -->
       <div class="relative pl-8 md:pl-12">
        <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary-300 ring-4 ring-white"></div>
        <div class="mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 class="text-2xl font-bold text-primary-900">Certified Clean Software Developer</h3>
          <span class="text-primary-500 font-mono text-sm">2024</span>
        </div>
        <p class="text-lg text-primary-600 mb-2 font-serif italic">Softpedia</p>
        <p class="text-primary-700 leading-relaxed">
           Recognized for code quality, security practices, and software reliability standards.
        </p>
      </div>

      <!-- Football Victoria -->
      <div class="relative pl-8 md:pl-12">
        <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary-300 ring-4 ring-white"></div>
        <div class="mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 class="text-2xl font-bold text-primary-900">FV Level 4 Match Official</h3>
          <span class="text-primary-500 font-mono text-sm">2023 - Present</span>
        </div>
        <p class="text-lg text-primary-600 mb-2 font-serif italic">Football Victoria</p>
        <p class="text-primary-700 leading-relaxed">
          Officiating football matches, ensuring fair play, rule compliance, and contributing to the integrity of sports events.
        </p>
      </div>

       <!-- Battlegame.gg -->
       <div class="relative pl-8 md:pl-12">
        <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary-300 ring-4 ring-white"></div>
        <div class="mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 class="text-2xl font-bold text-primary-900">Camera Operator</h3>
          <span class="text-primary-500 font-mono text-sm">2022</span>
        </div>
        <p class="text-lg text-primary-600 mb-2 font-serif italic">battlegame.gg</p>
        <p class="text-primary-700 leading-relaxed">
           Captured video content for esports events, managed equipment, and collaborated with production teams.
        </p>
      </div>

       <!-- Chess -->
       <div class="relative pl-8 md:pl-12">
        <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary-300 ring-4 ring-white"></div>
        <div class="mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 class="text-2xl font-bold text-primary-900">Junior Chess Cup Silver Medal</h3>
          <span class="text-primary-500 font-mono text-sm">2012</span>
        </div>
        <p class="text-lg text-primary-600 mb-2 font-serif italic">International Rating Chess Federation</p>
      </div>

    </div>
  </div>
</section>

<section class="education py-24 px-6 md:px-20 bg-primary-100/50 min-h-screen">
  <div class="max-w-6xl mx-auto">
    <h2 class="font-serif text-5xl md:text-7xl font-bold mb-20 text-primary-950 text-center">Education</h2>

    <div class="grid md:grid-cols-2 gap-8">
      
      <!-- Current (Bundoora) -->
      <div class="bg-white p-10 rounded-3xl shadow-sm border-l-8 border-accent-500 hover:shadow-lg transition-all duration-300">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-2xl font-bold text-primary-900">Bundoora Secondary College</h3>
          <span class="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-semibold">Current</span>
        </div>
        <p class="text-primary-600 mb-2 font-serif italic">Year 10-12 Student • Melbourne, Australia</p>
        <p class="text-primary-500 text-sm mb-6 font-mono">2022 - Present</p>
        <p class="text-primary-800">
          Focusing on Information Technology, Cybersecurity fundamentals, and General Education. Building a strong foundation in computer science principles.
        </p>
      </div>

      <!-- Soroush -->
      <div class="bg-white/60 p-10 rounded-3xl shadow-sm border-l-8 border-primary-300 hover:bg-white transition-all duration-300">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-2xl font-bold text-primary-900">Soroush Secondary School</h3>
          <span class="text-sm font-semibold text-primary-400">Tehran</span>
        </div>
        <p class="text-primary-600 mb-2 font-serif italic">Year 10 (Completed)</p>
        <p class="text-primary-500 text-sm mb-6 font-mono">2022</p>
      </div>

      <!-- Mofid Secondary -->
      <div class="bg-white/60 p-10 rounded-3xl shadow-sm border-l-8 border-primary-300 hover:bg-white transition-all duration-300">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-2xl font-bold text-primary-900">Mofid Secondary School</h3>
          <span class="text-sm font-semibold text-primary-400">Tehran</span>
        </div>
        <p class="text-primary-600 mb-2 font-serif italic">Year 7-9 (Completed)</p>
        <p class="text-primary-500 text-sm mb-6 font-mono">2018 - 2021</p>
      </div>

       <!-- Mofid Primary -->
       <div class="bg-white/60 p-10 rounded-3xl shadow-sm border-l-8 border-primary-300 hover:bg-white transition-all duration-300">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-2xl font-bold text-primary-900">Mofid Primary School</h3>
          <span class="text-sm font-semibold text-primary-400">Tehran</span>
        </div>
        <p class="text-primary-600 mb-2 font-serif italic">Year 1-6 (Completed)</p>
        <p class="text-primary-500 text-sm mb-6 font-mono">2012 - 2018</p>
      </div>

    </div>
  </div>
</section>

<section class="services py-24 px-6 md:px-20 bg-primary-950 text-white">
  <div class="max-w-7xl mx-auto">
    <h2 class="font-serif text-5xl md:text-7xl font-bold mb-16 text-center">Services</h2>

    <div class="grid md:grid-cols-3 gap-8 mb-20">
      {#each [
        {title: 'Custom Web Development', desc: 'From concept to deployment, building tailored layout and functionality.'},
        {title: 'Website Redesign', desc: 'Modernizing existing sites with fresh design and improved performance.'},
        {title: 'Web Apps', desc: 'Interactive, feature-rich applications using SvelteKit or React.'},
        {title: 'Responsive Design', desc: 'Ensuring your site looks perfect on all devices, mobile-first.'},
        {title: 'Performance', desc: 'Speed optimization, faster load times, and efficient code.'},
        {title: 'UI/UX Design', desc: 'Creating beautiful, user-centered interfaces and experiences.'}
      ] as service}
      <div class="bg-primary-900/40 p-8 rounded-2xl border border-primary-800 hover:bg-primary-900 hover:border-accent-500 transition-all duration-300 group">
        <h3 class="text-xl font-bold mb-3 text-primary-100 group-hover:text-accent-400">{service.title}</h3>
        <p class="text-primary-300 leading-relaxed">{service.desc}</p>
      </div>
      {/each}
    </div>

    <!-- Rates / Engagement -->
    <div class="bg-gradient-to-r from-primary-900 to-primary-800 rounded-3xl p-8 md:p-12 border border-primary-700">
       <h3 class="font-serif text-3xl font-bold mb-8 text-center md:text-left">Engagement Models</h3>
       <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center md:text-left">
            <h4 class="text-accent-400 font-bold text-lg">Hourly</h4>
            <p class="text-primary-300 text-sm">Consultation & Planning</p>
          </div>
          <div class="text-center md:text-left">
            <h4 class="text-accent-400 font-bold text-lg">Project-Based</h4>
            <p class="text-primary-300 text-sm">Fixed Scope & Price</p>
          </div>
          <div class="text-center md:text-left">
            <h4 class="text-accent-400 font-bold text-lg">Retainer</h4>
            <p class="text-primary-300 text-sm">Ongoing Maintenance</p>
          </div>
          <div class="text-center md:text-left">
            <h4 class="text-green-400 font-bold text-lg">Freelance</h4>
            <p class="text-primary-300 text-sm">Available Now</p>
          </div>
       </div>
    </div>
  </div>
</section>

<section class="contact py-24 px-6 md:px-20 bg-white min-h-screen flex items-center">
  <div class="max-w-7xl mx-auto w-full">
    <div class="grid md:grid-cols-2 gap-16 items-center">
      
      <!-- Contact Info -->
      <div class="space-y-8">
        <h2 class="font-serif text-5xl md:text-7xl font-bold text-primary-950">Let's Work Together</h2>
        <p class="text-xl text-primary-700 leading-relaxed max-w-lg">
          Interested in a custom website, redesign, or have a project in mind? Get in touch and let's bring your vision to life.
        </p>

        <div class="space-y-6 pt-8">
          <div class="flex items-center gap-4 text-primary-800">
            <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <a href="mailto:akarimijafari@gmail.com" class="text-lg hover:text-accent-600 transition-colors">akarimijafari@gmail.com</a>
          </div>

          <div class="flex items-center gap-4 text-primary-800">
            <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <a href="tel:+61410372577" class="text-lg hover:text-accent-600 transition-colors">+61 410 372 577</a>
          </div>

          <div class="flex items-center gap-4 text-primary-800">
             <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <span class="text-lg">Melbourne, Australia</span>
          </div>
        </div>
        
        <div class="pt-8 flex gap-4">
           <!-- LinkedIn -->
           <a href="https://www.linkedin.com/in/alirezakj/" target="_blank" aria-label="LinkedIn Profile" class="w-12 h-12 rounded-full border border-primary-200 flex items-center justify-center text-primary-600 hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-all duration-300">
             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
           </a>
           <!-- GitHub -->
           <a href="https://github.com/AlirezaKJ" target="_blank" aria-label="GitHub Profile" class="w-12 h-12 rounded-full border border-primary-200 flex items-center justify-center text-primary-600 hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-all duration-300">
             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
           </a>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-primary-50 p-8 md:p-10 rounded-3xl border border-primary-100">
        <form class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="name" class="text-sm font-semibold text-primary-700">Name</label>
              <input type="text" id="name" class="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none transition-all" placeholder="John Doe" />
            </div>
            <div class="space-y-2">
              <label for="email" class="text-sm font-semibold text-primary-700">Email</label>
              <input type="email" id="email" class="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none transition-all" placeholder="john@example.com" />
            </div>
          </div>
          
          <div class="space-y-2">
            <label for="subject" class="text-sm font-semibold text-primary-700">Subject</label>
            <input type="text" id="subject" class="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none transition-all" placeholder="Project Inquiry" />
          </div>

          <div class="space-y-2">
            <label for="message" class="text-sm font-semibold text-primary-700">Message</label>
            <textarea id="message" rows="4" class="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none transition-all" placeholder="Tell me about your project..."></textarea>
          </div>

          <button type="submit" class="w-full bg-primary-900 text-white font-bold py-4 rounded-xl hover:bg-accent-600 transition-colors duration-300 shadow-lg shadow-primary-900/20">
            Send Message
          </button>
        </form>
      </div>

    </div>
  </div>
</section>