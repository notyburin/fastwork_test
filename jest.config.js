module.exports = {
  testEnvironmentOptions: {
    // only string values is supported??
    beforeParse (window) {
      window.document.childNodes.length === 0;
      window.alert = (msg) => { console.log(msg); };
      window.matchMedia = () => ({});
      window.scrollTo = () => { };
    }
  },
};
