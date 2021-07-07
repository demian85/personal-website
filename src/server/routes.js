import { Router } from 'express';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from '../client/components/App';

const router = Router();

router.get('/*', (req, res) => {
  const context = {};

  const app = createElement(
    StaticRouter,
    { location: req.url, context },
    createElement(App),
  );
  const html = renderToString(app);

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
    googleAnalyticsCode: process.env.NODE_ENV === 'production' ? googleAnalyticsCode : '',
  });
});

export default router;
