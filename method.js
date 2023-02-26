const student ={
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function (){
        return this.name + 'is participating in an exam';
    },
    improveExam: function (subject){
        this.exam ();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDay: function (amount) {
        this.money = this.money -amount;
        return this.money;
    }
   
}

const output = student.exam();
//console.log(output);
const reExm = student.improveExam('algebra');
//console.log(reExm);
const remaining = student.treatDay(900);
console.log(remaining);
console.log(student);