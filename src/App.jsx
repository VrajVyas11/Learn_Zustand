import React from 'react';
import { useStore } from './store/store'; // Adjust this path if necessary
import { PRODUCTS_DATA } from './lib/mockData';
import { Card, CardContent, CardFooter, CardHeader } from './components/ui/card';
import { Button } from './components/ui/button';
import { ChangeQtyButtons } from './components/ChangeQtyButton';
import { Cart } from './components/Cart';
import { User } from './components/User';
import { Joke } from './components/Joke';
// import "./App.css"
const App = () => {
  const addProduct = useStore((state) => state.addProduct); // Use the hook inside the component
  const CartProducts = useStore((state) => state.products); // Use the hook inside the component

  return (
    <main className='space-y-2 dark h-screen max-w-sm mx-auto mt-2'>
      <div className=' flex justify-between'><User/> <Joke/><Cart/></div>
      <h1 className='text-2xl text-white'>Products:</h1>
      <div className='space-y-2'>
        {PRODUCTS_DATA.map((product) => (
          <Card key={product.id}>
            <CardHeader>{product.title}</CardHeader>
            <CardContent>{product.price}</CardContent>
            <CardFooter>

              {CartProducts.find((item) => item.id === product.id) ? (
                <ChangeQtyButtons productId={product.id}/>
              )
                :
                (
                  <Button onClick={() => addProduct(product)} varient="default">
                    Add to Cart
                  </Button>)}

            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default App;
