const monObjet = {'a': 1};
console.log(monObjet);

const monSecondObjet = {'b': 2};
monSecondObjet.b = 'test';
console.log(monSecondObjet);

const monTroisiemeObjet = {'c': 3};
monTroisiemeObjet.d = 4;
console.log(monTroisiemeObjet);

const monQuatriemeObjet = {'e': 5};
delete monQuatriemeObjet.e;
console.log(monQuatriemeObjet);