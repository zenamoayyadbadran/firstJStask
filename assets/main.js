var products = [
    { id: 1, name: 'iphone', price: 2000, description: 'this is iphone' },
    { id: 2, name: 'Samsung Galaxy', price: 1800, description: 'this is Samsung Galaxy' },
    { id: 3, name: 'Google Pixel', price: 1500, description: 'this is Google Pixel' },
    { id: 4, name: 'OnePlus', price: 1200, description: 'this is OnePlus' },
    { id: 5, name: 'Sony Xperia', price: 1700, description: 'this is Sony Xperia' },
    { id: 6, name: 'Huawei P40', price: 1400, description: 'this is Huawei P40' },
    { id: 7, name: 'Xiaomi Mi', price: 1300, description: 'this is Xiaomi Mi' },
    { id: 8, name: 'LG Velvet', price: 1600, description: 'this is LG Velvet' },
    { id: 9, name: 'Nokia 9', price: 900, description: 'this is Nokia 9' },
    { id: 10, name: 'Motorola Edge', price: 1100, description: 'this is Motorola Edge' },
    { id: 11, name: 'Oppo Find', price: 1250, description: 'this is Oppo Find' },
    { id: 12, name: 'Vivo Nex', price: 1350, description: 'this is Vivo Nex' },
    { id: 13, name: 'Realme Pro', price: 1050, description: 'this is Realme Pro' },
    { id: 14, name: 'Asus ROG Phone', price: 2200, description: 'this is Asus ROG Phone' },
    { id: 15, name: 'Lenovo Legion', price: 2000, description: 'this is Lenovo Legion' },
    { id: 16, name: 'ZTE Axon', price: 1450, description: 'this is ZTE Axon' },
    { id: 17, name: 'Blackberry Key2', price: 750, description: 'this is Blackberry Key2' },
    { id: 18, name: 'Meizu Pro', price: 1250, description: 'this is Meizu Pro' },
    { id: 19, name: 'Honor View', price: 950, description: 'this is Honor View' },
    { id: 20, name: 'Redmi Note', price: 850, description: 'this is Redmi Note' },
    { id: 21, name: 'HTC U12', price: 1300, description: 'this is HTC U12' }
    ];

    var data =" ";

    for(var i =0 ; i< products.length ; i++){
        data += `<tr>
        <td>${products[i].id}</td>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].description}</td>
        </tr>`;
    }
    
    document.querySelector('.table-body').innerHTML=data;
