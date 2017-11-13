'use strict'
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

const showImages = () => {
    const ul = document.querySelector('ul');

    fetch('images.json')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            json.forEach((image) => {

      let listItem = document.createElement("li");
                let listImage = document.createElement("IMG");
                let figure = document.createElement("figure");
                let figCaption = document.createElement("figcaption");
                let figCaptionText = document.createElement("image.mediaTitle");
                let linkToImg = document.createElement("a");
                linkToImg.href =`img/original/$(image.mediaUrl)`;
                listImage.src =`img/thumbs/$(image.mediaThumb)`;
                linkToImg.appendChild(listImage);
                figCaption.appendChild(figCaptionText);
                figure.appendChild(linkToImg);
                figure.appendChild(figCaption);
                listImage.appendChild(figure);
                ul.appendChild(listItem);
        });
    });
};

showImages();
