<script>
  import { lenisStore, scrollState } from '$lib/stores/scroll';

  let expandBottom = false;
  let menuOpen = false;
  let expandTimeout;

  function scrollToTop(e) {
    e.preventDefault();
    $lenisStore?.scrollTo(0);
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  $: ontop = $scrollState.scroll < 1;
  $: onbottom = $scrollState.limit > 0 && $scrollState.scroll >= $scrollState.limit - 1;
  $: scrollingDirection = $scrollState.direction; // 1: down, 0: idle, -1: up

  $: console.log(scrollingDirection);

  // Delay the expansion when reaching bottom
  $: if (onbottom) {
    clearTimeout(expandTimeout);
    expandTimeout = setTimeout(() => {
      expandBottom = true;
    }, 500);
  } else {
    clearTimeout(expandTimeout);
    expandBottom = false;
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'BetterSoundCloud', href: '/bsc' },
    { name: 'PeriodicTable', href: 'https://ptable.alirezakj.com/' },
    { name: 'Font Explorer', href: 'https://fontexplorer.net/' }
  ];

  const portfolioLinks = [
    { name: 'About', href: '/#header' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experiences', href: '/#experiences' },
    { name: 'Education', href: '/#education' },
    { name: 'Contact Me', href: '/#contact' }
  ]
</script>

<nav class="flex justify-end items-center w-full h-36 px-4 sm:px-6 z-1">
  <div class={`transition-all duration-500 absolute md:fixed top-0 z-1 ${ontop || expandBottom || menuOpen  ? 'left-4 md:left-30' : 'left-4'} z-50`} style={onbottom && !menuOpen ? 'top: calc(100vh - 10.5rem);' : ''}> <!-- 6 (24) + 12 (48) + 12 (48) = 120 -->
    <a href="/" on:click={scrollToTop} class="font-serif flex justify-center items-center h-36">
      <div id="letter" class={`flex justify-center items-center transition-all duration-500 ${ontop || expandBottom || menuOpen ? 'w-full' : 'w-10 h-10 sm:w-12 sm:h-12'}`}>
        <span class={`flex mix-blend-difference transition-all duration-500 text-4xl sm:text-5xl md:text-6xl leading-loose`}>A<span class={`${ontop || expandBottom || menuOpen ? 'w-full' : 'w-0'} transition-all duration-500 overflow-hidden whitespace-nowrap`} id="fullname">lireza Karimi Jafari</span></span>
      </div>
      <div 
      style="transition-duration: 150ms; transition-property: opacity, rotate; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-delay: 500ms, 0ms;" 
      class={`h-10 w-10 sm:h-12 sm:w-12 ${ontop || expandBottom || menuOpen ? 'opacity-0' : 'opacity-100'}  overflow-hidden flex justify-center ${scrollingDirection == 1 ? 'rotate-90' : ''} ${scrollingDirection == -1 ? '-rotate-90' : ''} items-center origin-[-18px_18px] sm:origin-[-24px_24px]`} id="arrow">
        <svg class="w-full fill-text scale-125" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>
      </div>
    </a>
  </div>
  <div class="links flex gap-8 text-2xl">
    <div class="icon absolute md:fixed top-13.5 md:top-12 right-4 md:right-6 items-center justify-center w-10 h-10 md:w-12 md:h-12 fill-text cursor-pointer z-50" on:click={toggleMenu} on:keydown={() => {}}>
      {#if menuOpen}
        <!-- Close Button -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="transition-all duration-300"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
      {:else}
        <!-- Hamburger Button -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="transition-all duration-300"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      {/if}
    </div>
    <!-- <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/experiences">Experiences</a>
    <a href="/education">Education</a>
    <a href="/contact">Contact Me</a> -->

  </div>
</nav>

<div id="fullnav" class={`fixed inset-0 z-40 bg-gradient-to-bl from-background/90 via-background/90 to-primary-100/90 backdrop-blur-xl transition-transform duration-500 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
  <!-- Top Empty Section for "A" Animation -->
  <div class="h-36"></div>

  <!-- Menu Content -->
  <div class="max-w-[var(--keyw)] mx-auto w-full flex flex-col justify-center items-start space-y-8 md:space-y-12 px-4 md:px-0">
    
    <div class="links grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-8">

      <!-- Portfolio Links -->
      <div class="">
        <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-4 md:mb-6">Portfolio</h2>
        <div class="space-y-3 sm:space-y-4 md:space-y-6">
          {#each portfolioLinks as link}
            <a 
              href={link.href} 
              on:click={closeMenu}
              class="block text-2xl sm:text-3xl md:text-4xl font-bold text-primary-950 hover:text-primary-600 transition-colors duration-300 font-serif"
            >
              {link.name}
            </a>
          {/each}
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="">
        <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-4 md:mb-6">Navigation</h2>
        <div class="space-y-3 sm:space-y-4 md:space-y-6">
          {#each navLinks as link}
            <a 
              href={link.href} 
              on:click={closeMenu}
              class="block text-2xl sm:text-3xl md:text-4xl font-bold text-primary-950 hover:text-primary-600 transition-colors duration-300 font-serif"
            >
              {link.name}
            </a>
          {/each}
        </div>
      </div>

    </div>
    


  </div>
</div>