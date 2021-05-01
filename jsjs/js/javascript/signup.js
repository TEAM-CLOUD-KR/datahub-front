function validate() {
    const email = document.getElementById("email").value;
    const nickname = document.getElementById("nick-name").value;
    const pw = document.getElementById("pw").value;
    const pw02 = document.getElementById("pw02").value;
    if (email == "") {
        alert("아이디를 입력해주세요");
        document.getElementById("email").focus();
        return false;
    } else if (nickname == "") {
        alert("닉네임을 입력해주세요");
        document.getElementById("nick-name").focus();
        return false;
    } else if (pw == "") {
        alert("비밀번호를 입력해주세요");
        document.getElementById("pw").focus();
        return false;
    } else if (pw02 == "") {
        alert("비밀번호를 확인을 입력해주세요");
        document.getElementById("pw02").focus();
        return false;
    } else if (pw != pw02) {
        alert("비밀번호 다시 확인해주세요");
        document.getElementById("pw").focus();
        return false;
    }
    alert("확인");
}