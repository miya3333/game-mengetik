const kataBahasaIndonesia = [
  "puding", "keju", "nasi", "ayam", "tempe", "sambal", "bayam", "jahe", "wortel", "telur",
  "pala", "kelapa", "cengkeh", "kunci", "kembang", "daun", "gula", "pisang", "cabai", "ketimun",
  "ikan", "kentang", "kapulaga", "bakso", "apel", "jagung", "paprika", "terong", "sayur", "bakmi",
  "ketumbar", "jamur", "lontong", "susu", "sambel", "kacang", "bawang", "tomat", "garam", "ketela",
  "kopi", "kue", "sirup", "teh", "mie", "jamu", "daging", "udang", "lele", "sapi", "ikan asin",
  "tahu", "kecap", "tepung", "buncis", "kol", "labu", "pare", "petai", "jengkol", "sawi", "salak",
  "pepaya", "semangka", "mangga", "nangka", "durian", "nanas", "roti", "sereal", "minyak", "mentega",
  "selai", "serai", "lengkuas", "kencur", "basil", "oregano", "lada", "merica", "vanili", "asam",
  "gula merah", "gula pasir", "tape", "oncom", "krupuk", "keripik", "ikan teri", "ikan lele",
  "ikan bandeng", "ikan tuna", "ikan tongkol", "beras", "ubi", "singkong", "talas", "beras merah",
  "beras ketan", "ketan", "bihun", "soun", "gandum", "tepung terigu", "tepung beras", "tepung tapioka",
  "daun salam", "daun jeruk", "daun kunyit", "kacang tanah", "kacang panjang", "kacang hijau",
  "kacang merah", "kacang mete", "kacang kedelai", "ikan nila", "ikan mujair", "ikan mas", "ikan kembung",
  "ikan cakalang", "ikan gabus", "ikan patin", "cumi", "kerang", "kepiting", "rajungan",
  "kerupuk udang", "kerupuk ikan", "ikan asap", "sosis", "daging kambing", "daging ayam", "daging bebek",
  "telur asin", "telur puyuh", "telur ayam", "telur bebek", "buah naga", "alpukat", "jeruk", "stroberi",
  "blueberry", "melon", "belimbing", "duku", "rambutan", "lengkeng", "markisa", "sirsak", "jambu",
  "jambu biji", "jambu air", "timun suri", "timun", "terasi", "santan", "kaldu", "abon", "rendang",
  "opor", "soto", "gulai", "kari", "lodeh", "rawon", "tongseng", "semur", "nugget", "mayones", "saus tomat",
  "saus sambal", "bumbu instan", "mie instan", "margarin", "roti tawar", "roti gandum", "roti manis",
  "selada", "kailan", "brokoli", "kembang kol", "zucchini", "tomat cherry", "mentimun", "bawang merah",
  "bawang putih", "bawang bombay", "seledri", "daun bawang", "cherry", "kiwi", "plum", "kurma",
  "kismis", "cranberry", "kapri", "daun singkong", "daun pepaya", "daun ubi", "rebung",
  "rebung bambu", "jamur tiram", "jamur kuping", "jamur kancing", "temulawak", "bunga lawang", "biji pala",
  "cabe rawit", "cabe merah", "cabe hijau", "cabe keriting", "kecambah", "taoge", "asparagus",
  "selada air", "terasi bakar", "bumbu racik", "asam jawa", "cuka", "minyak zaitun", "minyak goreng",
  "minyak wijen", "madu", "mocaf", "gula aren", "gula batu", "koya", "nori", "rumput laut", "agar-agar",
  "nata de coco", "es batu", "es serut", "sirup marjan", "sirup cocopandan",
  "daun katuk", "daun kelor", "daun pandan", "genjer", "talas", "gembili", "gadung", "uwi",
  "bawang dayak", "labu kuning", "ubi ungu", "umbi garut", "pakcoy", "selada air", "arugula",
  "baby buncis", "zaitun", "sawi putih", "oyong", "nangka muda", "jamur shitake", "selai nanas",
  "selai jeruk", "selai strawberry", "almond milk", "susu oat", "santan instan", "butter milk",
  "cuka apel", "cuka beras", "cuka balsamic", "mayones vegan", "tempe gembus", "nasi merah",
  "tahu sutra", "tempe semangit", "oncom merah", "oncom hitam", "aci mentah", "emping melinjo",
  "rengginang", "rempeyek", "getuk", "cenil", "klepon", "lupis", "jenang", "kue lapis", "serabi",
  "dadar gulung", "nagasari", "wajik", "kue cucur", "onde-onde", "lemper", "ketan susur",
  "kue putu", "putu ayu", "talam ubi", "talam pandan", "bubur sumsum", "bubur ketan hitam",
  "kolak pisang", "es teler", "es campur", "es cendol", "es doger", "cendol", "tape bakar",
  "tape goreng", "arem-arem", "baceman tahu", "baceman tempe", "capcay", "spaghetti", "makaroni",
  "penne", "pasta", "keju cheddar", "keju mozarella", "keju parmesan", "keju edam", "keju emmental",
  "yogurt", "greek yogurt", "kefir", "bubuk cabai", "bubuk bawang putih", "bumbu opor", "bumbu rendang",
  "bumbu pecel", "bumbu serbaguna", "sirup jagung", "sirup mapel", "sari kurma", "sari buah",
  "glukosa", "whipping powder", "coklat compound", "agar premix", "tepung custard", "tepung oat",
  "tepung sorgum", "tepung kentang", "tepung pisang", "tepung mocaf", "tepung maizena", "tepung panir"
];

const gameArea = document.getElementById("gameArea");
const chef = document.getElementById("chef");
const inputBox = document.getElementById("inputBox");
const timerDisplay = document.getElementById("timer");
const popup = document.getElementById("popup");
const scoreDisplay = document.getElementById("scoreDisplay");
const restartBtn = document.getElementById("restartBtn");
const durationSelect = document.getElementById("durationSelect");

durationSelect.addEventListener("change", () => {
  if (!timerStarted) {
    timerDuration = parseInt(durationSelect.value);
    timer = timerDuration;
    const m = Math.floor(timer / 60).toString().padStart(2, '0');
    const s = (timer % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `Waktu: ${m}:${s}`;

    // Fokus otomatis ke input box
    inputBox.focus();
  }
});

const batchSize = 10;
let timerDuration = parseInt(durationSelect.value) || 30;
let timer = timerDuration;
let timerInterval = null;
let timerStarted = false;
let currentFoods = [];
let typed = "";
let fokusIndex = 0;
let skor = 0;

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function generateFoodPositions(words) {
  const positions = [];
  const maxAttempts = 1000;
  const margin = 10;
  const areaWidth = window.innerWidth;
  const areaHeight = window.innerHeight;
  const topBound = 40;
  const bottomBound = areaHeight - 100;
  const foodBoxes = [];

  for (let w of words) {
    let attempts = 0;
    let posX, posY, width, height;
    do {
      width = (w.length * 15) + 20;
      height = 30;
      posX = Math.floor(Math.random() * (areaWidth - width - margin * 2)) + margin;
      posY = Math.floor(Math.random() * (bottomBound - topBound - height)) + topBound;
      attempts++;

      let overlapping = false;
      for (let box of foodBoxes) {
        if (
          posX < box.x + box.w + margin &&
          posX + width + margin > box.x &&
          posY < box.y + box.h + margin &&
          posY + height + margin > box.y
        ) {
          overlapping = true;
          break;
        }
      }
      if (!overlapping) break;

    } while (attempts < maxAttempts);

    foodBoxes.push({ x: posX, y: posY, w: width, h: height });
    positions.push({ name: w, x: posX, y: posY });
  }
  return positions;
}

function createFoodElements(foods) {
  document.querySelectorAll(".food").forEach(el => el.remove());

  foods.forEach(food => {
    const div = document.createElement("div");
    div.classList.add("food", "highlight");
    div.setAttribute("data-name", food.name);
    div.style.left = food.x + "px";
    div.style.top = food.y + "px";

    food.name.split('').forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.classList.add("dim");
      div.appendChild(span);
    });

    gameArea.appendChild(div);
  });
}

function updateFoodHighlight() {
  document.querySelectorAll(".food").forEach((div, idx) => {
    const name = div.dataset.name;
    div.innerHTML = "";
    for (let i = 0; i < name.length; i++) {
      const span = document.createElement("span");
      span.textContent = name[i];
      if (fokusIndex === idx && i < typed.length && name[i].toLowerCase() === typed[i].toLowerCase()) {
        span.classList.remove("dim");
        span.style.color = "#212121";
        span.style.backgroundColor = "#ffb86c";
        span.style.borderRadius = "3px";
        span.style.padding = "0 2px";
      } else {
        span.classList.add("dim");
        span.style.color = "#fff";
        span.style.backgroundColor = "transparent";
      }
      div.appendChild(span);
    }
  });
}

function moveChefTo(food) {
  const foodDiv = document.querySelector(`.food[data-name="${food.name}"]`);
  if (!foodDiv) return;
  const foodRect = foodDiv.getBoundingClientRect();
  const gameRect = gameArea.getBoundingClientRect();
  const top = foodRect.bottom - gameRect.top + 5;
  const left = foodRect.left - gameRect.left - 5;
  chef.style.top = top + "px";
  chef.style.left = left + "px";
}

function removeCurrentFoodByIndex(idx) {
  const foodDiv = document.querySelectorAll(".food")[idx];
  if (foodDiv) {
    foodDiv.style.opacity = 0;
    setTimeout(() => foodDiv.remove(), 300);
  }
  currentFoods.splice(idx, 1);
}

function loadFoods(count) {
  shuffleArray(kataBahasaIndonesia);
  const batch = kataBahasaIndonesia.splice(0, count);
  const foodsWithPos = generateFoodPositions(batch);
  currentFoods = currentFoods.concat(foodsWithPos);
  createFoodElements(currentFoods);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timer--;
    if (timer <= 0) {
      clearInterval(timerInterval);
      inputBox.disabled = true;
      showScore();
      return;
    }
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timer / 60).toString().padStart(2, '0');
  const s = (timer % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `Waktu: ${m}:${s}`;
}

function showScore() {
  scoreDisplay.innerHTML = `
    <div class="score-container">
      <h2>Waktu habis!</h2>
      <p><strong>Skor kamu:</strong> ${skor} kata</p>
    </div>
  `;
  popup.style.display = "flex";
}

function restartGame() {
  window.location.reload();
}

// ========== Tambahan: Ganti durasi dari select ==========
durationSelect.addEventListener("change", () => {
  if (!timerStarted) {
    timerDuration = parseInt(durationSelect.value);
    timer = timerDuration;
    updateTimerDisplay();
  } else {
    alert("Tidak bisa mengubah durasi setelah permainan dimulai!");
  }
});

// ========== Inisialisasi ==========
shuffleArray(kataBahasaIndonesia);
loadFoods(batchSize);
fokusIndex = 0;
typed = "";
skor = 0;
updateFoodHighlight();
moveChefTo(currentFoods[fokusIndex]);
inputBox.value = "";
updateTimerDisplay();

// Fokus input langsung saat load halaman
window.onload = () => {
  inputBox.focus();
}

inputBox.addEventListener("input", e => {
  if (inputBox.disabled) return;
  if (!timerStarted) {
    timerStarted = true;
    startTimer();
  }

  const fokusKata = currentFoods[fokusIndex];
  const value = inputBox.value.toLowerCase();
  if (!fokusKata.name.startsWith(value)) {
    inputBox.value = typed;
    return;
  }

  typed = value;
  updateFoodHighlight();

  if (typed === fokusKata.name) {
    removeCurrentFoodByIndex(fokusIndex);
    inputBox.value = "";
    typed = "";
    skor++;
    if (currentFoods.length === 0 && kataBahasaIndonesia.length > 0) {
      loadFoods(batchSize);
      fokusIndex = 0;
    }
    if (currentFoods.length > 0) {
      if (fokusIndex >= currentFoods.length) {
        fokusIndex = 0;
      }
    } else {
      fokusIndex = -1;
      inputBox.disabled = true;
      showScore();
      return;
    }

    updateFoodHighlight();
    moveChefTo(currentFoods[fokusIndex]);
  }
});

inputBox.addEventListener("keydown", e => {
  if (e.key === "Backspace" || e.key === "Delete") {
    e.preventDefault();
  }
});

// window.addEventListener('keydown', function(e) {
//   if (e.key === 'F5' || (e.key.toLowerCase() === 'r' && e.ctrlKey)) {
//     e.preventDefault();
//     alert('Mau ngapain? Kelarin dulu yang sudah dimulai!');
//   }
// });

restartBtn.addEventListener("click", restartGame);

window.addEventListener("keydown", function(e) {
  if (popup.style.display === "flex" && e.key === "Enter") {
    restartGame();
  }
});