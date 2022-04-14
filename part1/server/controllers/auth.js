const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    console.log(req.body);
    const { username, password } = req.body;
    for (let i = 0; i < users.length; i++) {
      let existingPassword = bcrypt.compareSync(password, users[i].passHash)
      if (users[i].username === username && existingPassword) {
        let validUser = {...users[i]}
        delete validUser.passHash;
        return res.status(200).send(validUser);
      }
    }
    res.status(400).send("User not found.");
  },
  register: (req, res) => {
    console.log("Registering User");
    console.log(req.body);
    let { password, username, email, firstName, lastName } = req.body;
    const salt = bcrypt.genSaltSync(8);
    const passHash = bcrypt.hashSync(password, salt);
    const userData = {
      passHash,
      username,
      email,
      firstName,
      lastName,
    };
    const secureUser = { ...userData };
    users.push(secureUser);
    console.log(`users are: ${users[0].username}`);
    res.status(200).send(secureUser);
  },
};
