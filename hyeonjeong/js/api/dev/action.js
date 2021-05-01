function validate() {
    if (api_action.reason.value == "") {
        alert("신청사유를 적어주세요");
        api_action.reason.focus();
        return false;
    }
    alert("신청이 정상적으로 완료되었습니다.");
}