let items=[]

function addItem(){
    const product=document.getElementById("product").value;
    const quantity=parseInt(document.getElementById("quantity").value);
    const price=parseInt(document.getElementById("price").value);

    if(product && quantity && price){
        const total=quantity*price;
        const item={product,quantity,price,total};
        items.push(item);

        displayItems();
        calculateTotal();

        document.getElementById("product").value='';
        document.getElementById("quantity").value='';
        document.getElementById("price").value='';
    }
}


function removeItem(index){
    items.splice(index,1);
    displayItems();
    calculateTotal();
}


function displayItems(){
    const billBody=document.getElementById('billBody');
    billBody.innerHTML="";

    for(let i=0;i<items.length;i++){
        let item=items[i];

        let row=document.createElement('tr');

        let productData=document.createElement('td');
        productData.textContent=item.product;
        row.appendChild(productData);

        let quantityData=document.createElement('td');
        quantityData.textContent=item.quantity;
        row.appendChild(quantityData);

        let priceData=document.createElement('td');
        priceData.textContent=item.price;
        row.appendChild(priceData);

        let totalData=document.createElement('td');
        totalData.textContent=item.total;
        row.appendChild(totalData);

        let removeCell=document.createElement('td');
        let removeButton=document.createElement('button');
        removeButton.textContent='X';

        removeButton.addEventListener('click',()=>removeItem(i));
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);

        billBody.appendChild(row)
    }
}


function calculateTotal(){
    let totalAmount=0;
    for(let i=0;i<items.length;i++){
        totalAmount+=items[i].total;
    }
    document.getElementById('totalAmount').textContent=totalAmount.toFixed(2);
}

/* https://vidhi03082003.github.io/groceryBillingSystem/ */