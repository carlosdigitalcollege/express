const auth = (req, res) => {
    const { email, password } = req.body
    userModel.findUserByEmailAndPassword(email, password, (result) => {
        if (result.length === 1) {
            const user = result[0];
            const token = jwt.sign(
                { name: user.name, email: user.email },
                'chavesuperscreta'
            );

            res.json({ token })
        } else {
            res.status(401);
            res.json({ message: 'Credenciais inválidas' })
        }


    })
}


const create = (req, res) => {
    // TODO: Validação

    userModel.add(req.body, (result) => {
        res.end(JSON.stringify(result[0]));
    })
}



module.exports = {
    auth,
    create,
}
