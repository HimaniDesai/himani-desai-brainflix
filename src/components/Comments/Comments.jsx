let comments=[
    {
      name: "Victor Pinto",
      date: "11/02/2023",
      comment:
        "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
      name: "Christina Cabrera",
      date: "10/28/2023",
      comment:
        "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
      name: "Isaac Tadesse",
      date: "10/20/2023",
      comment:
        "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
  ];

function displayComments(arr) {
    //Used DOM  API
    let commentContainer = document.querySelector(".comment__default-comment");
    commentContainer.innerHTML="";
  
    for (let i = 0; i < arr.length; i++) {
      //div that holds all of my default comment content
      let defaultContainer = document.createElement("div");
      defaultContainer.classList.add("comment__default");
      commentContainer.appendChild(defaultContainer);
  
      //image container
      let imageContainer = document.createElement("div");
      imageContainer.classList.add("comment__image-container-one");
      defaultContainer.appendChild(imageContainer);
  
      // div that holds default comments
      let headerContainer = document.createElement("div");
      headerContainer.classList.add("comment__header");
      if (i==0){
        headerContainer.classList.add("comment__header--first");
      }
      defaultContainer.appendChild(headerContainer);
  
      //image
      let image = document.createElement("div");
      image.classList.add("comment__header--image-one");
      imageContainer.appendChild(image);
  
      //name
      let name = document.createElement("h2");
      name.classList.add("comment__header--name");
      name.innerText = arr[i]["name"];
      headerContainer.appendChild(name);
  
      //date
      let date = document.createElement("h3");
      date.classList.add("comment__header--date");
      let v = new Date(arr[i]["timestamp"])
      date.innerText = v.getUTCMonth()+1 + "/" + v.getDate() + "/" + v.getFullYear();
      headerContainer.appendChild(date);
  
      //comment container
      let textContainer = document.createElement("div");
      textContainer.classList.add("comment__text-container-default");
      defaultContainer.appendChild(textContainer);
  
      //comment
      let comment = document.createElement("p");
      comment.classList.add("comment__text-container-default--comment");
      comment.innerText = arr[i]["comment"];
      textContainer.appendChild(comment);
    }
}

displayComments(arr)

