
import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";

import './App.css';
import { useState } from "react";
import { Grocery } from "./components/Grocery";
import { productsList } from "./utils/products";

export default function App() {
  const [focusable, setFocusable] = useState(true)
  const [products, setProducts] = useState(productsList)
  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>Grocery</h3>
      <Grocery products={products} setProducts={setProducts}/>
      <h3>'Message' test</h3>
      <Message />
      <br />
      <h3>'FocusableInput' test</h3>
      <FocusableInput focusable={focusable} setFocusable={setFocusable}/>
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery />
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
    </div>
  );
}
