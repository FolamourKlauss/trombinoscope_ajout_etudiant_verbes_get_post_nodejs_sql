const dataRepository = require('../dataRepository');

const adminController = {

    showAddStudentForm: (req, res) => {
        dataRepository.findAllPromos(
            (promos) => {
                // si le callback ne recoit pas de promo alors on utilise next() pour afficher la page 404
                if(!promos) {
                    next();
                    return;
                };
                res.render('admin/addStudent', { promos });
            }
        );
    },

    addStudent: (req, res) => {
        // le body est la "lettre" dans l'enveloppe. Le contenu caché qui m'a été envoyé.
        // Il existe (le req.body) uniquement car j'ai utilisé bodyParser.
        const { body } = req;
        // on recupère l'ID dans les parametres d'URL
        const promoId = parseInt(req.body.promo, 10);
        console.log(promoId);
        dataRepository.addStudent(body,() => {
            res.redirect(`/promos/${promoId}`);
        });
    }

};


module.exports = adminController; 