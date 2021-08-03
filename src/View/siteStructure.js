export const menuSections = [
  { name: 'Start', id: 'start' },
  { name: 'Projekty', id: 'projekty' },
  { name: 'O mnie', id: 'oMnie' },
  { name: 'Kontakt', id: 'kontakt' },
];

export const idToIndex = {
  start: 0,
  projekty: 1,
  oMnie: 2,
  kontakt: 3,
};

// export const sectionIndex = new Map(menuSections.map((obj, i) => [obj.id, i]));
// export const getSectionIndex = (id) => sectionIndex.get(id);
