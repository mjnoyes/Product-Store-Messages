var wrapper = document.body;
var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"Oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];
var elements = [];

function productStore(name,color,price,image) {
  var that=this;
  this.iEle = document.createElement("img");
  this.name = name;
  this.color = color;
  this.price = price;
  this.image = image;
  this.ele = document.createElement("div");
  this.ele.classList.add("product");
  this.popUpEle = document.createElement("popUp");
  this.popUpEle.classList.add("popUp");
  this.popUpEleImg = document.createElement("img");
  //mouseover
  this.ele.addEventListener("mouseover", function(){
  that.borderColor();
  }) 
  //mouseout
  this.ele.addEventListener("mouseout", function(){
  that.border();
  }) 
  this.iEle.src = this.image;
  this.ele.innerHTML = "Name: "+ this.name + "<br>" + "Price: $"+ this.price 
  wrapper.appendChild(this.ele);
  this.ele.appendChild(this.iEle);
  
  this.ele.addEventListener("click", function(){
    that.popUp();
  })  
}

productStore.prototype.popUp = function () {
  var that=this;
  wrapper.appendChild(this.popUpEle);
  this.popUpEleImg.src = this.image;
  this.popUpEle.innerHTML = "Name: "+ this.name + "<br>" + "Price: "+ this.price;
  this.popUpEle.appendChild(this.popUpEleImg);
  this.popUpEle.addEventListener("click", function(){
    that.removePopUp();
  })  
};

productStore.prototype.borderColor = function () {
  this.ele.style.borderColor=this.color;;
};

productStore.prototype.border = function () {
  this.ele.style.borderColor="black";
};

productStore.prototype.removePopUp = function () {
  wrapper.removeChild(this.popUpEle);
};

for(var i=0; i<products.length;i++){
  elements.push(new productStore(products[i].name,products[i].color,products[i].price,products[i].image));
}

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black