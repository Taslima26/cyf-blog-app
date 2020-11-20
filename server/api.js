
import { Router } from "express";
import { Connection } from "./db";
const bodyParser = require("body-parser");
const router = new Router();


router.use(bodyParser.json());


var cors = require("cors");
router.use(cors());

router.get("/", (req, res) => {
	res.send("suceessfull");
})

router.get("/", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		res.json({ message: "Hello, world!" });
	});
});






export default router;
