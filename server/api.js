import {Router} from 'express';
const express = require ('express');
const config = require ('./config');
import {Connection} from './db';
const bodyParser = require ('body-parser');
//const router = new Router();
const router = express ();
router.use (express.json ());
var cors = require ('cors');
router.use (cors ());
var moment = require ('moment'); // require
moment ().format ();
const FormData = require ('form-data');
const fetch = require ('node-fetch');
router.use (bodyParser.json ({type: 'text/*'}));
router.use (bodyParser.urlencoded ({extended: false}));
import { AuthorizationCode } from 'simple-oauth2';
const { client_id, redirect_uri, client_secret } = require('./config');
const {Octokit} = require ('@octokit/core');

//get latest 10 articles
router.get ('/getlatest', function (req, res) {
  Connection.query (
    'SELECT * FROM blog_article ORDER BY create_on_date limit 10'
  )
    .then (result => res.json (result.rows))
    .catch (e => console.error (e));
});

// router.get('/getall', async (req, res) => {
//   try {
//     const result = await Connection.query(
//       'SELECT * FROM blog_article ORDER BY create_on_date '
//     );
//     res.status(200).json({
//       status: 'success',
//       data: {
//         blogs: result.rows,
//       },
//     });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// });

router.get ('/getall', async (req, res) => {
  try {
    const blogRatingsData = await Connection.query (
      'select * from blog_article left join (select article_id, COUNT(*), TRUNC(AVG(no_of_likes),0) as average_rating from blog_review group by article_id) blog_review on blog_article.id = blog_review.article_id;'
    );
    res.status (200).json ({
      status: 'success',
      data: {
        blogs: blogRatingsData.rows,
      },
    });
    console.log (blogRatingsData);
  } catch (err) {
    console.log (err);
  }
});

router.get ('/gettopten', async (req, res) => {
  try {
    const blogRatingsData = await Connection.query (
      'select * from blog_article left join (select article_id, COUNT(*), TRUNC(AVG(no_of_likes),0) as average_rating from blog_review group by article_id) blog_review on blog_article.id = blog_review.article_id order by average_rating desc limit 10;'
    );
    res.status (200).json ({
      status: 'success',
      data: {
        blogs: blogRatingsData.rows,
      },
    });
  } catch (err) {
    console.log (err);
  }
});

router.post ('/addblog', async (req, res) => {
  try {
    var d = new Date ();
    let todaysDate = d.toLocaleString ();
    console.log (todaysDate);
    const results = await Connection.query (
      'Insert into blog_article(title,sub_title,main_content,create_on_date) values ($1,$2,$3,$4) returning *',
      [req.body.title, req.body.sub_title, req.body.main_content, todaysDate]
    );
    console.log (results);
    res.status (201).json ({
      status: 'sucess',
      data: {
        blog: results.rows[0],
      },
    });
  } catch (err) {
    console.log (err);
  }
});

router.get ('/getblog/:id', async (req, res) => {
  try {
    const result = await Connection.query (
      'select * from blog_article  where id = $1',
      [req.params.id]
    );
    const reviews = await Connection.query (
      'select * from blog_review where article_id=$1',
      [req.params.id]
    );
    res.status (200).json ({
      status: 'success',
      data: {
        blog: result.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.log (err);
  }
});

router.put ('/updateblog/:id', async (req, res) => {
  try {
    const results = await Connection.query (
      'UPDATE blog_article SET title = $1, sub_title = $2, main_content = $3 where id = $4 returning *',
      [req.body.title, req.body.sub_title, req.body.main_content, req.params.id]
    );

    res.status (200).json ({
      status: 'success',
      data: {
        blogs: results.rows[0],
      },
    });
    console.log (req.body);
  } catch (err) {
    console.log (err);
  }
  console.log (req.params.id);
  console.log (req.body);
});

router.delete ('/deleteblog/:id', function (req, res) {
  const id = req.params.id;

  Connection.query ('DELETE FROM blog_article WHERE id=$1', [id])
    .then (() => res.send (`Blog ${id} deleted!`))
    .catch (e => console.error (e));
});

router.post ('/getblog/:article_id/addReview', async (req, res) => {
  try {
    const newReview = await Connection.query (
      'INSERT INTO blog_review (article_id, github_id, no_of_likes, reviewer_name,reviewer_comment) values ($1, $2, $3, $4,$5) returning *;',
      [
        req.params.article_id,
        req.body.githubId,
        req.body.noOfLikes,
        req.body.reviewerName,
        req.body.reviewerComment,
      ]
    );
    console.log (newReview);
    res.status (201).json ({
      status: 'success',
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log (err);
  }
});



// const client = new AuthorizationCode({
//   client: {
//     //these would come from the github where the app is registered.
//     id: process.env.CLIENT_ID,
//     secret: process.env.CLIENT_SECRET,
//   },
//   auth: {
//     tokenHost: 'https://github.com',
//     tokenPath: '/login/oauth/access_token',
//     authorizePath: '/login/oauth/authorize',
//   },
// });

// const authorizationUri = client.authorizeURL({
//   //we can put in the redirect_uri when we deploy the app
//   redirect_uri: `http://localhost:3000/login`,
//   scope: 'user',
//   // expires_in: '30' something to look into later
//   // state: '3(#0/!~',
// });

// router.get('/login', (req, res) => {
//   res.redirect(authorizationUri);
// });

// // Callback service parsing the authorization token and asking for the access token
// router.get('/callback', async (req, res) => {
//    const { code } = req.query;

//   const options = {
//     code,
//   };

//   try {
//     const accessToken = await client.getToken(options);
//     //accessing the token number from the above
//     const token = accessToken.token.access_token;

//     //authenticates the access_token sent by github during the Oauth2 flow
//     const octokit = new Octokit({
//       auth: token,
//     });

//     //this returns the authenticated user's username/login
//     const { data } = await octokit.request('/user');

//     return res.status(200).json(data);
//   } catch (error) {
//     return res.status(500).json('Authentication failed');
//   }
// });

router.post('/authenticate', (req, res) => {
  const { code } = req.body;
  
  // console.log(code);

  const data = new FormData();
  data.append('client_id', client_id);
  data.append('client_secret', client_secret);
  data.append('code', code);
  data.append('redirect_uri', redirect_uri);

  // Request to exchange code for an access token
  fetch(`https://github.com/login/oauth/access_token`, {
    method: 'POST',
    body: data,
  })
    .then((response) => response.text())
    .then((paramsString) => {
      let params = new URLSearchParams(paramsString);
      const access_token = params.get('access_token');

      // Request to return data of a user that has been authenticated
      return fetch(`https://api.github.com/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      });
    })
    .then((response) => response.json())
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
});

router.get ('/', (_, res, next) => {
  Connection.connect (err => {
    if (err) {
      return next (err);
    }
    res.json ({message: 'Hello, world!'});
  });
});

export default router;
