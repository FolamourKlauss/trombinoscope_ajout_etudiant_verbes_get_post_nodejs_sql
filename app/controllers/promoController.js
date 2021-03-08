const dataRepository = require('../dataRepository');

const promoController = {
    list: (req, res) => {
        // j'appel le dataRepository pour qu'il cherche les promos
        dataRepository.findAllPromos(
            // lorsqu'il aura trouvé les promo il appelera cette callback
            // en fournissant dans le premier parametre les promo trouvées dans la BDD
            (promos) => {
                res.render('promo/list', {promos});
            }
        );   
    },

    view: (req, res, next) => {
        // on recupère l'ID dans les parametres d'URL
        const promoId = parseInt(req.params.id, 10);

        dataRepository.findPromoById(
            promoId, 
            (promo) => {
                // si le callback ne recoit pas de promo alors on utilise next() pour afficher la page 404
                if(!promo) {
                    next();
                    return;
                }

                // si on a reçu une promo alors on l'affiche dans une template
                res.render('promo/view', {promo});
            }
        );

    },

    listStudents: (req, res, next) => {
        // on recupère l'ID dans les parametres d'URL
        const promoId = parseInt(req.params.id, 10);

        dataRepository.findPromoById(
            promoId, 
            (promo) => {
                // si le callback ne recoit pas de promo alors on utilise next() pour afficher la page 404
                if(!promo) {
                    next();
                    return;
                }


                dataRepository.findStudentsByPromoId(
                    promoId,
                    (promoStudents) => {
                        res.render('promo/listStudents', {promo, promoStudents});
                    }
                );


            }
        );
    


    }
}

module.exports = promoController;