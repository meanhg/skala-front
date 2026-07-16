function showMyBag() {
    var myBag = [
        { name: "지갑", count: 1 },
        { name: "휴대폰", count: 1 },
        { name: "볼펜", count: 2 }
    ];
    var text = "가방 속 물품\n";

    for (var i = 0; i < myBag.length; i++) {
        text += myBag[i].name + ": " + myBag[i].count + "개\n";
    }

    alert(text);
}
