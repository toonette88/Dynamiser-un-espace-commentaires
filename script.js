function createComments (author, comments) {

    //Récupération du conteneur de commentaires:
    let div1 = document.getElementById("comment-list");
    
    //Création de tous les conteneurs
    let div2 = document.createElement("div");
    div2.setAttribute('class',"flex space-x-4 text-sm text-gray-500");
    
    let div3 = document.createElement("div");
    
    if (div1.children.length == 0) {
        div3.setAttribute('class', "flex-1 py-10");
    
    } else {
        div3.setAttribute('class', "flex-1 py-10 border-t border-gray-20");
    
    }
    
    let newAuthor = document.createElement("h3");
    newAuthor.setAttribute('class', "font-medium text-gray-900");
    
    let div4 = document.createElement("div");
    div4.setAttribute('class',"prose prose-sm mt-4 max-w-none text-gray-500");
    
    let p1 = document.createElement('p');
    
    //Création des textes
    let commentsText = document.createTextNode(comments);
    let authorText = document.createTextNode(author);
    
    // Imbrication des conteneurs et textes
    newAuthor.appendChild(authorText);
    div3.appendChild(newAuthor);
    div4.appendChild(p1);
    p1.appendChild(commentsText);
    div3.appendChild(div4);
    div2.appendChild(div3);
    div1.appendChild(div2);
    
    };
    
    createComments("Emily Selman","Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis ratione eos ipsum incidunt, ut id debitis fugiat cumque omnis, exercitationem, dolores obcaecati maiores eaque architecto delectus distinctio odio et." );
    createComments("Hector Gibbons","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, enim vitae quasi culpa est, excepturi cum voluptatum exercitationem id, deleniti similique maiores! Totam, itaque praesentium quod ipsa quos ratione et." );
    createComments("Mark Edwards","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae accusantium quae doloribus. Nobis ipsam libero asperiores a velit ab nemo facere molestias quisquam. Libero, repudiandae dignissimos. Doloribus hic placeat soluta ?");
    
    
    
    