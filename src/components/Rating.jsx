/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

import { useState } from "react"
import styles from "../styles/App.module.scss"

export function Rating() {
  const stars = [
    { value: 1, active: false },
    { value: 2, active: false },
    { value: 3, active: false },
    { value: 4, active: false },
    { value: 5, active: false },
  ];

  const [rating, setRating] = useState(stars);

  const handleRating = (value) => {
    const tempStars = [...stars];
    for (let i = 0; i < value; i++) {
      tempStars[i].active = true;
    }
    setRating([...tempStars]);
  };

  return (
    <div id="rating">
      {rating.map((rate) => {
        return (
          <Star
            key={rate.value}
            value={rate.value}
            active={rate.active}
            onRate={handleRating}
          />
        );
      })}
    </div>
  );
}

function Star({value, active, onRate}){
	return (
		<span className={ `${styles.starRate} ${active ? styles.active : ""} `} 
		      onClick={()=> onRate(value)}
			  style={{color: `${active ? "blue" : "grey"}`, 
			          fontSize: `${active ? "1.5rem" : "1.4rem"}`,
					  cursor: "pointer"}}> * </span>
	)
}