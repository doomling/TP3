let self = {}

const user = {
  username: 'admin',
  password: 'admin',
}

self.authenticate = function (data) {
  console.log('soy service', data)
  if (data.username == user.username && data.password == user.password ) {
    return true;
  } else {
    return false;
  }
}

module.exports = self
