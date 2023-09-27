function compileList() {
    let h1 = document.querySelectorAll(".name");
    let ul = document.getElementById("articleList");
    console.log(h1);
    for (let i = 0; i < h1.length; i++) {
      h1[i].id = i;
      let headerText = h1[i].textContent;
      console.log(headerText);
  
      let linkText = headerText;
      let linkTarget = i;
      let linkClass = "navlink";
      let listObject = document.createElement("li");
      let listClass = "listItem";
      let linkItem = document.createElement("a");
      let linkNode = document.createTextNode(linkText);
      let unorderedList = document.getElementById("articleList");
  
      linkItem.appendChild(linkNode);
      linkItem.href = "#" + i;
      linkItem.className = linkClass;
      listObject.appendChild(linkItem);
      listObject.className = listClass;
      unorderedList.appendChild(listObject);
    }
  }
  