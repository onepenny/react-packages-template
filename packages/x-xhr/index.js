import flyio from 'flyio';

export default (type, url, param = {}) => {
  let config = {
    method: type,
    headers: {
      // Authorization: Store.get(Vue.prototype.$G.store.token) || ''
      // Uid: 2
    }
  };
  console.log('test x-xhr update 4')
  return new Promise((resolve, reject) => {
    return flyio.request('/a')
        .then(() => {
          resolve('bb');
        })

  });
};
