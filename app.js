
var app = angular.module('myApp',['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
    
    .when("/",{
        templateUrl:"view/home.html"
    })
    .when("/home",{
        templateUrl:"view/home.html"
    })
    .when("/todolist",{
        templateUrl:"view/todolist.html"
    })
    .when("/calendrier",{
        templateUrl:"view/calendrier.html"
    })
    .when("/games",{
        templateUrl:"view/games.html"
    })
    .when("/score",{
        templateUrl:"view/score.html"
    })
    .when("/login",{
        templateUrl:"view/login.html"
    })
    .when("/register",{
        templateUrl:"view/register.html"
    })

    .otherwise({
       redirectTo:"/"
    });
});

app.filter('range', function() { 

    return function(input, total) { 

        total = parseInt(total); 

        for (var i=0; i<total; i++) { 

          input.push(i); 
 
        } 

        return input; 

    }; 

});

app.directive("cardboard",function(){
   

    var toto = function(scope,element,attr){
         
        
           var count = 0;
           var table= [];

           //DISTRIBUE ALEATOIREMENT LES IMAGES AUX CARTES.

            //img correspond à la liste d'images à distribuer aléatoirement aux carte.
           //img contient 4 paires d'images identiques pour 8 cartes.
           var img = ["images/foudre.jpg","images/particules.jpg","images/foudre.jpg","images/homard.jpg","images/lune.jpg","images/particules.jpg","images/lune.jpg","images/homard.jpg"];
           var random;
           
           
          // $(".carte").eq(0).css("transform","rotateY(180deg)");  
        for(var i=0;i<$('.carte').length;i++)
        {
            //pour chaque itération de i img.length décrémente .

             random = Math.floor(img.length*Math.random());//varie entre 0 et 7

             //attribution de l'image à la carte
            $(".carte").eq(i).find('.theback>img')[0].src = img[random];

            //retire l'image de img qui vient d'être attribué à une carte.
            img.splice(random,1);
        
        }

        $(".carte").on('click',function(){
            
            $(this).css("transform","rotateY(180deg)");

            var indexation = $(".carte").index($(this));
            console.log($(".carte").index($(this)));
            count++;
            if(count === 1)
             {
                  table.push(
                      {
                          index:indexation,
                          value:$(this).find('.theback>img')[0].src}
                      );
             }
             if(count === 2)
             {
                table.push(
                    {
                        index:indexation,
                        value:$(this).find('.theback>img')[0].src}
                    );

                    console.log(table[0].index+"=>"+table[0].value+" "+table[1].index+"=>"+table[1].value);

                    if(table[0].value !== table[1].value)
                    {
                         console.log('not the same');
                       //  $(".carte").eq(table[0].index).css("transform","rotateY(0deg)");
                        // $(".carte").eq(table[1].index).css("transform","rotateY(0deg)");
                       setTimeout(function(){
                        $(".carte").eq(table[0].index).css("transform","rotateY(0deg)");
                        $(".carte").eq(table[1].index).css("transform","rotateY(0deg)");
                        count = 0;
                        table = [];
                       },1000)


                     

                      console.log($(".carte"));
                   
                    }
                    else
                    {
                        console.log('the same!')
                        setTimeout(function(){
                            count = 0;
                            table = [];
                           },1000)
                    }
                 
             }
    
        
        })

     
    }
    return{
        restrict:'E',
        link:toto
    }
})


app.controller("header",function($scope){
   $scope.navigation = ["home","login","register"]
});

app.controller('home',function($scope,$http){
   /* $scope.pseudo = $cookies.get('Pseudo');
    $cookies.put('Pseudo','Gold');*/

    $scope.home_pic = [
  //Image par<a href="https://pixabay.com/fr/users/955169-955169/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1502706">955169</a> de <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1502706">Pixabay</a>
         //2016/07/07/16/46/roll-the-dice-1502706_960_720.jpg
  //Image par<a href="https://pixabay.com/fr/users/FrankWinkler-64960/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=540126">Frank Winkler</a> de <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=540126">Pixabay</a>
//2014/11/21/03/29/fair-540126_960_720.jpg

       {"image":"https://cdn.pixabay.com/photo/2017/02/18/11/00/checklist-2077020_960_720.jpg","author":"TeroVesalainen","pixabay":"https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2077020","link":"https://pixabay.com/fr/users/TeroVesalainen-809550/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2077020","redirect":"todolist"},
        {"image":"https://cdn.pixabay.com/photo/2015/03/05/17/34/calendar-660670_960_720.jpg","author":"tigerlily713","pixabay":"https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=660670","link":"https://pixabay.com/fr/users/tigerlily713-194784/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=660670","redirect":"calendrier"},

        {"image":"https://cdn.pixabay.com/photo/2014/11/21/03/29/fair-540126_960_720.jpg","author":"Frank Winkler","pixabay":"https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=540126","link":"https://pixabay.com/fr/users/FrankWinkler-64960/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=540126","redirect":"animation"},
        {"image":"https://cdn.pixabay.com/photo/2016/07/07/16/46/roll-the-dice-1502706_960_720.jpg","author":"955169","pixabay":"https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1502706","link":"https://pixabay.com/fr/users/955169-955169/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1502706","redirect":"games"},
        {"image":"https://cdn.pixabay.com/photo/2016/09/29/10/08/halloween-1702531_960_720.jpg","author":"Yuri_B","pixabay":"https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1702531","link":"https://pixabay.com/fr/users/Yuri_B-2216431/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1702531","redirect":"#"},
        {"image":"https://cdn.pixabay.com/photo/2016/09/29/10/08/halloween-1702531_960_720.jpg","author":"Yuri_B","pixabay":"https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1702531","link":"https://pixabay.com/fr/users/Yuri_B-2216431/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1702531","redirect":"#"}
    ];
     
    var tableau = [];
    var count = [];
    for(var i=0;i<6;i++) //6 nombre de boutons ajouter => home.html
    {
        count[i] = 0;
    }
   // var count =  [0,0,0,0,0,0];
     
   $scope.count = count;
    $scope.ajout = function(){
        //tenter de calculer le nombre de click pour chaque bouton si celui-ci dépasse 1 message alert sinon push!
       
        $scope.count = count;
     var index = this.$index;
        // alert(this.$index); 
     
     if(count[this.$index] === 0)
     {
     tableau.push($scope.home_pic[this.$index]);
     }
     else{
         alert("Déjà ajouté à la liste!");
     }
       
    
       $scope.panier = tableau;

       count[this.$index]++;
       };

    $scope.retirer = function(){
       //remise à zéro du nombre de clic pour les boutons
       for(var k = 0;k<6;k++){
           count[k] =0;
       }

      // console.log(liste_index[this.index]);
       tableau = [];
       $scope.panier = tableau;
       console.log($scope.panier);
    };

    $scope.appliquer = function(){
        //console.log($scope.panier);

        var obj = tableau;

    
         console.log(obj);
       $http.post('appli.php',obj).then(function(data){ alert(data)}, function(){alert('error')});
   
    
    }

    }
);

app.controller("appli",function($scope,$http){
    $scope.appli = "hello appli!"
    $http.get('./liste.json').then(function(data){
        
        $scope.appli = data.data;
    }, function(){alert('error')});
})
//liste appli

var txts =document.getElementsByClassName("txt");

app.controller("todolist",function($scope){
   var todolist = [];
    var activee = document.getElementsByClassName("active");
   
   
    $scope.add = function(){
        var todo = $scope.todo;  
           // console.log(activee);
           // console.log(activee[0]); 
           // si il y a un element de liste qui porte la classe active et choisit pour être éditer
            if(activee[0] !== undefined)
            {
                activee[0].innerHTML = $scope.todo;
                activee[0].setAttribute("class","txt");
            }
            else
            {
                todolist.push(todo);
            }
           
        
        $scope.todolist = todolist;
        //console.log(todolist);
    }

    $scope.remove = function(){
       // alert(this.$index);
        todolist.splice(this.$index,1);
        console.log(todolist);
        
    }
    
    var txt = [];
  
    $scope.update = function(){
      
      
    var inputField = document.querySelector("#inputField");
        
     //alert(inputField.value);
     inputField.focus();
         for(var l=0;l<txts.length;l++)
         {
             if(l===this.$index)
             {
                txts[l].setAttribute("class","txt active"); 
             }
             else{
                txts[l].setAttribute("class","txt");
             }

         }
         
         //console.log(txt[this.$index].innerHTML);
         $scope.todo = txts[this.$index].innerHTML;
         

          
        
            
         
         
         
       // console.log(todolist[this.$index]);
          //console.log(txt[this.$index].innerHTML);
         // $scope.active = "active";

          
        
           
            
         

          // en cliquant je lui ajoute la class active pour styliser!
        //console.log(txt[this.$index].getAttribute("class"));
       // alert(this.$index);
        
    
    }
    $scope.txt = function(){
        //stocke le texte dans le scope pour l'utiliser grâce à event dans update
        //$scope.active = todolist[this.$index];
       // console.log($scope.bijour);
    
    }
})
 
   
app.controller("calendrier",function($scope){
 
    
   
    $scope.calendrier = "calendrier";

    var date = new Date();
   $scope.date = date;
   
   var days_of_week = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
   $scope.days_of_week = days_of_week;
   var months_of_years = [
       {"nom":"Janvier","jours":31},
       {"nom":"Février","jours":28},
       {"nom":"Mars","jours":31},
       {"nom":"Avril","jours":30},
       {"nom":"Mai","jours":31},
       {"nom":"Juin","jours":30},
       {"nom":"Juillet","jours":31},
       {"nom":"Août","jours":31},
       {"nom":"Septembre","jours":30},
       {"nom":"Octobre","jours":31},
       {"nom":"Novembre","jours":30},
       {"nom":"Décembre","jours":31}
    ];
  /* $scope.months_of_years = months_of_years;
 
  $scope.test_month = months_of_years[4].nom*/

  


  function ji(r)
  {
      
      var j=  months_of_years[r].jours;
      //r min date.getMonth max
      
      var total=0;
      
      /*
      for(var i=r;i<date.getMonth();i++)
      {
          total += months_of_years[i].jours;
         }
         */
        if(r<date.getMonth())
      {
        for(var i=r;i<date.getMonth();i++)
        {
            total += months_of_years[i].jours;
           }
      }
      else{
        for(var i=date.getMonth();i<r;i++)
        {
            total -= months_of_years[i].jours;
           }
      }

      return total%7;
      
  }
 
  
 
compte = date.getMonth();
$scope.compte = compte;
$scope.mois_nom = months_of_years[compte].nom;
$scope.mois_jours = months_of_years[compte].jours;
  $scope.ik = ji(compte);
  
  
  $scope.precedent = function(){
      $scope.compte = compte;
     
      if(compte>-1){
      compte = compte-1;
      $scope.mois_nom = months_of_years[compte].nom;
      $scope.mois_jours = months_of_years[compte].jours;
      $scope.ik = ji(compte);
      }
  }
  $scope.suivant = function(){
    $scope.compte = compte;

    if(compte<12)
    {
    compte = compte+1;
    $scope.mois_nom = months_of_years[compte].nom;
    $scope.mois_jours = months_of_years[compte].jours
    $scope.ik = ji(compte);
    }
}
  
  //if  date.setMonth(date.getMonth()+1); $scope.month = month_of_years[date.getMonth()-1]
  //decalage pour le 1er jour du mois!!
  ;
  
  //$scope.month = date.getMonth();

   //$nbr_jour_mois = 30;

   $scope.t = date.getDate();
   


   $scope.d = date.getDay();
  //  $scope.day = days_of_week[date.getDay()];
   
 



})



app.controller("score",function($scope){

    $scope.score = "score";
})
app.controller("animation",function($scope){

    $scope.animation = "animation";
})
app.controller("score",function($scope){

    $scope.score = "score";
})



app.controller("register",function($scope){
  $scope.myPseudo = "";
  $scope.myEmail = "";
  $scope.myPassword = "";
 });

 //creer une directive manipulation DOM:https://www.youtube.com/watch?v=bk-CC61zMZk

