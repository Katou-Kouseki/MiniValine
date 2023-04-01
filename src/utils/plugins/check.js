const check = {
  mail (m) {
    return {
      k: /^[A-Za-z0-9\u4e00-\u9fa5\_-]+(\.[A-Za-z0-9\u4e00-\u9fa5\_-]+){0,2}@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/.test(e),
      v: m
    }
  },
  link (l) {
    if (l.length > 0) {
      l = /^(http|https)/.test(l) ? l : `http://${l}`
    }
    return {
      k:
        l.length > 0
          ? /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/.test(
            l
          )
          : true,
      v: l
    }
  }
}
module.exports = check
