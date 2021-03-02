const { Workout } = require("../../models");
const router = require(express).Router();


router.get("/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            console.log("data", dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/workouts/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;

    Workout.findOneAndUpdate({ _id: id }, { $push: { exercises: body } })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

router.post("/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

router.get("/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

module.exports = router;