const DATA ="https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
const form = document.querySelector("#searchForm");
const searchKeywordInput = document.querySelector("#searchKeyword");
const siteList = document.querySelector(".siteList");

form.addEventListener("submit", async (e) => {  
  e.preventDefault()  
  const keyword = searchKeywordInput.value.trim() 
  if (keyword !== "") {
    fetch(DATA)
      .then((resp) => resp.json())
      .then((stations) => {
        renderSearchStation(stations, keyword) 
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    alert("請輸入關鍵字")
  }
})
function renderSearchStation(stations, keyword) {
    let result = stations.filter((station) => station.ar.includes(keyword))
    result = fullStation(result) 
    renderItem(result) 
  }
function fullStation(stations) {
  return stations.reduce((acc, { ar, sna, tot, sbi }) => { 
    return (
      acc +
      `<li class="siteList">
         <i class=""></i>
         ${sna.replace("YouBike2.0_", "")} (${sbi}/${tot})<br />
         <small class="">${ar}</small>
       </li>`
    )
  }, "")
}
function renderItem(result) {
  siteList.textContent = ""
  siteList.insertAdjacentHTML("afterbegin", result)
}