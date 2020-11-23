
import { Router } from "express";
import { Connection } from "./db";
const bodyParser = require("body-parser");
const router = new Router();


router.use(bodyParser.json());


var cors = require("cors");
router.use(cors());
//get latest 10 articles
router.get("/getlatest", function (req, res) {
  Connection
    .query("SELECT * FROM blog_article ORDER BY create_on_date limit 10")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});
//show all articles
router.get("/getall", function (req, res) {
  Connection
    .query("SELECT * FROM blog_article ORDER BY create_on_date")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});
//get top 10 articles
router.get("/gettop", function (req, res) {
  Connection
    .query("select ba.*, (select count(1) from blog_review br where br.article_id=ba.id) as Num_Likes from blog_article ba order by Num_likes limit 10"
)
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

//create new blog
router.post("/addblog", function(req, res)  {
	const newTitle = req.body.title;
	const newSubTitle = req.body.sub_title;
	const mainContent = req.body.main_content;
	const userId = req.body.user_id;
	
	//checking if the user is existed in our github table
	const query="insert into blog_article (title, sub_title, main_content,user_id,create_on_date) values ($1,$2,$3,$4,current_date)"
	Connection.query(query, [newTitle, newSubTitle, mainContent, userId]).
		then(() => res.send("blog created")).
		catch((e) => console.error(e));
	
});


//get specific blog by an id
router.get("/getblog/:id", function (req, res) {
  const BlogId = req.params.id;

  Connection
    .query("SELECT * FROM blog_article WHERE id=$1", [BlogId])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

//update blogs
// router.put("/updateblog/:id", function (req, res) {
// 	const id = req.body.params;
// 	const newTitle = req.body.title;
// 	const newSubTitle = req.body.sub_title;
// 	const mainContent = req.body.main_content;
// 	//user shouldn't update userId
	
// 	//checking if the user is existed in our github table
// 	const query="update blog_article set title= $1, sub_title=$2, main_content =$3 where id=$4"
// 	Connection.query(query, [newTitle, newSubTitle, mainContent]).
// 		then(() => res.send("blog updated")).
// 		catch((e) => console.error(e));
	
// });

router.put("/updateblog/:id", function (req, res) {
  const id = req.params.id;
	
		const newTitle = req.body.title;
		const newSubTitle = req.body.sub_title;
	 	const newMainContent = req.body.main_content;


  Connection
    .query("UPDATE blog_article SET title=$1 ,sub_title=$2,main_content=$3 WHERE id=$4", [newTitle,newSubTitle,newMainContent,id])
    .then(() => res.send(`Customer ${id} updated!`))
    .catch((e) => console.error(e));
});


router.delete("/deleteblog/:id", function (req, res) {
  const id = req.params.id;

  Connection
    .query("DELETE FROM blog_article WHERE id=$1", [id])
    .then(() => res.send(`Blog ${id} deleted!`))
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
