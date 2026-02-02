<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  
  let expandedFaq = null;
  let expandedFeature = 'current'; // 'current' or 'upcoming'
  let expandedInstallation = 'easy'; // 'easy', 'linux', or 'manual'
  let starCount = 242; // fallback value
  let forkCount = 14; // fallback value
  let contributorCount = 4; // fallback value
  let releaseCount = 10; // fallback value
  let jsPercentage = 26.9; // fallback value
  let cssPercentage = 56.2; // fallback value
  let htmlPercentage = 16.9; // fallback value
  
  onMount(async () => {
    try {
      // Fetch repository stats
      const repoResponse = await fetch('https://api.github.com/repos/AlirezaKJ/BetterSoundCloud');
      if (repoResponse.ok) {
        const repoData = await repoResponse.json();
        starCount = repoData.stargazers_count;
        forkCount = repoData.forks_count;
      }
      
      // Fetch contributors count
      const contributorsResponse = await fetch('https://api.github.com/repos/AlirezaKJ/BetterSoundCloud/contributors');
      if (contributorsResponse.ok) {
        const contributorsData = await contributorsResponse.json();
        contributorCount = contributorsData.length;
      }
      
      // Fetch releases count
      const releasesResponse = await fetch('https://api.github.com/repos/AlirezaKJ/BetterSoundCloud/releases');
      if (releasesResponse.ok) {
        const releasesData = await releasesResponse.json();
        releaseCount = releasesData.length;
      }
      
      // Fetch language statistics
      const languagesResponse = await fetch('https://api.github.com/repos/AlirezaKJ/BetterSoundCloud/languages');
      if (languagesResponse.ok) {
        const languagesData = await languagesResponse.json();
        const totalBytes = Object.values(languagesData).reduce((sum, bytes) => sum + bytes, 0);
        
        if (totalBytes > 0) {
          jsPercentage = ((languagesData.JavaScript || 0) / totalBytes * 100).toFixed(1);
          cssPercentage = ((languagesData.CSS || 0) / totalBytes * 100).toFixed(1);
          htmlPercentage = ((languagesData.HTML || 0) / totalBytes * 100).toFixed(1);
        }
      }
    } catch (error) {
      console.error('Failed to fetch GitHub stats:', error);
    }
  });
  
  function toggleFaq(index) {
    expandedFaq = expandedFaq === index ? null : index;
  }
  
  const faqs = [
    {
      question: "Is BetterSoundCloud Safe?",
      answer: "Yes. BetterSoundCloud is completely safe and verified as 100% virus-free by Softpedia security analysis. The entire source code is publicly available on GitHub for transparency and security auditing by the community."
    },
    {
      question: "Will My SoundCloud Account Get Banned?",
      answer: "No. Since BetterSoundCloud's launch, no users have reported account bans from using the client. We operate within SoundCloud's terms of service by simply providing an alternative interface to access your account. However, always use the application responsibly."
    },
    {
      question: "How Do I Access Settings?",
      answer: "You can open the settings menu in two ways: Right-click anywhere in the application window, or use the control icons located in the bottom-right corner of the window."
    },
    {
      question: "How Do I Report Bugs or Suggest Features?",
      answer: "We actively welcome community feedback! Visit the GitHub Issues page, click 'New Issue' and provide detailed information. Include screenshots or error messages if relevant. The development team responds to all reports within 24 hours."
    },
    {
      question: "Can I Contribute to the Project?",
      answer: "Absolutely! BetterSoundCloud is open-source and welcomes community contributions. Fork the repository on GitHub, make your improvements or fixes, and submit a pull request with a clear description. Our team reviews and merges contributions regularly."
    }
  ];
  
  const currentFeatures = [
    { 
      title: "Multiple Themes", 
      description: "Browse and apply themes designed by community developers with various color schemes and visual styles",
      image: {
        title: "Theme Studio",
        subtitle: "Curated palettes & layout styles",
        bg: "linear-gradient(135deg, var(--sc-orange-100), var(--sc-orange-200))",
        icon: "M12 2C6.49 2 2 6.04 2 11c0 3.31 2.69 6 6 6h1.77c.28 0 .5.22.5.5 0 .12-.05.23-.13.33-.41.47-.64 1.06-.64 1.67 0 1.38 1.12 2.5 2.5 2.5 4.41 0 8-3.59 8-8C20 6.59 16.41 2 12 2z"
      }
    },
    { 
      title: "Plugin Architecture", 
      description: "Extend functionality with custom JavaScript and CSS modifications",
      image: {
        title: "Plugin Engine",
        subtitle: "Inject powerful extensions",
        bg: "linear-gradient(135deg, var(--accent-100), var(--accent-200))",
        icon: "M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"
      }
    },
    { 
      title: "Ad-Free Listening", 
      description: "Remove advertisements for an uninterrupted listening experience",
      image: {
        title: "Pure Playback",
        subtitle: "Zero distractions",
        bg: "linear-gradient(135deg, var(--primary-100), var(--primary-200))",
        icon: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
      }
    },
    { 
      title: "Clean UI", 
      description: "Streamlined interface removes unnecessary clutter from the standard SoundCloud layout",
      image: {
        title: "Minimal Layout",
        subtitle: "Focus on the music",
        bg: "linear-gradient(135deg, var(--sc-orange-50), var(--primary-100))",
        icon: "M4 6h16v2H4V6zm0 5h10v2H4v-2zm0 5h16v2H4v-2z"
      }
    },
    { 
      title: "Cross-Platform", 
      description: "Windows and Linux support (Mac support in development)",
      image: {
        title: "Desktop Ready",
        subtitle: "Windows & Linux support",
        bg: "linear-gradient(135deg, var(--secondary-100), var(--primary-100))",
        icon: "M3 4h18v10H3V4zm0 12h7v2H3v-2zm11 0h7v2h-7v-2z"
      }
    },
    { 
      title: "Settings Management", 
      description: "Easy-to-access settings via right-click context menu or bottom-right control icons",
      image: {
        title: "Control Hub",
        subtitle: "Fine‑tune every detail",
        bg: "linear-gradient(135deg, var(--accent-50), var(--accent-200))",
        icon: "M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.62l-1.92-3.32c-.11-.21-.37-.3-.59-.22l-2.39.96c-.5-.38-1.04-.7-1.64-.94l-.36-2.54A.5.5 0 0 0 13.9 1h-3.8a.5.5 0 0 0-.49.41l-.36 2.54c-.6.24-1.14.56-1.64.94l-2.39-.96c-.22-.09-.48.01-.59.22L2.7 7.47c-.12.21-.07.48.12.62l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.82 13.13a.5.5 0 0 0-.12.62l1.92 3.32c.11.21.37.3.59.22l2.39-.96c.5.38 1.04.7 1.64.94l.36 2.54c.04.24.25.41.49.41h3.8c.24 0 .45-.17.49-.41l.36-2.54c.6-.24 1.14-.56 1.64-.94l2.39.96c.22.09.48-.01.59-.22l1.92-3.32a.5.5 0 0 0-.12-.62l-2.03-1.58zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z"
      }
    },
    { 
      title: "Open Source", 
      description: "MIT licensed with full source code available on GitHub",
      image: {
        title: "Open Code",
        subtitle: "Transparent & community-driven",
        bg: "linear-gradient(135deg, var(--secondary-100), var(--secondary-200))",
        icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"
      }
    },
    { 
      title: "Active Development", 
      description: "Regular updates and community contributions",
      image: {
        title: "Rapid Updates",
        subtitle: "Always improving",
        bg: "linear-gradient(135deg, var(--primary-100), var(--accent-100))",
        icon: "M13 3a9 9 0 1 0 8.94 10h-2.03A7 7 0 1 1 11 4.06V7l4-4-4-4v3.06z"
      }
    }
  ];

  let activeFeature = currentFeatures[0];
  
  const upcomingFeatures = [
    "macOS & Linux Packages",
    "Proxy Integration",
    "Deep Linking",
    "User Agent Customization",
    "Offline Listening",
    "Geographic Bypass",
    "Enhanced Shuffle",
    "Fullscreen Waveforms",
    "Custom CSS Editor",
    "Custom JavaScript Editor",
    "Full Adblocker",
    "SoundCloud Downloader",
    "Lyrics Integration",
    "Discord Rich Presence"
  ];
</script>

<svelte:head>
  <title>BetterSoundCloud - Enhanced SoundCloud Desktop Client</title>
</svelte:head>

<div class="bsc-page w-full">
  <!-- Hero Section -->
  <section class="w-full py-12">
    <div class="max-w-[var(--keyw)] mx-auto w-full px-6">
      <div class="flex flex-col items-center text-center space-y-8">
        <div class="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--sc-orange-100)] to-[var(--sc-orange-200)] px-6 py-3 rounded-full">
          <svg class="w-6 h-6" style="fill: var(--sc-orange-600);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <span class="text-sm font-semibold" style="color: var(--sc-orange-700);">100% Virus-Free • Verified by Softpedia</span>
        </div>
        
        <h1 class="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-tight">
          <span class="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Better</span><span style="color: var(--sc-orange-600);">SoundCloud</span>
        </h1>
        
        <p class="text-2xl md:text-3xl text-text/70 max-w-3xl">
          Your Enhanced SoundCloud Experience
        </p>
        
        <p class="text-lg md:text-xl text-text/60 max-w-2xl">
          A powerful desktop client for SoundCloud with extensive customization options, themes, and plugins. Transform your listening experience with a cleaner, faster, and more feature-rich alternative.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="https://github.com/AlirezaKJ/BetterSoundCloud/releases" target="_blank" rel="noopener" 
          class="px-8 py-4 rounded-xl font-bold text-lg text-white bg-[var(--sc-orange-600)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            Download Now
          </a>
          <a href="https://github.com/AlirezaKJ/BetterSoundCloud" target="_blank" rel="noopener"
          class="px-8 py-4 bg-primary-50 hover:bg-primary-100 border-2 border-primary-200 hover:border-primary-300 rounded-xl font-bold text-lg text-primary-700 transition-all duration-300 hover:shadow-lg">
            View on GitHub
          </a>
        </div>
        
        <div class="flex flex-wrap justify-center gap-6 mt-12 text-sm text-text/50">
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            <span>{starCount.toLocaleString()} Stars</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            <span>Open Source</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>MIT Licensed</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose BetterSoundCloud -->
  <section class="w-full py-24 bg-gradient-to-b from-background to-primary-50">
    <div class="max-w-[var(--keyw)] mx-auto w-full px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-7xl font-serif font-bold mb-6">
          Why Choose <span style="color: var(--sc-orange-600);">BetterSoundCloud</span>?
        </h2>
        <p class="text-xl text-text/60 max-w-3xl mx-auto">
          Experience SoundCloud like never before with powerful features designed for music lovers
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Customization -->
        <div class="bg-background rounded-2xl p-8 border border-primary-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mb-6" style="background: var(--sc-orange-100);">
            <svg class="w-6 h-6" style="fill: var(--sc-orange-600);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></svg>
          </div>
          <h3 class="text-2xl font-bold mb-4">Unlimited Customization</h3>
          <p class="text-text/70">Experience SoundCloud with extensive themes and design options. Choose from multiple color palettes crafted by talented community developers.</p>
        </div>
        
        <!-- Plugins -->
        <div class="bg-background rounded-2xl p-8 border border-primary-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mb-6">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>
          </div>
          <h3 class="text-2xl font-bold mb-4">Powerful Plugin System</h3>
          <p class="text-text/70">Enhance functionality with custom plugins that extend beyond SoundCloud's native capabilities. Remove ads and add useful tools.</p>
        </div>
        
        <!-- Performance -->
        <div class="bg-background rounded-2xl p-8 border border-primary-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-6">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg>
          </div>
          <h3 class="text-2xl font-bold mb-4">Performance & Efficiency</h3>
          <p class="text-text/70">Optimized for speed and reliability. Enjoy faster loading times, smoother playback, and lower resource usage without browser bloat.</p>
        </div>
        
        <!-- Security -->
        <div class="bg-background rounded-2xl p-8 border border-primary-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mb-6" style="background: var(--sc-orange-100);">
            <svg class="w-6 h-6" style="fill: var(--sc-orange-600);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
          </div>
          <h3 class="text-2xl font-bold mb-4">Verified & Secure</h3>
          <p class="text-text/70">100% virus-free and malware-safe, verified by Softpedia. No account bans have been reported since launch. Your security is our priority.</p>
        </div>
        
        <!-- Open Source -->
        <div class="bg-background rounded-2xl p-8 border border-primary-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 mb-6">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </div>
          <h3 class="text-2xl font-bold mb-4">Open Source</h3>
          <p class="text-text/70">Built on open-source principles with transparent development. Contribute to the project and see exactly what's running on your system.</p>
        </div>
        
        <!-- Free -->
        <div class="bg-background rounded-2xl p-8 border border-primary-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div class="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mb-6">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
          </div>
          <h3 class="text-2xl font-bold mb-4">Completely Free</h3>
          <p class="text-text/70">No premium tiers, no hidden costs. Full access to all features with optional community support through our sponsorship program.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Key Features Section -->
  <section class="w-full py-24">
    <div class="max-w-[var(--keyw)] mx-auto w-full px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-7xl font-serif font-bold mb-6">
          Key Features
        </h2>
        <p class="text-xl text-text/60 max-w-3xl mx-auto">
          Packed with powerful features to enhance your SoundCloud experience
        </p>
      </div>
      
      <!-- Feature Toggle -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex rounded-xl bg-primary-100 p-2">
          <button 
            class="px-8 py-3 rounded-lg font-bold transition-all duration-300 {expandedFeature === 'current' ? 'bg-white shadow-md text-primary-700' : 'text-text/60'}"
            on:click={() => expandedFeature = 'current'}>
            Current Features
          </button>
          <button 
            class="px-8 py-3 rounded-lg font-bold transition-all duration-300 {expandedFeature === 'upcoming' ? 'bg-white shadow-md' : 'text-text/60'}"
            style:color={expandedFeature === 'upcoming' ? 'var(--sc-orange-600)' : 'inherit'}
            on:click={() => expandedFeature = 'upcoming'}>
            Upcoming Roadmap
          </button>
        </div>
      </div>
      
      <!-- Current Features -->
      {#if expandedFeature === 'current'}
        <div class="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 lg:gap-12">
          <div class="space-y-4">
            {#each currentFeatures as feature}
              <button
                class="w-full text-left bg-accent-50 rounded-xl p-6 border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 {activeFeature === feature ? 'border-accent-300 ring-2 ring-[var(--sc-orange-200)]' : 'border-accent-100 hover:border-accent-200'}"
                on:click={() => (activeFeature = feature)}
                aria-pressed={activeFeature === feature}>
                <div class="flex items-start space-x-4">
                  <div class="w-2 h-2 rounded-full mt-2" style="background: var(--sc-orange-500);"></div>
                  <div class="flex-1">
                    <h3 class="text-xl font-bold mb-2">{feature.title}</h3>
                    <p class="text-text/70">{feature.description}</p>
                  </div>
                </div>
              </button>
            {/each}
          </div>

          <div class="lg:sticky lg:top-24 h-fit">
            <div class="bg-primary-100 rounded-2xl p-6 border border-primary-100 shadow-md">
              <div class="rounded-2xl overflow-hidden border border-primary-100" style={`background: ${activeFeature.image.bg};`}>
                <div class="aspect-[4/3] p-8 flex flex-col justify-between">
                  <div class="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center shadow-sm">
                    <svg class="w-7 h-7" style="fill: var(--sc-orange-600);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d={activeFeature.image.icon} />
                    </svg>
                  </div>
                  <div class="space-y-2">
                    <p class="text-xs uppercase tracking-[0.2em] text-text/60">{activeFeature.image.subtitle}</p>
                    <h3 class="text-3xl font-bold">{activeFeature.image.title}</h3>
                  </div>
                </div>
              </div>
              <div class="mt-6 text-text/70 leading-relaxed">
                {activeFeature.description}
              </div>
            </div>
          </div>
        </div>
      {:else}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {#each upcomingFeatures as feature}
            <div class="bg-gradient-to-br from-[var(--sc-orange-50)] to-accent-50 rounded-lg p-4 border border-primary-100 hover:shadow-md transition-all duration-300">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                <span class="font-semibold">{feature}</span>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </section>

  <!-- Installation Guide -->
  <section class="w-full py-24 bg-gradient-to-b from-primary-50 to-background">
    <div class="max-w-[var(--keyw)] mx-auto w-full px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-7xl font-serif font-bold mb-6">
          Installation Guide
        </h2>
        <p class="text-xl text-text/60 max-w-3xl mx-auto">
          Get started with BetterSoundCloud in minutes
        </p>
      </div>
      
      <!-- Installation Toggle -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex rounded-xl bg-primary-100 p-2">
          <button 
            class="px-8 py-3 rounded-lg font-bold transition-all duration-300 {expandedInstallation === 'easy' ? 'bg-white shadow-md text-primary-700' : 'text-text/60'}"
            on:click={() => expandedInstallation = 'easy'}>
            Windows
          </button>
          <button 
            class="px-8 py-3 rounded-lg font-bold transition-all duration-300 {expandedInstallation === 'linux' ? 'bg-white shadow-md' : 'text-text/60'}"
            style:color={expandedInstallation === 'linux' ? 'var(--sc-orange-600)' : 'inherit'}
            on:click={() => expandedInstallation = 'linux'}>
            Linux
          </button>
          <button 
            class="px-8 py-3 rounded-lg font-bold transition-all duration-300 {expandedInstallation === 'manual' ? 'bg-white shadow-md text-primary-700' : 'text-text/60'}"
            on:click={() => expandedInstallation = 'manual'}>
            Developer
          </button>
        </div>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <!-- Windows Easy Installation -->
        {#if expandedInstallation === 'easy'}
          <div class="space-y-6">
            <!-- System Requirements -->
            <div class="bg-accent-100 rounded-2xl p-8 shadow-md border border-primary-100">
              <h3 class="text-2xl font-bold mb-4">System Requirements</h3>
              <div class="space-y-3 text-text/70">
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span><strong>Operating System:</strong> Windows 10+</span>
                </div>
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span><strong>RAM:</strong> Minimum 2GB (4GB recommended)</span>
                </div>
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span><strong>Disk Space:</strong> ~500MB for installation</span>
                </div>
              </div>
            </div>
            
            <!-- Quick Start -->
            <div class="bg-accent-100 rounded-2xl p-8 shadow-md border border-primary-100">
              <h3 class="text-2xl font-bold mb-4">Quick Start: Automatic Installation</h3>
              <p class="text-text/70 mb-6">We provide easy-to-use installers for Windows. No technical knowledge required:</p>
              <ol class="space-y-3 text-text/70">
                <li class="flex items-start space-x-3">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center text-sm font-bold">1</span>
                  <span>Download the latest installer from the <a href="https://github.com/AlirezaKJ/BetterSoundCloud/releases" target="_blank" rel="noopener" class="text-primary-600 hover:text-primary-700 font-semibold">Releases page</a></span>
                </li>
                <li class="flex items-start space-x-3">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center text-sm font-bold">2</span>
                  <span>Run the installer executable (.exe file)</span>
                </li>
                <li class="flex items-start space-x-3">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center text-sm font-bold">3</span>
                  <span>Follow the on-screen installation wizard</span>
                </li>
                <li class="flex items-start space-x-3">
                  <span class="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center text-sm font-bold">4</span>
                  <span>Launch BetterSoundCloud from your Start menu or desktop shortcut</span>
                </li>
              </ol>
            </div>
          </div>
        
        <!-- Linux Installation -->
        {:else if expandedInstallation === 'linux'}
          <div class="space-y-6">
            <!-- System Requirements -->
            <div class="bg-accent-100 rounded-2xl p-8 shadow-md border border-primary-100">
              <h3 class="text-2xl font-bold mb-4">System Requirements</h3>
              <div class="space-y-3 text-text/70">
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span><strong>Operating System:</strong> Linux (Ubuntu, Fedora, Debian, etc.)</span>
                </div>
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span><strong>RAM:</strong> Minimum 2GB (4GB recommended)</span>
                </div>
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span><strong>Disk Space:</strong> ~500MB for installation</span>
                </div>
              </div>
            </div>
            
            <!-- Linux Installation Steps -->
            <div class="bg-accent-100 rounded-2xl p-8 shadow-md border border-primary-100">
              <h3 class="text-2xl font-bold mb-4">Linux Installation</h3>
              <p class="text-text/70 mb-6">Install from pre-built binaries available on GitHub:</p>
              
              <div class="space-y-4">
                <div>
                  <p class="text-sm font-semibold text-text/60 mb-2">1. Download the Latest Release</p>
                  <div class="bg-background rounded-lg p-4 font-mono text-sm border border-primary-100 overflow-x-auto">
                    wget https://github.com/AlirezaKJ/BetterSoundCloud/releases/download/[VERSION]/BetterSoundCloud-[VERSION].AppImage
                  </div>
                </div>
                
                <div>
                  <p class="text-sm font-semibold text-text/60 mb-2">2. Make it Executable</p>
                  <div class="bg-background rounded-lg p-4 font-mono text-sm border border-primary-100">
                    chmod +x BetterSoundCloud-[VERSION].AppImage
                  </div>
                </div>
                
                <div>
                  <p class="text-sm font-semibold text-text/60 mb-2">3. Run the Application</p>
                  <div class="bg-background rounded-lg p-4 font-mono text-sm border border-primary-100">
                    ./BetterSoundCloud-[VERSION].AppImage
                  </div>
                </div>
                
                <p class="text-text/60 text-sm mt-4"><strong>Note:</strong> Replace [VERSION] with the actual release version number from the Releases page.</p>
              </div>
            </div>
          </div>
        
        <!-- Manual Developer Installation -->
        {:else if expandedInstallation === 'manual'}
          <div class="space-y-6">
            <!-- System Requirements -->
            <div class="bg-accent-100 rounded-2xl p-8 shadow-md border border-primary-100">
              <h3 class="text-2xl font-bold mb-4">System Requirements</h3>
              <div class="space-y-3 text-text/70">
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span><strong>Operating System:</strong> Windows 10+, Linux, or macOS</span>
                </div>
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span><strong>Node.js:</strong> v14 or higher with npm</span>
                </div>
                <div class="flex items-start space-x-3">
                  <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span><strong>Git:</strong> Version control system</span>
                </div>
              </div>
            </div>
            
            <!-- Manual Installation Steps -->
            <div class="bg-accent-100 rounded-2xl p-8 shadow-md border border-primary-100">
              <h3 class="text-2xl font-bold mb-4">Manual Installation from Source</h3>
              <p class="text-text/70 mb-6">Install from source for development or customization:</p>
              
              <div class="space-y-4">
                <div>
                  <p class="text-sm font-semibold text-text/60 mb-2">1. Clone the Repository</p>
                  <div class="bg-background rounded-lg p-4 font-mono text-sm border border-primary-100 overflow-x-auto">
                    git clone https://github.com/AlirezaKJ/BetterSoundCloud.git
                  </div>
                </div>
                
                <div>
                  <p class="text-sm font-semibold text-text/60 mb-2">2. Navigate to Directory</p>
                  <div class="bg-background rounded-lg p-4 font-mono text-sm border border-primary-100">
                    cd BetterSoundCloud
                  </div>
                </div>
                
                <div>
                  <p class="text-sm font-semibold text-text/60 mb-2">3. Install Dependencies</p>
                  <div class="bg-background rounded-lg p-4 font-mono text-sm border border-primary-100">
                    npm install
                  </div>
                </div>
                
                <div>
                  <p class="text-sm font-semibold text-text/60 mb-2">4. Start Development Server</p>
                  <div class="bg-background rounded-lg p-4 font-mono text-sm border border-primary-100">
                    npm start
                  </div>
                </div>
                
                <div>
                  <p class="text-sm font-semibold text-text/60 mb-2">5. Build for Production (Optional)</p>
                  <div class="bg-background rounded-lg p-4 font-mono text-sm border border-primary-100">
                    npm run build
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="w-full py-24">
    <div class="max-w-[var(--keyw)] mx-auto w-full px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-7xl font-serif font-bold mb-6">
          Frequently Asked Questions
        </h2>
        <p class="text-xl text-text/60 max-w-3xl mx-auto">
          Everything you need to know about BetterSoundCloud
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto space-y-4">
        {#each faqs as faq, index}
          <div class="bg-secondary-100 rounded-xl overflow-hidden border border-secondary-200 transition-all duration-300">
            <button 
              class="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-secondary-200 transition-colors duration-200"
              on:click={() => toggleFaq(index)}>
              <span class="text-xl font-bold pr-4">{faq.question}</span>
              <svg 
                class="w-6 h-6 flex-shrink-0 transition-transform duration-300"
                class:rotate-180={expandedFaq === index}
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </button>
            {#if expandedFaq === index}
              <div transition:slide={{ duration: 300 }} class="px-8 py-6 text-text/70 leading-relaxed">
                {faq.answer}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Technical Details & Community Stats -->
  <section class="w-full py-24 bg-gradient-to-tr from-[var(--sc-orange-950)] via-background to-background">
    <div class="max-w-[var(--keyw)] mx-auto w-full px-6">
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Technical Stack -->
        <div>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-8">
            Technical Details
          </h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-bold mb-4">Technology Stack</h3>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-accent-200 text-accent-800">Electron.js</span>
                  <span class="text-text/60">Desktop Framework</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-primary-200 text-primary-800">Node.js</span>
                  <span class="text-text/60">Runtime Environment</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-yellow-100 text-yellow-700">JavaScript</span>
                  <span class="text-text/60">{jsPercentage}%</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-blue-200 text-blue-700">CSS</span>
                  <span class="text-text/60">{cssPercentage}%</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-[var(--sc-orange-200)] text-orange-700">HTML</span>
                  <span class="text-text/60">{htmlPercentage}%</span>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h3 class="text-2xl font-bold mb-4">License</h3>
              <div class="bg-secondary-200 rounded-xl p-6 border border-primary-100">
                <p class="text-text/70">Released under the <strong>MIT License</strong>, allowing free use, modification, and distribution with proper attribution.</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Community Stats -->
        <div>
          <h2 class="text-4xl md:text-5xl font-serif font-bold mb-8">
            Community & Stats
          </h2>
          
          <div class="space-y-6">
            <div class="bg-primary-100 rounded-2xl p-8 border border-primary-100 shadow-md">
              <div class="flex items-center justify-between mb-2">
                <span class="text-text/60">GitHub Stars</span>
                <svg class="w-6 h-6 text-accent-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p class="text-5xl font-bold text-primary-600">{starCount.toLocaleString()}</p>
            </div>
            
            <div class="bg-primary-100 rounded-2xl p-8 border border-primary-100 shadow-md">
              <div class="flex items-center justify-between mb-2">
                <span class="text-text/60">Active Forks</span>
                <svg class="w-6 h-6" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </div>
              <p class="text-5xl font-bold" style="color: var(--sc-orange-600);">{forkCount.toLocaleString()}</p>
            </div>
            
            <div class="bg-primary-100 rounded-2xl p-8 border border-primary-100 shadow-md">
              <div class="flex items-center justify-between mb-2">
                <span class="text-text/60">Contributors</span>
                <svg class="w-6 h-6 text-secondary-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <p class="text-5xl font-bold text-secondary-600">{contributorCount}+</p>
            </div>
            
            <div class="bg-primary-100 rounded-2xl p-8 border border-primary-100 shadow-md">
              <div class="flex items-center justify-between mb-2">
                <span class="text-text/60">Total Releases</span>
                <svg class="w-6 h-6 text-accent-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
              </div>
              <p class="text-5xl font-bold text-accent-600">{releaseCount}+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="w-full py-32 bg-gradient-to-br from-[var(--sc-orange-950)] via-background to-background">
    <div class="max-w-[var(--keyw)] mx-auto w-full px-6">
      <div class="text-center space-y-8">
        <h2 class="text-5xl md:text-7xl font-serif font-bold">
          Ready to Transform Your<br /><span style="color: var(--sc-orange-600);">SoundCloud Experience</span>?
        </h2>
        
        <p class="text-xl md:text-2xl text-text/60 max-w-3xl mx-auto">
          Join thousands of satisfied users and be part of an active community building the future of music listening on the desktop.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a href="https://github.com/AlirezaKJ/BetterSoundCloud/releases" target="_blank" rel="noopener" 
             class="px-10 py-5 rounded-xl font-bold text-xl text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
             style="background: linear-gradient(135deg, var(--sc-orange-500), var(--sc-orange-700));">
            Download BetterSoundCloud
          </a>
          <a href="https://github.com/AlirezaKJ/BetterSoundCloud" target="_blank" rel="noopener"
             class="px-10 py-5 bg-white hover:bg-primary-50 border-2 border-primary-200 hover:border-primary-300 rounded-xl font-bold text-xl text-primary-700 transition-all duration-300 hover:shadow-lg">
            Explore Source Code
          </a>
        </div>
        
        <div class="mt-16 pt-12 border-t border-primary-200">
          <div class="flex flex-wrap justify-center gap-8 text-text/60">
            <a href="https://github.com/AlirezaKJ/BetterSoundCloud" target="_blank" rel="noopener" class="hover:text-primary-600 transition-colors flex items-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <span>GitHub</span>
            </a>
            <a href="https://buymeacoffee.com/alirezakj" target="_blank" rel="noopener" class="hover:text-primary-600 transition-colors flex items-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>
              <span>Support Project</span>
            </a>
            <a href="https://alirezakj.com" target="_blank" rel="noopener" class="hover:text-primary-600 transition-colors flex items-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              <span>Developer Portfolio</span>
            </a>
          </div>
          
          <p class="text-sm text-text/50 mt-8 max-w-3xl mx-auto">
            BetterSoundCloud is an independent project built with passion by the community. It is not affiliated with or endorsed by SoundCloud, Inc. SoundCloud is a trademark of SoundCloud Limited.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
