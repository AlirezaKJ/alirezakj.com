<script>
  import Header from '$lib/Components/BSC/BSCHeader.svelte';
	import Features from '$lib/Components/BSC/Features.svelte';
	import WhyChoose from '$lib/Components/BSC/WhyChoose.svelte';
import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  
  let expandedFaq = null;
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
      answer: "No. Since BetterSoundCloud's launch, no users have reported account bans from using the client. We operate within SoundCloud's terms of service by simply providing an alternative interface to access your account."
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
  
  
</script>

<svelte:head>
  <title>BetterSoundCloud - Enhanced SoundCloud Desktop Client</title>
</svelte:head>

<div class="bsc-page w-full">
  
  <Header starCount={starCount.toLocaleString()} />

  <WhyChoose />

  <Features />

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
            class="px-8 py-3 rounded-lg font-bold transition-all duration-300 {expandedInstallation === 'easy' ? 'bg-white shadow-md text-accent' : 'text-text/60'}"
            on:click={() => expandedInstallation = 'easy'}>
            Windows
          </button>
          <button 
            class="px-8 py-3 rounded-lg font-bold transition-all duration-300 {expandedInstallation === 'linux' ? 'bg-white shadow-md' : 'text-text/60'}"
            style:color={expandedInstallation === 'linux' ? 'var(--sc-orange-600)' : ''}
            on:click={() => expandedInstallation = 'linux'}>
            Linux
          </button>
          <button 
            class="px-8 py-3 rounded-lg font-bold transition-all duration-300 {expandedInstallation === 'manual' ? 'bg-white shadow-md text-accent' : 'text-text/60'}"
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
            
            <!-- Linux Auto Installer -->
            <div class="bg-accent-100 rounded-2xl p-8 shadow-md border border-primary-100">
              <h3 class="text-2xl font-bold mb-4">🐧 Linux Auto Installer</h3>
              <p class="text-text/70 mb-6">Install BetterSoundCloud on Linux with one simple command.</p>
              
              <div class="space-y-6">
                <!-- What the installer does -->
                <div>
                  <p class="font-semibold text-text/80 mb-3">The installer will:</p>
                  <ul class="space-y-2 text-text/70">
                    <li class="flex items-start space-x-3">
                      <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Install BetterSoundCloud automatically in your home directory</span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Clone or update the repository</span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Install project dependencies</span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="fill: var(--sc-orange-500);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      <span>Create a .desktop launcher entry</span>
                    </li>
                  </ul>
                </div>
                
                <!-- Supported package managers -->
                <div>
                  <p class="font-semibold text-text/80 mb-3">Supported package managers:</p>
                  <div class="grid grid-cols-2 gap-3">
                    <div class="flex items-center space-x-2 text-text/70">
                      <span class="inline-flex items-center rounded-lg px-3 py-1 text-sm font-semibold bg-red-100 text-red-700">apt</span>
                      <span class="text-sm">Debian, Ubuntu</span>
                    </div>
                    <div class="flex items-center space-x-2 text-text/70">
                      <span class="inline-flex items-center rounded-lg px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-700">pacman</span>
                      <span class="text-sm">Arch, Manjaro</span>
                    </div>
                    <div class="flex items-center space-x-2 text-text/70">
                      <span class="inline-flex items-center rounded-lg px-3 py-1 text-sm font-semibold bg-purple-100 text-purple-700">dnf</span>
                      <span class="text-sm">Fedora, RHEL</span>
                    </div>
                    <div class="flex items-center space-x-2 text-text/70">
                      <span class="inline-flex items-center rounded-lg px-3 py-1 text-sm font-semibold bg-green-100 text-green-700">zypper</span>
                      <span class="text-sm">openSUSE</span>
                    </div>
                  </div>
                </div>
                
                <!-- One-line install command -->
                <div>
                  <p class="font-semibold text-text/80 mb-3">💻 One-line install command:</p>
                  <div class="bg-background rounded-lg p-4 font-mono text-sm border border-primary-100 overflow-x-auto">
                    bash &lt;(curl -fsSL https://raw.githubusercontent.com/ULTRA-VAGUE/BetterSoundCloud-On-Linux/main/install_bettersoundcloud.sh)
                  </div>
                  <p class="text-text/60 text-sm mt-3">Simply copy and paste this command into your terminal to begin automatic installation.</p>
                </div>
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
             class="px-10 py-5 bg-primary-50 hover:bg-primary-100 border-2 border-primary-200 hover:border-primary-300 rounded-xl font-bold text-xl text-primary-700 transition-all duration-300 hover:shadow-lg">
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
