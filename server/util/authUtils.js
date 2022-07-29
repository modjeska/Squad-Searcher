const jwt = require('jsonwebtoken');

const SECRET = 'fdfjsakfdsa';
const EXPIRATION = '24h';

const getJWTToken = ({ username, _id }) => {
  return jwt.sign({ data: {username, _id }}, SECRET, { expiresIn: EXPIRATION });
};

const authContext = async ({ req }) => {
  const jwtToken = req.headers['authorization']; // header key must be lowercase
  if (jwtToken) {
    const { data } = jwt.decode(jwtToken);
    return { loggedInUserId: data._id };
  }

  return { loggedInUserId: null };
};

module.exports = { getJWTToken, authContext }