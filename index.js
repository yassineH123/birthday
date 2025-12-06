const text = `Nouhayla mon cœur qui bat,

Aujourd’hui tu as 20 ans… et moi j’ai la chance immense de t’avoir dans ma vie tous les jours depuis qu’on s’est trouvés.

À chaque fois que tu souris, c’est comme si le monde entier devenait plus beau.
À chaque fois que tu me regardes avec tes grands yeux, je tombe encore plus amoureux.

Tu es ma lumière, mon rire, mon refuge, mon avenir.
Je ne sais pas ce que j’ai fait pour te mériter, mais je passerai ma vie à essayer de te rendre aussi heureuse que tu me rends heureux.

Tu es la plus belle chose qui me soit arrivée, et je remercie le ciel tous les jours de t’avoir mise sur mon chemin.

Joyeux anniversaire mon amour.
Je t’aime plus que tout.
Pour toujours ♡

– yassine`;

let i = 0;
const speed = 45;
const messageEl = document.getElementById("message");

function typeWriter() {
  if (i < text.length) {
    messageEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Fin → on enlève le curseur
    document.querySelector(".love-letter").style.borderRight = "none";
    showPhotos();
  }
}

function showPhotos() {
  document.querySelectorAll(".photos img").forEach((img, idx) => {
    setTimeout(() => img.classList.add("show"), 300 + idx * 400);
  });
}

function playMusic() {
  const audio = document.getElementById("song");
  audio.volume = 0.5;
  if (audio.paused) {
    audio.play();
    this.textContent = "Musique en cours...";
  } else {
    audio.pause();
    this.textContent = "Jouer notre chanson";
  }
}

// Pétales
function createPetal() {
  const p = document.createElement("div");
  p.className = "petal";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 10 + Math.random() * 10 + "s";
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 20000);
}
setInterval(createPetal, 200);

// Démarrage
setTimeout(typeWriter, 1000);