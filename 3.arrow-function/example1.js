const phones = [
    { name:'iphone', price:649 ,discount:10},
    { name:'Galaxy S6', price:576,discount:20 },
    { name:'Galaxy Note 5', price:489 ,discount:30}
  ];
  
  // getting price
  var price = phones.map(phone=>phone.price)
  console.log('price',price);
///  price [ 649, 576, 489 ]
  
  // getting two times price  
  var TwoTimeprice = phones.map(phone=>2 * phone.price)
  console.log('TwoTimeprice',TwoTimeprice);
//   TwoTimeprice [ 1298, 1152, 978 ]
  
  // getting discount
  var discountPrice = phones.map(phone=>phone.price*phone.discount/100)
  console.log('discountPrice',discountPrice);
//   discountPrice [ 64.9, 115.2, 146.7 ]
  

