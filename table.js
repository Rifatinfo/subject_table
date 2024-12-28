
const dataLoad = async () =>{
    const response = await fetch('data.json');
    const data = await response.json();
    displayData(data); 
}

const displayData = (data) => {
    const tableBody = document.getElementById('table-body');
    
    data.forEach((item) => {
        const row = document.createElement('tr');
        row.className = "hover:bg-gray-50"; 
        row.innerHTML = `
          <th class="border border-gray-300 px-4 py-2">${item.course_id}</th>
          <td class="border border-gray-300 px-8 py-2">${item.course_name}</td>
          <td class="border border-gray-300 px-2 py-2 text-center">${item.credits}</td>
          <td class="border border-gray-300 px-2 py-2 text-center">${item.mandatory}</td>
          <td class="border border-gray-300 px-2 py-2 text-center"><label class="swap swap-rotate inline-flex items-center cursor-pointer">
            <input type="checkbox" class="hidden peer" />
            <!-- Swap On (Visible when checked) -->
            <div class="swap-on hidden peer-checked:block">
                <img class="w-6 h-6" src="${item.taken_right}" alt="Checked">
            </div>
            <!-- Swap Off (Visible when not checked) -->
            <div class="swap-off block peer-checked:hidden">
                <img class="w-5 h-5" src="${item.taken_close}" alt="Unchecked">
            </div>
            </label>
            </td>   	
        `;
        tableBody.appendChild(row);
      });
  };
  

const table = () => {
   
}

table();
dataLoad();