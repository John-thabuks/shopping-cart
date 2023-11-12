let shop = document.getElementById("shop");

let shopItemsData = [
    {
        id:1,
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/img-1.jpg"
    }, 
    {
        id:2,
        name: "Official Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/img-2.jpg"
    }, 
    {
        id:3,
        name: "T-Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/img-3.jpg"
    }, 
    {
        id:4,
        name: "Mens Suit",
        price: 300,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/img-4.jpg"
    }
];

let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) =>{
        let {id, name, price, desc, img} = x;
        return  `
    <div class="item" id= product-id-${id}>
        <img width= "220" src=${img} alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}.</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttoms">
                    <i onclick = "decrement(${id})" class="bi bi-dash-lg"></i>
                    <div class="quantity" id= ${id} >0</div>
                    <i onclick = "increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `
    }).join("")) 
}

generateShop();

let increment = (id) => {
    let selectedItem = shopItemsData.find((item) => item.id === id);

    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    console.log(basket);
};


let decrement = (id) => {
    let search = basket.find((x) => x.id === id);

    if (search && search.item > 0) {
        search.item -= 1;
    }else{
        return;
    }

    console.log(basket);
};


let update = () =>{};