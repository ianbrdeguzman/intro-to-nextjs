import { users } from '../users/index.js';

export default (req, res) => {
    const findUser = users.find((user) => req.query.id == user.id);
    if (findUser) {
        res.status(200).json(findUser);
    } else {
        res.status(404).send({ message: 'User Not Found.' });
    }
};
