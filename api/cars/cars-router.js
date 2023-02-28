// HOKUS POKUS
const router = require("express").Router();
const mw = require("./cars-middleware");
const carsModel = require("./cars-model");

router.get("/", async (req, res, next) => {
  try {
    const allData = await carsModel.getAll();
    res.json(allData);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", mw.checkCarId, async (req, res, next) => {
  try {
    res.json(req.car);
  } catch (error) {
    next();
  }
});

router.post(
  "/",
  mw.checkCarPayload,
  mw.checkVinNumberValid,
  mw.checkVinNumberUnique,
  async (req, res, next) => {
    try {
      let insertedData = await carsModel.create(req.body);
      res.json(insertedData);
    } catch (error) {
      next(error);
    }
  }
);

router.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ customMessage: "Hata oluştu...", message: error.message });
});
module.exports = router;
