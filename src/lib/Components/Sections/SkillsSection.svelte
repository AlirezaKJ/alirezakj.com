<div class="skills pb-24 px-6 md:px-20">
  <div class="max-w-7xl mx-auto">
    <h2 class="font-serif text-5xl md:text-7xl font-bold mb-16 text-primary-950 text-center">Skills & Expertise</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- Frontend -->
      <div class="bg-background-100 p-8 rounded-3xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
        <h3 class="text-2xl font-bold mb-6 text-primary-800 flex items-center gap-3">
          <svg class="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          Frontend
        </h3>
        <ul class="space-y-3">
          {#each ['React, SvelteKit, Svelte', 'Tailwind CSS, SASS, Bootstrap', 'Semantic HTML5 & a11y', 'JavaScript (ES6+) & TypeScript', 'Responsive Design'] as skill}
            <li class="flex items-start gap-3 text-primary-700">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0"></span>
              {skill}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Backend -->
      <div class="bg-background-100 p-8 rounded-3xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
        <h3 class="text-2xl font-bold mb-6 text-primary-800 flex items-center gap-3">
          <svg class="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
          Backend
        </h3>
        <ul class="space-y-3">
          {#each ['Node.js', 'Python & Flask', 'Database Design & SQL', 'RESTful APIs', 'Authentication Systems'] as skill}
            <li class="flex items-start gap-3 text-primary-700">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0"></span>
              {skill}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Photography & Media -->
      <div class="bg-background-100 p-8 rounded-3xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
        <h3 class="text-2xl font-bold mb-6 text-primary-800 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-accent-500" viewBox="0 -960 960 960"><path d="M456-600h320q-27-69-82.5-118.5T566-788L456-600Zm-92 80 160-276q-11-2-22-3t-22-1q-66 0-123 25t-101 67l108 188ZM170-400h218L228-676q-32 41-50 90.5T160-480q0 21 2.5 40.5T170-400Zm224 228 108-188H184q27 69 82.5 118.5T394-172Zm86 12q66 0 123-25t101-67L596-440 436-164q11 2 21.5 3t22.5 1Zm252-124q32-41 50-90.5T800-480q0-21-2.5-40.5T790-560H572l160 276ZM480-480Zm0 400q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg>
          <!-- <svg class="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> -->
          Photography & Media
        </h3>
        <ul class="space-y-3">
          {#each ['Motion Photography', 'Adobe Photoshop', 'Adobe Lightroom', 'Image Optimisation', 'Typography & Color Theory'] as skill}
            <li class="flex items-start gap-3 text-primary-700">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0"></span>
              {skill}
            </li>
          {/each}
        </ul>
      </div>

       <!-- Security -->
       <div class="bg-background-100 p-8 rounded-3xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
        <h3 class="text-2xl font-bold mb-6 text-primary-800 flex items-center gap-3">
          <svg class="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          Cybersecurity
        </h3>
        <ul class="space-y-3">
          {#each ['Network Security & Infrastructure', 'Penetration Testing', 'OS Hardening', 'SIEM', 'OWASP',] as skill}
            <li class="flex items-start gap-3 text-primary-700">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0"></span>
              {skill}
            </li>
          {/each}
        </ul>
      </div>

      <!-- Tools -->
      <div class="bg-background-100 p-8 rounded-3xl shadow-sm border border-primary-100 hover:shadow-md transition-shadow md:col-span-2">
        <h3 class="text-2xl font-bold mb-6 text-primary-800 flex items-center gap-3">
          <svg class="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          Tools & Devops
        </h3>
        <div class="flex flex-wrap gap-3">
            {#each ['Figma', 'Git/GitHub', 'AWS, Firebase, Vercel', 'Cloud/DNS', 'npm/yarn', 'Vite/Webpack', 'Linux/Windows Server', 'Power Automate', 'Sharepoint',] as tool}
            <span class="px-4 py-2 bg-primary-50 rounded-lg text-primary-700 border border-primary-100 font-medium">
              {tool}
            </span>
          {/each}
        </div>
      </div>

    </div>
  </div>
</div>