const fetch = require('isomorphic-unfetch');

module.exports = {
  'exportPathMap': async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    let postConfig = {
      '/': {'page': '/'}
    };

    data.forEach(obj => {
      const { show } = obj;

      postConfig[`/p/${show.id}`] = {
        'page': '/post',
        'query': {
          'id': show.id
        }
      };
    });

    console.log(postConfig)

    return postConfig;
  }
}
