
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['4yqdjzMjE5sWpsTgkVCsZw'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  