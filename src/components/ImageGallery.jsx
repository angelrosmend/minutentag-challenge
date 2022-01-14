/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import { useState } from "react";

function Image({ src, onRemove }) {
	return (
		<div class="image" style={{position: "relative"}}>
			<button style={{position: "absolute", top: "10px", right: "10px", cursor: "pointer"}} onClick={()=> onRemove(src)} class="remove">X</button>
			<img src={src} width="250" alt=""/>
		</div>
	);
}

export function ImageGallery({ links }) {

	const [images, setImages] = useState(links)

	const handleRemove = (image) => {
		setImages((prevImages) => [...prevImages.filter(item => item !== image)])
	}

	if(!links || links.lenght < 1) return null

	return (
		<div style={{display: "grid",  gridTemplateColumns: "repeat(3, 1fr)"}}>
			{images.map(( link => <Image key={link} src={link} onRemove={handleRemove}/>))}
		</div>
	);
}
