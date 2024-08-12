/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderTransition, b as createAstro, e as renderComponent } from '../../chunks/astro/server_CMB5Hv4u.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Djtm7gkJ.mjs';
import 'clsx';
/* empty css                                   */
import '@astrojs/internal-helpers/path';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$MovieDetails = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MovieDetails;
  const { data } = Astro2.props;
  const movie = {
    ...data,
    poster_path: data.poster_path ? "https://image.tmdb.org/t/p/w500/" + data.poster_path : "https://via.placeholder.com/500x750",
    vote_average: (data.vote_average * 10).toFixed(2) + "%",
    release_date: new Date(data.release_date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    genres: data.genres.map((g) => g.name).join(", "),
    crew: data.credits.crew.slice(0, 3),
    cast: data.credits.cast.slice(0, 5).map((c) => ({
      ...c,
      profile_path: c.profile_path ? "https://image.tmdb.org/t/p/w300/" + c.profile_path : "https://via.placeholder.com/300x450"
    })),
    images: data.images.backdrops.slice(0, 9)
  };
  return renderTemplate`${maybeRenderHead()}<div class="movie-info border-b border-gray-800"> <div class="container mx-auto px-4 py-16 flex flex-col md:flex-row"> <div class="flex-none"> <img${addAttribute(movie.poster_path, "src")}${addAttribute(`${movie.title} Poster`, "alt")} class="movie-poster w-64 lg:w-96" id="movie-poster"${addAttribute(renderTransition($$result, "2fql7s6g", "", `poster-${movie.id}`), "data-astro-transition-scope")}> </div> <div class="md:ml-24"> <h2 class="text-4xl mt-4 md:mt-0 mb-2 font-semibold">${movie.title}</h2> <div class="flex flex-wrap items-center text-gray-400 text-sm"> <svg class="fill-current text-orange-500 w-4" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star"></path></g></svg> <span class="ml-1">${movie.vote_average}</span> <span class="mx-2">|</span> <span>${movie.release_date}</span> <span class="mx-2">|</span> <span>${movie.genres}</span> </div> <p class="text-gray-300 mt-8"> ${movie.overview} </p> <div class="mt-12"> <h4 class="text-white font-semibold">Featured Crew</h4> <div class="flex mt-4"> ${movie.crew.map((crew) => renderTemplate`<div class="mr-8"> <div>${crew.name}</div> <div class="text-gray-400 text-sm">${crew.job}</div> </div>`)} </div> </div> </div> </div> </div> <!-- end movie-info --> <div class="movie-cast border-b border-gray-800"> <div class="container mx-auto px-4 py-16"> <h2 class="text-4xl font-semibold">Cast</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"> ${movie.cast.map((cast) => renderTemplate`<div class="mt-8"> <span> <img${addAttribute(`person-photo-${cast.id}`, "id")}${addAttribute(cast.profile_path, "src")}${addAttribute(cast.name, "alt")} class="thumbnail hover:opacity-75 transition ease-in-out duration-150"> </span> <div class="mt-2"> <span class="text-lg mt-2 hover:text-gray:300">${cast.name}</span> <div class="text-sm text-gray-400">${cast.character}</div> </div> </div>`)} </div> </div> </div> <!-- end movie-cast --> <div class="movie-images"> <div class="container mx-auto px-4 py-16"> <h2 class="text-4xl font-semibold">Images</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> ${movie.images.map((image) => renderTemplate`<div class="mt-8"> <span> <img${addAttribute(`https://image.tmdb.org/t/p/w500${image.file_path}`, "src")} loading="lazy"${addAttribute(movie.name, "alt")} class="hover:opacity-75 transition ease-in-out duration-150"> </span> </div>`)} </div> </div> </div> <!-- end movie-images -->`;
}, "/home/user/pircasdequilapilun/src/components/MovieDetails.astro", "self");

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetDataEntryById({ getEntryImport }) {
  return async function getDataEntryById(collection, id) {
    const lazyImport = await getEntryImport(collection, id);
    if (!lazyImport) throw new Error(`Entry ${collection} → ${id} was not found.`);
    const entry = await lazyImport();
    return {
      id: entry.id,
      collection: entry.collection,
      data: entry.data
    };
  };
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/movies/1008042.json": () => import('../../chunks/1008042_CFXw91hk.mjs'),"/src/content/movies/1085218.json": () => import('../../chunks/1085218_CHnV6WrO.mjs'),"/src/content/movies/1880.json": () => import('../../chunks/1880_C_5RLLN9.mjs'),"/src/content/movies/298618.json": () => import('../../chunks/298618_DFM6rlhg.mjs'),"/src/content/movies/335977.json": () => import('../../chunks/335977_DTI8DaRi.mjs'),"/src/content/movies/346698.json": () => import('../../chunks/346698_B0ZQfvdN.mjs'),"/src/content/movies/385687.json": () => import('../../chunks/385687_CmzTp2Iy.mjs'),"/src/content/movies/565770.json": () => import('../../chunks/565770_66mujnjr.mjs'),"/src/content/movies/569094.json": () => import('../../chunks/569094_CEv1eS3P.mjs'),"/src/content/movies/606403.json": () => import('../../chunks/606403_mCqinAiz.mjs'),"/src/content/movies/614930.json": () => import('../../chunks/614930_yuK4YAIy.mjs'),"/src/content/movies/615656.json": () => import('../../chunks/615656_DlC8xQSO.mjs'),"/src/content/movies/667538.json": () => import('../../chunks/667538_Bux93XFa.mjs'),"/src/content/movies/678512.json": () => import('../../chunks/678512_Cb6LR7Ts.mjs'),"/src/content/movies/717930.json": () => import('../../chunks/717930_CLDRw5Yw.mjs'),"/src/content/movies/762430.json": () => import('../../chunks/762430_B4tWUsxh.mjs'),"/src/content/movies/820525.json": () => import('../../chunks/820525_B-u-PW80.mjs'),"/src/content/movies/968051.json": () => import('../../chunks/968051_BOH3LcEJ.mjs'),"/src/content/movies/976573.json": () => import('../../chunks/976573_Cm1t3ua4.mjs'),"/src/content/movies/990140.json": () => import('../../chunks/990140_BZGcp1QM.mjs')});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"movies":{"type":"data","entries":{"1880":"/src/content/movies/1880.json","298618":"/src/content/movies/298618.json","335977":"/src/content/movies/335977.json","346698":"/src/content/movies/346698.json","385687":"/src/content/movies/385687.json","565770":"/src/content/movies/565770.json","569094":"/src/content/movies/569094.json","606403":"/src/content/movies/606403.json","614930":"/src/content/movies/614930.json","615656":"/src/content/movies/615656.json","667538":"/src/content/movies/667538.json","678512":"/src/content/movies/678512.json","717930":"/src/content/movies/717930.json","762430":"/src/content/movies/762430.json","820525":"/src/content/movies/820525.json","968051":"/src/content/movies/968051.json","976573":"/src/content/movies/976573.json","990140":"/src/content/movies/990140.json","1008042":"/src/content/movies/1008042.json","1085218":"/src/content/movies/1085218.json"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getDataEntryById = createGetDataEntryById({
	getEntryImport: createGlobLookup(dataCollectionToEntryMap),
});

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const result = await getDataEntryById("movies", Astro2.params.id);
  const data = result.data.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.title} on Movies List` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MovieDetails", $$MovieDetails, { "data": data })} ` })}`;
}, "/home/user/pircasdequilapilun/src/pages/movies/[id].astro", void 0);

const $$file = "/home/user/pircasdequilapilun/src/pages/movies/[id].astro";
const $$url = "/movies/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
