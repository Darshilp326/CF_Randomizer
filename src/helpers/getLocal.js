export function getPromblemsListFromStorage() {
  const result = localStorage.getItem('problemsList');
  if (!result) return [];

  const { problemsList } = JSON.parse(result);
  return problemsList;
}

export function setProblemsListToStorage(list) {
  const storageObject = {
    problemsList: list,
  };

  localStorage.setItem('problemsList', JSON.stringify(storageObject));
}

export function clearProblemsList() {
  localStorage.setItem('problemsList', JSON.stringify({ problemsList: [] }));
}
