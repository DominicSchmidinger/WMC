window.onload = function () {
  document.querySelector('#btn-add').addEventListener("click", () => {
    addHero();
  })
};

function addHero() {
  console.log('btn-add click: add hero');

  // read tha value from the form and save them in an object
  let hero = {
    name: '',
    force: [], // use split(',')
    universe: '',
  };
  // TODO

  // read from localStorage to get the heroes (+ parse JSON)
  let heroes = JSON.parse(localStorage.getItem('heroes'));
  // console.log(heroes);

  // add hero to heroes from localStorage
  hero.name = document.getElementById('heroname').value;
  hero.force = document.querySelector('#heroforce').value.split(',');
  hero.universe = document.querySelector('#herouniverse').value;
  hero.accessoires = document.getElementById('accessoires').value;
  // add new hero to heroes -> push()
  heroes.push(hero);
  console.log(heroes);

  // send heroes back to the localStorage (JSON.stringify())
  // TODO
  localStorage.setItem('heroes', JSON.stringify(heroes));
}