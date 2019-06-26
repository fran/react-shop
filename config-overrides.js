module.exports = function override(config, env) {

  config.externals = {
    "react": "React",
    "react-dom": "ReactDOM"
  };

  return config;
}
