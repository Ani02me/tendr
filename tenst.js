
//бірінші тапсырма
// Бастапқы массив
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Массивтегі әр санды кубтау
let cubedNumbers = numbers.map(num => num ** 3);

// Тек тақ сандарды шығару
for (let num of cubedNumbers) {
  if (num % 2 !== 0) { // Тақ санды тексеру
    console.log(num);
  }
}
//////////////////////////////////////////////////////////////////

//2тапсырма
// Студент санын промпт арқылы сұрау
let studentCount = prompt("Студенттердің санын енгізіңіз:");

// Студенттердің бағаларын жинау
let grades = [];
for (let i = 0; i < studentCount; i++) {
  let grade = prompt(`Студент ${i + 1}-тің бағасын енгізіңіз:`);
  grades.push(Number(grade));  // Бағаны санға түрлендіріп массивке қосамыз
}

// Барлық бағаның қосындысын табу үшін reduce қолдану
let totalGrades = grades.reduce((sum, grade) => sum + grade, 0);

// Оқушылардың ортақ бағасын есептеу
let averageGrade = totalGrades / studentCount;

// Ортақ бағасын шығару
console.log("Оқушылардың ортақ бағасы: " + averageGrade);

// 85-тен жоғары баллдарды filter арқылы жинап шығару
let highGrades = grades.filter(grade => grade > 85);

// 85-тен жоғары баллдарды шығару
console.log("85-тен жоғары баллдар: ", highGrades);
