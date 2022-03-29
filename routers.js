const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");

let users = [];

// endpoint for landing page
router.get("/", (req, res) => {
  res.send("Hello world");
});

// endpoint for show all users
router.get("/users", (req, res) => {
  res.send(users);
});

// endpoint for add user with method post
router.post("/users", (req, res) => {
  const user = req.body;
  try {
    users.push({ ...user, id: uuidv4() });
    res.json({
      status: 201,
      message: `Add user with name ${user.firstname} success added to database`,
    });
  } catch (error) {
    res.json({
      status: 401,
      message: "failed to add user",
      error: error,
    });
  }
});

// endpoint for show detail user
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const userDetail = users.find((user) => user.id === id);
  if (userDetail) {
    res.json({
      status: 200,
      message: "success",
      user: userDetail,
    });
  } else {
    res.json({
      status: 400,
      message: "failed to show detail user",
    });
  }
});

// endpoint for delete user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  try {
    res.json({
      status: 200,
      messange: "data user deleted",
    });
  } catch (error) {
    res.json({
      status: 400,
      message: "failed to delete user",
    });
  }
});

module.exports = router;
