module.exports = {
  calculateLatest: async (req: any, res: any): Promise<any> => {
    try {
      let newDigit: number = 0;
      let latestPi: any = await global.DAO.pi.findLatest();
      if (latestPi[0]) {
        if (latestPi[0].pi.split(".")[1]) {
          newDigit = latestPi[0].pi.split(".")[1].length + 1;
        } else {
          newDigit += 1;
        }
      }

      let newPi: any = new global.MODEL.PiValue({
        pi: global.HELPER.calculatePi(newDigit),
      });
      let result: any = await global.DAO.pi.addNew(newPi);
      return global.RESPONSE.successResponse(res, 200, 20002, {
        _id: result._id,
        pi: result.pi,
      });
    } catch (error) {
      return global.RESPONSE.errorResponse(res, 400, 40000, error);
    }
  },
  reset: async (req: any, res: any): Promise<any> => {
    try {
      await global.DAO.pi.removeAll();
      let newPi: any = new global.MODEL.PiValue({
        pi: global.HELPER.calculatePi(0),
      });
      let result: any = await global.DAO.pi.addNew(newPi);

      return global.RESPONSE.successResponse(res, 200, 20003, {
        _id: result._id,
        pi: result.pi,
      });
    } catch (error) {
      return global.RESPONSE.errorResponse(res, 400, 40000, error);
    }
  },
  findLatest: async (req: any, res: any): Promise<any> => {
    try {
      let result: any = await global.DAO.pi.findLatest();
      console.log(result.toString());
      return global.RESPONSE.successResponse(res, 200, 20000, {
        _id: result[0]._id,
        pi: result[0].pi,
      });
    } catch (error) {
      return global.RESPONSE.errorResponse(res, 400, 40000, error);
    }
  },
};
