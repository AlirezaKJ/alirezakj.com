<script>
	import ProjectAccordion from "./ProjectAccordion.svelte";


</script>

<section id="projects" class="projects py-0 md:py-12 text-text">
  <div class="max-w-[var(--keyw)] mx-auto px-4 md:px-0">
    <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold py-10 md:py-16 text-center">Projects & Works</h2>

    <div class="accordions">

      <ProjectAccordion
      name="BetterSoundCloud"
      git="https://github.com/AlirezaKJ/BetterSoundCloud"
      web="/bsc"
      image="/assets/images/BSC.png"
      description="BetterSoundCloud is a feature-rich desktop client for SoundCloud built with Electron.js that transforms the standard listening experience with extensive customization options and quality-of-life improvements. The application removes advertisements entirely, integrates Discord Rich Presence for social listening, and includes a built-in downloader for offline playback. Users can personalize their interface through a custom CSS and JavaScript editor, choosing from community-created themes with different color palettes. Additional features include synchronized lyrics powered by the LRCLIB API and enhanced playback controls. The project has gained significant traction with 242 stars on GitHub and has been verified as 100% clean by Softpedia, with no users reporting account bans since launch. Built primarily with CSS (56.2%), JavaScript (26.9%), and HTML (16.9%), the application is available for Windows with both portable and installer versions, plus a one-line installation script for Linux distributions."
      tags={["Electron.JS", "API", "Node.JS", "CSS", "JavaScript"]}
      date="January 2023"
      />

      <ProjectAccordion
      name="Hybrid Modular"
      web="https://hybridmodular.com.au/"
      image="/assets/images/HM.png"
      description="Hybrid Modular is a corporate website built for a Western Australian modular home builder specialising in energy-efficient, low-maintenance forever homes for downsizers, designed and built indoors before being craned onto site. Developed with SvelteKit (Svelte 5 runes), Tailwind CSS v4, GSAP, and Lenis, the site delivers a polished, motion-rich experience featuring split-text headline reveals, scroll-tied stat counters, a custom scroll-spy navigation with smooth anchor scrolling, and an editorial spec-sheet aesthetic with stamped section codes (§ 01 → § 06), model codes, mono labels, and hairline borders that make every surface read like an issued construction document. The single-page layout walks visitors through six clearly numbered sections: hero, about, a six-stage process timeline, a specification feature grid, team, featured projects and a contact form. all built on a custom ink/paper design system with seamless light and dark themes powered by a no-flash inline theme initialiser that reads localStorage and prefers-color-scheme before paint. The site is engineered for an older audience with ≥16px body type, 4.5:1 contrast in both themes, visible focus rings, semantic landmarks, and motion gated on prefers-reduced-motion. SEO is handled through per-page Open Graph metadata and rich JSON-LD structured data (Organization, LocalBusiness, and GeneralContractor schemas), and the application is deployed on Vercel with a fully responsive design across mobile, tablet, and desktop."
      tags={["SvelteKit", "TailwindCSS", "GSAP", "Lenis", "SEO", "Vercel"]}
      date="May 2026"
      />

      <ProjectAccordion 
      name="Lenexa Medical"
      web="https://lenexamedical.com/"
      image="/assets/images/Lenexa.png"
      description="Lenexa Medical is a professional corporate website built for an award-winning Australian MedTech company specializing in pressure injury prevention technology for hospitals and aged care facilities. Developed with SvelteKit (Svelte 5), Tailwind CSS v4, and GSAP with ScrollTrigger, the site delivers a polished, animation-rich experience featuring smooth scrolling powered by Lenis, scroll-triggered stat counters, parallax content reveals, and fullscreen header videos. The site includes a markdown-powered blog and insights system using mdsvex, a fully functional contact form and newsletter subscription with server-side API endpoints, a 'Book a Demo' modal, an interactive world map showcasing global market presence, and a CMS admin panel for content management. Additional pages highlight the company's team and advisory board, extensive awards and recognition from organizations like TIME Magazine and the Australian AI Festival, career opportunities, and a diversity and inclusion commitment. The application is deployed on Vercel with integrated analytics and speed insights, and features a fully responsive design with a custom animated navigation bar and mobile menu."
      tags={["SvelteKit", "TailwindCSS", "GSAP", "CMS", "API", "Analytics"]}
      date="February 2026"
      />
      
      <ProjectAccordion 
      name="Tansotec"
      web="https://tansotec.com.au/"
      image="/assets/images/tanso.png"
      description="Tansotec is a corporate website built for an Australian advanced materials company specialising in graphene research and real-world industrial applications. The site serves as a professional platform bridging the gap between cutting-edge materials science and industry partners, featuring dedicated sections for research, projects, and partnerships with major institutions including RMIT, Monash, CSIRO, and Swinburne University. The homepage highlights Tansotec's flagship work developing low-cost graphene coatings for solar panels while showcasing capabilities across graphene synthesis, energy, and engineering. The site features a dynamic partner logo carousel, a slideshow of research imagery, and a clean, modern layout with smooth navigation across multiple pages. It was built from the ground up as a fully custom website, reflecting the company's positioning as a serious research and commercialisation entity with over 25 years of combined expertise and connections to more than 30 industry and academic partners across Australia."
      tags={["SvelteKit", "TailwindCSS", "GSAP", "Analytics"]}
      date="February 2026"
      />

      <ProjectAccordion 
      name="KAI-2"
      web="https://kai2.com.au/"
      image="/assets/images/KAI2.png"
      description="I designed and developed the KAI-2 website to serve as a comprehensive digital platform that effectively communicates their multi-sector expertise while maintaining professional credibility in the competitive grants and innovation space. The website features a clean, modern interface with dedicated sections for industries, projects, services, and company information, ensuring intuitive navigation for diverse audiences including researchers, businesses, and government stakeholders. I implemented a responsive design that adapts seamlessly across devices, critical for reaching busy professionals who often browse on mobile. The site incorporates strategic content architecture with clearly defined industry pages covering clean energy, waste transformation, sustainable materials, medical technology, agriculture, and green fuels, each presenting KAI-2's value proposition with compelling calls-to-action to drive engagement. Loading animations and smooth transitions enhance the user experience while maintaining fast page performance, essential for professional service websites where first impressions matter. The website successfully positions KAI-2 as a credible, forward-thinking consultancy while providing clear pathways for potential clients to initiate contact and explore collaboration opportunities."
      tags={["HTML", "CSS", "Responsive", "JavaScript"]}
      date="June 2025"
      />

      <ProjectAccordion 
      name="Periodic Table"
      web="https://ptable.alirezakj.com/"
      git="https://github.com/AlirezaKJ/PeriodicTable"
      image="/assets/images/Ptable.png"
      description="The Interactive Periodic Table is an educational web application that transforms the traditional chemistry reference tool into a dynamic, data-rich learning platform built with vanilla HTML, CSS, and JavaScript. The application features a fully interactive periodic table where users can hover over column and row indicators to highlight specific groups and periods, providing instant visual feedback for understanding element organization patterns. Users can filter elements by multiple classification systems including state of matter (gas, solid, liquid), metallic properties (metals, metalloids, non-metals), magnetic behavior (diamagnetic, paramagnetic, ferromagnetic, antiferromagnetic), electron shell blocks (s-block, p-block, d-block), electrical conduction properties, natural versus synthetic origins, and radioactive stability. Each element displays comprehensive data sourced from the Wolfram Mathematica database, including atomic properties, abundances across different environments (Earth's crust, human body, oceans, solar system, universe), thermal characteristics (boiling point, melting point, critical temperature), electrical properties, crystal structure, and electron configuration. The interface includes a collapsible f-block section for lanthanides and actinides, an electron shell visualization showing detailed orbital configurations with animated circles representing electron distribution across all seven shells, and a responsive dark/light theme toggle for comfortable viewing. The project demonstrates advanced DOM manipulation techniques with custom toggle functions that dynamically apply CSS classes to highlight or dim elements based on user-selected filters, creating an intuitive exploration experience for students and chemistry enthusiasts."
      tags={["Database", "HTML", "CSS", "JavaScript"]}
      date="April 2023"      
      />

      <ProjectAccordion 
      name="Font Explorer"  
      web="https://fontexplorer.net/"
      git="https://github.com/AlirezaKJ/Font-Explorer"
      image="/assets/images/FE.png"
      description="Font Explorer is a web-based typography tool built for designers and front-end developers to preview, compare, and analyze fonts in a unified interface. It supports variable fonts from Google and Adobe libraries alongside locally installed system fonts, with synchronized weight controls that adjust across all open font tabs simultaneously for efficient side-by-side comparison. Users can experiment with condensed, italic, and small caps modes across a full weight spectrum, while a comprehensive glyph viewer covers Latin, Greek, Cyrillic, Hebrew, numerals, punctuation, and currency symbols — making it practical for multilingual design work. All featured fonts are licensed under SIL OFL or Apache 2.0, ensuring safe use in personal and commercial projects. Open-source and deployed at fontexplorer.net, it streamlines the font selection workflow without ever needing to leave the browser."
      tags={["HTML", "CSS", "JavaScript"]}
      date="August 2023"
      />

      <ProjectAccordion 
      name="Ouroborus"
      web="https://ouroborus.com.au/"
      image="/assets/images/ouroborus.png"
      description="Ouroborus is a professional website for an Australian green-tech consultancy and incubator focused on building circular, resilient supply chains across energy, construction, and critical minerals. The site communicates Ouroborus's mission of advancing clean technologies and sustainable materials from discovery through to end-of-life responsibility, with sections dedicated to industries served, partner networks, and active projects. Built on WordPress, the site leverages a content managed architecture that allows the client to independently update project listings, partner information, and pages without developer involvement. The design emphasises environmental credibility and professional trust, with a clean layout suited to engaging investors, industry collaborators, and sustainability focused organisations across Australia."
      tags={["WordPress", "CMS"]}
      date="June 2023"
      />

      <ProjectAccordion 
      name="Net Zero Stack"
      web="https://www.netzerostack.com.au/"
      image="/assets/images/NZS.png"
      description="Net Zero Stack is a sustainability-focused platform website for a Melbourne based innovation group dedicated to accelerating high impact net zero solutions through research, innovation, and commercialisation. The site acts as a central hub connecting projects, partners, and team members under a cohesive platform approach to climate technology. Built on Wix, the website features a bold visual identity with a distinctive green and dark colour scheme, custom iconography, and animated navigation elements that reinforce the brand's focus on clean technology leadership. The platform spans sections for featured projects, an about page, partner showcases, and a team directory, positioning Net Zero Stack as a connector between researchers, industry, and investors working toward Australia's decarbonisation goals."
      tags={["Wix", "CMS"]}
      date="June 2023"
      />

    </div>
    
  </div>
</section>

<!-- 



-->