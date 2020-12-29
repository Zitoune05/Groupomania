const models = require('../models');

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
       
  
    
  