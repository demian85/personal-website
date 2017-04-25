const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router');
const App = require('../ServerApp').default;

const router = express.Router();

router.get('/*', function (req, res) {
  const context = {};
  const app = React.createElement(
    StaticRouter,
    { location: req.url, context },
    React.createElement(App)
  );
  const html = ReactDOMServer.renderToString(app);
  const googleAnalyticsCode = `
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', '${process.env.GA_CODE}', 'auto');
  ga('send', 'pageview');

</script>
`;
  res.render('index', {
    html,
    googleAnalyticsCode: process.env.NODE_ENV === 'production' ? googleAnalyticsCode : ''
  });
});

module.exports = router;
