// 1
const fs = require(`fs`)

fs.writeFile(`file.text`,`i love my family very much `,(err)=>{
    if(err) throw err
})

function countWords(string){
    let counter = 0
for(let i = 0;i<=string.length-1;i++){
if(string[i]===" "){
    counter++
}
}
return counter
}

 fs.readFile(`file.text`,(err,data) => {
    if(err) throw err
    let text = data.toString()
    let nummberOfWords = countWords(text)
    console.log(`the number of words is ${nummberOfWords}`)

})

// 2

const XLSX = require('xlsx');
const workbook = XLSX.readFile('xcelPage.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const gradesColumn = XLSX.utils.sheet_to_json(sheet, { header: ['Name', 'Grade'] }); 
const sumOfGrades = gradesColumn.reduce((acc,current)=>acc+current.Grade,0)
const avergeScore = sumOfGrades/gradesColumn.length
console.log(avergeScore)



