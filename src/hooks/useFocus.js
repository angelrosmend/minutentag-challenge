import { useCallback, useEffect, useState } from "react";

export function useFocus(items){
    const [ selectedIndex, setSelectedIndex] = useState(0);

    const handleKeyDown = useCallback( (key) => {
		let goNext = key.code === "ArrowUp" || key.code ===  "ArrowRight";
		let goBack = key.code === "ArrowDown" || key.code === "ArrowLeft";
		if(goNext) {
			key.preventDefault()
			setSelectedIndex((prevIndex)=> prevIndex === items.length  ? 1 : prevIndex + 1)
		   }
		if (goBack) {
			key.preventDefault()
			setSelectedIndex((prevIndex) => prevIndex === 1 ? items.length : prevIndex  - 1)
		}
		return ;
	},[selectedIndex,setSelectedIndex])

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown, false);
        return () => {
          document.removeEventListener("keydown", handleKeyDown, false);
        };
      }, [handleKeyDown]);
    return [selectedIndex] 
}