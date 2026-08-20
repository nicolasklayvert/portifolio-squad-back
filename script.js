const students = [
  { name: "Santana", href: "port/santana.html", className: "student-card--pink" },
  { name: "Eduardo", href: "port/eduardo.html", className: "student-card--purple" },
  { name: "Calebe", href: "port/calebe.html", className: "student-card--blue" },
  { name: "Matheus", href: "port/matheus.html", className: "student-card--gold" },
  { name: "Nicolas", href: "port/nicolas.html", className: "student-card--red" },
  { name: "Thiago", href: "port/thiago.html", className: "student-card--green" },
];

const track = document.getElementById("studentSliderTrack");
const prevBtn = document.querySelector(".students-slider__button--prev");
const nextBtn = document.querySelector(".students-slider__button--next");

const infiniteStudents = [...students, ...students, ...students];
let currentIndex = students.length;

if (track) {
  infiniteStudents.forEach((student) => {
    const card = document.createElement("a");
    card.href = student.href;
    card.className = `student-card ${student.className}`;
    card.innerHTML = `
      <span class="student-card__label">Aluno</span>
      <span class="student-card__name">${student.name}</span>
    `;
    track.appendChild(card);
  });
}

const getVisibleCards = () => {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
};

const getCardStep = () => {
  const firstCard = track?.children[0];
  if (!firstCard) return 0;

  const styles = window.getComputedStyle(track);
  const gap = Number.parseFloat(styles.gap || "24");
  const width = firstCard.getBoundingClientRect().width;
  return width + gap;
};

const updateSlider = () => {
  if (!track) return;

  const step = getCardStep();
  track.style.transition = "transform 0.35s ease";
  track.style.transform = `translateX(-${currentIndex * step}px)`;
};

const resetPosition = () => {
  if (!track) return;

  track.style.transition = "none";
  currentIndex = students.length;
  track.style.transform = `translateX(-${currentIndex * getCardStep()}px)`;

  requestAnimationFrame(() => {
    track.style.transition = "transform 0.35s ease";
  });
};

prevBtn?.addEventListener("click", () => {
  currentIndex -= 1;

  if (currentIndex < students.length) {
    track.style.transition = "none";
    currentIndex = students.length * 2 - 1;
    track.style.transform = `translateX(-${currentIndex * getCardStep()}px)`;

    requestAnimationFrame(() => {
      track.style.transition = "transform 0.35s ease";
      currentIndex -= 1;
      updateSlider();
    });
    return;
  }

  updateSlider();
});

nextBtn?.addEventListener("click", () => {
  currentIndex += 1;

  if (currentIndex >= students.length * 2) {
    track.style.transition = "none";
    currentIndex = students.length;
    track.style.transform = `translateX(-${currentIndex * getCardStep()}px)`;

    requestAnimationFrame(() => {
      track.style.transition = "transform 0.35s ease";
      currentIndex += 1;
      updateSlider();
    });
    return;
  }

  updateSlider();
});

window.addEventListener("resize", () => {
  if (track) {
    track.style.transition = "none";
    const step = getCardStep();
    track.style.transform = `translateX(-${currentIndex * step}px)`;
  }
});

window.addEventListener("load", updateSlider);

updateSlider();
