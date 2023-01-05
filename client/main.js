const complimentBtn = document.getElementById("complimentButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener('click', getCompliment);

const fortuneBtn = document.getElementById("fortuneButton");
const getFortune = () => {
  axios.get("https://localhost:4000/api/fortune/").then((res) => {
    const data2 = res.data;
    alert(data2);
  });
};

fortuneBtn.addEventListener('click', getFortune);

const inspirationBtn = document.getElementById("inspirationButton");
const getInspiration = () => {
  axios.get("https://localhost:4000/api/inspiration/").then((res) => {
    const data3 = res.data;
    alert(data3);
  });
};

inspirationBtn.addEventListener('click', getInspiration);

const colorBtn = document.getElementById("colorButton");
const getColor = () => {
  axios.get("https://localhost:4000/api/color/").then((res) => {
    const data4 = res.data;
    alert(data4);
  });
};

colorBtn.addEventListener('click', getColor);

const songBtn = document.getElementById("songButton");
const getSong = () => {
  axios.get("https://localhost:4000/api/song/").then((res) => {
    const data4 = res.data;
    alert(data4);
  });
};

songBtn.addEventListener('click', getSong);

function submitHandler(event) {
  event.preventDefault();
  let input = document.getElementById("input")
  let body = {fortune:input.value}
  addFortune(body)
};