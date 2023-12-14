const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set(
      'vue$',
      // Если используется только рантайм сборка
      path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
      // Или при использовании полной сборки Vue (рантайм + компилятор)
      // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
    )
  }
}