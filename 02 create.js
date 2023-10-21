db.faculty.insertOne({
    name : "Amjad",
    Designation : "Tutor/Instructor"
})

db.faculty.insertMany(
[{
    name : "Ayyaz",
    Designation : "Tutor/Instructor",
    Department : "Computer Science",
    course : "Introduction to Programming"
},
{
    name : "Arif",
    Designation : "Lecturer",
    Department : "Computer Science",
    course : "Introduction to Programming"
},
{
    name : "Tayyab",
    Designation : "Tutor/Instructor",
    Department : "Computer Science",
    course : "Introduction to Programming"
},
{
    name : "Ghulam Abbas",
    Designation : "Tutor/Instructor",
    Department : "Computer Science",
    course : "Introduction to Programming"
},
{
    name : "Kamran",
    Designation : "Tutor/Instructor",
    Department : "Computer Science",
    course : "Introduction to Programming"
}])


// Run this command in MongoDB shell to get started

db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);
