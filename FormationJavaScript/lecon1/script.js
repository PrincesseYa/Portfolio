// Les variables et leurs types de donnes

console.log('hey console'); // faire apparaitre dn la console
console.log(10);
console.log(5 + 32);// calcul fontionne!


let age = 25;
let telephone = 0766254236;
let prenom = 'ya';
let nom = 'Baradjiyatou';
let annee = 2023;
age = 27; 
annee = 2022
const codePin = 1234; // la const ne peut pas etre changé, le let peut etre changé
let email = 'kbs.bara';
let salutation = '                 Bonjour à tous           '

console.log(age); 

console.log(telephone); 

console.log(age, telephone);

console.log(age, telephone, prenom); 

console.log(nom);

console.log(age); 

console.log(annee);

console.log(codePin); 

// Concatenation de chaine de caractère

let  nomComplet = nom +' '+ prenom;

console.log(nomComplet);

                    // ou


let concat = `Je m'appelle ${prenom} et aussi ${nom}`;

console.log(concat);


// Obtenir une seul caractère dans une chaine de caractère

let lettre = nom[0];

console.log(lettre);

let lettrea = email[5];

console.log(lettrea);

let alpha = prenom[1];

console.log(alpha);



// Longeur d'une chaine

let longeur = nom.length;

console.log(longeur);



// Les methodes d'une chaine

let upper = prenom.toUpperCase()

let low = prenom.toLowerCase();

console.log(low);


    // indexOf()

console.log(nom.indexOf('r'));



    // lastIndexOf()

console.log(nom.lastIndexOf('a'));



    // slice(from, to)

console.log(nom.slice(0 , 2));



    // substr(from, number)


console.log(nom.substring(4, 8));


    // replace(this, with)


console.log(nom.replace('bara', 'tara')); 

    // concat(str1, str2)


console.log(nom.concat(' ', prenom)); 


    // trim() supprimer une chaine de caractère

console.log(salutation.trim());


    // chartAt(index)

console.log(nom.charAt(3))


    // split(separateur)

let greetings = 'Hello friends';
let  tmp = greetings.split(' ')
console.log(greetings.split(' ')); // pour creer un espace


    // join(array)

console.log(tmp.join('-'));


    // les operateurs arithmethiques
    // +, -, *, /, **, %(modulo=le reste)

console.log(10%3);

let  rayon = 10
let pi = 3.14
let longeure = 45
let largeur = 10

let Surface_ciccle = pi * rayon**2
let surface_rect = longeure * largeur
let perimetre = 2 * pi * rayon 

let result = `Mon cercle à pour perimetre: ${perimetre} et pour surface: ${Surface_ciccle} et mon rectangle a pour surface: ${surface_rect}`;

console.log(result); 


    // les operateurs incrementals et decrementals
    //++ -- += -= *= /= 

let likes = 0;
likes = likes + 1; // signifie la meme chose que likes ++;
likes = likes - 1; // signifie la meme chose que likes --;

likes += 2; // signifie la meme chose que likes + 2
likes -= 3; 
likes += 18; 
likes -= 23;
likes += 23;
likes -= 16;
likes += 12;
likes *= 2;

console.log(likes);


