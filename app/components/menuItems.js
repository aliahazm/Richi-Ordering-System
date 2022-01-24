const menuItems = [{
    title: 'COFFEE', 
    data: [
      {id: 1, name: 'Cappucino', price: 6.9},
      {id: 2, name: 'Mochaccino', price: 7}, 
      {id: 3, name: 'Hazelnut Cappucino', price: 8}, 
      {id: 4, name: 'Biscotti Cappucino', price: 6},
      {id: 5, name: 'Caramello Cappucino', price: 7.5}
    ]},
    {
    title: 'NON-COFFEE', 
    data: [
      {id: 6, name: 'Chocolate', price: 8},
      {id: 7, name: 'Hazelnut Chocolate', price: 7.9}, 
      {id: 8, name: 'Classy Dark Chocolate', price: 8}, 
      {id: 9, name: 'Vanilla', price: 6.9},
      {id: 10, name: 'Biscotti Vanilla', price: 6.9},
      {id: 11, name: 'Double Choc Chip', price: 9},
      {id: 12, name: 'Caramello Chocolate', price: 8.5},
      {id: 13, name: 'Biscotti Chocolate', price: 9.5},
    ]},
    {
    title: 'TEA',
    data: [
      {id: 14, name: 'Matcha (Green Tea)', price: 8},
      {id: 15, name: 'Matcha Choc Chip', price: 7.9}, 
      {id: 16, name: 'Fresh Lemon Tea', price: 8}, 
      {id: 17, name: 'Fresh Apple Tea', price: 6.9},
    ]
  }]
 
export function getItems() {
    return menuItems;
}

export function getItem(id){
    return menuItems.find(product => product.id === id);
}