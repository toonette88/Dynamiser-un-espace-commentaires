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
    
    // Création des commentaires déjà présents
    createComments("Emily Selman","Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis ratione eos ipsum incidunt, ut id debitis fugiat cumque omnis, exercitationem, dolores obcaecati maiores eaque architecto delectus distinctio odio et." );
    createComments("Hector Gibbons","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, enim vitae quasi culpa est, excepturi cum voluptatum exercitationem id, deleniti similique maiores! Totam, itaque praesentium quod ipsa quos ratione et." );
    createComments("Mark Edwards","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae accusantium quae doloribus. Nobis ipsam libero asperiores a velit ab nemo facere molestias quisquam. Libero, repudiandae dignissimos. Doloribus hic placeat soluta ?");
    
    // Ajout d'un nouveau commentaires
    function addComments() {

    //Récupération des champs
    let inputFirstName = document.getElementById("first-name");
    let inputLastName = document.getElementById("last-name");
    let inputmessage = document.getElementById("message");

    //Récupération du contenu des champs
    let firstName = inputFirstName.value;
    let lastName = inputLastName.value;
    let message = inputmessage.value;
    
    // Créer un commentaire si les champs ne sont pas vides
    if(firstName == "" || lastName == "" || message == "") {
        document.getElementById("error-message").style.display="block";
    } else{
        createComments(firstName + " " + lastName, message);
    }
    
       }

    
    function erase() {
        document.querySelector('form').reset();
    }


    document.querySelector('button').addEventListener('click', handleClick);
    function handleClick(e) {
        e.preventDefault();
        addComments();
        erase();
    }
