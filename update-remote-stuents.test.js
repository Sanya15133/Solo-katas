const updateRemoteStudents = require("../update-remote-students/update-remote-students.js");

describe("updateRemoteStudents", () => {
  test("return an array", () => {
    const actual = updateRemoteStudents(input);
    const output = true;
    expect(Array.isArray(actual)).toEqual(output);
  });
  test("return student data depending on name passed", () => {
    const input = [{ name: "Hypatia", age: 31, location: "leeds" }]
    const actual = input[0]
    const check = updateRemoteStudents(actual)
    const output = [{name: "Hypatia", age: 31, location: "leeds" }];

    expect(check).toEqual([input]);
  });
  //my function works, I'm not too sure on how the tests should work
  test("return remote property for missing location data", () => {
    const input = [{ name: "Ramanujan", age: 22 }];
    const actual = updateRemoteStudents(input);
    const output = [{ name: "Ramanujan", age: 22, location: "remote" }];
    expect(actual).toEqual(output);
  });
});
