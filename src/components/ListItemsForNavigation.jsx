/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";
import { useFocus } from "../hooks/useFocus";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = [1,2,3,4,5,6,7];

export function ListItemsForNavigation(props) {
	
    const [selectedIndex] = useFocus(itemsList)

    if(!itemsList || itemsList.length < 1) return null
	return (
	<ul style={{border: "1px solid black", width: "90%", height: "70px", display: "flex", justifyContent:"space-evenly", listStyle: "none"}}>
		   { itemsList.map(index => {
	 			return <Item key={index} index={index} focus={selectedIndex === index}/> 
		   })}
			{/** Render itemsList as you wish, probably you want to render <li></li> with the proper attributes */}
			{/** If you have issues focusing an element, it is probably because the element is not focusable originally. Try with tabIndex={0} */}
			{/** Do not forget to pass the reference to the selected item */}
	</ul>
	);
}

function Item ({focus, index }){
	const activeItemRef = useRef(null);
	useEffect(()=>{
		if(focus){
			activeItemRef.current.focus()
		}
	})
	return <li tabIndex={focus ? 0 : -1} key={index} ref={activeItemRef} style={{flex: "1", border: "1px solid black", height: "100%"}}>{index}</li>
}
