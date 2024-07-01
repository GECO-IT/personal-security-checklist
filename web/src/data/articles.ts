
interface Article {
  title: string;
  description: string;
  slug: string;
  markdown: string;
  warningMessage?: string;
}

const articles: { [key: string]: Article[] } = {
  en: [
    {
      title: 'Why security matters?',
      description: 'Why your personal digital security and privacy needs to be taken seriously.',
      slug: 'importance-of-digital-security',
      markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/0_Why_It_Matters.md',
    },
    {
      title: 'Security List: Short Version',
      description: 'Main lists too long? Here\'s the TL;DR',
      slug: 'short-list',
      markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/2_TLDR_Short_List.md',
    },
    {
      title: 'Helpful Links',
      description: 'Directory of links to additional tools, resources and information.',
      slug: 'helpful-links',
      markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/4_Privacy_And_Security_Links.md',
      warningMessage: 'This article was written in 2020, and needs updating.',
    },
    {
      title: 'Security Gadgets',
      description: 'Handy hardware devices that can help protect your privacy and security.',
      slug: 'privacy-gadgets',
      markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/6_Privacy_and-Security_Gadgets.md',
      warningMessage: 'This article is outdated and may contain incorrect information. '
        + 'It is recommended to verify the information before using any of the products listed.',
    },
    {
      title: 'Privacy-Respecting Software',
      description: 'The ultimate list of privacy-respecting software alternatives to popular apps and services.',
      slug: 'awesome-privacy',
      markdown: 'https://raw.githubusercontent.com/Lissy93/awesome-privacy/main/README.md',
      warningMessage: 'This resource has moved! You can now access it at github.com/Lissy93/awesome-privacy',
    },
  ],
  fr: [
    {
      title: 'Pourquoi la sécurité est importante ?',
      description: 'Pourquoi votre sécurité numérique personnelle et votre vie privée doivent être prises au sérieux.',
      slug: 'importance-of-digital-security',
      markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/0_Why_It_Matters.md',
    },
    {
      title: 'Liste de sécurité : Version courte',
      description: 'Les listes principales sont trop longues ? Voici le résumé.',
      slug: 'short-list',
      markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/2_TLDR_Short_List.md',
    },
    {
      title: 'Liens utiles',
      description: 'Répertoire de liens vers des outils, des ressources et des informations supplémentaires.',
      slug: 'helpful-links',
      markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/4_Privacy_And_Security_Links.md',
      warningMessage: 'Cet article a été écrit en 2020 et doit être mis à jour.',
    },
    {
      title: 'Gadgets de sécurité',
      description: 'Des appareils matériels pratiques qui peuvent vous aider à protéger votre vie privée et votre sécurité.',
      slug: 'privacy-gadgets',
      markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/6_Privacy_and-Security_Gadgets.md',
      warningMessage: 'Cet article est obsolète et peut contenir des informations incorrectes. '
        + 'Il est recommandé de vérifier les informations avant d\'utiliser l\'un des produits répertoriés.',
    },
    {
      title: 'Logiciels respectueux de la vie privée',
      description: 'La liste ultime des alternatives de logiciels respectueux de la vie privée aux applications et services populaires.',
      slug: 'awesome-privacy',
      markdown: 'https://raw.githubusercontent.com/Lissy93/awesome-privacy/main/README.md',
      warningMessage: 'Cette ressource a déménagé ! Vous pouvez maintenant y accéder sur github.com/Lissy93/awesome-privacy',
    },
  ],
};

export default articles;
