function Play() {
    hideElementById('select');
    showElementById('success');
}

const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const seat = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes.innerText;
        const selectedContainer = document.getElementById(
            "selected-container");
        event.target.setAttribute("disabled", false);

        if (
            getValueById("seat") + 1 > 4 ||
            getValueById("all-seat") - 0 < 37
        ) {
            alert("Highest 4 seat is allwoed");
            return;
        }

        event.target.parentNode.style.backgroundColor = "Green";
        event.target.parentNode.style.color = "White";

        const div = document.createElement("div");
        div.classList.add("selected-players");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p1.innerText = seat;
        p2.innerText = price;
        div.appendChild(p1);
        div.appendChild(p2);
        selectedContainer.appendChild(div);
        updateSeatLeft();
        updateTotalCost(price);
        updateGrandTotal();
        updateSeat();
    });

    function updateTotalCost(price) {
        const previousTotal = document.getElementById("total-cost").innerText;
        const convertedTotal = parseInt(previousTotal);
        const convertedPrice = parseInt(price);
        const sum = convertedTotal + convertedPrice;
        document.getElementById("total-cost").innerText = sum;
    }

    function updateGrandTotal() {
        const previousTotal = getValueById("total-cost");
        document.getElementById("grand-total").innerText = previousTotal;
    }

    function updateSeatLeft() {
        const defaultLeft = document.getElementById("all-seat").innerText;
        const convertDefaultLeft = parseInt(defaultLeft);
        document.getElementById("all-seat").innerText = convertDefaultLeft - 1;
    }

    function updateSeat() {
        const defaultSeatCount = document.getElementById("seat").innerText;
        const convertDefaultSeatCount = parseInt(defaultSeatCount);
        document.getElementById("seat").innerText = convertDefaultSeatCount + 1;
    }

    function getValueById(id) {
        const targetElement = document.getElementById(id).innerText;
        return parseInt(targetElement);
    }
}
