// ========================================
// รายชื่อ ID ที่อนุญาต
// ========================================

const validPeople = [
    "test",
    "p02",
    "p03",
    "p04",
    "p05",
    "p06",
    "p07",
    "p08",
    "p09",
    "p10"
];


// ========================================
// อ่าน URL
//
// ตัวอย่าง:
// index.html?to=p01
// ========================================

const params =
    new URLSearchParams(
        window.location.search
    );


const personId =
    params.get("to");


// ========================================
// ตรวจสอบว่ามี ID นี้หรือไม่
// ========================================

if (
    personId &&
    validPeople.includes(personId)
) {

    loadPerson(personId);

} else {

    showError();

}


// ========================================
// โหลดไฟล์ของแต่ละคน
// ========================================

function loadPerson(id) {

    const script =
        document.createElement("script");


    script.src =
        `messages/${id}.js`;


    // โหลดสำเร็จ
    script.onload = function () {

        if (window.letterData) {

            showPerson(
                window.letterData
            );

        } else {

            showError();

        }

    };


    // หาไฟล์ไม่เจอ
    script.onerror = function () {

        showError();

    };


    document.body.appendChild(
        script
    );

}


// ========================================
// แสดงชื่อ + ข้อความ
// ========================================

function showPerson(person) {

    document
        .getElementById(
            "coverName"
        )
        .textContent =
            person.name;


    document
        .getElementById(
            "letterName"
        )
        .textContent =
            person.name;


    document
        .getElementById(
            "message"
        )
        .textContent =
            person.message;


    // เปลี่ยน title browser
    document.title =
        `For ${person.name} ♡`;

}


// ========================================
// Error
// ========================================

function showError() {

    document
        .getElementById(
            "coverPage"
        )
        .classList
        .remove("active");


    document
        .getElementById(
            "letterPage"
        )
        .classList
        .remove("active");


    document
        .getElementById(
            "errorPage"
        )
        .classList
        .add("active");

}


// ========================================
// เปิด Friendship
// ========================================

const openButton =
    document.getElementById(
        "openButton"
    );


openButton.addEventListener(
    "click",
    function () {

        document
            .getElementById(
                "coverPage"
            )
            .classList
            .remove("active");


        document
            .getElementById(
                "letterPage"
            )
            .classList
            .add("active");


        window.scrollTo({

            top: 0,

            behavior:
                "smooth"

        });

    }
);