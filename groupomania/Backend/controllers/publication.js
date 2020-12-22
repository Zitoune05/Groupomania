const publication = require('../models/publication');           //On récupére le modèl type d'une publication

exports.getAllpublications = (req, res, next) => {        // Récupère toutes les publications dans la base de données pour les affichers
  publication.find().then(
    (publications) => {
      res.status(200).json(publications);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  )
  .catch((error) => { res.status(500).json({error: error});});
};

exports.createpublication = (req, res, next) => {         // Création de publication sur la base de données
    const publicationObject = JSON.parse(req.body.publication); // On obtiens les informations par rapports aux valeurs d'entrée
    const publication = new publication({                       // Ces valeurs d'entrée sont placées dans un élément publication
        ...publicationObject,
        imageUrl : `${req.protocol}://${req.get('host')}/image/${req.file.filename}`
    });
    publication.save()                                    // méthode save pour enregistrer la publication dans la base de donnée
    .then(
      () => {
        res.status(201).json({                      
          message: 'publication bien créée !'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({                      // Affiche un status et message d'erreur
          error: error,
          message : "la publication n'a pas pu etre créée !"  
        });
      }
    )
    .catch((error) => { res.status(500).json({error: error});});  //Erreur serveur
};
  
exports.getOnepublication= (req,res,next) => {            // Charge les informations de la publication selectionnée
    publication.findOne({                                 // Méthode findOne pour trouver la publication dans la base de donnée 
      _id: req.params.id
    }).then(
      (publication) => {
        res.status(200).json(publication);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    )
    .catch((error) => { res.status(500).json({error: error});});
};
  
exports.modifypublication = (req, res, next) => {         // Modification de la publication sélectionnée
    const publicationObject = req.file ?                  // On obtiens les informations de la publication 
    {
      ...JSON.parse(req.body.publication),
      imageUrl : `${req.protocol}://${req.get('host')}/image/${req.file.filename}`,  
    } : {...req.body };   
    publication.updateOne({_id: req.params.id}, {...publicationObject, _id : req.params.id})    // On push dans la base de données les informations modifiées
    .then(() => {res.status(201).json({message: 'publication updated successfully!' });})
    .catch((error) => { res.status(400).json({error: error });})
    .catch((error) => { res.status(500).json({error: error});});
};
               
exports.likeCtrl = (req,res,next) => {              // Pour liker/disliker
  const userCible = req.body.userId;                
  if(req.body.like == 1){
    publication.findOne({_id: req.params.id}) 
    .then(publication => {
      publication.usersLiked.push(userCible);
      publication.likes += 1;
      publication.save();  
      res.status(200).json({message : 'publication likée'})
    })
    .catch((error) => { res.status(400).json({error: error});})
    .catch((error) => { res.status(500).json({error: error});});
  } else if (req.body.like == 0 ){
    publication.findOne({_id: req.params.id}) 
    .then(publication => { 
              const index = publication.usersLiked.indexOf(userCible);            
              if(publication.usersLiked.indexOf(userCible)>-1)
              {
                publication.usersLiked.splice(index,1);                               
                                                                                
                publication.likes -= 1;    
                                                      }      
            else if(publication.usersDisliked.indexOf(userCible)>-1){         
              publication.usersDisliked.splice(index,1); 
              publication.dislikes -= 1;
            }                                                                     
            publication.save();
            res.status(200).json({message : 'publication likée'})
    })       
    .catch((error) => { res.status(400).json({error: error});})

    .catch((error) => { res.status(500).json({error: error});})
          
    }
  else if(req.body.like == -1){
      publication.findOne({_id: req.params.id}) 
    .then(publication => {
      publication.usersDisliked.push(userCible);
      publication.dislikes += 1;
      publication.save();
      res.status(200).json({message : 'publication dislikée'})
    })        
    .catch((error) => { res.status(400).json({error: error});})
    .catch((error) => { res.status(500).json({error: error});});
    }
};
     
exports.deletepublication = (req, res, next) => {         // Pour supprimer une publication
    publication.deleteOne({_id: req.params.id})           // On sélectionne l'Id de la publication à supprimer
    .then(     
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    )
    .catch((error) => { res.status(500).json({error: error});});
};
  
