export const APP_BASE_URL = import.meta.env?.VITE_APP_BASE_URL || "https://app.yoursmmagent.com";
export const LOGIN_URL = import.meta.env?.VITE_LOGIN_URL || `${APP_BASE_URL}/login`;
export const TRIAL_URL = import.meta.env?.VITE_TRIAL_URL || `${APP_BASE_URL}/free-trial`;

// Legacy alias for backwards compatibility
export const APP_URL = APP_BASE_URL;

export const NAV_LINKS = [
    { label: "Features", href: "#features" },
    { label: "Channels", href: "#channels" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Integrations", href: "#integrations" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
];
