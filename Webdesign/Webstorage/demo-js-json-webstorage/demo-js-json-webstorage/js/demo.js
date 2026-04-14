window.onload = function () {
  let heroes = [
    {
      name: 'Batman',
      force: 'nothing',
      universe: 'dc',
      accesoires: ['Cape', 'Mask', 'Belt'],
    },
    {
      name: 'Superman',
      force: ['fly', 'bulletproof', 'laser'],
      universe: 'dc',
    },
    {
      name: 'Hulk',
      force: ['super power', 'gets green'],
      universe: 'marvel',
    },
  ];

  // ****************************************************************
  // FALSCH: Object heroes als Object in den Webstorage schreiben!!!! -> Webstorage speichert immer nur String!!!!

  // Speicher heroes im session storage (nicht im Formart JSON)
  // localStorage.setItem('heroes', heroes);

  // Lese vom localStorage (nicht im Formart JSON) -> die Informationen vom Array heroes sind verloren gegangen!!!!
  // let heroesFromlocalStorage = localStorage.getItem('heroes');
  // console.log(heroesFromlocalStorage);

  // ################################################################
  // RICHTIG: Object heroes in JSON umwandlen

  // Speicher heroes im Format JSON im session storage
  // TODO - check also if heroes exist in the localStorage === null
  console.log(localStorage.getItem('heroes'));
  if (localStorage.getItem('heroes') === null) {
    localStorage.setItem('heroes', JSON.stringify(heroes));
  }

  // Lese vom session storage (+ parse JSON). Speicher die Rückgabe wieder in heroesFromlocalStorage
  // TODO
  heroesFromlocalStorage = JSON.parse(localStorage.getItem('heroes'));

  // TODO: Gib den Namen Batman auf der Console aus -> Ergebnis: Batman
  console.log(heroesFromlocalStorage[0].name);

  // TODO: Gib den Batman seine Stärke (force) aus -> Ergebnis: nothing
  console.log(heroesFromlocalStorage[0].force);

  // JSON from session storage
  // TODO: just uncomment this area!
  heroesFromlocalStorage.forEach(hero => {
    let row =
      '<tr><td>' +
      hero.name +
      '</td><td>' +
      hero.force +
      '</td><td>' +
      hero.universe +
      '</td></tr>';
    document.querySelector('#tbody-localstorage').innerHTML += row;
  });
};
