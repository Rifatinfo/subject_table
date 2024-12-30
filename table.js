const dataLoad = async () => {
    const response = await fetch('data.json');
    const data = await response.json();
    displayData(data); 
};

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
          <td class="border border-gray-300 px-2 py-2 text-center">
            <label class="swap swap-rotate inline-flex items-center cursor-pointer">
              <input type="checkbox" class="hidden peer" />
              <!-- Swap On (Visible when checked) -->
              <div class="swap-on hidden peer-checked:block">
                  <img class="w-6 h-6" src="${item.taken_right}" alt="Checked">
              </div>
              <!-- Swap Off (Visible when not checked) -->
              <div class="swap-off block peer-checked:hidden">
                  <img onClick="appendSection('${item.course_name}', '${item.course_id}')" class="w-5 h-5" src="${item.taken_close}" alt="Unchecked">
              </div>
            </label>
          </td>   	
        `;
        tableBody.appendChild(row);
    });
};

const appendSection = (course_name, course_id) => {
    console.log("Appending Section:", course_name, course_id);
    saveProductToLocalStorage(course_name, course_id);

    const container = document.getElementById('IdCourseContainer');
    if (!container) {
        console.error("Container with ID 'IdCourseContainer' not found.");
        return;
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="border border-gray-300 px-4 py-2">${course_id}</td>
      <td class="border border-gray-300 px-4 py-2">${course_name}</td>
      <td class="border border-gray-300 px-4 py-2"></td>
      <td class="border border-gray-300 px-4 py-2">Monday</td>
      <td class="border border-gray-300 px-4 py-2">4:10 PM - 5:30 PM</td>
      <td class="border border-gray-300 px-4 py-2">PA230</td>
      <td class="border border-gray-300 px-4 py-2"></td>
    `;
    container.appendChild(tr);

    console.log("Section appended successfully."); 
};


const getStoredItem = () => {
    let cart = {};
    const storedItem = localStorage.getItem('cart');
    if (storedItem) {
        cart = JSON.parse(storedItem);
    }
    return cart;
};

const saveProductToLocalStorage = (course_name, course_id) => {
    const cart = getStoredItem();
    cart[course_name] = course_id;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
};

const displayItemFromLocalStorage = () => {
    const savedCart = getStoredItem();
    console.log(savedCart);
    for (const course_name in savedCart) {
        const course_id = savedCart[course_name];
        console.log(course_name, course_id);
        appendSection(course_name, course_id); // Pass arguments correctly
    }
};

displayItemFromLocalStorage();
dataLoad();
