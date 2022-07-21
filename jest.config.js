// jest.config.js

module.exports = {
    testRegex: 'resources/assets/js/tests/.*.spec.js$',
    moduleFileExtensions: [
        'js',
        'json',
        'vue',
        'jsx'
    ],
    'transform': {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '@vue/vue3-jest',
    },
    testEnvironment: 'jsdom',
}
