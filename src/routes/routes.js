const express = require("express");
const router = express.Router();
const user = require("../models/user.js");
const book = require("../models/book.js");
const author = require("../models/authorBook.js");
const employee = require("../models/employee.js");

router.get("/employeeTable/", async (req, res) => {
  const employeeTable = await employee.find();
  res.json(employeeTable);
});

router.get("/employeeTable/:id", async (req, res) => {
   const employeeFind = await employee.findById(req.params.id)
    res.json(employeeFind);
  });


router.get("/authorAdmin/", async (req, res) => {
  const authorAdmin = await author.find()
  res.json(authorAdmin);
});

router.get("/authorAdmin/:id", async (req, res) => {
   const authorFind = await author.findById(req.params.id)
    res.json(authorFind);
  });

router.post("/authorAdmin/", async (req, res) => {
  const { cedula, nombre, nacionalidad } = req.body;
  const authorAdd = new author({ cedula, nombre, nacionalidad });
  await authorAdd.save();
  res.json({ status: "author saved" });
});

router.put("/authorAdmin/:id", async (req, res) => {
  const { cedula, nombre, nacionalidad } = req.body;
  const authorUpdate = { cedula, nombre, nacionalidad };
  await author.findByIdAndUpdate(req.params.id, authorUpdate)
  res.json({ status: "author Update" });
});

router.delete("/authorAdmin/:id", async (req, res) => {
    await author.findByIdAndRemove(req.params.id)
    res.json({ status: "author deleted" });
  });


router.get("/bookAdmin/", async (req, res) => {
  const bookAdmin = await book.find();
  res.json(bookAdmin);
});

router.get("/bookAdmin/:id", async (req, res) => {
   const bookFind = await book.findById(req.params.id)
    res.json(bookFind);
  });

router.post("/bookAdmin/", async (req, res) => {
  const { nombre, isbn, editorial, publicacion, autor } = req.body;
  const bookAdd = new book({ nombre, isbn, editorial, publicacion, autor });
  await bookAdd.save();
  res.json({ status: "book saved" });
});

router.put("/bookAdmin/:id", async (req, res) => {
  const { nombre, isbn, editorial, publicacion, autor } = req.body;
  const bookUpdate = { nombre, isbn, editorial, publicacion, autor };
  await book.findByIdAndUpdate(req.params.id, bookUpdate)
  res.json({ status: "book Update" });
});

router.delete("/bookAdmin/:id", async (req, res) => {
    await book.findByIdAndRemove(req.params.id)
    res.json({ status: "book deleted" });
  });


router.get("/userAdmin/", async (req, res) => {
  const userAdmin = await user.find();
  res.json(userAdmin);
});

router.get("/userAdmin/:id", async (req, res) => {
   const userFind = await user.findById(req.params.id)
    res.json(userFind);
  });

router.post("/userAdmin/", async (req, res) => {
  const { nombre_user, contraseña, tipo } = req.body;
  const userAdd = new user({ nombre_user, contraseña, tipo });
  await userAdd.save();
  res.json({ status: "user saved" });
});

router.put("/userAdmin/:id", async (req, res) => {
  const { nombre_user, contraseña, tipo } = req.body;
  const userUpdate = { nombre_user, contraseña, tipo };
  await user.findByIdAndUpdate(req.params.id, userUpdate)
  res.json({ status: "user Update" });
});

router.delete("/userAdmin/:id", async (req, res) => {
    await user.findByIdAndRemove(req.params.id)
    res.json({ status: "user deleted" });
  });

module.exports = router;
