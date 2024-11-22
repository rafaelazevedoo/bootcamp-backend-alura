
import express from "express";
import routes from "./src/config/routes/postsroutes.js";


const app = express();
routes(app)

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor do Rafael...");
});





// function buscarPostPorId(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id)

//     });
// }


// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorId(req.params.id)
//     res.status(200).json(posts[index]);
// });