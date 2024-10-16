const readline = require("readline");
const isValidInput = require('./global').isValidInput;
const convertToNumber = require('./no1');
const alternatingSum = require('./no2');
const convertToLetters = require('./no3');
const { convertFromResult } = require('./no4');
const convertToSampleOutput = require('./no5');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input Kalimat Abjad (A-Z, a-z dan spasi): ", (input) => {
  if (!isValidInput(input)) {
    console.log("Input tidak valid. Silakan masukkan hanya huruf dan spasi.");
  } else {
    const convertedNumber = convertToNumber(input);
    console.log(`No.1 - Hasil konversi: ${convertedNumber}`);
    
    const sumResult = alternatingSum(convertedNumber);
    console.log(`No.2 - Hasil Penjumlahan dan Pengurangan Bergantian dari No.1: ${sumResult}`);
    
    const letterResult = convertToLetters(sumResult);
    console.log(`No.3 - Konversi No.2 Penjumlahan Menjadi Huruf: ${letterResult}`);
    
    const finalResult = convertFromResult(letterResult);
    console.log(`No.4 - Konversi No.3 Menjadi Huruf: ${finalResult}`);
    
    const sampleOutput = convertToSampleOutput(finalResult);
    console.log(`No.5 - Konversi No.4 Menjadi Bilangan dengan Klasifikasi: ${sampleOutput}`);
  }
  rl.close();
});
