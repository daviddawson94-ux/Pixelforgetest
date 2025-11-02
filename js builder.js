const cpu = document.getElementById("cpu");
const gpu = document.getElementById("gpu");
const ram = document.getElementById("ram");
const storage = document.getElementById("storage");
const caseSelect = document.getElementById("case");
const totalDisplay = document.getElementById("total");
const caseImage = document.getElementById("caseImage");

const caseImages = {
  case1: "images/build1.jpg",
  case2: "images/build2.jpg",
  case3: "images/build3.jpg"
};

function updateTotal() {
  const total =
    parseInt(cpu.value) +
    parseInt(gpu.value) +
    parseInt(ram.value) +
    parseInt(storage.value);
  totalDisplay.textContent = total;
}

function updateImage() {
  caseImage.src = caseImages[caseSelect.value];
}

[cpu, gpu, ram, storage, caseSelect].forEach(el => {
  el.addEventListener("change", () => {
    updateTotal();
    updateImage();
  });
});

updateTotal();
updateImage();
