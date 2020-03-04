const productList = {
    products: [
        {
            title: 'A Pillow', 
            imageUrl:'https://ih0.redbubble.net/image.550322470.1313/throwpillow,36x36,750x1000-bg,f8f8f8.u1.jpg', 
            price: 19.99, 
            description: ' A soft pillow!' 
        },        
        {title: 'A Carpet', 
        imageUrl:'https://ae01.alicdn.com/kf/HTB1LEtBRwTqK1RjSZPhq6xfOFXa9.jpg',
        price: 89.99, 
        description: ' A carpet which you might like - or not.' 
        }
    ],
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
            <div>
            <img src="${prod.imageUrl}" alt="${prod.title}" >
            <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
            </div>
            </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();