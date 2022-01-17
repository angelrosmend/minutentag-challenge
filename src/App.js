
import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";

import './App.css';
import { useState } from "react";
import { Grocery } from "./components/Grocery";
import { productsList } from "./utils/products";
import { imgLinks } from "./utils/imageLinks";
import { Rating } from "./components/Rating";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";

export default function App() {
  const [focusable, setFocusable] = useState(true)
  const [products, setProducts] = useState(productsList)
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
      {/* Render here each component from the "components" directory */}
      <h3>Rating</h3>
      <Rating/>
      <br/>
      <hr/>
      <h3>'Message' test</h3>
      <Message />
      <br /><hr/>
      <h3>'FocusableInput' test</h3>
      <FocusableInput focusable={focusable} setFocusable={setFocusable}/>
      <br /><hr/>
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br /><hr/>
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <br/><hr/>
      <h3>Grocery</h3>
      <Grocery products={products} setProducts={setProducts}/>
      <br/> 
      <hr/>
      <h3>'ImageGallery' test</h3>
      <ImageGallery links={imgLinks}/>
      <br/>
      <h3>Navigations Item</h3>
      <ListItemsForNavigation/>
    </div>
  );
}
