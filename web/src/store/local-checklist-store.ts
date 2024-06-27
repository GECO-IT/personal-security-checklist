
import { $, useStore, useOnWindow } from '@builder.io/qwik';
import jsyaml from 'js-yaml';
import type { Sections } from '~/routes/[locale]/types/PSC';

export const useChecklist = () => {
  const state = useStore<{ checklist: Sections | null }>({ checklist: null });

  const fetchChecklist = $(async (lang : string) => {
    const localUrl =`/personal-security-checklist.${lang}.yml`;
    return fetch(localUrl)
      .then((res) => res.text())
      .then((yamlText) => {
        return jsyaml.load(yamlText);
      });
  });

  useOnWindow('load', $(() => {
    const lang = (window.location.pathname).substring(1, 3);
    console.log('lang:', lang);
    fetchChecklist(lang).then((checklist) => {
      state.checklist = checklist as Sections;
    });
  }));

  const setChecklist = $((newChecklist: Sections) => {
    state.checklist = newChecklist;
  });

  return { checklist: state, setChecklist };
};
