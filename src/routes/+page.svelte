<script>
  import { onMount } from 'svelte';

  const images = [
    "https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=400&auto=format&fit=crop", // Perfume
    "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=400&auto=format&fit=crop", // Tube
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop", // Ring/Blue
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=400&auto=format&fit=crop", // Interior
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop"  // Stretching
  ];

  let showCookieBanner = $state(true);
</script>

<div class="font-sans text-[#111] antialiased bg-white selection:bg-black selection:text-white">
  <!-- Header -->
  <header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-5 bg-white/90 backdrop-blur-sm">
    <div class="text-xl font-medium tracking-tight">New Generation</div>
    <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
      <a href="#" class="flex items-center gap-1.5">
        <span class="bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">NEW</span>
        Kepler
      </a>
      <a href="#" class="hover:opacity-70 transition-opacity">Developer</a>
      <a href="#" class="hover:opacity-70 transition-opacity">Work with us</a>
      <a href="#" class="hover:opacity-70 transition-opacity">Blog</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="pt-40 pb-20 px-6 max-w-[1400px] mx-auto">
    <div class="max-w-4xl mb-24">
      <h1 class="text-6xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
        A new kind of AI<br>for commerce
      </h1>
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <p class="text-lg md:text-xl max-w-md leading-relaxed text-gray-800">
          Deliver AI-native commerce experiences across chat, agents, and generative interfaces.
        </p>
        <button class="bg-black text-white px-6 py-3 text-sm font-medium rounded-sm hover:bg-gray-800 transition-colors">
          Request demo
        </button>
      </div>
    </div>

    <!-- Hero Images Grid -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      {#each images as src, i}
        <div class="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img {src} alt="Commerce item {i}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      {/each}
    </div>
  </section>

  <!-- Floating Images Section -->
  <section class="py-32 px-6 max-w-[1400px] mx-auto relative min-h-[800px]">
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <h2 class="text-2xl md:text-3xl font-medium text-center max-w-2xl leading-snug bg-white/80 backdrop-blur-sm p-4 rounded-xl">
        Transform your online store into an AI-native commerce platform, for both humans and their agents.
      </h2>
    </div>

    <!-- Scattered Images with 'Add to cart' -->
    <div class="relative w-full h-full min-h-[800px]">
      <!-- Image 1: Tube (Left) -->
      <div class="absolute top-20 left-[10%] w-64 aspect-[3/4]">
        <img src={images[1]} alt="Tube" class="w-full h-full object-cover rounded-sm shadow-lg" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div class="w-3 h-3 bg-white rounded-full mx-auto mb-2 animate-pulse"></div>
             <button class="bg-white/90 backdrop-blur text-xs px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap hover:bg-white transition-colors">Add to cart</button>
        </div>
      </div>

      <!-- Image 2: Interior (Center Top) -->
      <div class="absolute top-0 left-[45%] w-56 aspect-[3/4]">
        <img src={images[3]} alt="Interior" class="w-full h-full object-cover rounded-sm shadow-lg" />
        <div class="absolute top-1/3 left-1/3">
             <div class="w-3 h-3 bg-white rounded-full mb-2 animate-pulse"></div>
             <button class="bg-white/90 backdrop-blur text-xs px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap hover:bg-white transition-colors">Add to cart</button>
        </div>
      </div>

       <!-- Image 3: Stretching (Right Top) -->
      <div class="absolute top-40 right-[5%] w-80 aspect-video">
        <img src={images[4]} alt="Stretching" class="w-full h-full object-cover rounded-sm shadow-lg" />
        <div class="absolute bottom-1/3 right-1/3">
             <div class="w-3 h-3 bg-white rounded-full mb-2 animate-pulse ml-auto"></div>
             <button class="bg-white/90 backdrop-blur text-xs px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap hover:bg-white transition-colors">Add to cart</button>
        </div>
      </div>

      <!-- Image 4: Perfume (Left Bottom) -->
      <div class="absolute bottom-20 left-[5%] w-56 aspect-[3/4]">
        <img src={images[0]} alt="Perfume" class="w-full h-full object-cover rounded-sm shadow-lg" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <button class="bg-white/90 backdrop-blur text-xs px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap hover:bg-white transition-colors">Add to cart</button>
        </div>
      </div>

      <!-- Image 5: Ring (Center Bottom) -->
      <div class="absolute bottom-0 left-[35%] w-48 aspect-[3/4]">
        <img src={images[2]} alt="Ring" class="w-full h-full object-cover rounded-sm shadow-lg" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <button class="bg-white/90 backdrop-blur text-xs px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap hover:bg-white transition-colors">Add to cart</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Dark Section 1: Natural Language -->
  <section class="bg-[#111] text-white py-32 px-6">
    <div class="max-w-[1400px] mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
        <h2 class="text-4xl md:text-5xl font-medium tracking-tight max-w-xl">
          Natural language,<br>generative experiences
        </h2>
        <p class="text-gray-400 text-lg max-w-md leading-relaxed">
          Let customers ask for what they want in their own words and generate real-time experiences tailored to their intent and context.
        </p>
      </div>

      <!-- Interactive Box -->
      <div class="w-full aspect-video bg-[#1a1a1a] rounded-sm mb-16 flex items-center justify-center relative overflow-hidden group">
        <div class="text-5xl md:text-7xl font-light tracking-tight text-white/90">
          Affordab<span class="animate-pulse">|</span>
        </div>
        <!-- Subtle grid or gradient could go here -->
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
        <div>
          <h3 class="text-lg font-medium mb-3">Invite conversation</h3>
          <p class="text-gray-400 leading-relaxed">Let customers search with natural language.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium mb-3">Generate on demand</h3>
          <p class="text-gray-400 leading-relaxed">Instantly assemble products, images, and content.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium mb-3">Always on brand</h3>
          <p class="text-gray-400 leading-relaxed">Responsive experiences that stay true to your brand.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Dark Section 2: Connect Catalog -->
  <section class="bg-[#111] text-white py-32 px-6 border-t border-white/5">
    <div class="max-w-[1400px] mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
        <h2 class="text-4xl md:text-5xl font-medium tracking-tight">
          Connect your catalog to AI
        </h2>
        <p class="text-gray-400 text-lg max-w-md leading-relaxed">
          Customers are discovering and buying through AI. New Gen ensures your products are ready.
        </p>
      </div>

      <!-- Interactive Box -->
      <div class="w-full aspect-[2/1] bg-[#1a1a1a] rounded-sm flex items-center justify-center">
         <div class="text-5xl md:text-7xl font-light tracking-tight text-white/90">
          Wh<span class="animate-pulse">|</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Light Gray Section -->
  <section class="bg-[#f5f5f5] py-24 px-6">
    <div class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 class="text-lg font-medium mb-3 text-[#111]">Answer in AI chat</h3>
        <p class="text-gray-600 leading-relaxed">Connect your catalog to AI conversations.</p>
      </div>
      <div>
        <h3 class="text-lg font-medium mb-3 text-[#111]">Prepare for agentic commerce</h3>
        <p class="text-gray-600 leading-relaxed">Enable programmatic connections for agentic checkout.</p>
      </div>
      <div>
        <h3 class="text-lg font-medium mb-3 text-[#111]">Be discoverable at scale</h3>
        <p class="text-gray-600 leading-relaxed">Reach high-intent shoppers through AI-driven traffic.</p>
      </div>
    </div>
  </section>

  <!-- Built for Generative Commerce -->
  <section class="bg-[#f0f0f0] py-32 px-6">
    <div class="max-w-[1400px] mx-auto">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#111]">
          Built for generative commerce
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl leading-relaxed">
          New Gen combines your product data with AI-native generation to create content, interfaces, and insights tailored for how people shop in the AI era.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Visual -->
        <div class="bg-[#111] aspect-video rounded-xl flex items-center justify-center relative overflow-hidden perspective-1000">
           <!-- Abstract Wireframe Animation -->
           <div class="relative w-64 h-40 flex items-center justify-center transform-style-3d">
              {#each [0, 1, 2, 3, 4] as i}
                <div 
                  class="absolute w-32 h-48 border border-white/30 bg-white/5 backdrop-blur-sm rounded-sm transition-transform duration-500"
                  style="
                    transform: translateX({(i - 2) * 40}px) translateZ({Math.abs(i - 2) * -20}px) rotateY({(i - 2) * 10}deg);
                    z-index: {10 - Math.abs(i - 2)};
                  "
                ></div>
              {/each}
              <!-- Central Highlight -->
              <div class="absolute w-32 h-48 border border-white/60 shadow-[0_0_15px_rgba(255,255,255,0.2)] rounded-sm z-20"></div>
           </div>
        </div>

        <!-- List -->
        <div class="space-y-12 pt-4">
          <div class="group cursor-pointer">
            <h3 class="text-xl font-medium mb-3 text-[#111]">Generate premium content</h3>
            <p class="text-gray-600 leading-relaxed">Use your product data, brand voice, and cultural context to create rich, relevant content.</p>
          </div>
          <div class="group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
            <h3 class="text-xl font-medium mb-3 text-[#111]">Understand real intent</h3>
            <p class="text-gray-600 leading-relaxed">Get deeper insight into how customers think and search — powered by data from real conversations.</p>
          </div>
          <div class="group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
            <h3 class="text-xl font-medium mb-3 text-[#111]">Automate with control</h3>
            <p class="text-gray-600 leading-relaxed">Streamline tagging, merchandising, and copy without sacrificing curation.</p>
          </div>

          <div class="flex gap-4 pt-8">
             <button class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-800 hover:text-gray-800 transition-colors">←</button>
             <button class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-800 hover:text-gray-800 transition-colors">→</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Fast to Launch -->
  <section class="bg-[#fffcf8] py-32 px-6">
    <div class="max-w-[1400px] mx-auto">
      <h2 class="text-4xl md:text-5xl font-medium tracking-tight mb-20 text-[#111]">
        Fast to launch, easy to scale
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Card 1 -->
        <div>
          <div class="w-14 h-14 bg-[#111] text-white flex items-center justify-center rounded-sm mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <h3 class="text-lg font-medium mb-3 text-[#111]">Instant activation</h3>
          <p class="text-gray-600 leading-relaxed">Launch an AI subdomain in one click to handle AI-driven traffic.</p>
        </div>

        <!-- Card 2 -->
        <div>
          <div class="w-14 h-14 bg-[#111] text-white flex items-center justify-center rounded-sm mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium mb-3 text-[#111]">Adaptable approach</h3>
          <p class="text-gray-600 leading-relaxed">Use for campaigns, experiments, or your full site.</p>
        </div>

        <!-- Card 3 -->
        <div>
          <div class="w-14 h-14 bg-[#111] text-white flex items-center justify-center rounded-sm mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
          </div>
          <h3 class="text-lg font-medium mb-3 text-[#111]">Effortless integration</h3>
          <p class="text-gray-600 leading-relaxed">Plug into your setup — no engineering lift needed.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="px-6 py-12">
    <div class="max-w-[1400px] mx-auto border border-gray-100 rounded-xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-white shadow-sm">
      <div class="flex items-center gap-6">
        <div class="flex gap-1 h-8">
           <div class="w-2 bg-black h-full"></div>
           <div class="w-2 bg-black h-full"></div>
           <div class="w-2 bg-black h-full"></div>
           <div class="w-2 bg-black h-full opacity-50"></div>
        </div>
        <h2 class="text-2xl md:text-3xl font-medium tracking-tight">Would you like to see a demo?</h2>
      </div>
      <button class="bg-black text-white px-8 py-3 text-sm font-medium rounded-sm hover:bg-gray-800 transition-colors whitespace-nowrap">
        Yes, sign me up
      </button>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-white pt-20 pb-10 px-6 border-t border-gray-100">
    <div class="max-w-[1400px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-20">
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-xl font-medium mb-1">New Generation</h3>
          <p class="text-gray-500 text-lg">AI-Native Commerce</p>
        </div>

        <div>
          <ul class="space-y-4 text-sm font-medium">
            <li><a href="#" class="hover:underline">Get in touch</a></li>
            <li><a href="#" class="hover:underline">Work with us</a></li>
            <li><a href="#" class="hover:underline">Read our Blog</a></li>
          </ul>
        </div>

        <div>
          <ul class="space-y-4 text-sm font-medium">
            <li><a href="#" class="hover:underline">LinkedIn</a></li>
            <li><a href="#" class="hover:underline">X</a></li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-end text-[10px] text-gray-400 uppercase tracking-wider gap-4">
        <div class="flex gap-8">
          <span>New Generation 2025</span>
          <span>Designed with Bakken & Baeck</span>
        </div>
        <div class="flex gap-8">
          <a href="#" class="hover:text-gray-600">Terms of use</a>
          <a href="#" class="hover:text-gray-600">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Cookie Banner -->
  {#if showCookieBanner}
    <div class="fixed bottom-6 right-6 max-w-sm bg-white border border-gray-100 shadow-xl p-6 rounded-sm z-50 text-xs text-gray-600">
      <p class="mb-4 leading-relaxed">
        We use cookies. See our <a href="#" class="underline text-black">Privacy Policy</a> for more information.
      </p>
      <button onclick={() => showCookieBanner = false} class="bg-black text-white px-4 py-2 rounded-sm font-medium hover:bg-gray-800 transition-colors">
        Got it
      </button>
    </div>
  {/if}
</div>

<style>
  :global(body) {
    font-family: 'Inter', sans-serif;
  }
  .perspective-1000 {
    perspective: 1000px;
  }
  .transform-style-3d {
    transform-style: preserve-3d;
  }
</style>

