const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

function generateRandomNum(){
  const startNum = document.querySelector(".startNum").value;
  const endNum = document.querySelector(".endNum").value;

  randomNum = Math.floor(Math.random() * parseInt(endNum));

  if(randomNum >= parseInt(startNum)){
    const randNum = document.querySelector(".randNum");
    randNum.innerHTML = randomNum;
  }
}