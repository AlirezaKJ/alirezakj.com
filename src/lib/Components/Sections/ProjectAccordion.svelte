<script>
  let {
    name="BetterSoundCloud",
    date="May 2023", 
    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore, adipisci omnis error commodi voluptas in est blanditiis. Consectetur, soluta expedita! Ab dolorum sunt cum perferendis fugiat quasi, porro amet! Fuga quidem exercitationem dolor assumenda quia, eaque natus, debitis illo voluptas unde, molestiae beatae? A in, at tenetur repudiandae nulla debitis sapiente vero nisi impedit labore? Reiciendis ratione nesciunt nostrum.", 
    tags=["Html", "CSS", "JavaScript"],
    git="",
    web="",
    image="",
  } = $props();

  let isHovered = $state(false);
  let isToggled = $state(false);

  const toggleAccordion = () => {
    isToggled = !isToggled;
  };

  const handleToggleKeydown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleAccordion();
    }
  };

</script>

<div
  id="accordion"
  role="group"
  class={`flex flex-col justify-between overflow-hidden px-4 sm:px-6 transition-all duration-600 bg-accent-100 mb-6 md:mb-8 shadow-md hover:shadow-lg border-2 border-transparent ${isToggled ? "border-primary-300!" : ""}`}
  onmouseenter={() => (isHovered = true)}
  onmouseleave={() => (isHovered = false)}
>
  <!-- Title - Fixed height -->
  <div
    role="button"
    tabindex="0"
    class="h-20 sm:h-28 flex items-center justify-between flex-shrink-0 gap-4 cursor-pointer"
    onclick={toggleAccordion}
    onkeydown={handleToggleKeydown}
  >
    <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif">{name}</h3>
    <div class="flex flex-row gap-3 sm:gap-6 flex-shrink-0">
      {#if web !== ""}
        <a class="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 hover:scale-120 fill-text" href="{web}" aria-label="Web" onclick={(event) => event.stopPropagation()}>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 -960 960 960"><title>Web</title><path d="M838-65 720-183v89h-80v-226h226v80h-90l118 118-56 57ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 20-2 40t-6 40h-82q5-20 7.5-40t2.5-40q0-20-2.5-40t-7.5-40H654q3 20 4.5 40t1.5 40q0 20-1.5 40t-4.5 40h-80q3-20 4.5-40t1.5-40q0-20-1.5-40t-4.5-40H386q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h134v80H404q12 43 31 82.5t45 75.5q20 0 40-2.5t40-4.5v82q-20 2-40 4.5T480-80ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm34-240h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm172 462q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5Zm28-462h152q-12-43-31-82.5T480-798q-26 36-45 75.5T404-640Zm234 0h118q-29-51-73-87.5T584-782q18 34 31.5 69.5T638-640Z"/></svg>
        </a>
      {/if}
      {#if git !== ""}
        <a class="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 hover:scale-120 fill-text" href="{git}" aria-label="Github" onclick={(event) => event.stopPropagation()}>
          <svg class="scale-90" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" ><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
      {/if}
    </div>
  </div>
  
  <div
    class={`grid transition-all duration-600 ease-in-out ${isHovered || isToggled ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"}`}
  >
    <div class="overflow-hidden">
      <div
        role="button"
        tabindex="0"
        class="flex-1 flex flex-col cursor-pointer"
        onclick={toggleAccordion}
        onkeydown={handleToggleKeydown}
      >
        <!-- Description - Middle -->
        <div class="flex-1 overflow-hidden py-2 sm:py-3">
          <div class="grid items-start gap-4 md:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,24rem)]">
            <p class="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">{description}</p>

            {#if image !== ""}
              <div class="w-auto overflow-hidden rounded-lg bg-background-100 transition">
                <img
                  src={image}
                  alt={`${name} preview`}
                  class="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            {/if}
          </div>
        </div>

        <!-- Tags and Date - Bottom -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center flex-shrink-0 my-4 sm:my-6 gap-3 sm:gap-4">
          <div class="tags flex flex-wrap gap-2">
            {#each tags as tag}
              <span class="bg-accent-200 text-accent-800 px-2 py-1 sm:px-3 sm:py-2 rounded shadow-lg text-xs sm:text-sm">{tag}</span>
            {/each}
          </div>
          <div class="text-xs sm:text-sm text-primary-300 flex-shrink-0">
            {date}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>