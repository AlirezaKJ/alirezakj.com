<script>
	import ProjectAccordion from "./ProjectAccordion.svelte";


</script>

<section class="projects py-24 text-text min-h-screen">
  <div class="max-w-[var(--keyw)] mx-auto">
    <h2 class="font-serif text-5xl md:text-7xl font-bold mb-16 text-center">Projects & Works</h2>

    <div class="accordions">

      <!-- <ProjectAccordion 
      name="Lenexa Medical"  
      web="https://lenexamedical.com/"
      description=""
      tags={["Svelte", "TailwindCSS", "GSAP"]}
      date="February 2026"
      /> -->

      <ProjectAccordion 
      name="KAI-2"
      web="https://kai2.com.au/"
      description="I designed and developed the KAI-2 website to serve as a comprehensive digital platform that effectively communicates their multi-sector expertise while maintaining professional credibility in the competitive grants and innovation space. The website features a clean, modern interface with dedicated sections for industries, projects, services, and company information, ensuring intuitive navigation for diverse audiences including researchers, businesses, and government stakeholders. I implemented a responsive design that adapts seamlessly across devices, critical for reaching busy professionals who often browse on mobile. The site incorporates strategic content architecture with clearly defined industry pages covering clean energy, waste transformation, sustainable materials, medical technology, agriculture, and green fuels, each presenting KAI-2's value proposition with compelling calls-to-action to drive engagement. Loading animations and smooth transitions enhance the user experience while maintaining fast page performance, essential for professional service websites where first impressions matter. The website successfully positions KAI-2 as a credible, forward-thinking consultancy while providing clear pathways for potential clients to initiate contact and explore collaboration opportunities."
      tags={["HTML", "CSS", "Responsive", "JavaScript"]}
      date="June 2025"
      />

      <ProjectAccordion 
      name="BetterSoundCloud"  
      git="https://github.com/AlirezaKJ/BetterSoundCloud"
      web="https://alirezakj.com/bsc/"
      description="BetterSoundCloud is a feature-rich desktop client for SoundCloud built with Electron.js that transforms the standard listening experience with extensive customization options and quality-of-life improvements. The application removes advertisements entirely, integrates Discord Rich Presence for social listening, and includes a built-in downloader for offline playback. Users can personalize their interface through a custom CSS and JavaScript editor, choosing from community-created themes with different color palettes. Additional features include synchronized lyrics powered by the LRCLIB API and enhanced playback controls. The project has gained significant traction with 242 stars on GitHub and has been verified as 100% clean by Softpedia, with no users reporting account bans since launch. Built primarily with CSS (56.2%), JavaScript (26.9%), and HTML (16.9%), the application is available for Windows with both portable and installer versions, plus a one-line installation script for Linux distributions."
      tags={["Electron.JS", "API", "Node.JS", "CSS", "JavaScript"]}
      date="January 2023"
      />

      <ProjectAccordion 
      name="Periodic Table"
      web="https://alirezakj.com/periodic-table/"
      git="https://github.com/AlirezaKJ/PeriodicTable"
      description="The Interactive Periodic Table is an educational web application that transforms the traditional chemistry reference tool into a dynamic, data-rich learning platform built with vanilla HTML, CSS, and JavaScript. The application features a fully interactive periodic table where users can hover over column and row indicators to highlight specific groups and periods, providing instant visual feedback for understanding element organization patterns. Users can filter elements by multiple classification systems including state of matter (gas, solid, liquid), metallic properties (metals, metalloids, non-metals), magnetic behavior (diamagnetic, paramagnetic, ferromagnetic, antiferromagnetic), electron shell blocks (s-block, p-block, d-block), electrical conduction properties, natural versus synthetic origins, and radioactive stability. Each element displays comprehensive data sourced from the Wolfram Mathematica database, including atomic properties, abundances across different environments (Earth's crust, human body, oceans, solar system, universe), thermal characteristics (boiling point, melting point, critical temperature), electrical properties, crystal structure, and electron configuration. The interface includes a collapsible f-block section for lanthanides and actinides, an electron shell visualization showing detailed orbital configurations with animated circles representing electron distribution across all seven shells, and a responsive dark/light theme toggle for comfortable viewing. The project demonstrates advanced DOM manipulation techniques with custom toggle functions that dynamically apply CSS classes to highlight or dim elements based on user-selected filters, creating an intuitive exploration experience for students and chemistry enthusiasts."
      tags={["Database", "HTML", "CSS", "JavaScript"]}
      date="April 2023"      
      />

      <ProjectAccordion 
      name="Font Explorer"  
      web="https://fontexplorer.net/"
      git="https://github.com/AlirezaKJ/Font-Explorer"
      description="Font Explorer is a specialized web-based typography tool designed for designers, typographers, and front-end developers to preview, compare, and analyze fonts in a unified interface. Built with HTML, CSS and JavaScript , the application supports both online variable fonts from Google and Adobe libraries as well as locally installed system fonts, accessible simply by renaming the font tab to match the local font name. The tool features synchronized weight controls that automatically adjust across all open font tabs simultaneously, enabling efficient side-by-side comparison of different typefaces at matching specifications. Users can experiment with multiple typographic styles including condensed and italic modes, small caps variations, and a full spectrum of font weights, with real-time visual feedback. A comprehensive glyph viewer provides access to extensive character sets across multiple writing systems including Latin (lowercase and uppercase), Greek (lowercase and uppercase), Cyrillic (lowercase and uppercase), Hebrew, numbers, punctuation marks, and currency symbols, essential for multilingual design projects. The application exclusively features variable and open-source fonts licensed under SIL Open Font License (OFL) and Apache License Version 2.0, ensuring legal compliance for both personal and commercial use. As an open-source project hosted on GitHub and deployed at fontexplorer.net. The tool streamlines the font selection workflow by eliminating the need to switch between multiple applications or browser tabs, making it an efficient solution for typography-focused web development and design projects."
      tags={["HTML", "CSS", "JavaScript"]}
      date="August 2023"
      />

    </div>
    
  </div>
</section>

<!-- 



-->