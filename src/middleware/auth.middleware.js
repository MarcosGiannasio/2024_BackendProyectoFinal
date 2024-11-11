const authentication = (req, res, next) => {
    if (req.session.user.email !== 'marcosgiannasio@gmail.com' || !req.session.user.isAdmin) {
        return res.status(401).send('Error de autenticación')
    }

    next()
}

module.exports = {authentication}