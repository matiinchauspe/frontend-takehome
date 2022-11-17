module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2)$': 'identity-obj-proxy',
    // aliases
    '^@api$': '<rootDir>/src/api',
    '^@assets$': '<rootDir>/src/assets',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@context$': '<rootDir>/src/context',
    '^@components$': '<rootDir>/src/components',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages$': '<rootDir>/src/pages',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@routes$': '<rootDir>/src/routes',
    '^@services$': '<rootDir>/src/services',
    '^@utils$': '<rootDir>/src/utils',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@hooks$': '<rootDir>/src/hooks',
    '^@constants$': '<rootDir>/src/constants',
  },
  transformIgnorePatterns: ['/node_modules/(?!(somePkg)|react-dnd|dnd-core|@react-dnd)'],
};
