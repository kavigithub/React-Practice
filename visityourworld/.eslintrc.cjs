module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": "warn",   
    "no-unused-vars": "warn",   
    "react/prop-types": "off", 
  },
}

/* 
https://www.youtube.com/watch?v=tqJAT0iB0NA
clarity

find your purpose
Don't lose your morals and ethics
Build a better world
respect your nature
change is the only constant
Fear : False evidence appearing real

Perspective: Knowledge
Perception: Aapki samjhane ki ability
Practice...Practice...: specific task ko bar bar accurate karne ki tayari
Progress: 
I want clarity in my life
I want Krishna in my life
I am ready for change
Deva je majha hatat aahe te badlnyachi mala shakti de
Je majha hatat nahi te swikar karnyachi mala buddhi de
Ani hya doghan madhla farak mala kalawa evdi buddhi mala de

A miracle isn't when your problems miraculosly disappear.
A miracle is when you get all the tools to make your problems disappear.

When you need guidence asked Shri krishna's saath

You are not unique
your problems are not unique
solutions are not unique

Mi majha ayushat navin raang bhrayla tayaar aahe.

Shri Krishn will save my life too. */



