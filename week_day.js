function main() {
    var year = Number(prompt("Год"));
    var month = Number(prompt("Месяц")) - 1;
    var day = Number(prompt("День"));
     
    console.log(getWeekDay(year, month, day)); 
 }
 
 function getWeekDay(year, month, day) {
    var names = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    var d = new Date(year, month, day);
     //complete the function
    var day = d.getDay();
    return names[day];
 }
 
 main();