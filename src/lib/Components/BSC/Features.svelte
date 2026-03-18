<script>

  let expandedFeature = 'current'; // 'current' or 'upcoming'

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
    "macOS Packages",
    "Add Google Cast Support",
    "Add Google Cast",
    "Proxy Integration",
    "Deep Linking",
    "Offline Listening",
    "Geographic Bypass",
    "Enhanced Shuffle",
    "Fullscreen Waveforms",
  ];
</script>

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
            class="px-8 py-3 rounded-lg font-bold transition-all duration-300 {expandedFeature === 'current' ? 'bg-white shadow-md text-accent' : 'text-text/60'}"
            on:click={() => expandedFeature = 'current'}>
            Current Features
          </button>
          <button 
            class="px-8 py-3 rounded-lg font-bold transition-all duration-300 {expandedFeature === 'upcoming' ? 'bg-white shadow-md' : 'text-text/60'}"
            style:color={expandedFeature === 'upcoming' ? 'var(--sc-orange-600)' : ''}
            on:click={() => expandedFeature = 'upcoming'}>
            Upcoming Roadmap
          </button>
        </div>
      </div>
      
      <!-- Current Features -->
      {#if expandedFeature === 'current'}
        <div class="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] gap-10 lg:gap-12">
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

          <div class="lg:sticky lg:top-12 h-fit">
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