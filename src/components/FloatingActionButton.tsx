import React from "react";

function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.48.02.12 5.38.1 11.96c0 2.1.55 4.14 1.6 5.95L0 24l6.25-1.64a11.9 11.9 0 0 0 5.72 1.46h.01c6.59 0 11.95-5.36 11.96-11.95a11.9 11.9 0 0 0-3.42-8.39ZM12 21.78h-.01a9.9 9.9 0 0 1-5.06-1.39l-.36-.21-3.71.97.99-3.62-.23-.37a9.93 9.93 0 1 1 18.35-5.2c0 5.48-4.47 9.94-9.97 9.94Zm5.74-7.44c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.73.16-.21.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.58-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.62-.53-.54-.73-.55l-.62-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.1 1.31 3.31.16.21 2.26 3.45 5.47 4.7.76.33 1.36.52 1.82.67.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.16-1.52.27-.74.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 10.8 19.8 19.8 0 0 1 .08 2.18 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L6.09 7.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <path
        d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m22 6-10 7L2 6" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <path d="M18 6 6 18" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m6 6 12 12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FloatingActionButton() {
  return (
    <div className="fixed bottom-10 right-2 z-50">
      <input id="fab-toggle" type="checkbox" className="peer sr-only" />

      {/* Contact Options */}
      <div className="flex flex-col-reverse items-end gap-3 mb-4 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none peer-checked:opacity-100 peer-checked:translate-y-0 peer-checked:pointer-events-auto [&>a]:translate-x-16 peer-checked:[&>a]:translate-x-0">
        <a
          href="https://wa.me/918826165727"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-full text-white shadow-lg transform transition-all duration-300 bg-[#25D366] hover:bg-[#1ea854] hover:scale-105"
          style={{ transitionDelay: "50ms" }}
        >
          <IconWhatsApp className="w-5 h-5" />
          <span className="font-medium text-sm whitespace-nowrap">WhatsApp</span>
        </a>

        <a
          href="tel:+918826165727"
          className="flex items-center gap-3 px-4 py-3 rounded-full text-white shadow-lg transform transition-all duration-300 bg-blue-600 hover:bg-blue-700 hover:scale-105"
          style={{ transitionDelay: "100ms" }}
        >
          <IconPhone className="w-4 h-4" />
          <span className="font-medium text-sm whitespace-nowrap">Call</span>
        </a>

        <a
          href="mailto:hello@xplorebyte.com"
          className="flex items-center gap-3 px-4 py-3 rounded-full text-white shadow-lg transform transition-all duration-300 bg-red-600 hover:bg-red-700 hover:scale-105"
          style={{ transitionDelay: "150ms" }}
        >
          <IconMail className="w-4 h-4" />
          <span className="font-medium text-sm whitespace-nowrap">Email</span>
        </a>
      </div>

      {/* Main FAB Button */}
      <label
        htmlFor="fab-toggle"
        className="group w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer select-none bg-[#25D366] hover:bg-[#1ea854] hover:scale-110 peer-checked:bg-gray-600 peer-checked:hover:bg-gray-700 peer-checked:rotate-90 peer-checked:[&_.fab-open]:hidden peer-checked:[&_.fab-close]:block peer-checked:[&_.fab-tooltip]:hidden"
        aria-label="Toggle contact options"
      >
        <IconWhatsApp className="fab-open w-6 h-6 text-white" />
        <IconX className="fab-close hidden w-5 h-5 text-white" />

        {/* Tooltip */}
        <div className="fab-tooltip absolute right-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Chat with us
          <div className="absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
        </div>
      </label>
    </div>
  );
}
