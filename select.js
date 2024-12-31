const selectButtonDataLoad = async () => {
    const response = await fetch('select.json');
    const data = await response.json();
    displaySelectButtonData(data);
};

const displaySelectButtonData = (btnData) => {
    const selectBtnContainer = document.getElementById("select-container");
    btnData.forEach(btnItem => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
  
      <td class="border border-gray-300 px-4 py-2"></td>
      <td class="border border-gray-300 px-4 py-2"></td>
      <td class="border border-gray-300 px-4 py-2">Monday</td>
      <td class="border border-gray-300 px-4 py-2">4:10 PM - 5:30 PM</td>
      <td class="border border-gray-300 px-4 py-2">PA230</td>
      
       
        `;
        selectBtnContainer.appendChild(tr);
    });
}
selectButtonDataLoad();