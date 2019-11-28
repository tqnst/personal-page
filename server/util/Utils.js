
module.exports = {

  isValidCookie : function (req, res, config) {
    let ssoCookie = this.parseSSOCookie(req.cookies, config);
    let domain = config.domain;
    return (ssoCookie.userId && config.allow_domains.indexOf(ssoCookie.domainId) > -1);
  },

  parseSSOCookie : function(cookies, config) {
    try {
      let crypto = require('crypto');
      let crypted = cookies[config.konnect_sso_cookie_name];
      let hash = crypto.createHash('md5');
      hash.update(config.konnect_sso_cookie_secret, 'utf8');
      let key = hash.digest();
      let ive = Buffer.alloc(16);
      let decipher = crypto.createDecipheriv('aes-128-cbc', key, ive);
      let dec = decipher.update(crypted, 'base64', 'utf8');
      dec += decipher.final('utf8');
      return JSON.parse(dec);
    } catch (e) {
      return {};
    }
  },

  sendResponse: function(res, responseData) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200);
    res.send(JSON.stringify(responseData));
  },

}