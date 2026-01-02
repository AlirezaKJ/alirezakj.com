<section class="services py-24 px-6 md:px-20 bg-accent-100 text-white">
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