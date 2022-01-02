var controllers: any = require(global.PATH + "/controllers/index");

module.exports = (router: any): void => {
  router.get("/findLatest", controllers.pi.findLatest); // Find the latest pi value
  router.get("/calculateLatest", controllers.pi.calculateLatest); // Calculate new value with more accurancy
  router.post("/reset", controllers.pi.reset); // Reset pi to initial value
};
