import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Acknowledgement = () => {
  return /* @__PURE__ */ jsxs("section", { className: "acknowledgment", children: [
    /* @__PURE__ */ jsx("h2", { children: "Acknowledgment" }),
    /* @__PURE__ */ jsx("p", { children: "As a non-Aboriginal woman of German heritage I wish to acknowledge and pay respects to the Traditional Custodians of the lands, waters and skies throughout Australia and recognise their continuing connection to culture and communities. I respectfully acknowledge the Whadjuk and Mooro people of the Noongar nation upon whose unceded land I live and where created this website. I pay my respect to all Elders both past and present and emerging leaders." }),
    /* @__PURE__ */ jsxs("div", { className: "flags", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "aboriginal-flag",
          src: "/image/aboriginal-flag.webp",
          alt: "Aboriginal flag",
          width: "60px",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "torres-strait-islander-flag",
          src: "/image/torres-strait-islander-flag.webp",
          alt: "Torres Strait Islander flag",
          width: "60px",
          loading: "lazy"
        }
      )
    ] })
  ] });
};
const Header = () => {
  return /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("nav", { className: "navbar", role: "navigation", "aria-label": "Main Navigation", children: [
    /* @__PURE__ */ jsxs("a", { className: "navbar-logo", href: "/", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "navbar-logo-img",
          src: "/image/SIS-Logo.webp",
          alt: "Social Insight Solutions Logo",
          width: "100px",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Portfolio Home" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "burger-menu", role: "button", "aria-label": "Toggle navigation menu", "area-expanded": "false", children: [
      /* @__PURE__ */ jsx("div", { className: "burger-bar" }),
      /* @__PURE__ */ jsx("div", { className: "burger-bar" }),
      /* @__PURE__ */ jsx("div", { className: "burger-bar" })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "navbar-links", role: "menu", "aria-label": "Navigation Links", children: [
      /* @__PURE__ */ jsx("li", { role: "menuitem", children: /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { role: "menuitem", children: /* @__PURE__ */ jsx("a", { href: "/projects", children: "Projects" }) }),
      /* @__PURE__ */ jsx("li", { role: "menuitem", children: /* @__PURE__ */ jsx("a", { href: "/contact", children: "Contact" }) })
    ] }),
    /* @__PURE__ */ jsxs("a", { className: "rainbow-flag", href: "/", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "rainbow-flag-img",
          src: "/image/rainbow-flag.webp",
          alt: "Pride flag supporting LGBTQIA+ community",
          width: "60px",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Portfolio Home" })
    ] })
  ] }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { children: [
    /* @__PURE__ */ jsx("section", { className: "footer", children: /* @__PURE__ */ jsxs("address", { className: "social-links", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.linkedin.com/in/gina-horch",
          "aria-label": "Visit Gina's LinkedIn profile",
          title: "LinkedIn",
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "socials-icon",
                src: "./image/linkedin-icon-round.svg",
                alt: "The LinkedIn logo",
                width: "60px",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "Gina's LinkedIn" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://pages.evolves.com.au/pledge",
          title: "AllyPledge",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "ally",
              src: "./image/ally-pledge.webp",
              alt: "Evolve Communities Ally Pledge",
              width: "200px",
              loading: "lazy"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://github.com/GinaHorch",
          "aria-label": "Visit Gina's GitHub profile",
          title: "GitHub",
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "socials-icon",
                src: "./image/github.svg",
                alt: "The GitHub logo",
                width: "60px",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "Gina's GitHub" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("small", { children: "© 2024 Social Insight Solutions" })
  ] });
};
const meta$1 = () => {
  return [
    { title: "Gina's Projects" },
    { name: "description", content: "Welcome to Gina's Projects!" }
  ];
};
function Projects() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Acknowledgement, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Projects,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const HeroSection = () => {
  return /* @__PURE__ */ jsxs("section", { className: "hero", children: [
    /* @__PURE__ */ jsxs("header", { className: "hero-text", children: [
      /* @__PURE__ */ jsx("h1", { children: "Empowering Change Through Technology" }),
      /* @__PURE__ */ jsx("p", { children: "Bringing over two decades of investigative expertise and social science research into the tech industry. With a proven track record in child protection, online safety, and tackling complex challenges, I combine forensic precision, research-driven insights, and full-stack development skills to create innovative, impactful solutions. As a proud ally to Aboriginal and Torres Strait Islander peoples, I am deeply committed to reconciliation, closing the gap, and ensuring technology uplifts and supports all communities. Together, let's build a safer, smarter, and more inclusive digital future." }),
      /* @__PURE__ */ jsxs("div", { className: "hero-links", children: [
        /* @__PURE__ */ jsxs("a", { href: "./projects.tsx", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-diagram-project" }),
          /* @__PURE__ */ jsx("span", { children: "My tech projects" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "./sis.tsx", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-hand" }),
          /* @__PURE__ */ jsx("span", { children: "Social Insight Solutions" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "./contact.tsx", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-envelope" }),
          /* @__PURE__ */ jsx("span", { children: "Get in touch" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hero-image", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "./image/GinaHeadShot.webp",
        alt: "Gina's head shot.",
        loading: "lazy"
      }
    ) })
  ] });
};
const ProjectsSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "tech-projects", children: /* @__PURE__ */ jsxs("header", { className: "projects-header", children: [
    /* @__PURE__ */ jsx("h2", { children: "Explore my tech journey" }),
    /* @__PURE__ */ jsx("p", { children: "From creating my first websites to building a Python-powered weather app and a full-stack crowdfunding platform, my projects showcase a growing expertise in web development and problem-solving. Visit my Projects Page to dive into the details, explore the tech stacks, and check out the code on GitHub." }),
    /* @__PURE__ */ jsxs("a", { href: "./projects.tsx", children: [
      /* @__PURE__ */ jsx("i", { className: "fa-solid fa-diagram-project" }),
      /* @__PURE__ */ jsx("span", { children: "My Projects Page" })
    ] })
  ] }) });
};
const meta = () => {
  return [
    { title: "Gina's Portfolio" },
    { name: "description", content: "Welcome to Gina's Portfolio!" }
  ];
};
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(Acknowledgement, {}),
      /* @__PURE__ */ jsx(ProjectsSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BPXDpiE6.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-VJ49-gok.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-DPVghzHt.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-VJ49-gok.js"], "css": ["/assets/root-DopIpIUG.css"] }, "routes/projects": { "id": "routes/projects", "parentId": "root", "path": "projects", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/projects-BB4cvW_7.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/Footer-CDoTu62P.js"], "css": [] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contact-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-BxyE0CU9.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/Footer-CDoTu62P.js"], "css": [] }, "routes/sis": { "id": "routes/sis", "parentId": "root", "path": "sis", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/sis-l0sNRNKZ.js", "imports": [], "css": [] } }, "url": "/assets/manifest-9ad2981c.js", "version": "9ad2981c" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_routeConfig": false, "v3_singleFetch": true, "v3_lazyRouteDiscovery": true, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route3
  },
  "routes/sis": {
    id: "routes/sis",
    parentId: "root",
    path: "sis",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
