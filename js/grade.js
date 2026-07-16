function calculateGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;
    var average;
    var result;
    var grade;

    for (var i = 0; i < subjects.length; i++) {
        total += Number(prompt(subjects[i] + " 점수를 입력하세요."));
    }

    average = total / subjects.length;
    result = average >= 60 ? "합격입니다." : "불합격입니다.";

    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert(
        "총점: " + total + "점, 평균: " + average +
        "점, 결과: " + result + "\n등급: " + grade
    );
}
