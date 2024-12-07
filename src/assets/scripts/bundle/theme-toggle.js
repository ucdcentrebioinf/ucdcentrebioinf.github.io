const storageKey = 'theme-preference';
const themeColors = {
  dark: '{{ designTokens.colors.items[0].value }}', // Base Dark
  light: '{{ designTokens.colors.items[1].value }}' // Base Light
};

const theme = {
  value: getColorPreference()
};

window.onload = () => {
  const themeToggle = document.querySelector('#theme-toggle');
  const switcher = document.querySelector('[data-theme-switcher]');

  if (!switcher) {
    return;
  }

  reflectPreference();
  updateMetaThemeColor();
  updateButtonIcon();

  themeToggle.addEventListener('click', onClick);

  // Set initial aria-pressed state
  themeToggle.setAttribute('aria-pressed', theme.value === 'light');
};

// sync with system changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
  theme.value = isDark ? 'dark' : 'light';
  setPreference();
  updateMetaThemeColor();
  updateButtonIcon();
});

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  const themeToggle = document.querySelector('#theme-toggle');
  themeToggle.setAttribute('aria-pressed', theme.value === 'light');
  setPreference();
  updateMetaThemeColor();
  updateButtonIcon();
}

function getColorPreference() {
  if (localStorage.getItem(storageKey)) {
    return localStorage.getItem(storageKey);
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}

function setPreference() {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
  updateMetaThemeColor();
}

function reflectPreference() {
  document.firstElementChild.setAttribute('data-theme', theme.value);
}

function updateMetaThemeColor() {
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const newColor = theme.value === 'dark' ? themeColors.dark : themeColors.light;
  metaThemeColor.setAttribute('content', newColor);
}

function updateButtonIcon() {
  const themeToggle = document.querySelector('#theme-toggle');
  themeToggle.innerHTML = theme.value === 'light'
    ? `{% svg "misc/sun", "Light Theme Toggle", "theme-switch light-theme-toggle", "block-size: 2ex;" %}`
    : `{% svg "misc/moon", "Dark Theme Toggle", "theme-switch dark-theme-toggle", "block-size: 2ex;" %}`;
}
    
// set early so no page flashes / CSS is made aware
reflectPreference();
updateButtonIcon();
