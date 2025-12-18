<script>
  import { onMount } from 'svelte';

  const images = [
    "/generated/image-modern-rental-property-exterior-with-wel-1766063106425-0.webp",
    "/generated/image-happy-landlord-reviewing-property-manage-1766063108900-1.webp",
    "/generated/image-professional-property-manager-conducting-1766063111298-2.webp",
    "/generated/image-beautiful-rental-apartment-interior-with-1766063113469-3.webp",
    "/generated/image-maintenance-worker-fixing-property-issue-1766063115677-4.webp"
  ];

  let showCookieBanner = $state(true);
</script>

<div class="font-sans text-[#111] antialiased bg-white selection:bg-black selection:text-white">
  <!-- Header -->
  <header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-5 bg-white/90 backdrop-blur-sm">
    <div class="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.7" d="M65.0783 2.33158C71.8335 9.07503 63.4367 28.3905 46.3235 45.4739C29.2105 62.5574 9.86132 70.9395 3.10614 64.1962C-3.64905 57.4526 4.74774 38.1372 21.8609 21.0537C38.9739 3.9703 58.323 -4.41188 65.0783 2.33158Z" fill="#0A0D12"/>
        <path opacity="0.5" d="M79.7599 16.9832C86.5152 23.7267 78.1183 43.0422 61.0051 60.1256C43.8919 77.2091 24.543 85.5912 17.7878 78.8479C11.0326 72.1043 19.4294 52.7889 36.5424 35.7054C53.6556 18.6219 73.0047 10.2398 79.7599 16.9832Z" fill="#0A0D12"/>
        <path opacity="0.3" d="M94.4357 31.6366C101.191 38.3801 92.7941 57.6956 75.6811 74.7791C58.5679 91.8625 39.2189 100.245 32.4636 93.5013C25.7083 86.7577 34.1052 67.4423 51.2184 50.3588C68.3314 33.2753 87.6806 24.8933 94.4357 31.6366Z" fill="#0A0D12"/>
      </svg>
      <span class="text-xl font-medium tracking-tight">Buena</span>
    </div>
    <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
      <a href="#features" class="hover:opacity-70 transition-opacity">Features</a>
      <a href="#how-it-works" class="hover:opacity-70 transition-opacity">How It Works</a>
      <a href="#pricing" class="hover:opacity-70 transition-opacity">Pricing</a>
      <a href="#contact" class="hover:opacity-70 transition-opacity">Contact</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="pt-40 pb-20 px-6 max-w-[1400px] mx-auto">
    <div class="max-w-4xl mb-24">
      <h1 class="text-6xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
        Stress-free rental<br>property ownership
      </h1>
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <p class="text-lg md:text-xl max-w-md leading-relaxed text-gray-800">
          Automated tenant screening, maintenance coordination, and compliance management that removes landlord responsibilities.
        </p>
        <button class="bg-black text-white px-6 py-3 text-sm font-medium rounded-sm hover:bg-gray-800 transition-colors">
          Get started
        </button>
      </div>
    </div>

    <!-- Hero Images Grid -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      {#each images as src, i}
        <div class="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
          <img {src} alt="Property management {i}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      {/each}
    </div>
  </section>

  <!-- Floating Images Section -->
  <section class="py-32 px-6 max-w-[1400px] mx-auto relative min-h-[800px]">
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <h2 class="text-2xl md:text-3xl font-medium text-center max-w-2xl leading-snug bg-white/80 backdrop-blur-sm p-4 rounded-xl">
        Generate passive income without landlord headaches. We handle screening, maintenance, and compliance.
      </h2>
    </div>

    <!-- Scattered Images with property indicators -->
    <div class="relative w-full h-full min-h-[800px]">
      <!-- Image 1: Happy Landlord (Left) -->
      <div class="absolute top-20 left-[10%] w-64 aspect-[3/4]">
        <img src={images[1]} alt="Happy landlord" class="w-full h-full object-cover rounded-sm shadow-lg" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div class="w-3 h-3 bg-white rounded-full mx-auto mb-2 animate-pulse"></div>
             <button class="bg-white/90 backdrop-blur text-xs px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap hover:bg-white transition-colors">Managed</button>
        </div>
      </div>

      <!-- Image 2: Interior (Center Top) -->
      <div class="absolute top-0 left-[45%] w-56 aspect-[3/4]">
        <img src={images[3]} alt="Rental interior" class="w-full h-full object-cover rounded-sm shadow-lg" />
        <div class="absolute top-1/3 left-1/3">
             <div class="w-3 h-3 bg-white rounded-full mb-2 animate-pulse"></div>
             <button class="bg-white/90 backdrop-blur text-xs px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap hover:bg-white transition-colors">Managed</button>
        </div>
      </div>

       <!-- Image 3: Landlord at property (Right Top) -->
      <div class="absolute top-40 right-[5%] w-80 aspect-video">
        <img src="/generated/image-confident-landlord-standing-in-front-of--1766063117711-5.webp" alt="Confident landlord" class="w-full h-full object-cover rounded-sm shadow-lg" />
        <div class="absolute bottom-1/3 right-1/3">
             <div class="w-3 h-3 bg-white rounded-full mb-2 animate-pulse ml-auto"></div>
             <button class="bg-white/90 backdrop-blur text-xs px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap hover:bg-white transition-colors">Managed</button>
        </div>
      </div>

      <!-- Image 4: Property Exterior (Left Bottom) -->
      <div class="absolute bottom-20 left-[5%] w-56 aspect-[3/4]">
        <img src={images[0]} alt="Rental property" class="w-full h-full object-cover rounded-sm shadow-lg" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <button class="bg-white/90 backdrop-blur text-xs px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap hover:bg-white transition-colors">Managed</button>
        </div>
      </div>

      <!-- Image 5: Tenant Screening (Center Bottom) -->
      <div class="absolute bottom-0 left-[35%] w-48 aspect-[3/4]">
        <img src={images[2]} alt="Tenant screening" class="w-full h-full object-cover rounded-sm shadow-lg" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <button class="bg-white/90 backdrop-blur text-xs px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap hover:bg-white transition-colors">Managed</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Dark Section 1: Automated Tenant Screening -->
  <section id="features" class="bg-[#111] text-white py-32 px-6">
    <div class="max-w-[1400px] mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
        <h2 class="text-4xl md:text-5xl font-medium tracking-tight max-w-xl">
          Automated tenant<br>screening
        </h2>
        <p class="text-gray-400 text-lg max-w-md leading-relaxed">
          Stop worrying about problem tenants. Our automated screening process verifies credit, background, and rental history to find reliable tenants.
        </p>
      </div>

      <!-- Interactive Box -->
      <div class="w-full aspect-video bg-[#1a1a1a] rounded-sm mb-16 flex items-center justify-center relative overflow-hidden group">
        <div class="text-5xl md:text-7xl font-light tracking-tight text-white/90">
          Verified<span class="animate-pulse">|</span>
        </div>
        <!-- Subtle grid or gradient could go here -->
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
        <div>
          <h3 class="text-lg font-medium mb-3">Credit & background checks</h3>
          <p class="text-gray-400 leading-relaxed">Comprehensive screening in minutes, not days.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium mb-3">Rental history verification</h3>
          <p class="text-gray-400 leading-relaxed">Confirm past rental performance and references.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium mb-3">Income verification</h3>
          <p class="text-gray-400 leading-relaxed">Ensure tenants can afford your property.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Dark Section 2: Maintenance Coordination -->
  <section class="bg-[#111] text-white py-32 px-6 border-t border-white/5">
    <div class="max-w-[1400px] mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
        <h2 class="text-4xl md:text-5xl font-medium tracking-tight">
          Maintenance coordination
        </h2>
        <p class="text-gray-400 text-lg max-w-md leading-relaxed">
          No more 2 AM emergency calls. Our network of vetted contractors handles repairs quickly and cost-effectively.
        </p>
      </div>

      <!-- Interactive Box -->
      <div class="w-full aspect-[2/1] bg-[#1a1a1a] rounded-sm flex items-center justify-center">
         <div class="text-5xl md:text-7xl font-light tracking-tight text-white/90">
          24/7<span class="animate-pulse">|</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Light Gray Section -->
  <section class="bg-[#f5f5f5] py-24 px-6">
    <div class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 class="text-lg font-medium mb-3 text-[#111]">Vetted contractors</h3>
        <p class="text-gray-600 leading-relaxed">Pre-screened professionals ready to handle any issue.</p>
      </div>
      <div>
        <h3 class="text-lg font-medium mb-3 text-[#111]">Transparent pricing</h3>
        <p class="text-gray-600 leading-relaxed">Know costs upfront with competitive, fair pricing.</p>
      </div>
      <div>
        <h3 class="text-lg font-medium mb-3 text-[#111]">Fast response times</h3>
        <p class="text-gray-600 leading-relaxed">Issues resolved quickly to keep tenants happy.</p>
      </div>
    </div>
  </section>

  <!-- Built for Landlords -->
  <section id="how-it-works" class="bg-[#f0f0f0] py-32 px-6">
    <div class="max-w-[1400px] mx-auto">
      <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[#111]">
          Built for first-time landlords
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl leading-relaxed">
          Buena combines automated workflows with expert property management to eliminate the friction that costs landlords thousands annually.
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
            <h3 class="text-xl font-medium mb-3 text-[#111]">Eliminate vacancy periods</h3>
            <p class="text-gray-600 leading-relaxed">Find quality tenants fast with our automated screening and marketing system.</p>
          </div>
          <div class="group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
            <h3 class="text-xl font-medium mb-3 text-[#111]">Prevent costly delays</h3>
            <p class="text-gray-600 leading-relaxed">Rapid maintenance response keeps small issues from becoming expensive problems.</p>
          </div>
          <div class="group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
            <h3 class="text-xl font-medium mb-3 text-[#111]">Stay compliant</h3>
            <p class="text-gray-600 leading-relaxed">Automated compliance management keeps you protected from legal issues.</p>
          </div>

          <div class="flex gap-4 pt-8">
             <button class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-800 hover:text-gray-800 transition-colors">←</button>
             <button class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-800 hover:text-gray-800 transition-colors">→</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Transparent Pricing -->
  <section id="pricing" class="bg-[#fffcf8] py-32 px-6">
    <div class="max-w-[1400px] mx-auto">
      <h2 class="text-4xl md:text-5xl font-medium tracking-tight mb-20 text-[#111]">
        Transparent pricing, guaranteed results
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Card 1 -->
        <div>
          <div class="w-14 h-14 bg-[#111] text-white flex items-center justify-center rounded-sm mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium mb-3 text-[#111]">8% management fee</h3>
          <p class="text-gray-600 leading-relaxed">Simple, transparent pricing with no hidden costs or surprise fees.</p>
        </div>

        <!-- Card 2 -->
        <div>
          <div class="w-14 h-14 bg-[#111] text-white flex items-center justify-center rounded-sm mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium mb-3 text-[#111]">30-day rent guarantee</h3>
          <p class="text-gray-600 leading-relaxed">We guarantee rent collection within 30 days or we work for free.</p>
        </div>

        <!-- Card 3 -->
        <div>
          <div class="w-14 h-14 bg-[#111] text-white flex items-center justify-center rounded-sm mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium mb-3 text-[#111]">Scale with confidence</h3>
          <p class="text-gray-600 leading-relaxed">Start with one property, grow to 10+. Same great service at every scale.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section id="contact" class="px-6 py-12">
    <div class="max-w-[1400px] mx-auto border border-gray-100 rounded-xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-white shadow-sm">
      <div class="flex items-center gap-6">
        <div class="flex gap-1 h-8">
           <div class="w-2 bg-black h-full"></div>
           <div class="w-2 bg-black h-full"></div>
           <div class="w-2 bg-black h-full"></div>
           <div class="w-2 bg-black h-full opacity-50"></div>
        </div>
        <h2 class="text-2xl md:text-3xl font-medium tracking-tight">Ready for stress-free ownership?</h2>
      </div>
      <button class="bg-black text-white px-8 py-3 text-sm font-medium rounded-sm hover:bg-gray-800 transition-colors whitespace-nowrap">
        Get started today
      </button>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-white pt-20 pb-10 px-6 border-t border-gray-100">
    <div class="max-w-[1400px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-20">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 mb-2">
            <svg width="28" height="28" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.7" d="M65.0783 2.33158C71.8335 9.07503 63.4367 28.3905 46.3235 45.4739C29.2105 62.5574 9.86132 70.9395 3.10614 64.1962C-3.64905 57.4526 4.74774 38.1372 21.8609 21.0537C38.9739 3.9703 58.323 -4.41188 65.0783 2.33158Z" fill="#0A0D12"/>
              <path opacity="0.5" d="M79.7599 16.9832C86.5152 23.7267 78.1183 43.0422 61.0051 60.1256C43.8919 77.2091 24.543 85.5912 17.7878 78.8479C11.0326 72.1043 19.4294 52.7889 36.5424 35.7054C53.6556 18.6219 73.0047 10.2398 79.7599 16.9832Z" fill="#0A0D12"/>
              <path opacity="0.3" d="M94.4357 31.6366C101.191 38.3801 92.7941 57.6956 75.6811 74.7791C58.5679 91.8625 39.2189 100.245 32.4636 93.5013C25.7083 86.7577 34.1052 67.4423 51.2184 50.3588C68.3314 33.2753 87.6806 24.8933 94.4357 31.6366Z" fill="#0A0D12"/>
            </svg>
            <h3 class="text-xl font-medium">Buena</h3>
          </div>
          <p class="text-gray-500 text-lg">Stress-free rental property ownership</p>
        </div>

        <div>
          <ul class="space-y-4 text-sm font-medium">
            <li><a href="#features" class="hover:underline">Features</a></li>
            <li><a href="#how-it-works" class="hover:underline">How It Works</a></li>
            <li><a href="#pricing" class="hover:underline">Pricing</a></li>
            <li><a href="#contact" class="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <ul class="space-y-4 text-sm font-medium">
            <li><a href="#" class="hover:underline">LinkedIn</a></li>
            <li><a href="#" class="hover:underline">X</a></li>
            <li><a href="#" class="hover:underline">BiggerPockets</a></li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-end text-[10px] text-gray-400 uppercase tracking-wider gap-4">
        <div class="flex gap-8">
          <span>Buena 2025</span>
          <span>Founded by Din Bisevac</span>
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

