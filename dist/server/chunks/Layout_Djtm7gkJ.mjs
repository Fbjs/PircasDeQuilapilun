import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, m as maybeRenderHead, e as renderComponent, f as renderHead, g as renderSlot } from './astro/server_CMB5Hv4u.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/user/pircasdequilapilun/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-gray-800 bg-gray-900 text-white"> <div class="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between"> <div class="flex items-center"> <img src="/src/assets/logo_rojo_alta.png" alt="Pircas de Quilapilún" class="w-24 h-24 md:w-32 md:h-32"> <div class="ml-4 text-sm"> <p class="font-bold text-lg">Pircas de Quilapilún</p> <p>Dirección: Calle Falsa 123, Santiago, Chile</p> <p>Teléfono: +56 9 1234 5678</p> </div> </div> <div class="mt-4 md:mt-0 text-sm text-center md:text-right"> <p>Horarios: Lun-Dom 12:00 PM - 11:00 PM</p> <p>Email: contacto@pircasquilapilun.cl</p> </div> </div> </footer>`;
}, "/home/user/pircasdequilapilun/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav class="nav border-gray-800 sticky top-0 z-30 bg-white" data-astro-cid-dmqpwcec> <div class="container mx-auto flex items-center justify-between px-4 py-2" data-astro-cid-dmqpwcec> <img src="/src/assets/logo_color_alta.png" alt="Pircas de Quilapilún" class="w-24 h-24 md:w-48 md:h-48" data-astro-cid-dmqpwcec> <!-- Botón Hamburger --> <button id="nav-toggle" class="block md:hidden text-gray-800 focus:outline-none" data-astro-cid-dmqpwcec> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-dmqpwcec> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" data-astro-cid-dmqpwcec></path> </svg> </button> </div> <!-- Menú principal --> <div id="nav-menu" class="hidden transform transition-all duration-300 ease-in-out opacity-0 md:opacity-100 md:flex md:container mx-2 md:mx-auto flex-col md:flex-row items-center justify-between px-4 py-4 bg-gray-900 rounded-2xl" data-astro-cid-dmqpwcec> <ul class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8" data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec> <a href="/" class="flex items-center font-bold text-xl nav-item" data-astro-cid-dmqpwcec> <span data-astro-cid-dmqpwcec>Nuestra</span>
&nbsp;
<span class="text-red-500" data-astro-cid-dmqpwcec>Carta</span> </a> </li> <li class="font-bold text-xl" data-astro-cid-dmqpwcec> <a href="#Entradas" class="hover:text-red-500 pr-2 nav-item" data-astro-cid-dmqpwcec>Entradas</a> </li> <li class="font-bold text-xl" data-astro-cid-dmqpwcec> <a href="#Platos" class="hover:text-red-500 pr-2 nav-item" data-astro-cid-dmqpwcec>Platos</a> </li> <li class="font-bold text-xl" data-astro-cid-dmqpwcec> <a href="#Agregados" class="hover:text-red-500 pr-2 nav-item" data-astro-cid-dmqpwcec>Agregados</a> </li> <li class="font-bold text-xl" data-astro-cid-dmqpwcec> <a href="#Postres" class="hover:text-red-500 pr-2 nav-item" data-astro-cid-dmqpwcec>Postres</a> </li> <li class="font-bold text-xl" data-astro-cid-dmqpwcec> <a href="#Bebestibles" class="hover:text-red-500 pr-2 nav-item" data-astro-cid-dmqpwcec>Bebestibles</a> </li> </ul> </div> </nav> <!-- Pantalla de carga --> <div id="loading-screen" class="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out opacity-0 hidden" data-astro-cid-dmqpwcec> <div class="flex flex-col items-center" data-astro-cid-dmqpwcec> <img src="/src/assets/logo_color_alta.png" alt="Pircas de Quilapilún" class="w-32 h-32 animate-pulse" data-astro-cid-dmqpwcec> <p class="mt-4 text-xl font-bold" data-astro-cid-dmqpwcec>Cargando...</p> </div> </div>  `;
}, "/home/user/pircasdequilapilun/src/components/Nav.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="view-transition" content="same-origin"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="font-sans bg-gray-900 text-white bg-cover bg-center bg-no-repeat relative" style="background-image: url('/src/assets/fondo_1.png');"> <!-- Capa superpuesta con opacidad --> <div class="absolute inset-0 bg-white opacity-35"></div> <div class="h-screen overflow-hidden flex flex-col relative z-10"> ${renderComponent($$result, "Nav", $$Nav, {})} <div id="container" class="h-full flex-1 overflow-y-auto"> <div id="content"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </div> </body></html>`;
}, "/home/user/pircasdequilapilun/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
