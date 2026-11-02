import { LOGIN_URL, TRIAL_URL, NAV_LINKS } from "@/lib/site";
import { Logo } from "./Logo";

const APP_LINKS = [
    { label: "Start Free", href: TRIAL_URL },
    { label: "Log In", href: LOGIN_URL },
];

const LEGAL_LINKS = [
    { label: "Privacy Policy" },
    { label: "Terms of Service" },
];

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-slate-200 bg-slate-50" data-testid="site-footer">
            <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:max-w-sm">
                        <Logo />
                        <p className="mt-4 text-sm leading-relaxed text-slate-600">
                            AI-powered customer support for SMM panel businesses. Configure an AI support agent
                            for your website and Telegram, with supported API-connected panel workflows.
                        </p>
                        <p className="mt-4 text-sm font-medium text-slate-400">yoursmmagent.com</p>
                    </div>

                    <nav aria-label="Footer navigation">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                            Navigation
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        data-testid={`footer-nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Application links">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                            Application
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {APP_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        data-testid={`footer-app-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Legal information">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                            Legal
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {LEGAL_LINKS.map((item) => (
                                <li
                                    key={item.label}
                                    data-testid={`footer-legal-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="flex items-center gap-2 text-sm font-medium text-slate-400"
                                >
                                    <span>{item.label}</span>
                                    <span className="rounded bg-slate-200/60 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
                                        Coming Soon
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-7 sm:flex-row">
                    <p className="text-sm text-slate-500">© {year} Your SMM Agent. All rights reserved.</p>
                    <p className="text-sm text-slate-400">AI customer support for SMM panel businesses</p>
                </div>
            </div>
        </footer>
    );
}
