function getLaterDate(date1, date2) {
  if (date1 > date2) {
    return date1;
  } else {
    return date2;
  }
}

function getDateInterval(date1, date2) {
  if (date1 >= date2) {
    throw new Error('O primeiro parâmetro deve ser uma data anterior ao segundo parâmetro.');
  }
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function getCurrentFormattedDate() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  return `${hours}:${minutes} - ${day}/${month}/${year}`;
}