<script>
  let expandedFeature = 'current'; // 'current' or 'upcoming'

  const currentFeatures = [
    { 
      title: "Full Adblocker", 
      description: "Using @cliqz/adblocker-electron there is no more ads in between the songs.",
      videoUrl: "",
      image: {
        title: "Ad Shield",
        subtitle: "Blocks every interruption",
        bg: "linear-gradient(135deg, var(--sc-orange-100), var(--sc-orange-200))",
        icon: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14-4-4 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z"
      }
    },
    { 
      title: "Discord RPC", 
      description: "Showcase what you are listening to on your discord status",
      videoUrl: "",
      image: {
        title: "Rich Presence",
        subtitle: "Live Discord status",
        bg: "linear-gradient(135deg, var(--accent-100), var(--accent-200))",
        icon: "M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v4l4-4h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM11 13H7V9h4v4zm6 0h-4V9h4v4z"
      }
    },
    { 
      title: "Song Downloader", 
      description: "Download any of your favorite songs as an mp3 for offline listening",
      videoUrl: "",
      image: {
        title: "Offline Downloads",
        subtitle: "Save tracks as MP3",
        bg: "linear-gradient(135deg, var(--primary-100), var(--primary-200))",
        icon: "M5 20h14v-2H5v2zM12 2v12l4-4 1.41 1.41L12 17.83l-5.41-5.42L8 10l4 4V2z"
      }
    },
    { 
      title: "Reworked UI/UX", 
      description: "removed unnecessary buttons and sections for optimal desktop app experience",
      videoUrl: "",
      image: {
        title: "Reworked Interface",
        subtitle: "Cleaner desktop flow",
        bg: "linear-gradient(135deg, var(--sc-orange-50), var(--primary-100))",
        icon: "M3 5h18v2H3V5zm4 6h14v2H7v-2zm-4 6h18v2H3v-2z"
      }
    },
    { 
      title: "Synced Lyrics", 
      description: "using LRCLIB API you can see the playing song lyrics highlighted as you playthrough",
      videoUrl: "",
      image: {
        title: "Live Lyrics",
        subtitle: "Highlight as song plays",
        bg: "linear-gradient(135deg, var(--secondary-100), var(--primary-100))",
        icon: "M3 6h10v2H3V6zm0 4h10v2H3v-2zm0 4h6v2H3v-2zm14-8v7.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h3V6h-5z"
      }
    },
    { 
      title: "Different Themes", 
      description: "customize your Soundcloud experience using community built custom themes",
      videoUrl: "",
      image: {
        title: "Theme Library",
        subtitle: "Community-made skins",
        bg: "linear-gradient(135deg, var(--accent-50), var(--accent-200))",
        icon: "M12 2C6.49 2 2 6.04 2 11c0 3.31 2.69 6 6 6h1.77c.28 0 .5.22.5.5 0 .12-.05.23-.13.33-.41.47-.64 1.06-.64 1.67 0 1.38 1.12 2.5 2.5 2.5 4.41 0 8-3.59 8-8C20 6.59 16.41 2 12 2z"
      }
    },
    { 
      title: "LastFM Scrobbing", 
      description: "track what you are listening for LastFM",
      videoUrl: "",
      image: {
        title: "Last.fm Scrobbling",
        subtitle: "Track every song played",
        bg: "linear-gradient(135deg, var(--secondary-100), var(--secondary-200))",
        icon: "M5 9h3v10H5V9zm5-4h3v14h-3V5zm5 7h3v7h-3v-7z"
      }
    },
    { 
      title: "Lazy Loader", 
      description: "Load your playlist with the auto scroll for a better shuffle experience",
      videoUrl: "",
      image: {
        title: "Smart Lazy Loader",
        subtitle: "Auto-scroll for shuffle",
        bg: "linear-gradient(135deg, var(--primary-100), var(--accent-100))",
        icon: "M7 10l5 5 5-5H7zm0-6l5 5 5-5H7zm0 12l5 5 5-5H7z"
      }
    },
    { 
      title: "Custom Scripting", 
      description: "injected your own stylesheets and script to customize the native soundcloud webapp as you like",
      videoUrl: "",
      image: {
        title: "Custom Scripting",
        subtitle: "Inject CSS & JavaScript",
        bg: "linear-gradient(135deg, var(--primary-100), var(--accent-100))",
        icon: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
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
                {#if activeFeature.videoUrl}
                  {#key activeFeature.title}
                    <div class="aspect-[4/3] bg-black">
                      <video
                        class="w-full h-full object-cover"
                        controls
                        autoplay
                        muted
                        loop
                        playsinline
                        preload="metadata"
                        src={activeFeature.videoUrl}>
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  {/key}
                {:else}
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
                {/if}
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
            <div class="bg-gradient-to-br from-[var(--sc-orange-950)] to-[var(--sc-orange-950)] rounded-lg p-4 border border-[var(--sc-orange-500)] hover:shadow-md transition-all duration-300">
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