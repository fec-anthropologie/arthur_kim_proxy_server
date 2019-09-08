const express = require('express');
const app = express();
const Axios = require('axios');
const port = 3000;

const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use(express.static(path.join(__dirname, '../../emily_yang_navigation_bar/client/dist')))
// // app.use(express.static(path.join(__dirname, '../../emily_yang_navigation_bar/client/dist/style.css')))
// // app.use(express.static(path.join(__dirname, '../../emily_yang_navigation_bar/client/dist/styleSearch.css')))
// app.use(express.static(path.join(__dirname, '../../Arthur_Kim_Product_Detail_Component/client/dist')))
// app.use(express.static(path.join(__dirname, '../../ji_kim_reviews_and_ratings/client/dist')))

app.get('/search', (req, res) => {
  Axios
    .get('http://localhost:3001/search')
    .then(({ data }) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
})

app.get('/api/products/:id', (req, res) => {
  let { id } = req.params;
  Axios
    .get(`http://localhost:3002/api/products/${id}`)
    .then(({ data }) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
})

// app.use('/', function(req, res) {
//   // console.log(`req.url: ${req.url}`)
//   var apiServerHost = `http://localhost:3003`
//   var url = apiServerHost + req.url;
//   console.log(`url:${url}`)
//   req.pipe(request(url)).pipe(res);
//  });

app.get('/api/getAll', (req, res) => {
  Axios
    .get('http://localhost:3003/api/getAll')
    .then(({ data }) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
})

app.get('/api/getOne/:id', (req, res) => {
  let { id } = req.params;
  Axios
    .get(`http://localhost:3003/api/getOne/${id}`)
    .then(({ data }) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })  
})

app.listen(port, () => console.log(`Main app listening on port ${port}!`))