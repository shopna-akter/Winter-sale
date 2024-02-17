let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll('.card');
// console.log(cards);
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener("click" , function(){
        // console.log('cliiik')
        const tittle = card.querySelector("h3").innerText;
        // console.log(tittle);
        const price = parseFloat(card.querySelector("span").innerText.split(" ")[1])
        // console.log(tittle , price);
        const container =document.getElementById("title-container")
        // console.log(container);
        const p = document.createElement("p");
        p.innerText = titleCount + "." + tittle;
        container.appendChild(p)
        titleCount++;
        totalPrice += price;
        // console.log(totalPrice);
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    })   
}
const btn = document.getElementById("apply-btn");
// console.log(btn);
btn.addEventListener("click" , function(){
    const couponeElement = document.getElementById("input-field").value
    const couponeCode = couponeElement.split(" ").join('').toUpperCase();

    console.log(couponeCode);
    if(totalPrice >= 200){
        if(couponeCode === "SELL200"){
            const discountElement = document.getElementById("discountPrice");
            const discountAmount = totalPrice *0.2;
            discountElement.innerText = discountAmount.toFixed(2);
            const discountedPrice = document.getElementById("total");
            discountedPrice.innerText = totalPrice - discountAmount;
            document.getElementById("input-field").value = ""
        }
        else{
            alert("invalid Code").toUpperCase();
        }
    }
    else{
        alert("please purchase at least 200$ produts")
    }
})