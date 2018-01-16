
      var user = new Array();// pour noter si tous les photos sont utlises
      var firstIndex=0;//le index de premier photo
      var secondIndex=0; //la index de deuxieme de photo
      var ctr;//on click si le premier photo?
      var finished;//si le jeu est termine, combien de photos sont paired
      var cols=5;//map de cols
      var rows=4;//map de rows
      var length=cols*rows;//sum the nombre
      var map=new Array();// on memorise tous les postions sont cards
      var canClick=false;// on peut clicker?
      var d = new Date();					

	  for(var i=0;i<length/2;i++) {
        map[i]=1;//on initaliser tous les phtos pour paired
        map[length/2+i]=6;
      }

      function $(x){
        return document.getElementById(x);// c'est la fonction de jquery 
      }
/**
* pour initaliser le jeu
*/
    function init() {
		for (i = 0; i < length ;i++) {
          $('img'+i).src = "photo 1/memory-back.png";
          user[i] = 0;//tous les postions on ne click pas
        }
        map.sort(function(){return Math.random()>.5});// pour realiser le random 
		    ctr = 0;
        finished = 0;
        canClick=true;// apres tous les photos sont positionnés 
      }
/*
* pour displayer la photo 
* @param but la postion de photo 
* @return returntoold();
*/

      function showimage(but) {
	    if(!canClick) return;//on verifer si on peut click
        if(user[but] == 1) return; // si la photo est déjà utlisé
        $('img'+but).src = 'photo 1/memory'+map[but]+'.png';
        if (ctr == 0) {
          ctr++;// pour noter c'est la premier photo
          firstIndex = but;//pour memoriser la premier photo but
        }else {
          if(firstIndex!=but ){
            secondIndex = but;// pour memoriser deuxieme photo 
            ctr = 0;
            returntoold() // pour verifer les deux photos l'égalité de deux photos
          }
        }
      }
/*
* @objectif pour verifer les deux photos l'égalité de deux photos
* 
*
*/
      function returntoold() {
        if (map[firstIndex] == map[secondIndex]) {// si ils sont egaux 
          finished++;//on ajouter le finished
          user[firstIndex] = 1;// on ne peut pas utliser les deux
          user[secondIndex] = 1;
          ctr=0;//recommencer 
        }else if (user[firstIndex] == 0) {//on mettre le premier photo sont utlisable 
          $('img'+firstIndex).src = "photo 1/memory-back.png";//on monter la photo la background
          firstIndex=secondIndex// premier devenir la dexuieme 
          secondIndex=0//deuxiement devenir la 0
          ctr++;
        }
        if (finished >= length/2) {//tous les photo sont paired
          if(confirm('le jeu est terminé')==true){
            init();
          }
        }
      }
