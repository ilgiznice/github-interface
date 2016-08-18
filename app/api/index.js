import request from 'superagent'

const fetchIssues = (action) => {
  const url = `https://api.github.com/repos/${action.owner}/${action.repo}/issues`
  return new Promise((resolve, reject) => {
    request(url).end((err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.parse(res.text))
      }
    })
  })
}

export default fetchIssues
