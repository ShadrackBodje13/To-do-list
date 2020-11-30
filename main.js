$(document).ready(function(){

    $('#container').animate({opacity: 1}, 600, "linear");
    
    // basculer l'achèvement des tâches
    $('ul').on('click', 'li', function(){
        $(this).toggleClass('done').blur();
    });
    // ^ listener est ajouté à ul, 2ème argument cible
    //tous les futurs lis créés dans uls
    
    // supprimer une tâche (empêcher le bouillonnement d'événement)
    $('ul').on('click', 'span', function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove(); //c'est le rappel
        }); // fonction qui s'exécute après la disparition de l'élément
        event.stopPropagation(); // arrête de bouillonner
    });
    
    $('#items').on('keypress', function(event){
        if(event.which === 13 && $(this).val() !== "") {
            // si on appuie sur la touche ENTREE et que l'entrée n'est pas vide
            var newToDo = $(this).val().replace(/</g, "&lt;").replace(/>/g, "&gt;"); // enregistrer l'entrée dans var
            $('ul').append('<li><span><i class="fa fa-trash-o"></i></span> ' + newToDo + '</li>'); // ajouter du contenu html et to-do à ul
            $(this).val("").blur(); // il faut clear le input
        }
    });
    
    $("#title").on('keypress', function(event){
        if(event.which === 13) {
            var title = $(this).val().replace(/</g, "").replace(/>/g, "");
            $(this).attr("placeholder", title).blur();
        }
    });
    
    $('.fa-pencil').on('click', function(){
        $('#items').fadeToggle();
    });
    
    });