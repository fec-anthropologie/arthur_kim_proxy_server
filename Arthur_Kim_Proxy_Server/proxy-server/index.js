const express = require('express');
const app = express();
const port = 5000;

const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// app.get('/product-detail', 

//send bundles and send styles as data



app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.static(path.join(__dirname, '../../emily_yang_navigation_bar/client/dist')))
// app.use(express.static(path.join(__dirname, '../../emily_yang_navigation_bar/client/dist/style.css')))
// app.use(express.static(path.join(__dirname, '../../emily_yang_navigation_bar/client/dist/styleSearch.css')))
app.use(express.static(path.join(__dirname, '../../Arthur_Kim_Product_Detail_Component/client/dist')))


// console.log('joined', path.join(__dirname, '../../emily_yang_navigation_bar/client/dist'))

//based on axios get request, I will listen to a port end point and send of that req on to other place
app.get('/search', (req, res) => {
  res.redirect('http://localhost:3000/search')
})

// app.enable('trust proxy');
// app.use((req, res, next) => {
//     if (req.secure) {
//         next();
//     } else {
//         res.redirect('https://' + req.headers.host + req.url);
//     }
// });

app.get('/productdetails/:id', (req, res) => {
  let { id } = req.params;
  res.redirect(`http://localhost:4000/api/products/${id}`)
  
    // res.send('hello world!', stuff)
  // var promise1 = new Promise(function(resolve, reject){
  //   resolve(res.redirect(`http://localhost:4000/api/products/${id}`))
  // })
  // promise1.then((value) => {
  //   console.log('what is value', value)
  // })
  // console.log('what is data', stuff)
})


// app.use('localhost:3000', (req, res) => {
//   res.send('3000 baby!')
// })
// app.use('localhost:4000', (req, res) => {
//   res.send('4000 baby!')
// })
// app.use('localhost:3003', (req, res) => {
//   res.send('3003 baby!')
// })
// app.set('trust proxy', 5000)
// app.set('trust proxy', 'localhost:3003')

app.get('/', (req, res) => {
  console.log('what is req', req)
  res.send('get working!')
})

app.listen(port, () => console.log(`Main app listening on port ${port}!`))