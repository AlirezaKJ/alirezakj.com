<header id="header" class="about flex flex-col justify-start relative overflow-hidden pb-16 md:pb-36">
  
  <div class="max-w-[var(--keyw)] mx-auto w-full px-4 md:px-0">
    <!-- Hero Header -->
    <div class="flex flex-row md:flex-row gap-4 md:gap-8 justify-between items-start">
      <div class="space-y-4 md:space-y-6 animate-fade-in-up">
        <h1 class="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight text-primary-950">
          <span class="block">Web Developer</span>
          <span class="block text-primary-600">& Photographer</span>
        </h1>
        <p class="text-lg sm:text-xl md:text-3xl text-primary-800 font-light max-w-4xl tracking-wide">
          Crafting Digital Experiences
        </p>
      </div>
      <div class="flex justify-end md:justify-end animate-fade-in-up w-auto sm:w-auto">
        <img 
          src="/assets/images/Portrait Cropped.jpg"
          alt="Alireza Karimi Jafari, web developer and photographer based in Melbourne"
          class="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>

    <!-- Intro Text -->
    <div class="mt-4 md:mt-8 lg:mt-16 grid md:grid-cols-12 gap-8 md:gap-12">
      <div class="md:col-span-7 space-y-4 md:space-y-8 text-base md:text-lg lg:text-xl text-primary-900 leading-relaxed opacity-90">
        <p>
          Full-stack web developer and UI/UX designer based in Melbourne, Australia. Specializing in modern web technologies, responsive design, and high-performance applications. Currently studying IT and Cybersecurity at Swinburne University while delivering freelance projects.
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
        <div class="bg-primary-50/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-primary-100 hover:border-primary-200 transition-colors duration-300">
          <h3 class="font-serif text-xl md:text-2xl font-bold text-primary-800 mb-4 md:mb-6">Key Strengths</h3>
          <ul class="space-y-3 md:space-y-4">
            {#each [
              'Full-stack web development',
              'UI/UX design principles',
              'Photography & visual storytelling',
              'Version control (Git)',
              'Cloud deployment',
              'Cybersecurity fundamentals'
            ] as strength}
              <li class="flex items-center gap-3 text-sm md:text-base text-primary-800">
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