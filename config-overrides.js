const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: 
    {
        "@brand-primary": "#194052",
        "@brand-primary-tap":"#A2B5CD" },
  }),
);