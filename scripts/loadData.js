  const wishList = ['idd005', 'idd025', 'idd099', 'idd100'];


  const cartList = [
    {
        id : 'idd015',
        count: 3
    },
    {
        id : 'idd025',
        count: 5
    },
    {
        id : 'idd033',
        count: 2
    }
  ];






export const loadData = () => {

  if (location.search) {

    const search = decodeURI(location.search);
    console.log(search)
    const prop = search.split('=')[0].substring(1);
    console.log('prop: ', prop)
    const value = search.split('=')[1];
    console.log('value: ', value)

    if (prop === 's') {
      console.log(value);
    } else if (prop === 'wishlist') {
      console.log(wishlist);
    } else {
      console.log(prop, value);
    }
    

  }


  if (location.hash) {

     console.log(location.hash.substring(1));
  }

  if (location.pathname.includes('cart')) {
    console.log(cartlist);
  }




};