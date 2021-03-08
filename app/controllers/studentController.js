const dataRepository = require('../dataRepository');

const studentController = {

    view: (req, res) => {
        // recupérer l'id de l'étudiant depuis URL
        const studentId = parseInt(req.params.id, 10);
        // OPTIONNEL : AJOUTER un controle pour vérifier que le parametre d'URL id était bien un int pour vérifier qu'on nous demande pas n'importe quoi

        dataRepository.findStudentById(
            studentId,
            (student) => {
                res.render('student/view', {student});
            }
        );

    },

    list: (req, res) => {

        dataRepository.findAllStudents(
            (students) => {
                res.render('student/list', {students});
            }
        );
       
    }

}

module.exports = studentController;