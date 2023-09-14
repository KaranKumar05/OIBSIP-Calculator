function dis(val) {
    document.getElementById("numberDisplay").value += val;
}
function solve() {
    let x = document.getElementById("numberDisplay").value;
    let y = eval(x);
    document.getElementById("answerDisplay").value = y;
}
function clr() {
    document.getElementById("answerDisplay").value = ""
    document.getElementById("numberDisplay").value = ""
}
function del() {
    let display = document.getElementById("numberDisplay");
    const currentValue = display.value;
    const newValue = currentValue.slice(0, -1);
    display.value = newValue;
};
