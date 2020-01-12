module.exports = {
  pages: {
    sender: {
      entry: 'src/sender.js',
      template: 'public/sender.html',
      filename: 'index.html',
      title: 'Family Bingo',
    },
    receiver: {
      entry: 'src/receiver.js',
      template: 'public/receiver.html',
      filename: 'receiver.html',
      title: 'Family Bingo (Chromecast)',
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
