import { component$, useContextProvider, Slot } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import jsyaml from "js-yaml";

import Navbar from "~/components/furniture/nav";
import Footer from "~/components/furniture/footer";
import { ChecklistContext } from "~/store/checklist-context";
import type { Sections } from "~/types/PSC";
import path from "path";
import fs from "fs/promises";

const filePath = path.resolve('public/personal-security-checklist.yml');

export const useChecklists = routeLoader$(async () => {
  try {
    let yamlContent;
    try {
      yamlContent = await fs.readFile(filePath, 'utf-8');
    } catch (error) {
      console.error("Error reading checklists:", error);
      return [];
    }
    return jsyaml.load(yamlContent) as Sections;
  } catch (error) {
    console.error("Error loading checklists:", error);
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
