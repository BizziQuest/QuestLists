const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

const vuetify = require('./loaders/vuetify')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)

// environment.config.merge(vuetify)
// environment.config.merge({ devtool: 'none' })
//environment.plugins.prepend('VuetifyLoaderPlugin', new VuetifyLoaderPlugin())
environment.loaders.prepend('vuetify', vuetify)


module.exports = environment
