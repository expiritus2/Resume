/* eslint-disable */
const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://github.com/expiritus2/Resume-Mikhail-Drozdovich',
}, (err) => {
  if(err) { console.log(err) }
  else { console.log('Deploy is successfull'); }
});
