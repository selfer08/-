// 5단계: 더 알아보기 버튼
const btn = document.getElementById("moreBtn");
const text = document.getElementById("moreText");

btn.addEventListener("click", function () {
    text.hidden = !text.hidden;
    btn.textContent = text.hidden ? "더 알아보기" : "접기";
});

// 6단계: 희귀도 버튼
const rarityBtns = document.querySelectorAll("#rarityButtons button");
const info = document.getElementById("rarityInfo");

rarityBtns.forEach(function (b) {
    b.addEventListener("click", function () {
        if (b.textContent === "C") {
            info.textContent = "C : 커먼. 가장 흔한 카드예요.";
        } else if (b.textContent === "U") {
            info.textContent = "U : 언커먼. 커먼보다 조금 적게 나와요.";
        } else if (b.textContent === "R") {
            info.textContent = "R : 레어. 팩에서 노리는 기본 등급이에요.";
        } else if (b.textContent === "RR") {
            info.textContent = "RR : 더블 레어. 강한 포켓몬 ex 카드 등이 해당돼요.";
        } else if (b.textContent === "AR") {
            info.textContent = "AR : 아트 레어. 일러스트 중심의 카드예요.";
        } else if (b.textContent === "SR") {
            info.textContent = "SR : 슈퍼 레어. 일러스트가 확장된 특별한 카드예요.";
        } else if (b.textContent === "SAR") {
            info.textContent = "SAR : 스페셜 아트 레어. 인기 있는 고등급이에요.";
        } else if (b.textContent === "UR") {
            info.textContent = "UR : 울트라 레어. 금빛 처리 등이 특징이에요.";
        }
    });
});

// 8단계: 구매 전 체크리스트
const checks = document.querySelectorAll("#checkList input");
const checkResult = document.getElementById("checkResult");

checks.forEach(function (c) {
    c.addEventListener("change", function () {
        let count = 0;

        checks.forEach(function (item) {
            if (item.checked) {
                count = count + 1;
            }
        });

        checkResult.textContent = count + " / 4 확인했어요.";
    });
});

// 9단계: 시세 메모장
const cardName = document.getElementById("cardName");
const cardPrice = document.getElementById("cardPrice");
const addBtn = document.getElementById("addBtn");
const memoList = document.getElementById("memoList");

addBtn.addEventListener("click", function () {
    if (cardName.value === "" || cardPrice.value === "") {
        alert("카드 이름과 가격을 모두 입력해 주세요.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = cardName.value + " : " + cardPrice.value + "원";
    memoList.appendChild(li);

    cardName.value = "";
    cardPrice.value = "";
});
