module.exports = {
  addNew: async (newPi: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        newPi.save((err: any, result: any) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      } catch (error: any) {
        reject(error);
      }
    });
  },

  removeAll: async (): Promise<any> => {
    return new Promise((resolve, reject) => {
      global.MODEL.PiValue.remove({}, (err: any, result: any) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },

  findLatest: async (): Promise<any> => {
    return new Promise((resolve, reject) => {
      global.MODEL.PiValue.find({})
        .sort({ $natural: -1 })
        .limit(1)
        .exec((err: any, result: any) => {
          if (err) {
            reject(err);
          }
          resolve(JSON.parse(JSON.stringify(result)));
        });
    });
  },
};
