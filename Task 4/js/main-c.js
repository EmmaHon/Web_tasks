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
               //put code here
                const h3 = document.createElement('h3');
                const figcaption = document.createElement('figcaption');
                const img = document.createElement('img');
                const a = document.createElement('a');
                const figure = document.createElement('figure');
                const li = document.createElement('li');

                //add text content
                const text = document.createTextNode(image.mediaTitle);
                h3.appendChild(text);
                //or
                //h3.innerHTML = image.mediaTitle;

                //add attributes
                img.setAttribute('src', 'img/thumbs/' + image.mediaUrl);
                a.setAttribute('href', 'img/original/' + image.mediaUrl);
                //a.addEventListener() if you want to add pop up window

                //nest elements
                figcaption.appendChild(h3);
                a.appendChild(img);
                figure.appendChild(a); //
                figure.appendChild(figcaption);
                li.appendChild(figure);

                // insert new elements to page
                ul.appendChild(li);


      /*let listItem = document.createElement("li");
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
                */
        });
    });
};

showImages();
