<script>
  import { lenisStore, scrollState } from '$lib/stores/scroll';

  let expandBottom = false;

  function scrollToTop(e) {
    e.preventDefault();
    $lenisStore?.scrollTo(0);
  }

  $: ontop = $scrollState.scroll < 1;
  $: onbottom = $scrollState.limit > 0 && $scrollState.scroll >= $scrollState.limit - 1;
  $: scrollingDirection = $scrollState.direction; // 1: down, 0: idle, -1: up

  $: console.log(scrollingDirection);

  // Delay the expansion when reaching bottom
  $: if (onbottom) {
    setTimeout(() => {
      expandBottom = true;
    }, 500);
  } else {
    expandBottom = false;
  }
</script>

<nav class="flex justify-end items-center w-full h-36 px-6 z-1">
  <div class={`transition-all duration-500 fixed top-0 z-1 ${ontop || expandBottom ? 'left-30' : 'left-6'}`} style={onbottom ? 'top: calc(100vh - 10.5rem);' : ''}> <!-- 6 (24) + 12 (48) + 12 (48) = 120 -->
    <a href="/" on:click={scrollToTop} class="font-serif flex justify-center items-center h-36">
      <div id="letter" class={`flex justify-center items-center transition-all duration-500 ${ontop || expandBottom ? 'w-full' : 'w-12 h-12'}`}>
        <span class={`flex mix-blend-difference transition-all duration-500 text-6xl leading-loose`}>A<span class={`${ontop || expandBottom ? 'w-full' : 'w-0'} transition-all duration-500 overflow-hidden whitespace-nowrap`} id="fullname">lireza Karimi Jafari</span></span>
      </div>
      <div 
      style="transition-duration: 150ms; transition-property: opacity, rotate; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-delay: 500ms, 0ms;" 
      class={`h-12 w-12 ${ontop || expandBottom ? 'opacity-0' : 'opacity-100'}  overflow-hidden flex justify-center ${scrollingDirection == 1 ? 'rotate-90' : ''} ${scrollingDirection == -1 ? '-rotate-90' : ''} items-center origin-[-24px_24px]`} id="arrow">
        <svg class="w-full fill-text scale-125" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>
      </div>
    </a>
  </div>
  <div class="links flex gap-8 text-2xl">
    <div class="icon flex fixed top-12 right-6 items-center justify-center w-12 h-12 fill-text cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </div>
    <!-- <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/experiences">Experiences</a>
    <a href="/education">Education</a>
    <a href="/contact">Contact Me</a> -->

  </div>
</nav>