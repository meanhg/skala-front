function UpDownGame() {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var count = 0;
    var userNum = 0;

    while (userNum !== computerNum) {
        userNum = Number(prompt("1부터 50 사이의 숫자를 입력하세요."));

        count++;

        if (userNum > computerNum) {
            alert("Down!");
        } else if (userNum < computerNum) {
            alert("Up!");
        } else {
            alert("축하합니다! " + count + "번 만에 맞추셨습니다.");
        }
    }
}
