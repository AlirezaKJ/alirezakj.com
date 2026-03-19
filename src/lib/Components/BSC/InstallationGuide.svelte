<script>
	let expandedInstallation = 'easy'; // 'easy', 'linux', or 'manual'
</script>

<!-- Installation Guide -->
<section class="from-primary-50 to-background w-full bg-gradient-to-b py-24">
	<div class="mx-auto w-full max-w-[var(--keyw)] px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-6 font-serif text-5xl font-bold md:text-7xl">Installation Guide</h2>
			<p class="text-text/60 mx-auto max-w-3xl text-xl">
				Get started with BetterSoundCloud in minutes
			</p>
		</div>

		<!-- Installation Toggle -->
		<div class="mb-12 flex justify-center">
			<div class="bg-primary-100 inline-flex rounded-xl p-2">
				<button
					class="rounded-lg px-8 py-3 font-bold transition-all duration-300 {expandedInstallation ===
					'easy'
						? 'text-accent bg-white shadow-md'
						: 'text-text/60'}"
					on:click={() => (expandedInstallation = 'easy')}
				>
					Windows
				</button>
				<button
					class="rounded-lg px-8 py-3 font-bold transition-all duration-300 {expandedInstallation ===
					'linux'
						? 'bg-white shadow-md'
						: 'text-text/60'}"
					style:color={expandedInstallation === 'linux' ? 'var(--sc-orange-600)' : ''}
					on:click={() => (expandedInstallation = 'linux')}
				>
					Linux
				</button>
				<button
					class="rounded-lg px-8 py-3 font-bold transition-all duration-300 {expandedInstallation ===
					'manual'
						? 'text-accent bg-white shadow-md'
						: 'text-text/60'}"
					on:click={() => (expandedInstallation = 'manual')}
				>
					Developer
				</button>
			</div>
		</div>

		<div class="mx-auto max-w-4xl">
			<!-- Windows Easy Installation -->
			{#if expandedInstallation === 'easy'}
				<div class="space-y-6">
					<!-- System Requirements -->
					<div class="bg-accent-100 border-primary-100 rounded-2xl border p-8 shadow-md">
						<h3 class="mb-4 text-2xl font-bold">System Requirements</h3>
						<div class="text-text/70 space-y-3">
							<div class="flex items-start space-x-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0"
									style="fill: var(--sc-orange-500);"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
								>
								<span><strong>Operating System:</strong> Windows 10+</span>
							</div>
							<div class="flex items-start space-x-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0"
									style="fill: var(--sc-orange-500);"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
								>
								<span><strong>RAM:</strong> Minimum 2GB (4GB recommended)</span>
							</div>
							<div class="flex items-start space-x-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0"
									style="fill: var(--sc-orange-500);"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
								>
								<span><strong>Disk Space:</strong> ~500MB for installation</span>
							</div>
						</div>
					</div>

					<!-- Quick Start -->
					<div class="bg-accent-100 border-primary-100 rounded-2xl border p-8 shadow-md">
						<h3 class="mb-4 text-2xl font-bold">Quick Start: Automatic Installation</h3>
						<p class="text-text/70 mb-6">
							We provide easy-to-use installers for Windows. No technical knowledge required:
						</p>
						<ol class="text-text/70 space-y-3">
							<li class="flex items-start space-x-3">
								<span
									class="bg-accent-100 text-accent-700 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
									>1</span
								>
								<span
									>Download the latest installer from the <a
										href="https://github.com/AlirezaKJ/BetterSoundCloud/releases"
										target="_blank"
										rel="noopener"
										class="text-primary-600 hover:text-primary-700 font-semibold">Releases page</a
									></span
								>
							</li>
							<li class="flex items-start space-x-3">
								<span
									class="bg-accent-100 text-accent-700 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
									>2</span
								>
								<span>Run the installer executable (.exe file)</span>
							</li>
							<li class="flex items-start space-x-3">
								<span
									class="bg-accent-100 text-accent-700 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
									>3</span
								>
								<span>Follow the on-screen installation wizard</span>
							</li>
							<li class="flex items-start space-x-3">
								<span
									class="bg-accent-100 text-accent-700 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
									>4</span
								>
								<span>Launch BetterSoundCloud from your Start menu or desktop shortcut</span>
							</li>
						</ol>
					</div>
				</div>

				<!-- Linux Installation -->
			{:else if expandedInstallation === 'linux'}
				<div class="space-y-6">
					<!-- System Requirements -->
					<div class="bg-accent-100 border-primary-100 rounded-2xl border p-8 shadow-md">
						<h3 class="mb-4 text-2xl font-bold">System Requirements</h3>
						<div class="text-text/70 space-y-3">
							<div class="flex items-start space-x-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0"
									style="fill: var(--sc-orange-500);"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
								>
								<span
									><strong>Operating System:</strong> Linux (Ubuntu, Fedora, Debian, etc.)</span
								>
							</div>
							<div class="flex items-start space-x-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0"
									style="fill: var(--sc-orange-500);"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
								>
								<span><strong>RAM:</strong> Minimum 2GB (4GB recommended)</span>
							</div>
							<div class="flex items-start space-x-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0"
									style="fill: var(--sc-orange-500);"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
								>
								<span><strong>Disk Space:</strong> ~500MB for installation</span>
							</div>
						</div>
					</div>

					<!-- Linux Auto Installer -->
					<div class="bg-accent-100 border-primary-100 rounded-2xl border p-8 shadow-md">
						<h3 class="mb-4 text-2xl font-bold">🐧 Linux Auto Installer</h3>
						<p class="text-text/70 mb-6">
							Install BetterSoundCloud on Linux with one simple command.
						</p>

						<div class="space-y-6">
							<!-- What the installer does -->
							<div>
								<p class="text-text/80 mb-3 font-semibold">The installer will:</p>
								<ul class="text-text/70 space-y-2">
									<li class="flex items-start space-x-3">
										<svg
											class="mt-0.5 h-5 w-5 flex-shrink-0"
											style="fill: var(--sc-orange-500);"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
										>
										<span>Install BetterSoundCloud automatically in your home directory</span>
									</li>
									<li class="flex items-start space-x-3">
										<svg
											class="mt-0.5 h-5 w-5 flex-shrink-0"
											style="fill: var(--sc-orange-500);"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
										>
										<span>Clone or update the repository</span>
									</li>
									<li class="flex items-start space-x-3">
										<svg
											class="mt-0.5 h-5 w-5 flex-shrink-0"
											style="fill: var(--sc-orange-500);"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
										>
										<span>Install project dependencies</span>
									</li>
									<li class="flex items-start space-x-3">
										<svg
											class="mt-0.5 h-5 w-5 flex-shrink-0"
											style="fill: var(--sc-orange-500);"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
										>
										<span>Create a .desktop launcher entry</span>
									</li>
								</ul>
							</div>

							<!-- Supported package managers -->
							<div>
								<p class="text-text/80 mb-3 font-semibold">Supported package managers:</p>
								<div class="grid grid-cols-2 gap-3">
									<div class="text-text/70 flex items-center space-x-2">
										<span
											class="inline-flex items-center rounded-lg bg-red-100 px-3 py-1 text-sm font-semibold text-red-700"
											>apt</span
										>
										<span class="text-sm">Debian, Ubuntu</span>
									</div>
									<div class="text-text/70 flex items-center space-x-2">
										<span
											class="inline-flex items-center rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700"
											>pacman</span
										>
										<span class="text-sm">Arch, Manjaro</span>
									</div>
									<div class="text-text/70 flex items-center space-x-2">
										<span
											class="inline-flex items-center rounded-lg bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700"
											>dnf</span
										>
										<span class="text-sm">Fedora, RHEL</span>
									</div>
									<div class="text-text/70 flex items-center space-x-2">
										<span
											class="inline-flex items-center rounded-lg bg-green-100 px-3 py-1 text-sm font-semibold text-green-700"
											>zypper</span
										>
										<span class="text-sm">openSUSE</span>
									</div>
								</div>
							</div>

							<!-- One-line install command -->
							<div>
								<p class="text-text/80 mb-3 font-semibold">💻 One-line install command:</p>
								<div
									class="bg-background border-primary-100 overflow-x-auto rounded-lg border p-4 font-mono text-sm"
								>
									bash &lt;(curl -fsSL
									https://raw.githubusercontent.com/AlirezaKJ/BetterSoundCloud/main/install_bettersoundcloud.sh)
								</div>
								<p class="text-text/60 mt-3 text-sm">
									Simply copy and paste this command into your terminal to begin automatic
									installation.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Manual Developer Installation -->
			{:else if expandedInstallation === 'manual'}
				<div class="space-y-6">
					<!-- System Requirements -->
					<div class="bg-accent-100 border-primary-100 rounded-2xl border p-8 shadow-md">
						<h3 class="mb-4 text-2xl font-bold">System Requirements</h3>
						<div class="text-text/70 space-y-3">
							<div class="flex items-start space-x-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0"
									style="fill: var(--sc-orange-500);"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
								>
								<span><strong>Operating System:</strong> Windows 10+, Linux, or macOS</span>
							</div>
							<div class="flex items-start space-x-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0"
									style="fill: var(--sc-orange-500);"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
								>
								<span><strong>Node.js:</strong> v14 or higher with npm</span>
							</div>
							<div class="flex items-start space-x-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0"
									style="fill: var(--sc-orange-500);"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg
								>
								<span><strong>Git:</strong> Version control system</span>
							</div>
						</div>
					</div>

					<!-- Manual Installation Steps -->
					<div class="bg-accent-100 border-primary-100 rounded-2xl border p-8 shadow-md">
						<h3 class="mb-4 text-2xl font-bold">Manual Installation from Source</h3>
						<p class="text-text/70 mb-6">Install from source for development or customization:</p>

						<div class="space-y-4">
							<div>
								<p class="text-text/60 mb-2 text-sm font-semibold">1. Clone the Repository</p>
								<div
									class="bg-background border-primary-100 overflow-x-auto rounded-lg border p-4 font-mono text-sm"
								>
									git clone https://github.com/AlirezaKJ/BetterSoundCloud.git
								</div>
							</div>

							<div>
								<p class="text-text/60 mb-2 text-sm font-semibold">2. Navigate to Directory</p>
								<div
									class="bg-background border-primary-100 rounded-lg border p-4 font-mono text-sm"
								>
									cd BetterSoundCloud
								</div>
							</div>

							<div>
								<p class="text-text/60 mb-2 text-sm font-semibold">3. Install Dependencies</p>
								<div
									class="bg-background border-primary-100 rounded-lg border p-4 font-mono text-sm"
								>
									npm install
								</div>
							</div>

							<div>
								<p class="text-text/60 mb-2 text-sm font-semibold">4. Start Development Server</p>
								<div
									class="bg-background border-primary-100 rounded-lg border p-4 font-mono text-sm"
								>
									npm start
								</div>
							</div>

							<div>
								<p class="text-text/60 mb-2 text-sm font-semibold">
									5. Build for Production (Optional)
								</p>
								<div
									class="bg-background border-primary-100 rounded-lg border p-4 font-mono text-sm"
								>
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