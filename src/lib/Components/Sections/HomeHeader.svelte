<header class="about flex flex-col justify-start relative overflow-hidden pb-36">
  
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
</header>