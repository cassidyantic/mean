const express = require ('express');
const { stringify } = require('querystring');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {id: 'fad1232142', title: 'first server side post', content: 'this is coming from the server'}
    {id: 'faddsgdsg', title: 'first server side post', content: 'this is coming from the server'}
    {id: 'fad124346435322', title: 'second server side post', content: 'this is coming from the server'}
  ];
  res.json({
    message: 'posts fetched successfully',
    posts: posts
  });
});


module.exports = app;
