// Ressemble à un dataMapper
const client = require('./database');

const dataRepository = {

    findAllPromos: (callback) => {
        client.query(
            "SELECT * FROM promo ORDER BY name;",
            (error, result) => {
                if(error) {
                    console.trace(error);
                } else {
                    // s'il n'y a pas d'erreur on recupére les resultats qui viennent de la BDD
                    const promos = result.rows;

                    // on appel le callback transmis par celui qui à appelé la méthode
                    callback(promos);
                }
            }
        );
    },

    findPromoById: (promoId, callback) => {
        client.query(
            `SELECT * FROM promo WHERE id = ${promoId};`,
            (error, result) => {
                if(error) {
                    console.trace(error);
                } else {
                    const promo = result.rows[0];
                    callback(promo);
                }
            }
        );
    },

    findStudentsByPromoId: (promoId, callback) => {
        client.query(
            `SELECT * FROM student WHERE promo_id = ${promoId};`,
            (error, result) => {
                if(error) {
                    console.trace(error);
                } else {
                    const promoStudents = result.rows;
                    callback(promoStudents);
                }
            }
        );
    },

    findStudentById: (studentId, callback) => {
        client.query(
            `SELECT * FROM student WHERE id = ${studentId}`,
            (error, result) => {
                if(error) {
                    console.trace(error);
                } else {
                    const student = result.rows[0];
                    callback(student);
                }
            }
        );
    },

    findAllStudents: (callback) => {
        client.query(
            'SELECT * FROM student ORDER BY last_name, first_name',
            (error, result) => {
                if(error) {
                    console.trace(error);
                } else {
                    const students = result.rows;
                    callback(students);
                }
            }
        );
    },

    addStudent: (studentInfo, callback) => {
        
        
        client.query(
            `INSERT INTO 
            student
            (
                first_name,
                last_name,
                github_username,
                profile_picture_url,
                promo_id
            )
        VALUES
            (
                '${studentInfo.first_name}',
                '${studentInfo.last_name}',
                '${studentInfo.github_username}',
                '${"https://github.com/" + studentInfo.github_username + ".png"}',
                '${studentInfo.promo}'
            );`,
            (error, result) => {
                if(error) {
                    console.trace(error);
                } else {
                    
                    callback(studentInfo);
                }
            }
        );
    }

}

module.exports = dataRepository;


