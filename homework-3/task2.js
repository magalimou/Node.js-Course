/*Task 2: Function Composition and Point-Free Style*/
function getFullName(user)
{
    return user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1).toLowerCase() +
     " " + user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1).toLowerCase();
}  

function filterUniqueWords(text)
{
    let words = text.split(" ");
    let uniqueWordsSet = new Set(words);
    let uniqueWordsArray = Array.from(uniqueWordsSet);
    return uniqueWordsArray.sort();
}

function getAverageGrade(studentsArray)
{
    let totalGrades = 0;
    for(student of studentsArray){
        let averageGrade = getAverageGradeStudent(student);
        totalGrades = totalGrades + averageGrade;
    }
    let totalStudents = studentsArray.length;
    let averageGrade = totalGrades / totalStudents;
    return averageGrade;
}

function getAverageGradeStudent(student)
{
    let totalGrades = student.grades.reduce((acc, grade) => acc + grade, 0);
    let totalSubjects = student.grades.length;
    let averageGrade = totalGrades / totalSubjects;
    return averageGrade;
}



let user = { firstname: 'sam', lastname: 'smith' };
console.log(getFullName(user));

let text = "hello world hello again world again world";
console.log(filterUniqueWords(text));

let students = [
    { name: 'Juan', grades: [90, 85, 95] },
    { name: 'María', grades: [80, 75, 85] },
    { name: 'Carlos', grades: [95, 90, 100] }
];

let average = getAverageGrade(students);
console.log(average); 
