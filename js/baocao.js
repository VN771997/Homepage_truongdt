function xong() {
  var thoihan1=document.getElementById("thoihan").value;
  var thoihan2=thoihan1;
  document.getElementById("thoihan1").innerHTML = thoihan1;
  document.getElementById("thoihan2").innerHTML = thoihan2;
  document.getElementById("tieude").value ="Báo cáo tuần "+thoihan1;
  document.getElementById("t_suachua").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'+document.getElementById("suachua").value;
  document.getElementById("t_danhphieu").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'+document.getElementById("danhphieu").value;
  document.getElementById("t_giaonhan").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Đã nhận "+document.getElementById("slnhan").value+" thiết bị và giao "+document.getElementById("slgiao").value+" thiết bị.";




  document.getElementById("ketqua").style.display = "block";
}
function copynguoinhan() {
    const elementToSelect = document.getElementById('nguoinhan');
    const range = document.createRange();
    const selection = window.getSelection();
    selection.removeAllRanges();
    range.selectNode(elementToSelect);
    selection.addRange(range);
    document.execCommand('Copy');
}
function copytieude() {
    const elementToSelect = document.getElementById('tieude');
    const range = document.createRange();
    const selection = window.getSelection();
    selection.removeAllRanges();
    range.selectNode(elementToSelect);
    selection.addRange(range);
    document.execCommand('Copy');
}
function selectAndCopy() {
    const elementToSelect = document.getElementById('noidung');
    const range = document.createRange();
    const selection = window.getSelection();
    selection.removeAllRanges();
    range.selectNode(elementToSelect);
    selection.addRange(range);
    document.execCommand('Copy');
}
