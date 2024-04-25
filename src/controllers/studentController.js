const connection = require("../models/connection");

exports.getAllStudents = (req, res) => {
  // Implementation for getting all students
  const sql = "SELECT * FROM std_tbl";
  connection.query(sql, (err, result) => {
      if (err) {
          return res.json({ Message: "Error inside Server" });
      } else {
          return res.json(result);
      }
  });
};

exports.createStudent = (req, res) => {
  // Implementation for creating a new student
  const sql = "INSERT INTO std_tbl (Name, RoolNo) VALUES (?, ?)";
  const values = [req.body.Name, req.body.RoolNo];

  connection.query(sql, values, (err, result) => {
      if (err) {
          return res.json({ Message: "Error inside Server" });
      } else {
          return res.json(result);
      }
  });
};

exports.getSingleStudent = (req, res) => {
  // Implementation for getting a single student
  const sql = "SELECT * FROM std_tbl WHERE id=?";
  const id = req.params.id;
  connection.query(sql, [id], (err, result) => {
      if (err) {
          return res.json({ Message: "Error inside Server" });
      } else {
          return res.json(result);
      }
  });

};

exports.updateStudent = (req, res) => {
  // Implementation for updating a student
  const sql = "UPDATE std_tbl SET `Name`=?,`RoolNo`=?  WHERE id=?";
  const id = req.params.id;
  connection.query(sql, [req.body.Name, req.body.RoolNo, id], (err, result) => {
      if (err) {
          return res.json({ Message: "Error inside Server" });
      } else {
          return res.json(result);
      }
  });
};

exports.deleteStudent = (req, res) => {
  // Implementation for deleting a student
  const sql = "DELETE FROM std_tbl WHERE id=?";
  const id = req.params.id;
  connection.query(sql, [id], (err, result) => {
      if (err) {
          return res.json({ Message: "Error inside Server" });
      } else {
          return res.json(result);
      }
  });
};


