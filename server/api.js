
import { Router } from "express";
import { Connection } from "./db";
const bodyParser = require("body-parser");
const router = new Router();


router.use(bodyParser.json());


var cors = require("cors");
router.use(cors());
//create new blog
router.post("/AddBlog", function(req, res)  {
	const newTitle = req.body.title;
	const newSubTitle = req.body.sub_title;
	const mainContent = req.body.main_content;
	const userId = req.body.user_id;
	const createOnDate = req.body.create_on_date;
	//checking if the user is existed in our github table
	const query="insert into blog_article (title, sub_title, main_content,user_id,create_on_date) values ($1,$2,$3,$4,$5)"
	Connection.query(query, [newTitle, newSubTitle, mainContent, userId, createOnDate]).
		then(() => res.send("blog created")).
		catch((e) => console.error(e));
	
});

//get all the blog existing blog
router.get("/GetAllBlogs", function (req, res) {
  Connection
    .query("SELECT * FROM blog_article ORDER BY title")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

//get specific blog by an id
router.get("/GetAllBlogs/:id", function (req, res) {
  const BlogId = req.params.id;

  Connection
    .query("SELECT * FROM blog_article WHERE id=$1", [BlogId])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});



router.get("/", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		res.json({ message: "Hello, world!" });
	});
});






export default router;
