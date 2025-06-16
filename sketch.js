let plants = [];
let sunX = 0;

function setup() {
  createCanvas(800, 400);
  textFont('Arial');
}

function draw() {
  background(135, 206, 235); // céu azul

  drawSun();
  drawField();
  drawText();

  // Desenha as plantas
  for (let plant of plants) {
    drawPlant(plant);
  }
}

function drawSun() {
  fill(255, 204, 0);
  noStroke();
  ellipse(sunX, 80, 80, 80);
  sunX += 0.5;
  if (sunX > width + 40) sunX = -40;
}

function drawField() {
  fill(60, 179, 113);
  rect(0, height * 0.6, width, height * 0.4);
}

function drawText() {
  fill(0);
  textSize(16);
  text("Clique no campo para plantar uma muda 🌱", 20, 30);
  text("Pressione a tecla 'R' para regar e fazer crescer 💧", 20, 55);
}

// Adiciona uma planta ao clicar
function mousePressed() {
  if (mouseY > height * 0.6) {
    plants.push({ x: mouseX, y: mouseY, size: 10 });
  }
}

// Aumenta o tamanho das plantas ao regar
function keyPressed() {
  if (key === 'r' || key === 'R') {
    for (let plant of plants) {
      plant.size += 5;
      if (plant.size > 60) {
        plant.size = 60; // limite de crescimento
      }
    }
  }
}

function drawPlant(plant) {
  fill(34, 139, 34);
  noStroke();
  ellipse(plant.x, plant.y, plant.size, plant.size);
  fill(139, 69, 19); // tronco
  rect(plant.x - 2, plant.y, 4, 10);
}