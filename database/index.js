const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: {type: String, unique: true},
  fullName: {type: String, unique: true},
  owner: {type: Object, unique: true},
  link: {type: String, unique: true}
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  var newRepo = new Repo({
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    owner: repo.owner.url,
    link: repo.html_url
  })
  
  newRepo.save(function (err) {
    if (err) return console.error(err);
  })
}

//make a callback for my async .find request.

let find = (callback) => {
  Repo.find(function (err, repos) {
    if (err) return console.error('error');
    callback(repos);
  }
  )}

module.exports.save = save;
module.exports.find = find; 