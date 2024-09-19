// eslint-disable-next-line no-undef
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',

        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'eslint:recommended',
        'prettier'
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        }
    },
    rules: {
        'import/no-named-as-default': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'max-len': ['error', { code: 140, ignoreUrls: true }],
        'react/prop-types': 'off',
        'react/jsx-boolean-value': 'off',
        'react/jsx-no-bind': 'off',
        'no-shadow': 'off',
        'react/display-name': 'off',
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    {
                        message:
                            'Private imports are prohibited, use public imports instead',
                        group: ['@/app/**']
                    },
                    {
                        message:
                            'Private imports are prohibited, use public imports instead',
                        group: ['@/processes/*/**']
                    },
                    {
                        message:
                            'Private imports are prohibited, use public imports instead',
                        group: ['@/pages/*/**']
                    },
                    {
                        message:
                            'Private imports are prohibited, use public imports instead',
                        group: ['@/widgets/*/**']
                    },
                    {
                        message:
                            'Private imports are prohibited, use public imports instead',
                        group: ['@/features/*/**']
                    },
                    {
                        message:
                            'Private imports are prohibited, use public imports instead',
                        group: ['@/entities/*/**']
                    },
                    {
                        message:
                            'Private imports are prohibited, use public imports instead',
                        group: ['@/shared/*/*/**']
                    },
                    {
                        message:
                            'Prefer absolute imports instead of relatives (for root modules)',
                        group: ['../**/app']
                    },
                    {
                        message:
                            'Prefer absolute imports instead of relatives (for root modules)',
                        group: ['../**/processes']
                    },
                    {
                        message:
                            'Prefer absolute imports instead of relatives (for root modules)',
                        group: ['../**/pages']
                    },
                    {
                        message:
                            'Prefer absolute imports instead of relatives (for root modules)',
                        group: ['../**/widgets']
                    },
                    {
                        message:
                            'Prefer absolute imports instead of relatives (for root modules)',
                        group: ['../**/features']
                    },
                    {
                        message:
                            'Prefer absolute imports instead of relatives (for root modules)',
                        group: ['../**/entities']
                    },
                    {
                        message:
                            'Prefer absolute imports instead of relatives (for root modules)',
                        group: ['../**/shared']
                    }
                ]
            }
        ]
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-undef': 'off'
            }
        },
        {
            files: ['*d.ts'],
            rules: {
                'no-unused-vars': 'off'
            }
        }
    ]
};
