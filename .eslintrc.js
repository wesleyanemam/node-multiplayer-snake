module.exports = {
    'extends': 'airbnb',
    'env': {
        'mocha': true
    },
    'globals': { 'define': true },
    'rules': {
        // Override any settings from the 'parent' configuration
        'indent': [2, 4, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
        'max-len': [2, 130, 2, {
            'ignoreUrls': true,
            'ignoreComments': false
        }],
        'no-console': 0,
        'spaced-comment': [2, 'always', { 'exceptions': ['*'] }],
        'strict': 0
    }
};