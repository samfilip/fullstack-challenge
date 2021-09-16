/**
 * 
 * @param {string} text
 * @returns {string} 
 */

function camelize(text) {
  // converts text to camelCase and removes_ /# from strings
  text = text.toLowerCase().replace(/[-_/#\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : ``)
  return text.substr(0, 1).toLowerCase() + text.substr(1)
}

/**
 * 
 * @param {array of objects} searchResult 
 * @returns {array of objects}
 */

function formatKeys(searchResult) {
  const response = []

  searchResult.forEach((el) => {
    const home = {}
    for (let key in el) {
      home[camelize(key)] = el[key]
    }
    response.push(home)
  })

  return response
}

module.exports = { formatKeys }