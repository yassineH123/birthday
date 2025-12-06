// Texte amoureux (amélioré pour plus d'émotion)
const text = `Nouhayla, mon cœur qui bat,

Aujourd’hui tu as 20 ans… et moi j’ai la chance immense de t’avoir dans ma vie tous les jours depuis qu’on s’est trouvés.

À chaque fois que tu souris, c’est comme si le monde entier devenait plus beau.
À chaque fois que tu me regardes avec tes grands yeux, je tombe encore plus amoureux.

Tu es ma lumière, mon rire, mon refuge, mon avenir.
Je ne sais pas ce que j’ai fait pour te mériter, mais je passerai ma vie à essayer de te rendre aussi heureuse que tu me rends heureux.

Tu es la plus belle chose qui me soit arrivée, et je remercie le ciel tous les jours de t’avoir mise sur mon chemin.

Joyeux anniversaire mon amour, ma Nouhayla, ma vie.
Je t’aime plus que tout.
Pour toujours et un jour de plus. ♡

– Ton chéri qui t’aime à l’infini`;

let i = 0;
const speed = 40; // Un peu plus rapide pour fluidité
const messageEl = document.getElementById("message");

function typeWriter() {
  if (i < text.length) {
    messageEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    messageEl.style.opacity = 1;
    showPhotos();
  }
}

// Afficher les photos progressivement avec un effet plus doux
function showPhotos() {
  const imgs = document.querySelectorAll(".photos img");
  imgs.forEach((img, index) => {
    setTimeout(() => img.classList.add("show"), 300 + index * 400);
  });
}

// Musique avec loop et volume ajusté
function playMusic() {
  const audio = document.getElementById("song");
  audio.volume = 0.5;
  if (audio.paused) {
    audio.play();
    this.textContent = "♡ Musique en cours... ♡";
  } else {
    audio.pause();
    this.textContent = "♡ Joue notre chanson ♡";
  }
}

// Pétales de roses avec plus de variété
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = Math.random() * 8 + 10 + "s";
  petal.style.width = Math.random() * 10 + 20 + "px";
  petal.style.height = Math.random() * 10 + 25 + "px";
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 18000);
}

setInterval(createPetal, 200);
setTimeout(typeWriter, 1000);

// Ajout d'un effet de confetti simple pour l'anniversaire (optionnel, si tu veux l'ajouter)
function confetti() {
  for (let i = 0; i < 50; i++) {
    const conf = document.createElement("div");
    conf.style.position = "absolute";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-10px";
    conf.style.width = "10px";
    conf.style.height = "10px";
    conf.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    conf.style.animation = `fallConfetti ${Math.random() * 3 + 2}s linear`;
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 5000);
  }
}
/* Remove the @keyframes block from JS and add it to your CSS file */

// Lancer confetti au chargement
window.addEventListener("load", () => setTimeout(confetti, 2000));