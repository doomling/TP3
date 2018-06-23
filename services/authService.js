let self = {}

self.user = {
  username: 'admin',
  password: 'admin',
  status: false
}

//self.hasAuthenticatedUser = false;

self.authenticate = function (data) {
  console.log('soy service', data)
  if (data.username == self.user.username && data.password == self.user.password ) {
    return self.user.status = true;
  } else {
    return self.user.status = false;
  }
}

//self.getStatus = function() {
//  return hasAuthenticatedUser
//}

self.updateStatus = function(status) {
  console.log("holi sercdsfhdsfds",status)
  self.user.status = status;
}

module.exports = self
