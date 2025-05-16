//second_screen.html logic for calculating ticket price in this file 
document.addEventListener("DOMContentLoaded", () => {
    //our prices
    const childPrice = 15;
    const adultPrice = 23;
    const seniorPrice = 18.5;

    //grabbing input and results
    const submitBtn = document.querySelector(".submit_button");

    const childInput = document.querySelector(".child_input");
    const adultInput = document.querySelector(".adult_input");
    const seniorInput = document.querySelector(".senior_input"); 

    const childResult = document.querySelector(".child_result");
    const adultResult = document.querySelector(".adult_result");
    const seniorResult = document.querySelector(".senior_result");
    const totalResult = document.querySelector(".total_result");

    const ticketSummary = document.querySelector(".ticket_summary");

    //when clicked then
    submitBtn.addEventListener("click", () => {
        //convert input to numbers
        const childQty = parseInt(childInput.value) || 0;
        const adultQty = parseInt(adultInput.value) || 0;
        const seniorQty = parseInt(seniorInput.value) || 0;

        //calculate
        const childTotal = childQty * childPrice;
        const adultTotal = adultQty * adultPrice;
        const seniorTotal = seniorQty * seniorPrice;
        const totalCost = childTotal + adultTotal + seniorTotal;

        //ticket results 
        childResult.textContent = `Child Tickets (${childQty}): $${childTotal.toFixed(2)}`;
        adultResult.textContent = `Adult Tickets (${adultQty}): $${adultTotal.toFixed(2)}`;
        seniorResult.textContent = `Senior Tickets (${seniorQty}): $${seniorTotal.toFixed(2)}`;
        totalResult.textContent = `Total: $${totalCost.toFixed(2)}`;

        //show summary box
        ticketSummary.style.display = "block";
    });
});
