const fallbackPatchnotes = [
  {
    title: "V0.6.0 (Beta)",
    changes: [
      "- Added LRCLIB for lyrics api except of genius.",
      "- Added complete adblock using @cliqz/adblocker-electron",
      "- Reworked the loadingscreen for less screentime and a more debuging optimized version",
      "- Reworked the rightclick menu with the new neumorphism version",
      "- Reworked the settings interface which is all connected to one slide and can be scrolled down and up using the sidebar",
      "- Reworked the themes section for further expansion of the themes list",
      "- Reworked the file system so its possible to make linux distributions work",
      "- Optimized custombg plugin image quality to the highest possible",
      "- Optimized in soundcloud fullscreen and maximize buttons to always be in the right class state",
    ],
    date: "23 March 2025",
    link: "https://github.com/AlirezaKJ/BetterSoundCloud/releases/tag/V0.6.0",
  },
  {
    title: "V0.5.3 (Beta)",
    changes: [
      "- Added deeplinks, load any url with bsc://",
      "- Added native MediaKeys integration (play, next, previous)",
      "- Added Tray menu",
      "- Fixed header icons scrollbar bug in high zoom",
      "- Fixed the lyric page to auto refresh on new song",
      "- New feature: auto scroll down button for lazy loading",
      "- New setting option: overall zoom factor",
      "- New setting option: on startup load last page",
      "- Several settings page tweaks and ui fixes",
    ],
    date: "12 March 2024",
    link: "https://github.com/AlirezaKJ/BetterSoundCloud/releases/tag/V0.5.3",
  },
  {
    title: "V0.5.2 (Beta)",
    changes: [
      "- Added lyric showcase feature (Super Experimental)",
      "- Added custom background feature to replace the unused background of soundcloud",
      "- Added basic tooltip to each setting options",
      "- From now when you download a song using the downloader the folder will automatically open",
      "- Replaced the header bar buttons with icons instead of text (SCI)",
      "- Replaced all UI scrollbars same as the SCI scrollbar",
      "- Improved the song showcase animations",
      "- Improved Esc keypress functionality",
      "- New setting option: handle Cntrl + R",
      "- New setting option: handle F5",
      "- New setting option: turn custombg on and off",
      "- New setting option: turn discordrpc on and off",
      "- New setting option: clear the whole application cache and data",
      "- New setting option: go to soundcloud settings page from bsc settings",
      "- No more errors on creating the bettersoundcloud root folder",
      "- Removed for artist button recently added to soundcloud header",
    ],
    date: "13 May 2023",
    link: "https://github.com/AlirezaKJ/BetterSoundCloud/releases/tag/V0.5.2",
  },
  {
    title: "V0.5.1 (Beta)",
    changes: [
      "- Added soundcloud downloader in plugins tab",
      "- added custom css and js editor",
      "- added settings menu to customize the app experience",
    ],
    date: "9 April 2023",
    link: "https://github.com/AlirezaKJ/BetterSoundCloud/releases/tag/V0.5.1   ",
  },
  {
    title: "V0.5.0 (Beta)",
    changes: [
      "- SCI Feature: added a custom minimize, maximize and close button to main soundcloud header frame",
      "- SCI Feature: added song showcase feature and the button of it to down right",
      "- SCI Feature: removed upload, notification, tripledot and messages button from main soundcloud header frame (as they were useless)",
      "- SCI Feature: added a custom go back and forward button to main soundcloud header frame",
      "- app will start on fullscreen (custom buttons will help you to get out of it)",
      "- removed discord rpc start timestamp as it was useless and no point on it",
      "From now everytime the app start caches clear to update any theme and plugin changes (including update checker)",
      "this may result in a high load time but a auto plugin and themes latest fetching",
    ],
    date: "21 February 2023",
    link: "https://github.com/AlirezaKJ/BetterSoundCloud/releases/tag/V0.5.0",
  },
  {
    title: "V0.4.0 (Beta)",
    changes: [
      "- Added SCI (SoundCloudImprovement) Theme And Plugin By <a href='https://github.com/AlirezaKJ'>AlirezaKJ</a>",
      "- SCI Feature: Removed Try GO+ And Try Next Pro (ADs) Buttons ",
      "- SCI Feature: Removed All Products And Discounts (ADs) Banners",
      "- SCI Feature: Added Theme And Plugins Setting Button To Play Controls Bar",
      "- SCI Feature: Replaced Default Browser Scrollbar",
      "- Added Go To Url Option To Right Click Menu",
      "- Updated DiscordRPC Download Link To <a href='https://bsc.alirezakj.com'>This</a>",
      "- Updated Plugin Retrieving From raw.githubusercontent.com To jsdelivr.com For A Better Load",
      "- Created A Custom Page For BetterSoundCloud At: <a href='https://bsc.alirezakj.com'>bsc.alirezakj.com</a>",
    ],
    date: "3 February 2023",
    link: "https://github.com/AlirezaKJ/BetterSoundCloud/releases/tag/V0.4.0",
  },
  {
    title: "V0.3.0 (Beta)",
    changes: [
      "- Added Nocturnal Theme By <a href='https://userstyles.org/styles/129712/nocturnal-soundcloud-theme'>Chloe Chantelle</a>",
      "- Added Post Morphic Theme By <a href='https://userstyles.org/styles/253043/post-morphic-soundcloud'>kantraa</a>",
      "- Added Hover Theme By <a href='https://userstyles.org/styles/216317/soundcloud-hover-theme'>TomDom</a>",
      "- Added Update Checking System",
      "- Added Automatic Patchnotes From CDN",
      "- Added Links To Each Patch Box",
      "- App Dont Automatically Start On Fullscreen Anymore",
    ],
    date: "26 January 2023",
    link: "https://github.com/AlirezaKJ/BetterSoundCloud/releases/tag/V0.3.0",
  },
  {
    title: "V0.2.0 (Beta)",
    changes: [
      "- Added Themes Menu",
      "- Added Dark Cloud Theme By <a href='https://github.com/AlirezaKJ'>AlirezaKJ</a>",
      "- Added Plugins Menu",
      "- Added SilentAd Plugin By <a href='https://github.com/AlirezaKJ'>AlirezaKJ</a>",
      "- Added ReloadOnAd Plugin By <a href='https://github.com/AlirezaKJ'>AlirezaKJ</a>",
      "- Added ReloadAndPlay Plugin By <a href='https://github.com/AlirezaKJ'>AlirezaKJ</a>",
      "- Added Database Features To Save Settings And Prefrences",
      "- Fixed Discord RPC To Show The Big Image Of The Song And Diffrent States",
    ],
    date: "6 January 2023",
    link: "https://github.com/AlirezaKJ/BetterSoundCloud/releases/tag/V0.2.0",
  },
  {
    title: "V0.1.1 (Beta)",
    changes: [
      "- Right Click Menu Added",
      "- Option Menu Added",
      "- Song Cover Added To DiscordRPC",
    ],
    date: "23 December 2022",
    link: "https://github.com/AlirezaKJ/BetterSoundCloud/releases/tag/V.0.1.1",
  },
  {
    title: "V0.1.0 (Beta)",
    changes: ["- Added Discord Rich Presence", "- Main And First Release"],
    date: "21 December 2022",
    link: "https://github.com/AlirezaKJ/BetterSoundCloud/releases/tag/V.0.1.0",
  },
];

function stripLeadingBullet(text) {
  return text.replace(/^[-*]\s*/, '').trim();
}

function extractLinksFromHtmlAnchors(line) {
  const links = [];
  const anchorRegex = /<a\s+href=['"]([^'"]+)['"][^>]*>(.*?)<\/a>/gi;
  let match;

  while ((match = anchorRegex.exec(line)) !== null) {
    links.push({
      label: match[2].trim(),
      href: match[1].trim()
    });
  }

  const text = line.replace(anchorRegex, (_, __, label) => label).trim();

  return { text, links };
}

function extractLinksFromMarkdown(line) {
  const links = [];
  const markdownRegex = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let match;

  while ((match = markdownRegex.exec(line)) !== null) {
    links.push({
      label: match[1].trim(),
      href: match[2].trim()
    });
  }

  const text = line.replace(markdownRegex, (_, label) => label).trim();

  return { text, links };
}

function normalizeChangeLine(rawLine) {
  const cleaned = stripLeadingBullet(rawLine);
  const htmlParsed = extractLinksFromHtmlAnchors(cleaned);
  const markdownParsed = extractLinksFromMarkdown(htmlParsed.text);

  return {
    text: markdownParsed.text,
    links: [...htmlParsed.links, ...markdownParsed.links]
  };
}

function formatDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

function extractChangesFromReleaseBody(body) {
  if (!body) {
    return [];
  }

  return body
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- ') || line.startsWith('* '))
    .map(normalizeChangeLine)
    .filter((change) => change.text.length > 0);
}

function normalizeFallbackPatchnotes() {
  return fallbackPatchnotes.map((entry) => ({
    title: entry.title,
    date: entry.date,
    link: entry.link.trim(),
    changes: entry.changes.map(normalizeChangeLine)
  }));
}

function normalizeGitHubReleases(releases) {
  return releases.map((release) => {
    const changes = extractChangesFromReleaseBody(release.body);

    return {
      title: release.name || release.tag_name,
      date: formatDate(release.published_at || release.created_at || ''),
      link: release.html_url,
      changes:
        changes.length > 0
          ? changes
          : [{ text: 'See release notes for full details.', links: [] }]
    };
  });
}

const seo = {
  title: 'BetterSoundCloud - Free Enhanced SoundCloud Desktop Client',
  description:
    'BetterSoundCloud is a free, open-source desktop client for SoundCloud with custom themes, plugins, a built-in ad-blocker, lyrics, and Discord Rich Presence. Download for Windows, macOS, and Linux.',
  image: '/assets/images/BSC.png',
  type: 'website',
  jsonld: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BetterSoundCloud',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Windows, macOS, Linux',
    url: 'https://alirezakj.com/bsc',
    downloadUrl: 'https://github.com/AlirezaKJ/BetterSoundCloud/releases',
    softwareVersion: '0.6.0',
    license: 'https://opensource.org/licenses/MIT',
    description:
      'A free, open-source desktop client for SoundCloud with themes, plugins, an ad-blocker, lyrics, and Discord Rich Presence.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    author: {
      '@type': 'Person',
      name: 'Alireza Karimi Jafari',
      url: 'https://alirezakj.com'
    }
  }
};

export const load = async ({ fetch }) => {
  try {
    const response = await fetch('https://api.github.com/repos/AlirezaKJ/BetterSoundCloud/releases');

    if (!response.ok) {
      throw new Error(`Failed to fetch releases: ${response.status}`);
    }

    const releases = await response.json();

    if (!Array.isArray(releases) || releases.length === 0) {
      return { seo, patchnotes: normalizeFallbackPatchnotes() };
    }

    return {
      seo,
      patchnotes: normalizeGitHubReleases(releases)
    };
  } catch (error) {
    console.error('Failed to load patch notes:', error);
    return {
      seo,
      patchnotes: normalizeFallbackPatchnotes()
    };
  }
};