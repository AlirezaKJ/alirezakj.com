<script>
  import { onDestroy, onMount } from 'svelte';
  import { lenisStore } from '$lib/stores/scroll';

  const collections = [
    {
      title: 'Mofid',
      slug: 'Mofid',
      images: [
        'IMG_5342.JPG', 'IMG_5348.JPG', 'IMG_5350.JPG', 'IMG_5351.JPG', 'IMG_5352.JPG',
        'IMG_5353.JPG', 'IMG_5354.JPG', 'IMG_5356.JPG', 'IMG_5359.JPG', 'IMG_5368.JPG',
        'IMG_5372.JPG', 'IMG_5375.JPG', 'IMG_5379.JPG', 'IMG_5383.JPG', 'IMG_5385.JPG',
        'IMG_5392.JPG', 'IMG_5396.JPG', 'IMG_5399.JPG', 'IMG_5474.JPG', 'IMG_5475.JPG',
        'IMG_5476.JPG', 'IMG_5478.JPG', 'IMG_5479.JPG', 'IMG_5484.JPG', 'IMG_5487.JPG',
        'IMG_5490.JPG', 'IMG_5598.JPG', 'IMG_5602.JPG', 'IMG_5615.JPG', 'IMG_5616.JPG',
        'IMG_5642.JPG', 'IMG_5643.JPG', 'IMG_5644.JPG', 'IMG_5645.JPG', 'IMG_5646.JPG',
        'IMG_5648.JPG', 'IMG_5703.JPG', 'IMG_5704.JPG', 'IMG_5714.JPG', 'IMG_5804.JPG',
        'IMG_5817.JPG', 'IMG_5825.JPG', 'IMG_5826.JPG', 'IMG_5827.JPG', 'IMG_5828.JPG',
        'IMG_5829.JPG', 'IMG_5830.JPG', 'IMG_5858.JPG', 'IMG_5862.JPG', 'IMG_5872.JPG',
        'IMG_5875.JPG', 'IMG_5885.JPG', 'IMG_5893.JPG', 'IMG_5895.JPG', 'IMG_5897.JPG',
        'IMG_5898.JPG', 'IMG_5899.JPG', 'IMG_5900.JPG', 'IMG_5902.JPG', 'IMG_5903.JPG',
        'IMG_5904.JPG', 'IMG_5905.JPG', 'IMG_5907.JPG'
      ]
    },
    {
      title: 'High Shutter',
      slug: 'High Shutter',
      images: [
        'IMG_5291.JPG', 'IMG_5293.JPG', 'IMG_5294.JPG', 'IMG_5295.JPG', 'IMG_5296.JPG',
        'IMG_5297.JPG', 'IMG_5298.JPG', 'IMG_5299.JPG', 'IMG_5301.JPG', 'IMG_5302.JPG',
        'IMG_5303.JPG', 'IMG_5304.JPG', 'IMG_5833.JPG', 'IMG_5834.JPG', 'IMG_5839.JPG'
      ]
    },
    {
      title: 'Other',
      slug: 'Other',
      images: ['IMG_5442.JPG', 'IMG_5556.JPG', 'IMG_5567.JPG', 'IMG_5676.JPG']
    }
  ];

  const totalCount = collections.reduce((sum, c) => sum + c.images.length, 0);

  const imgSrc = (slug, name) => `/gallery/${encodeURIComponent(slug)}/${name}`;

  let lightboxOpen = false;
  let activeCollection = 0;
  let activeImage = 0;

  $: currentCollection = collections[activeCollection];
  $: currentImage = currentCollection?.images[activeImage];

  function openLightbox(ci, ii) {
    activeCollection = ci;
    activeImage = ii;
    lightboxOpen = true;
    $lenisStore?.stop();
  }

  function closeLightbox() {
    lightboxOpen = false;
    $lenisStore?.start();
  }

  function next() {
    if (!lightboxOpen) return;
    const len = currentCollection.images.length;
    activeImage = (activeImage + 1) % len;
  }

  function prev() {
    if (!lightboxOpen) return;
    const len = currentCollection.images.length;
    activeImage = (activeImage - 1 + len) % len;
  }

  function handleKeydown(event) {
    if (!lightboxOpen) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      next();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prev();
    }
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) closeLightbox();
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', handleKeydown);
    }
    $lenisStore?.start();
  });
</script>

<!-- <header class="flex flex-col justify-start relative overflow-hidden pb-16 md:pb-24">
  <div class="max-w-[var(--keyw)] mx-auto w-full px-4 md:px-0">
    <div class="flex flex-col gap-4 md:gap-6">
      <h1 class="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-primary-950">
        <span class="block">Gallery</span>
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl text-primary-700 font-light max-w-3xl tracking-wide">
        A collection of {totalCount} photographs across {collections.length} bodies of work.
      </p>
    </div>
  </div>
</header>

<div class="max-w-[var(--keyw)] mx-auto w-full px-4 md:px-0 space-y-20 md:space-y-32 pb-24">
  {#each collections as collection, ci}
    <section>
      <div class="mb-6 md:mb-10 flex items-end justify-between gap-6 border-b border-primary-200 pb-4">
        <h2 class="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-primary-900 leading-none">
          {collection.title}
        </h2>
        <span class="font-sans text-sm md:text-base text-primary-600 tracking-wide pb-1">
          {collection.images.length} {collection.images.length === 1 ? 'image' : 'images'}
        </span>
      </div>

      <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
        {#each collection.images as image, ii}
          <button
            type="button"
            class="mb-4 md:mb-6 block w-full break-inside-avoid overflow-hidden rounded-xl bg-primary-100 group cursor-zoom-in"
            on:click={() => openLightbox(ci, ii)}
            aria-label={`Open ${collection.title} image ${ii + 1}`}
          >
            <img
              src={imgSrc(collection.slug, image)}
              alt={`${collection.title} ${ii + 1}`}
              class="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </button>
        {/each}
      </div>
    </section>
  {/each}
</div>

{#if lightboxOpen}
  <div
    class="fixed inset-0 z-[100] flex items-center justify-center bg-background-950/95 backdrop-blur-sm"
    on:click={handleBackdropClick}
    on:keydown={() => {}}
    role="dialog"
    tabindex="-1"
    aria-modal="true"
    aria-label={`${currentCollection.title} image viewer`}
  >
    <button
      type="button"
      class="absolute top-4 right-4 md:top-6 md:right-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary-200/30 bg-background-900/40 text-background-50 hover:bg-background-50 hover:text-background-950 transition-all duration-300 z-10"
      on:click={closeLightbox}
      aria-label="Close viewer"
    >
      <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <button
      type="button"
      class="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-primary-200/30 bg-background-900/40 text-background-50 hover:bg-background-50 hover:text-background-950 transition-all duration-300 z-10"
      on:click|stopPropagation={prev}
      aria-label="Previous image"
    >
      <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      type="button"
      class="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-primary-200/30 bg-background-900/40 text-background-50 hover:bg-background-50 hover:text-background-950 transition-all duration-300 z-10"
      on:click|stopPropagation={next}
      aria-label="Next image"
    >
      <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <div class="flex h-full w-full items-center justify-center p-4 md:p-16">
      <img
        src={imgSrc(currentCollection.slug, currentImage)}
        alt={`${currentCollection.title} ${activeImage + 1}`}
        class="max-h-full max-w-full object-contain select-none"
        draggable="false"
      />
    </div>

    <div class="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background-900/60 text-background-50 font-sans text-sm md:text-base tracking-wide">
      <span class="font-serif">{currentCollection.title}</span>
      <span class="opacity-50 mx-2">·</span>
      <span>{activeImage + 1} / {currentCollection.images.length}</span>
    </div>
  </div>
{/if} -->

<header class="w-full h-screen flex flex-col items-center justify-center">
  <div class="content flex-col items-center text-center px-4 w-7lg">
    <h2 class="text-7xl font-serif">To be finished</h2>
  </div>
</header>