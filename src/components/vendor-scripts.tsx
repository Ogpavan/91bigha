"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const vendorScripts = [
  "/assets/js/jquery-3.7.1.min.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/plugins/select2/js/select2.min.js",
  "/assets/js/moment.min.js",
  "/assets/js/bootstrap-datetimepicker.min.js",
  "/assets/plugins/theia-sticky-sidebar/ResizeSensor.js",
  "/assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js",
  "/assets/plugins/slick/slick.js",
  "/assets/plugins/fancybox/jquery.fancybox.min.js",
  "/assets/plugins/simplebar/simplebar.min.js",
  "/assets/js/waypoints.js",
  "/assets/js/jquery.counterup.min.js",
  "/assets/js/aos.js",
  "/assets/js/script.js"
] as const;

type AosApi = {
  init?: (options?: { duration?: number; once?: boolean }) => void;
  refresh?: () => void;
  refreshHard?: () => void;
};

declare global {
  interface Window {
    $?: unknown;
    jQuery?: unknown;
    AOS?: AosApi;
  }
}

function loadScriptSequentially(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[data-vendor-src="${src}"]`);

    if (existing?.dataset.loaded === "true") {
      resolve();
      return;
    }

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
        once: true
      });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.vendorSrc = src;
    script.onload = () => {
      script.dataset.loaded = "true";

      if (src.includes("jquery-3.7.1.min.js")) {
        window.jQuery = window.jQuery ?? window.$;
        window.$ = window.$ ?? window.jQuery;
      }

      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function applyLightTheme() {
  document.documentElement.setAttribute("data-theme", "light");

  try {
    window.localStorage.setItem("theme", "light");
    window.localStorage.setItem("darkMode", "disabled");
  } catch {}
}

function refreshTemplateUi() {
  document.documentElement.classList.remove("menu-opened");
  document.querySelector(".main-wrapper")?.classList.remove("slide-nav");

  document.querySelectorAll<HTMLElement>(".sidebar-overlay").forEach((overlay, index) => {
    overlay.classList.remove("opened");
    if (index > 0) {
      overlay.remove();
    }
  });

  if (window.AOS) {
    window.AOS.init?.({ duration: 1200, once: true });
    window.AOS.refreshHard?.();
    window.AOS.refresh?.();
  }

  document.querySelectorAll<HTMLElement>("[data-aos]").forEach((element) => {
    element.classList.add("aos-init", "aos-animate");
  });

  window.dispatchEvent(new Event("resize"));
}

export function VendorScripts() {
  const pathname = usePathname();
  const [scriptsReady, setScriptsReady] = useState(false);

  useEffect(() => {
    let disposed = false;

    const run = async () => {
      applyLightTheme();

      for (const src of vendorScripts) {
        if (disposed) {
          return;
        }

        await loadScriptSequentially(src);
      }

      if (!disposed) {
        setScriptsReady(true);
      }
    };

    run().catch((error) => {
      console.error("Vendor script load failed", error);
    });

    return () => {
      disposed = true;
    };
  }, []);

  useEffect(() => {
    if (!scriptsReady) {
      return;
    }

    const firstFrame = window.requestAnimationFrame(() => {
      const secondFrame = window.requestAnimationFrame(() => {
        refreshTemplateUi();
      });

      return () => window.cancelAnimationFrame(secondFrame);
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
    };
  }, [pathname, scriptsReady]);

  return null;
}
