let students = [];

students[0] = {
    name: "jan",
    surname: "reno",
    age: 26,
    result: [
        {
            subject: "javascript",
            score: 61,
            credits: 4
        },
        {
            subject: "react",
            score: 57,
            credits: 7
        },
        {
            subject: "python",
            score: 88,
            credits: 6
        },
        {
            subject: "java",
            score: 90,
            credits: 3
        }
    ]
}

students[0].sumPoints = students[0].result[0].score + students[0].result[1].score +
                        students[0].result[2].score + students[0].result[3].score;
students[0].avePoints = students[0].sumPoints / students[0].result.length;
students[0].frontAve = (students[0].result[0].score + students[0].result[1].score) / 2;

let janGpaPoints = 0;

for(let i = 0; i < students[0].result.length; i++) {
    if(students[0].result[i].score >= 91) {
        janGpaPoints += 4 * students[0].result[i].credits;
    } else if(students[0].result[i].score >= 81) {
        janGpaPoints += 3 * students[0].result[i].credits;
    } else if(students[0].result[i].score >= 71) {
        janGpaPoints += 2 * students[0].result[i].credits;
    } else if(students[0].result[i].score >= 61) {
        janGpaPoints += 1 * students[0].result[i].credits;
    } else if(students[0].result[i].score >= 51) {
        janGpaPoints += 0.5 * students[0].result[i].credits;
    }
}

students[0].gpa = janGpaPoints / 20;

students[1] = {
    name: "clode",
    surname: "mone",
    age: 19,
    result: [
        {
            subject: "javascript",
            score: 77,
            credits: 4
        },
        {
            subject: "react",
            score: 52,
            credits: 7
        },
        {
            subject: "python",
            score: 92,
            credits: 6
        },
        {
            subject: "java",
            score: 67,
            credits: 3
        }
    ]
}

students[1].sumPoints = students[1].result[0].score + students[1].result[1].score +
                        students[1].result[2].score + students[1].result[3].score;
students[1].avePoints = students[1].sumPoints / students[1].result.length;
students[1].frontAve = (students[1].result[0].score + students[1].result[1].score) / 2;

let clodeGpaPoints = 0;

for(let i = 0; i < students[1].result.length; i++) {
    if(students[1].result[i].score >= 91) {
        clodeGpaPoints += 4 * students[1].result[i].credits;
    } else if(students[1].result[i].score >= 81) {
        clodeGpaPoints += 3 * students[1].result[i].credits;
    } else if(students[1].result[i].score >= 71) {
        clodeGpaPoints += 2 * students[1].result[i].credits;
    } else if(students[1].result[i].score >= 61) {
        clodeGpaPoints += 1 * students[1].result[i].credits;
    } else if(students[1].result[i].score >= 51) {
        clodeGpaPoints += 0.5 * students[0].result[i].credits;
    }
}

students[1].gpa = clodeGpaPoints / 20;

students[2] = {
    name: "van",
    surname: "gogh",
    age: 21,
    result: [
        {
            subject: "javascript",
            score: 51,
            credits: 4
        },
        {
            subject: "react",
            score: 98,
            credits: 7
        },
        {
            subject: "python",
            score: 65,
            credits: 6
        },
        {
            subject: "java",
            score: 70,
            credits: 3
        }
    ]
}

students[2].sumPoints = students[2].result[0].score + students[2].result[1].score +
                        students[2].result[2].score + students[2].result[3].score;
students[2].avePoints = students[2].sumPoints / students[2].result.length;
students[2].frontAve = (students[2].result[0].score + students[2].result[1].score) / 2;

let vanGpaPoints = 0;

for(let i = 0; i < students[2].result.length; i++) {
    if(students[2].result[i].score >= 91) {
        vanGpaPoints += 4 * students[2].result[i].credits;
    } else if(students[2].result[i].score >= 81) {
        vanGpaPoints += 3 * students[2].result[i].credits;
    } else if(students[2].result[i].score >= 71) {
        vanGpaPoints += 2 * students[2].result[i].credits;
    } else if(students[2].result[i].score >= 61) {
        vanGpaPoints += 1 * students[2].result[i].credits;
    } else if(students[2].result[i].score >= 51) {
        vanGpaPoints += 0.5 * students[2].result[i].credits;
    }
}

students[2].gpa = vanGpaPoints / 20;

students[3] = {
    name: "damm",
    surname: "square",
    age: 36,
    result: [
        {
            subject: "javascript",
            score: 82,
            credits: 4
        },
        {
            subject: "react",
            score: 53,
            credits: 7
        },
        {
            subject: "python",
            score: 80,
            credits: 6
        },
        {
            subject: "java",
            score: 65,
            credits: 3
        }
    ]
}

students[3].sumPoints = students[3].result[0].score + students[3].result[1].score +
                        students[3].result[2].score + students[3].result[3].score;
students[3].avePoints = students[3].sumPoints / students[3].result.length;
students[3].frontAve = (students[3].result[0].score + students[3].result[1].score) / 2;

let dammGpaPoints = 0;

for(let i = 0; i < students[3].result.length; i++) {
    if(students[3].result[i].score >= 91) {
        dammGpaPoints += 4 * students[3].result[i].credits;
    } else if(students[3].result[i].score >= 81) {
        dammGpaPoints += 3 * students[3].result[i].credits;
    } else if(students[3].result[i].score >= 71) {
        dammGpaPoints += 2 * students[3].result[i].credits;
    } else if(students[3].result[i].score >= 61) {
        dammGpaPoints += 1 * students[3].result[i].credits;
    } else if(students[3].result[i].score >= 51) {
        dammGpaPoints += 0.5 * students[3].result[i].credits;
    }
}

students[3].gpa = dammGpaPoints / 20;

console.log(students);

// HIGHEST  GPA

let highestGpa = students[0].gpa;
let highestGpaStudent = students[0].name + " " + students[0].surname;

for(let i = 1; i < 4; i++) {
    if(students[i].gpa > highestGpa) {
        highestGpa = students[i].gpa;
        highestGpaStudent = students[i].name + " " + students[i].surname;
    } 
}

console.log(highestGpa + " " + highestGpaStudent + " " + "has the highest GPA");

//THE BEST STUDENT +21 with average points

let bestAdultStudent = students[0].name + " " + students[0].surname;

for(let i = 1; i < 4; i++) {
    if(students[i].age > 21 && students[i].avePoints > students[i - 1].avePoints) {
        bestAdultStudent = students[i].name + " " + students[i].surname;
    }
}

console.log(bestAdultStudent + " " + "is the best adult student");

//THE BEST FRONT-END STUDENT

let bestFrontStudent = students[0].name + " " + students[0].surname;

for(let i = 1; i < 4; i++) {
    if(students[i].frontAve > students[i - 1].frontAve) {
        bestFrontStudent = students[i].name + " " + students[i].surname;
    }
}

console.log(bestFrontStudent + " " + "is the best front-end student");