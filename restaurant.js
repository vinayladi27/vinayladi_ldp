function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e);
    });
}
let tableCardList = [
    {
        id: 0,
        tableNumber: 1,
        tableStatus: "open",
        tableTotal: 0,
        tableItems: [],
    },
    {
        id: 1,
        tableNumber: 2,
        tableStatus: "open",
        tableTotal: 0,
        tableItems: [],
    },
    {
        id: 2,
        tableNumber: 3,
        tableStatus: "open",
        tableTotal: 0,
        tableItems: [],
    },
];
const tableCards = document.querySelector(".table-cards");
tableCardList.forEach((tableCard) => {
    const tableCardHtml = `
    <div class="table-card drop" attr-key=${tableCard.id}>
    <h2 class="table-card-title drop" attr-key=${tableCard.id}>Table ${tableCard.id + 1
        }</h2>
    <p class="table-card-para drop" attr-key=${tableCard.id
        }>Total cost: <span id="total-cost" attr-key=${tableCard.id}>${tableCard.tableTotal
        }</span> <span class="items" attr-key=${tableCard.id}>Totalitems: <span class="value" attr-key=${tableCard.id}>0</span></span></p>
    
</div>
    `;
    tableCards.insertAdjacentHTML("beforeend", tableCardHtml);
});

let MenuCardList = [
    {
        id: 0,
        name: "puri",
        
        cost: 100,
        type:"mainCourse",
    },
    {
        id: 1,
        name: "idli",
        
        cost: 30,
        type:"mainCourse",
    },
    {
        id: 2,
        name: "dosa",
        
        cost: 50,
        type:"mainCourse",
    },
    {
        id: 3,
        name: "rice",
     
        cost: 100,
        type:"desserts",
    },
    {
        id: 4,
        name: "cofee",
        
        cost: 30,
        type:"desserts",
        
    },
    {
        id: 5,
        name: "tea",
      
        cost: 50,
        type:"desserts",
    },
    {
        id: 6,
        name: "onions",
        
        cost: 100,
        type:"desserts",
       
    },
    {
        id: 7,
        name: "apples",
        cost: 30,
        type:"desserts",
    },
    {
        id: 8,
        name: "tea",
        cost: 50,
        type: "desserts",
        
    },
    {
        id:9,
        name:"puri2",
        cost:50,
        type:"desserts",
        
        
    }
];
function storeMenuCardList() {
    localStorage.setItem("menuCardList", JSON.stringify(MenuCardList));
}
const menucards = document.querySelector(".menu-cards");
MenuCardList.forEach((menuCard) => {
    const menuCardHtml = `
    <div class="menu-card" attr-key=${menuCard.id} draggable="true" >
            <h2 attr-key=${menuCard.id}>${menuCard.name}</h2>
            <p attr-key=${menuCard.id}>Total cost: <span id="total-cost" attr-key=${menuCard.id}>${menuCard.cost}</span></p>
            <p attr-key=${menuCard.id}>Item type: <span id="item-type" attr-key=${menuCard.id}>${menuCard.type}</span></p>
            
    </div>
    `;
    menucards.insertAdjacentHTML("beforeend", menuCardHtml);
});
storeMenuCardList();
addGlobalEventListener("dragstart", ".menu-card", (e) => {
    e.dataTransfer.setData("text/plain", e.target.getAttribute("attr-key"));
});
addGlobalEventListener("dragover", ".drop", (e) => {
    e.preventDefault();
});
addGlobalEventListener("drop",".drop",(e)=>{
    e.preventDefault();
    const key = e.dataTransfer.getData("text/plain");
    const tablekey = e.target.getAttribute("attr-key");
    const menuObj = MenuCardList[key];


    if (
        tableCardList[tablekey].tableItems.find(
            (item) => item.name == menuObj.name
        ) === undefined
    ) {
        tableCardList[tablekey].tableItems.push({
            name: menuObj.name,
            cost: menuObj.cost,
            individualCost: menuObj.cost,
        });
    const items=document.querySelector(`.value[attr-key="${tablekey}"]`)
    items.innerHTML=parseInt(items.innerHTML)+1;
    } else {
        tableCardList[tablekey].tableItems.forEach((item) => {
            if (item.name == menuObj.name) {
                item.cost += menuObj.cost;
            }
        });
    }
    
    const totalcost = document.querySelector(
        `#total-cost[attr-key="${tablekey}"]`
    );
    totalcost.innerText = parseInt(totalcost.innerText) + menuObj.cost;
    
})
const tableSearch = document.querySelector("#search-table");
tableSearch.addEventListener("keyup", (e) => {
    const tableCards = document.querySelectorAll(".table-card");
    tableCards.forEach((card) => {
        const cardName = card.children[0].innerText;
        if (cardName.toLowerCase().includes(e.target.value.toLowerCase())) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
const menuSearch = document.querySelector("#search-menu");
menuSearch.addEventListener("keyup", (e) => {
    const menuCards = document.querySelectorAll(".menu-card");
    menuCards.forEach((card) => {
        const cardName = card.children[0].innerText;
        const userName=card.children[2].children[0].innerHTML;
        if (cardName.toLowerCase().includes(e.target.value.toLowerCase()) || userName.toLowerCase().includes(e.target.value.toLowerCase()) ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
addGlobalEventListener("click", ".drop", (e) => {
    const dialog = document.querySelector(".show-table-data");
    const tablekey = e.target.getAttribute("attr-key");
    const tablearr = tableCardList[tablekey];
    const tablecardcolor = document.querySelector(`.table-card[attr-key="${tablekey}"]`);


    if (tablearr.tableItems.length == 0) {
        alert("No items in the table");
        return;
    }

    tablecardcolor.style.backgroundColor = "yellow";
    dialog.innerHTML =
        `
        <div class="bill-heading">
            <h1 class="bill-heading-text">

                Table - 1 | Order details
            </h1>
            <img src="./assests/close.svg" alt="close-icon" class="cancel">
        </div>
        <div class="table-data-container">
        <div class="table-data" attr-table-key="${tablekey}">
                <div class="sno bold">sno</div>
                <p class="bold"> name</p>
                <p class="bold">quantity</p>
                <p id="cost-display" class="bold"> cost</p>
                <!-- <button class="update-item" attr-table-key="${tablekey}">update</button>
                <button class="delete-item">delete</button> -->
                <br>
            </div>
                </div>
                <div class="generate-bill-btn-container">

            <button class="genrate-bill bold">
                Close Session (generate bill)
            </button>
        </div>
    `
        ;
    let cnt = 0;
    tablearr.tableItems.forEach((item) => {
        const quantity = Math.floor(item.cost / item.individualCost);
        const showTableHtml = `
        <div class="table-data" attr-table-key="${tablekey}">
                <div class="sno">${cnt++}</div>
                <p id="item-name">${item.name}</p>
                <label for="quantity">
                    <input type="number" min="1" value="${quantity}" id="input-quantity" attr-table-key="${tablekey}">
                </label>
                <p id="cost-display"> ${item.cost}</p>
                <img class="delete-item" src="./assests/delete.svg" alt="delete-icon">
                <br>
            </div>
    `;
        const container = document.querySelector(".table-data-container");
        container.insertAdjacentHTML('beforeend', showTableHtml);
    });

    const tableHead = document.querySelector(".bill-heading-text");
    tableHead.innerText = `Table - ${parseInt(tablekey) + 1} | Order details`;

    dialog.showModal();

    const cancelBtn = dialog.querySelector(".cancel");
    cancelBtn.addEventListener("click", (e) => {
        tablecardcolor.style.backgroundColor = "white"
        e.preventDefault();
        dialog.close();
    });

    const generateBill = dialog.querySelector(".genrate-bill");
    generateBill.addEventListener("click", (e) => {
        e.preventDefault();
        tablecardcolor.style.backgroundColor = "white";
        console.log(e.target.parentElement);
        e.target.parentElement.parentElement.close();
        const dialog = document.querySelector(".show-bill");
        const billarr = tablearr.tableItems;
        dialog.innerHTML = ``;
        console.log(billarr);
        billarr.forEach((item) => {
            const billHtml = `
            <div class="bill-data">

                <h3>${item.name}</h3>
                <p>cost ${item.cost}</p>
                <br>
        </div>
        `;

            dialog.insertAdjacentHTML("afterbegin", billHtml);
        });
        const totalcost = document.querySelector(
            `#total-cost[attr-key="${tablekey}"]`
        );
        const totalitems=document.querySelector(`.value[attr-key="${tablekey}"]`);
        const totalcostHtml = `
        <div class="bill-data">

            <h3>Total Cost</h3>
            <p>cost ${totalcost.innerText}</p>
            <br>
    </div>
    `;
        dialog.insertAdjacentHTML("afterbegin", totalcostHtml);
        dialog.insertAdjacentHTML(
            "beforeend",
            `<button class="cancel">close</button>`
        );

        const cancelBtn = dialog.querySelector(".cancel");
        cancelBtn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(tablekey);
            dialog.close();
            tablearr.tableItems = [];
            totalcost.innerText = "0";
            totalitems.innerText="0";

        });

        dialog.showModal();
    });

});
addGlobalEventListener("click", ".delete-item", (e) => {
    e.preventDefault();
    const tablekey = e.target.parentElement.getAttribute("attr-table-key");
    const tablearr = tableCardList[tablekey];
    const itemName = e.target.parentElement.querySelector("#item-name").innerText;
    const cost = tablearr.tableItems.find((item) => item.name == itemName).cost;
    tablearr.tableItems = tablearr.tableItems.filter(
        (item) => item.name != itemName
    );
    e.target.parentElement.remove();

    const totalcost = document.querySelector(
        `#total-cost[attr-key="${tablekey}"]`
    );
    const items=document.querySelector(`.value[attr-key="${tablekey}"]`)
    items.innerHTML=parseInt(items.innerHTML)-1;
    totalcost.innerText =
        parseInt(totalcost.innerText) - cost > 0
            ? parseInt(totalcost.innerText) - cost
            : 0;
});
addGlobalEventListener("change", "#input-quantity", (e) => {
    e.preventDefault();
    const inputQuantity =
        e.target.value;
    const tablekey = e.target.getAttribute("attr-table-key");
    const tablearr = tableCardList[tablekey];
    const costDisplay = e.target.parentElement.parentElement.querySelector("#cost-display");
    const itemName = e.target.parentElement.parentElement.querySelector("#item-name").innerText;
    const newCost =
        parseInt(inputQuantity) *
        tablearr.tableItems.find((item) => item.name == itemName).individualCost;
    costDisplay.innerText = `${newCost}`;
    const totalcost = document.querySelector(
        `#total-cost[attr-key="${tablekey}"]`
    );

    tablearr.tableItems.forEach((item) => {
        if (item.name == itemName) {
            item.cost = newCost;
        }
    });
    let total = 0;
    console.log(tableCardList);
    tableCardList[tablekey].tableItems.forEach((item) => {
        total += item.cost
    });

    totalcost.innerText = total;
});
addGlobalEventListener("keyup", "#input-quantity", (e) => {
    e.preventDefault();
    const inputQuantity =
        e.target.value;
    const tablekey = e.target.getAttribute("attr-table-key");
    const tablearr = tableCardList[tablekey];
    const costDisplay = e.target.parentElement.parentElement.querySelector("#cost-display");
    const itemName = e.target.parentElement.parentElement.querySelector("#item-name").innerText;
    const newCost =
        parseInt(inputQuantity) *
        tablearr.tableItems.find((item) => item.name == itemName).individualCost;
    costDisplay.innerText = `${newCost}`;
    const totalcost = document.querySelector(
        `#total-cost[attr-key="${tablekey}"]`
    );

    tablearr.tableItems.forEach((item) => {
        if (item.name == itemName) {
            item.cost = newCost;
        }
    });
    let total = 0;
    tableCardList[tablekey].tableItems.forEach((item) => {
        total += item.cost
    });

    totalcost.innerText = total;
});
const addBtn = document.querySelector(".create-menu-item");
addBtn.addEventListener("click", () => {
    const dialog = document.querySelector(".add-menu-dialog");
    dialog.innerHTML = `
    <form>
        <h2>Add Menu Item</h2>
        <br>
        <label for="item-name">Item Name</label>
        <input required type="text" name="item-name" id="item-name" placeholder="Item Name">
        <br>
        <label for="item-price">Item Price</label>
        <input required type="number" name="item-price" id="item-price" placeholder="Item Price">
        <br>
        <label for="item-type">Item Type</label>
        <select name="item-type" id="item-typee" required>
            <option value="">--select item type--</option>
            <option value="entree">entree</option>
            <option value="mainCourse">main course</option>
            <option value="desserts">desserts</option>
            <option value="appetizers">appetizers</option>
            <option value="beverages">beverages</option>
        </select>
        <br>
        <br>
        <button class="add-menu-item" type="submit">Add</button>
        <button class="cancel">Cancel</button>
    </form>
    `;

    const addMenuItemBtn = dialog.querySelector(".add-menu-item");
    const cancelBtn = dialog.querySelector(".cancel");

    addMenuItemBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const itemName = dialog.querySelector("#item-name").value;
        const itemPrice = dialog.querySelector("#item-price").value;
        const itemType = dialog.querySelector("#item-typee").value;

        const newMenuItem = {
            id: MenuCardList.length,
            name: itemName,
            cost: parseInt(itemPrice),
            type: itemType,
        };
        MenuCardList.push(newMenuItem);
        const menuCardHtml = `
        <div class="menu-card" draggable="true" attr-key=${MenuCardList.length - 1}>
<h2 attr-key=${MenuCardList.length - 1}>${newMenuItem.name}</h2>
<p attr-key=${MenuCardList.length - 1}>Total cost: <span id="total-cost" attr-key=${MenuCardList.length - 1}>${newMenuItem.cost}</span></p>
<p attr-key=${MenuCardList.length - 1}>Item type: <span id="item-type" attr-key=${MenuCardList.length - 1}>${newMenuItem.type}</span></p>
</div>
        `;
        menucards.insertAdjacentHTML("beforeend", menuCardHtml);
        storeMenuCardList();
        dialog.close();
    });

    dialog.showModal();
    storeMenuCardList();
    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        dialog.close();
    });
});