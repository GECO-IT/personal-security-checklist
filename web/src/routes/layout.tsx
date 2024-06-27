import { component$, useContextProvider, Slot } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import jsyaml from "js-yaml";

import Navbar from "~/routes/[locale]/components/furniture/nav";
import Footer from "~/routes/[locale]/components/furniture/footer";
import { ChecklistContext } from "~/store/checklist-context";
import type { Sections } from "~/routes/[locale]/types/PSC";
import path from "path";
import fs from "fs/promises";

export const useChecklists = routeLoader$(async ({ url }) => {
  try {
    let yamlContent;
    const lang = url.pathname.substring(1, 3);
    const filePath = path.resolve(`src/locales/personal-security-checklist.${lang}.yml`);
    try {
      yamlContent = await fs.readFile(filePath, 'utf-8');
    } catch (error) {
      return [];
    }
    return jsyaml.load(yamlContent) as Sections;
  } catch (error) {
    return [];
  }
});

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  const checklists = useChecklists();
  useContextProvider(ChecklistContext, checklists);

  return (
    <>
      <Navbar />
      <main class="bg-base-100 min-h-full">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
