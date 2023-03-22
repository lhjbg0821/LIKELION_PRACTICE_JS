const BLOCK = "블";
const BBLE = "블";
const CHAIN = "체";
const SCHOOL = "스";

//let rightWord = BBLE + SCHOOL + BLOCK;
let rightWord = BBLE + CHAIN + SCHOOL;

if (rightWord === "블체스") {
  console.log("블체스 화이팅!");
}

let blockchainScore = 20;
let frontendScore = 70;

let totalScore = blockchainScore + frontendScore;

if (totalScore > 78) {
  console.log("Great");
} else if (totalScore > 50) {
  console.log("Good");
} else if (totalScore > 30) {
  console.log("Try harder");
} else {
  console.log("Sad..");
}
