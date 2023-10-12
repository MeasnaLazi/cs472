class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }

    addAnswer(question) {
        this.answers.push(question);
    }
}

class Question {
    constructor(qId, answer) {
        this.questionId = qId;
        this.answer = answer;
    }

    checkAnswer(answer) {
        return this.answer == answer;
    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = questions;
        this.students = students;
    }

    scoreStudentBySid(sid) {
        let score = 0;
        let student = this.students.find(stu => stu.studentId == sid);

        for (let question of questions) {
            let answerOfStudentOnQuestion = student.answers.find(ans => ans.questionId == question.questionId);
            let studentAnswer = answerOfStudentOnQuestion ? answerOfStudentOnQuestion.answer : "";
            
            if (question.checkAnswer(studentAnswer)) {
                score++;
            }
        }
        return score;
    }

    getAverageScore() {
        let totalScore = 0;
        let studentCount = this.students.length;
        
        for (let student of this.students) {
            totalScore += this.scoreStudentBySid(student.studentId);
        }

        return totalScore / studentCount;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b')); 

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd')); 

const students = [student1, student2];
const questions =[
    new Question(1, 'b'), 
    new Question(2, 'a'), 
    new Question(3, 'b'),
];
const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5