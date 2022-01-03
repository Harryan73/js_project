// box 2ex
// dropdow list
// 환률 정보 가져오기
// dropdown 선택하면 아이템이 바뀜
// 금액을 입력하면 환전이 된다.
// dropdown 리스트에서 아이템 변경시 그단위 기준으로 변경됨
// 숫자를 한구어로 읽는법

let currencyRatio = {
    USD:{
        KRW:1184.36,
        USD:1,
        VND:22972.50,
        unit:"달러"
    },
    KRW:{KRW:1,
        USD:0.00084,
        VND:19.40,
        unit:"원"},
    VND:{
        KRW:0.052,
        USD:10.000044,
        VND:1,
        unit:"동"
    }
}

let fromCurrency = 'USD';
let toCurrency = 'USD';
// console.log(currencyRatio.VND.unit);
//console.log(currencyRatio["VND"]["unit"]);

document.querySelectorAll("#from-currency-list a")
.forEach((menu) => menu.addEventListener("click", function(){
    //버튼을 가져온다
    document.getElementById("from-button").textContent = this.textContent;
    document.getElementById("from-currency").textContent = currencyRatio[this.textContent].unit;
    // 버튼의 값을 바꾼다
    // 선택된 currency 값을 변수에 저장
    fromCurrency = this.textContent;
    //console.log(fromCurrency);
    convert();

}));

document.querySelectorAll("#to-currency-list a")
.forEach((menu) => menu.addEventListener("click", function() {
    //버튼을 가져온다
    document.getElementById("to-button").textContent = this.textContent;
    document.getElementById("to-currency").textContent = currencyRatio[this.textContent].unit;
    // 버튼의 값을 바꾼다
    // 선택된 currency 값을 변수에 저장
    toCurrency = this.textContent;
    //console.log(fromCurrency);
    convert();
}));

// 키가 입려되는 순가
// 환률 계산
// 표시

function convert(){
    //console.log("key up event")
    // 환전
    // 얼마를 환전, 가지고 있는 돈, 바꾸고자하는돈
    // 돈 * 환률 = 환전 금액
    let amount = document.getElementById("from-input").value;
    //console.log(amount);
    
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    //console.log(convertedAmount);

    // 환전된 값이 표시
    document.getElementById("to-input").value = convertedAmount;
}