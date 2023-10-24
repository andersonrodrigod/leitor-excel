const XLSX = require('xlsx');
const arquivo = './paste/arquivo.xlsx'
const workbook = XLSX.readFile(arquivo);
const sheet_name_list = workbook.SheetNames;

const worksheet = workbook.Sheets[sheet_name_list[0]];

const data = XLSX.utils.sheet_to_json(worksheet);

//data.forEach((row) => {
//    console.log(XLSX.SSF.format('DD/MM/YYYY', row.data));
//});

data.forEach((row) => {
    if (row.debito) {
        console.log(row.nome) 
    }
});

// console.log(`${XLSX.SSF.format('DD/MM/YYYY', row.data)}`);
// console.log(row.nome)
// console.log(row.sobrenome)
// console.log(row.idade)