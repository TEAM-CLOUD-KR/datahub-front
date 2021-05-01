function validate() {
    const email = document.getElementById("text-username").value;
    const pw = document.getElementById("text-password").value;
    if (email == "") {
        alert("아이디를 입력해주세요");
        document.getElementById("text-username").focus();
        return false;
    } else if (pw == "") {
        alert("비밀번호를 입력해주세요");
        document.getElementById("text-password").focus();
        return false;
    }
    alert("완료");
}