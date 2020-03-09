const express = require ('express');
const router = express.Router ();
const md5 = require ('blueimp-md5');

const User = require ('../model/login.js');

router.post ('/register', (req, res) => {
    let userName = req.body.username,
        passWord = md5 (md5 (req.body.password));

    User.findOne ({
        username: userName
    }, (err, data) => {
        if (err) {
            return res.status (500).json ({
                err_code: 500,
                message: 'Server error'
            })
        }

        if (data) {
            return res.status (200).json ({
                err_code: 1,
                message: 'username is exit'
            })
        }

        new User ({
            username: userName,
            password: passWord
        }).save ((err, user) => {
            if (err) {
                return res.status (500).json ({
                    err_code: 500,
                    message: 'Server error'
                })
            }

            res.status (200).json ({
                err_code: 0,
                message: 'The register is success'
            })
            
        })
    })
});

router.post ('/login', (req, res) => {
    let userName = req.body.username,
        passWord = md5 (md5 (req.body.password));

    User.findOne ({
        username: userName,
        password: passWord
    }, (err, user) => {
        if (err) {
            return res.status (500).json ({
                err_code: 500,
                message: 'Server error'
            })
        }

        if (!user) {
            return res.status (200).json ({
                err_code: 1,
                message: 'username or password is error'
            })
        }

        res.status (200).json ({
            err_code: 0,
            message: 'username and password is true'
        })
    })
});

router.get ('/', (req, res) => {
    User.find ((err, stus) => {
        if (err) {
            return res.status (500).send ('404 NOT FOUND');
        }
        res.render ('index.html', {
            user: stus
        })
    })

})

module.exports = router;