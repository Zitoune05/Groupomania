const jwt = require('jsonwebtoken');                        //Package pour créer des jetons uniques
const models = require('../models');

// Récupère toutes les publications dans la base de données pour les affichers
exports.getAllpublications = (req, res, next) => {        

  models.Publication.findAll({ 
    order: [['createdAt', 'DESC']], 
    include: {
      model: models.User,
      attributes: ['username']
    }}
  )
  .then((publications) => res.status(200).json(publications))
  .catch(error => res.status(400).json({ error: "gettallpublication", error: error }));                                  
};


// Récupère une publication pour l'afficher
exports.getOnePublication = (req, res, next) => {

  models.Publication.findOne({
    attributes: [ 'content', 'title', 'imageUrl', "likes"]
  })
  .then((publication) => res.status(200).json( publication))
  .catch(error => res.status(400).json({ error: "getOnePublication", error: error }));   
};


// Creation de publication 
exports.createMessage = (req, res, next) => {
  
  const token = req.headers.authorization.split(" ")[1];          // Token attribué à l'utilisateur
  const decodedToken = jwt.verify(token, process.env.TOKEN);      // Token comparé 
  const userId = decodedToken.userId; 

  // Params
  let title = req.body.title;
  let content = req.body.content;
  let imageUrl = req.body.imageUrl;

  if (title == null || content == null) {
    return res.status(400).json({ 'error': 'Paramètres manquants ' });
  }

  models.User.findOne({attributes: [ "id" ], where: { id: userId } })
    .then(
      models.Publication.create({
        UserId : userId,
        title : title,
        content : content,
        imageUrl : imageUrl,
        likes : 0,
      })
      .then((response) => res.status(200).json({ response : " Publication envoyée avec succé !" }))     
      .catch((err) => res.status(401).json({ err })) 
    )
    .catch(() => res.status(500).json({ 'error': 'unable to verify user' }))

};

// Modification de la publication sélectionnée
exports.modifypublication = (req, res, next) => {       

  models.Publication.findOne({ attributes: ['id'], where: { id: req.params.id } })
    .then(
      models.Publication.update({
        title : req.body.title,
        content : req.body.content,
        imageUrl : req.body.imageUrl,
      },
      { where : { id: req.params.id } })
      .then((response) => res.status(200).json({ response : " Publication modifiée avec succé !" }))     
      .catch((err) => res.status(401).json({ err })) 
    )
  .catch(() => res.status(500).json({ 'error': 'unable to verify publication' }))
};

// Pour supprimer une publication
exports.deletePublication = (req, res, next) => {         

  models.Publication.destroy({ where: { id: (req.params.id)  }})    // Id de la publication       
  .then((response) => res.status(200).json(response))   
  .catch((err) => res.status(401).json({ err }));
};
   
// Pour liker/disliker
exports.likeCtrl = (req,res,next) => {              
  const userCible = req.body.userId;                
  if(req.body.like == 1){
    models.Publication.findOne({ where: { id: messageId }}) 
    .then(publication => {
      publication.usersLiked.push(userCible);
      publication.likes += 1;
      publication.save();  
      res.status(200).json({message : 'publication likée'})
    })
    .catch((error) => { res.status(400).json({error: error});})
    .catch((error) => { res.status(500).json({error: error});});
  } else if (req.body.like == 0 ){
    models.Publication.findOne({ where: { id: messageId }}) 
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
     

  
