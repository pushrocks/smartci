import plugins = require('./smartci.plugins');

export let isCi = function(): boolean {
  if (process.env.CI == 'true') {
    return true;
  } else {
    return false;
  }
};

export let isTaggedCommit = () => {
  return typeof process.env.CI_BUILD_TAG != 'undefined';
};
