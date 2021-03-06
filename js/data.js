var products = [
    {
        name : "Playground Carousel Classic",
        img : "./img/products/625185840.jpg",
        price : 299.99,
        sale : false,
        new_price: "",
        width : 490,
        colour : ["orange", "blue"],
        description : "Home wall attached playground set",
        features: ["Assembled Height 2270 mm; 6 points of fixation to the wall", "Antislip + Massage steps"],
        package : ["Gymnastic ladder and bars", "Gymnastic rings", "Rope", "Trapeze"],
        box_size: "1.2 m x 0.6 m x 0.14 m",
        box_weight: 22.4,
        quantity: 5
    },
    {
        name : "Playground Carousel Active Plus",
        img : "./img/products/625185822.jpg",
        price : 619.99,
        sale : true,
        new_price: 558.99,
        width : 490,
        colour : ["green", "blue"],
        description : "Home wall attached playground set",
        features: ["Assembled Height 2270 mm; 6 points of fixation to the wall", "Antislip + Massage steps"],
        package : ["Gymnastic ladder and bars", "Gymnastic rings", "Rope", "Trapeze"],
        box_size: "1.2 m x 0.6 m x 0.14 m",
        box_weight: 22.4,
        quantity: 5
    },
    {
        name : "Playground Carousel Advanced",
        img : "./img/products/625185866.jpg",
        price : 412.99,
        sale : false,
        new_price: "",
        width : 410,
        colour : ["orange", "blue"],
        description : "Home wall attached playground set",
        features: ["Assembled Height 2270 mm; 6 points of fixation to the wall", "Antislip + Massage steps"],
        package : ["Gymnastic ladder and bars", "Gymnastic rings", "Rope", "Trapeze"],
        box_size: "1.2 m x 0.6 m x 0.14 m",
        box_weight: 22.4,
        quantity: 0
    },
    {
        name : "Playground NEXT Trend",
        img : "./img/products/625185570.jpg",
        price : 429.99,
        sale : true,
        new_price: 379.99,
        width : 490,
        colour : ["orange", "red"],
        description : "Home wall attached playground set",
        features: ["Assembled Height 2270 mm; 6 points of fixation to the wall", "Antislip + Massage steps"],
        package : ["Gymnastic ladder and bars", "Gymnastic rings", "Rope", "Trapeze"],
        box_size: "1.2 m x 0.6 m x 0.14 m",
        box_weight: 22.4,
        quantity: 5
    }
]

var cardWrapper = document.getElementById('cardWrapper');
var imageWrapper = document.getElementsByClassName('image-wrapper');
var soldOut = document.createTextNode('<p class="sold-out-text almost-white">sold out</p>');


for (let product of products) {    
    cardWrapper.innerHTML += 
        '<div class="cell">' + 
            '<div class="card" data-equalizer-watch>' +
                '<div class="image-wrapper">' +
                    '<img class="card-image" src="' + product.img + '">' +
                    '<i class="fas fa-search fa-2x almost-white modal-view"></i>' +                
                '</div>' +
                '<button>' +
                    '<span class="fa-stack fa-2x shadow shop-button"><i class="fas fa-cart-plus fa-flip-horizontal add-to-cart fa-flip-horizontal almost-white fa-stack-1x fa-inverse"></i></span>' +
                '</button>' +
                '<p class="h4 item-price almost-white header-font">' + product.price + '</p>' +
                '<div class="card-section almost-black">' +
                    '<p class="card-name">' + product.name + '</p>' +
                    '<p class="item-width">' + product.width + '</p>' +
                '</div>' +
            '</div>' +
        '</div>';  
     
};
