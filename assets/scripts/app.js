class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title, imageUrl, desc, price){
        this.title = title;
        this.description = desc;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}

class ProductItem {
    constructor(product){
        this.product = product;
    }

    render(){
        const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
            </div>
            </div>
            `;
            return prodEl;
    }
}

class ProductList {
    products = [
        new Product('A Pillow', 'https://ih0.redbubble.net/image.550322470.1313/throwpillow,36x36,750x1000-bg,f8f8f8.u1.jpg', ' A soft pillow!', 19.99 ),
        new Product('A Carpet','https://ae01.alicdn.com/kf/HTB1LEtBRwTqK1RjSZPhq6xfOFXa9.jpg',' A carpet which you might like - or not.' ,89.99)
    ];

    constructor(){}

    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

const productList = new ProductList();
productList.render();