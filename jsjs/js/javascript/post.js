function post_validate(){
    const subject = document.getElementById("subject").value;
    const contents = document.getElementById("floatingTextarea2").value;
    if(subject == ""){
        alert("제목을 입력해주세요");
        document.getElementById("subject").focus();
        return false;
    }else if(contents == ""){
        alert("내용을 입력해주세요");
        document.getElementById("floatingTextarea2").focus();
        return false;
    }
    alert("완료");
}