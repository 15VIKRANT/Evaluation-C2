const express=require("express");

const app=express();

const User=require("./models/user.mod");

const  Comment=require("./models/comment.mod");

const Book=require("./models/book.mod");

const Publication=require("./models/publication.mod");


// users CRUD
app.post("/users", async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
app.get("/users", async (req, res) => {
    try {
      const user = await User.find()
        .lean()
        .exec();
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.post("/books", async (req, res) => {
    try {
      const book = await Book.create(req.body);
  
      return res.status(201).send(book);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.get("/books", async (req, res) => {
    try {
      const book = await Book.find()
      .populate({
        path:"userId",
        select:{firstName:1,_id:0}
      })
      .lean().exec();
  
      return res.status(200).send(book);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  app.post("/comment", async (req, res) => {
    try {
      const comment = await Comment.create(req.body);
  
      return res.status(201).send(comment);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  app.get("/comment", async (req, res) => {
    try {
      const comment = await Comment.find()
      .populate({
        path:"userId",
        select:{firstName:1,_id:0}
      })
      .lean().exec();
  
      return res.status(200).send(comment);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.post("/publication", async (req, res) => {
    try {
      const publication= await Publication.create(req.body);
  
      return res.status(201).send(publication);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.get("/publication", async (req, res) => {
    try {
      const publication = await Publication.find()
      .lean().exec();
  
      return res.status(200).send(publication);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.listen(3000, async () => {
    try {
      await connect(); 
      console.log("listening on port 5000");   } 
      catch (err) {
      console.log(err);
    }
  
    
  });


