// ─────────────────────────────────────────────────────────────────────────
//  LE SEUL FICHIER À MODIFIER
// ─────────────────────────────────────────────────────────────────────────
//
//  1. Remplace les destinations ci-dessous par TES cours.
//  2. `id`      = ce qui apparaît dans le nom du fichier (pas d'accent, pas d'espace)
//     `libelle` = ce que tu vois dans le menu du clic droit
//     `code`    = le code officiel du cours, ou null
//
//  Rien d'autre à toucher dans le reste du projet.

export const DESTINATIONS = [
  // ---- Remplace ces lignes par tes cours ----
  { id: 'maths',      libelle: 'Mathématiques',      code: '201-014-LI' },
  { id: 'francais',   libelle: 'Français',           code: '601-101-MQ' },
  { id: 'anglais',    libelle: 'Anglais',            code: '604-800-LI' },
  { id: 'philo',      libelle: 'Philosophie',        code: '340-101-MQ' },
  { id: 'specialite', libelle: 'Cours de programme', code: null },

  // ---- Garde ces trois-là, ils servent tout le temps ----
  { id: 'general',    libelle: 'Général (cégep)',    code: null },
  { id: 'perso',      libelle: 'Personnel',          code: null },
  { id: 'a-classer',  libelle: '❓ Je sais pas',      code: null }
];

// Le sous-dossier de Téléchargements où les captures atterrissent.
//
// Ce dossier doit être un LIEN vers ton vrai dossier scolaire. Chrome refuse
// d'écrire ailleurs que dans Téléchargements — le lien contourne ça sans
// bidouille et sans programme en arrière-plan. Voir docs/INSTALLATION.md.
export const DOSSIER = 'Cartable';
