/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, e as renderComponent } from '../chunks/astro/server_CMB5Hv4u.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Djtm7gkJ.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { title, items } = Astro2.props;
  function formatPrice(price) {
    return price.toLocaleString("es-ES");
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col" data-astro-cid-sh445jdo> <h2 class="text-3xl font-bold mb-4 text-slate-800 w-full border-b-4 border-red-500 py-4" data-astro-cid-sh445jdo>${title}</h2> ${items.map((item) => renderTemplate`<div class="text-xl flex items-center mb-4" data-astro-cid-sh445jdo> <div class="flex-auto" data-astro-cid-sh445jdo> <h3 class="font-bold" data-astro-cid-sh445jdo>${item.nombre}</h3> ${item.ingredientes && renderTemplate`<p class="ingredients text-sm" data-astro-cid-sh445jdo> ${item.ingredientes}</p>`} </div> <div class="flex-grow mx-2 border-dotted-line border-white" data-astro-cid-sh445jdo></div> <p class="price" data-astro-cid-sh445jdo>$${formatPrice(item.precio)}</p> </div>`)} </div> `;
}, "/home/user/pircasdequilapilun/src/components/Section.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entradas = [
    { nombre: "Consome", precio: 3990 },
    { nombre: "Champi\xF1ones salteados", precio: 3990 },
    { nombre: "Empandas de queso (6un)", precio: 3990 },
    { nombre: "Ceviche mixto verduras", ingredientes: "champi\xF1on / palmito / palta", precio: 3990 }
  ];
  const platosPreparados = [
    { nombre: "Parrillada Especial 4 personas.", ingredientes: "4 Cortes lomo vetado 150grs. c/u, 4 Chuletas parrilleras, 2 Tuto entero de pollo, Longaniza artesanal, 3 papas cocidas, 4 Longanicillas.", precio: 49990 },
    { nombre: "Parillada Interiores 4 personas.", ingredientes: "4 ubre, 4 chunchules, 4 longanizas, 4 prietas, 400grs lomo vetado, 4 chuletas, 3 papas cocidas. ", precio: 44990 },
    { nombre: "Parillada Especial 2 personas.", ingredientes: "2 Cortes lomo vetado 250grs. c/u, 2 Chuletas parrilleras, 1 Tuto entero de pollo, Longaniza artesanal, 2 papas cocidas, 2 Longanicillas.", precio: 32990 },
    { nombre: "Parillada Interiores 2 personas.", ingredientes: "2 Ubre, 2 Chuchules, 2 Longanizas, 2 Prietas, 300 grs. Lomo vetado, 2 Chuletas, 2 Papas cocidas.", precio: 29990 },
    { nombre: "Entra\xF1a 300grs. ", ingredientes: "salteados verduras /cebollas caramelizadas ", precio: 25990 },
    { nombre: "Filete 300grs. ", ingredientes: "Papas Mayo, Arroz, Papas fritas, pur\xE9, papas cocidas o ensalada surtida.", precio: 17990 },
    { nombre: "Lomo liso o vetado (300grs)  c/agregado ", ingredientes: "Papas Mayo, Arroz, Papas fritas, pur\xE9, papas cocidas o ensalada surtida.", precio: 15990 },
    { nombre: "Costillar al Horno", ingredientes: "Papas Mayo, Arroz, Papas fritas, pur\xE9, papas cocidas o ensalada surtida.", precio: 12990 },
    { nombre: "Chuletas a la parrilla", ingredientes: "Papas Mayo, Arroz, Papas fritas, pur\xE9, papas cocidas o ensalada surtida.", precio: 10990 },
    { nombre: "Arollado a la chilena 400grs.", ingredientes: "Papas cocidas.", precio: 7990 },
    { nombre: "Prietas", ingredientes: "Papas cocidas.", precio: 7990 },
    { nombre: "Cazuela de Vacuno", ingredientes: "Ensalada de la casa.", precio: 7990 },
    { nombre: "Pechuga a la plancha", ingredientes: "Papas Mayo, Arroz, Papas fritas, pur\xE9, papas cocidas o ensalada surtida.", precio: 7990 },
    { nombre: "Pernil", ingredientes: "Papas cocidas.", precio: 7990 },
    { nombre: "Carne mechada", ingredientes: "Papas Mayo, Arroz, Papas fritas, pur\xE9, papas cocidas o ensalada surtida.", precio: 7990 },
    { nombre: "fideos con salsa y vienesas", ingredientes: "", precio: 5990 },
    { nombre: "Nugget ", ingredientes: "c/ papas fritas.", precio: 5990 },
    { nombre: "Croquetas de garbanzos/soya.", ingredientes: "Papas Mayo, Arroz, Papas fritas, pur\xE9, papas cocidas o ensalada surtida.", precio: 5990 },
    { nombre: "churrascos ", ingredientes: "italiano, barrcos luco, napolitano, chacarero / con papas fritas ", precio: 9990 },
    { nombre: "churrasco de la casa ", ingredientes: "cebolla caramelizada, pepinillo, queso fundido, salsa bbq  / con papas fritas ", precio: 9990 },
    { nombre: "churrasco de la casa II", ingredientes: "cebolla caramelizada, tocino, queso fundido, huevo frito  / con papas fritas ", precio: 9990 }
    // Añadir más elementos de la lista aquí
  ];
  const agregados = [
    { nombre: "Papas cocidas", ingredientes: "", precio: 3490 },
    { nombre: "Porcion papas fritas", ingredientes: "", precio: 3490 },
    { nombre: "Porcion papas mayo", ingredientes: "", precio: 3490 },
    { nombre: "Ensalada surtida", ingredientes: "", precio: 5990 },
    { nombre: "a lo pobre", ingredientes: "", precio: 4990 },
    { nombre: "Porcion arroz", ingredientes: "", precio: 3490 },
    { nombre: "Porcion ensalada", ingredientes: "lechuga, tomate, chilena, repollo, apio", precio: 3790 },
    { nombre: "Ensalada Palmitos c/ palta", ingredientes: "", precio: 5190 }
    // Añadir más elementos de la lista aquí
  ];
  const postres = [
    { nombre: "Copa Helado Vainilla/Chocolate/Lucuma", ingredientes: "", precio: 3990 },
    { nombre: "Duraznos/ Frutillas c/ crema", ingredientes: "", precio: 3990 },
    { nombre: "celestino", ingredientes: "", precio: 4990 },
    { nombre: "trozo de tortas", ingredientes: "", precio: 4990 }
    // Añadir más elementos de la lista aquí
  ];
  const bebestibles = [
    { nombre: "MISTRAL 35\xBA 750cc.", ingredientes: "4 Bebidas lata 350cc", precio: 24990 },
    { nombre: "JOHNNIE WALKER BLACK LABEL 750cc", ingredientes: "4 Bebidas lata 350cc", precio: 45990 },
    { nombre: "JOHNNIE WALKER RED LABEL 750cc", ingredientes: "4 Bebidas lata 350cc", precio: 29990 },
    { nombre: "UNDURRAGA PINOT MERLOT 750cc.", ingredientes: "", precio: 6990 },
    { nombre: "UNDURRAGA PINOT CARMENERE 750cc", ingredientes: "", precio: 6990 },
    { nombre: "DIABLO DARK RED 750cc.", ingredientes: "", precio: 12990 },
    { nombre: "VINO DIABLO DEEP CARMENERE 750cc", ingredientes: "", precio: 12990 },
    { nombre: "CASA SILVA COLECCION CABERNET SAUVIGNON 750cc", ingredientes: "", precio: 9990 },
    { nombre: "CASA SILVA COLECCION CARMENERE 750c", ingredientes: "", precio: 9990 },
    { nombre: "CASA SILVA COLECCION MERLOT 750cc", ingredientes: "", precio: 9990 },
    { nombre: "CASA SILVA COLECCION SAUVIGNON BLANC 750cc", ingredientes: "", precio: 9990 },
    { nombre: "CASA SILVA COLECCION CHARDONNAY 750cc.", ingredientes: "", precio: 9990 },
    { nombre: "Botellin Corona o Miller 330cc", ingredientes: "", precio: 2800 },
    { nombre: "Lata bebida 350cc", ingredientes: "", precio: 2e3 },
    { nombre: "Agua mineral ", ingredientes: "", precio: 1200 },
    { nombre: "Copa Chirimoya Colada", ingredientes: "", precio: 3990 },
    { nombre: "Copa Mango Sour", ingredientes: "", precio: 3990 },
    { nombre: "Copa Pi\xF1a Colada", ingredientes: "", precio: 3990 },
    { nombre: "Copa Pisco Sour", ingredientes: "", precio: 3990 },
    { nombre: "Corto de Pisco Mistral + Bebida lata 350cc", ingredientes: "", precio: 4990 },
    { nombre: "Corto de Whisky JW Red + Bebida lata 350cc", ingredientes: "", precio: 5990 },
    { nombre: "Corto de Whisky JW Black + Bebida lata 350cc", ingredientes: "", precio: 7990 },
    { nombre: "Michelada \xF3 Chelada ", ingredientes: "", precio: 1890 }
    // Añadir más elementos de la lista aquí
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pircas de Quilapil\xFAn" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div id="Entradas"> ${renderComponent($$result2, "Section", $$Section, { "title": "Entradas", "items": entradas })} </div> <div id="Platos"> ${renderComponent($$result2, "Section", $$Section, { "title": "Platos Preparados", "items": platosPreparados })} </div> <div id="Agregados"> ${renderComponent($$result2, "Section", $$Section, { "title": "Agregados", "items": agregados })} </div> <div id="Postres"> ${renderComponent($$result2, "Section", $$Section, { "title": "Postres", "items": postres })} </div> <div id="Bebestibles"> ${renderComponent($$result2, "Section", $$Section, { "title": "Bebestibles", "items": bebestibles })} </div> </div> ` })}`;
}, "/home/user/pircasdequilapilun/src/pages/index.astro", void 0);

const $$file = "/home/user/pircasdequilapilun/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
