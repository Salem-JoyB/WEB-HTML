let trashButtons = document.querySelectorAll(".fa-trash-alt")
console.log(trashButtons);
for (let trashBtn of trashButtons) {
    trashBtn.addEventListener("click", function () {
        trashBtn.closest(".toBeRemoved").remove()
        console.log("trash");
    })
}
let minusButtons = document.querySelectorAll(".fa-minus-circle")
for (let minusBtn of minusButtons) {
    minusBtn.addEventListener("click", function () {
        if (minusBtn.previous ElementSibling.innerHTML > 0) {
        minusBtn.previous ElementSibling.innerHTML--
    }
})
}