var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var sass = require('metalsmith-sass');

Metalsmith(__dirname)
  .metadata({
    title: 'Lowbot - First prototype presentation',
    description: "Description",
    generator: "Metalsmith",
    // Contact details
    telephone: "",
    email: "",
    address: "",
    url: ""
  })
  .source('./src')
  .destination('./web')
  .clean(false)
  .use(markdown())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(sass({
    outputStyle: "expanded",
    outputDir: 'css/'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
