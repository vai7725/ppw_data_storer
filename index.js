const inps = Array.from(document.querySelectorAll(".inp"));
const btn = document.querySelector(".submit-btn");

const keysArr = [
  "university",
  "courseName",
  "courseYear",
  "paperYear",
  "paperTitle",
  "paperURL",
];

btn.addEventListener("click", () => {
  const arr = [];
  inps.forEach((e) => {
    arr.push(e.value.trim());
  });

  const valuesObj = keysArr.reduce((acc, val, idx) => {
    acc[val] = arr[idx];
    return acc;
  }, {});

  axios
    .post("http://localhost:5000/addpaper", valuesObj)
    .then((res) => console.log("Data ", res.data))
    .catch((err) => console.log(err));

  console.log("data is being stored");
});
