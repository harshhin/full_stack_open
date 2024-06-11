import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

const mock = [
  {
    id: 1,
    name: "Harsh",
    gender: "male",
  },
  {
    id: 2,
    name: "Soniya",
    gender: "Female",
  },
  {
    id: 3,
    name: "Dhoni",
    gender: "Others",
  },
];

app.get("/", (req, res) => {
  res.status(201).send({ msg: "Hello World!" });
});

app.get("/users", (req, res) => {
  console.log(req.query);
  const { filter, value } = req.query;
  if (!filter && !value) return res.send(mock);
  if (filter && value) {
    const filteredUsers = mock.filter(
      (user) => user[filter] && user[filter].toString().includes(value)
    );
    return res.send(filteredUsers);
  }
  return res
    .status(400)
    .send({ msg: "Filter and value are required together" });
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const parseid = parseInt(req.params.id);
  console.log(parseid);
  if (isNaN(parseid)) {
    return res.status(400).send({ msg: "Invalid ID" });
  }
  const findUser = mock.find((user) => user.id === parseid);
  if (!findUser) {
    return res.status(404).send({ msg: "User not found" });
  }
  return res.send(findUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
