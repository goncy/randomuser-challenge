export default {
  list: (count = 50) =>
    fetch(`https://randomuser.me/api/?results=${count}`)
      .then(res => res.json())
      .then(response => response.results),
};
