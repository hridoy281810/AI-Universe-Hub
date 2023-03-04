// all data fetch 
const aiLoadDataFetch = () => {
  toggleSpinner(true)
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  fetch(url)
    .then(res => res.json())
    .then(data => DisplayshowAicategories(data.data.tools))
}

// show categories start 
const DisplayshowAicategories = (data) => {
  console.log(data)
  const AicategoriesContainer = document.getElementById('ai-container');
  // display 6 item only 
  const showAll = document.getElementById('ahow-all');
  showAll.classList.remove('d-none')

  data.slice(0, 6).forEach(singleAiCategories => {
    const aiDiv = document.createElement('div');
    aiDiv.classList.add('col', 'images');
    aiDiv.innerHTML = `
   <div class="card h-100 shadow">
                  <img src="${singleAiCategories.image ? singleAiCategories.image : 'No Img Found'}" class="card-img-top p-2 " alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Features</h5>
                       <ol>
                          <li>${singleAiCategories.features[0] ? singleAiCategories.features[0] : 'No data Found'}</li>
                          <li>${singleAiCategories.features[1] ? singleAiCategories.features[1] : 'No data Found'}</li>
                          <li>${singleAiCategories.features[2] ? singleAiCategories.features[2] : 'No data Found'}</li> 
                       </ol> 
                       <hr>
                      <div class="d-flex justify-content-between ">
                          <div> <h5 class="card-title">${singleAiCategories.name ? singleAiCategories.name : 'No data Found'}</h5>
                              <i class="fa-solid fa-calendar-week text-secondary"></i> <span class="text-secondary">${singleAiCategories.published_in ? singleAiCategories.published_in : 'No data Found'}</span></div>
                          <div class="d-flex justify-content-center">
                            <button  onclick="aiDetailsById('${singleAiCategories.id}')" class="btn bg-warning-subtle p-3" style="clip-path: circle(40%); "  data-bs-toggle="modal" data-bs-target="#aiDetailModal"><i class="fa-solid fa-arrow-right"></i></button>
                          </div>
                      </div>
                  </div>
                </div>
  `
    AicategoriesContainer.appendChild(aiDiv);
    toggleSpinner(false)
  })
  // short button 
  document.getElementById('btn-Sortby').addEventListener('click', function () {
    const aiContainer = document.getElementById('ai-container')
    aiContainer.innerHTML = '';
    DisplayshowAicategories(data.sort(shorting))
  })
}
// show categories end

// spiner loader start
const toggleSpinner = isLoding => {
  const loaderSection = document.getElementById('loder');
  if (isLoding) {
    loaderSection.classList.remove('d-none')
  }
  else {
    loaderSection.classList.add('d-none');
  }
}
// spiner loader end
// modal data fecth start
const aiDetailsById = id => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayAiDetails(data.data))
}
// modal data fecth end
// dymnamic modal start 
const displayAiDetails = allData => {
  const aiDetails = document.getElementById('modal-body');
  aiDetails.innerHTML = `
  <div class="row row-cols-1 row-cols-md-2 g-4">          
  <div class="col ">
    <div class="card">
      <div class="card-body bg-danger-subtle rounded p-3" style="border: 1px solid rgba(235, 87, 87, 1);">
        <h5 class="card-title fw-bold mb-4">${allData.description}</h5>
        <div class="price d-flex gap-3 rounded mb-4">
          <h6 class="p-4 fw-semibold rounded bg-white bg-white text-success">${allData.pricing[0].price ? allData.pricing[0].price : 'Free of Cost/Basic'} Basic</h6>
         <h6 class="p-4 fw-semibold rounded bg-white text-info text-center">${allData.pricing[1].price ? allData.pricing[1].price : 'Free Of Cost/Pro'} Pro</h6>
          <h6 class="p-4 fw-semibold rounded bg-white text-danger text-center ">${allData.pricing[2].price ? allData.pricing[2].price : 'Free of Cost /Enterprise'} Enterprise</h6>
        </div>
      <div class="feature_name d-flex justify-content-between">
        <div>
          <h5 class="card-title fw-semibold mb-2">Features</h5>
          <ul>
            <li>${allData.features[1].feature_name ? allData.features[1].feature_name : 'No Data Found'}</li>
            <li>${allData.features[2].feature_name ? allData.features[2].feature_name : 'No Data Found'}</li>
            <li>${allData.features[3].feature_name ? allData.features[3].feature_name : 'No Data Found'}</li>
          </ul>
        </div>
        <div>
          <h5 class="card-title fw-semibold mb-2">Integrations</h5>
          <ul>
          <li>${allData.integrations[0] ? allData.integrations[0] : 'No Data Found'}</li>
          <li>${allData.integrations[2] ? allData.integrations[2] : 'No Data Found'}</li>
          <li class="mb-4">${allData.integrations[1] ? allData.integrations[1] : 'No Data Found'}</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card p-3">
      <img src="${allData.image_link[0] ? allData.image_link[0] : 'No Image'}" class="card-img-top img-fluid" " alt="...">
      <span class="new-badge badge text-bg-danger ">${allData.accuracy.score ? allData.accuracy.score + '%' + ' accuracy' : ''}</span>
      <div class="card-body text-center " >
        <h5 class="card-title">${allData.input_output_examples[0].input ? allData.input_output_examples[0].input : 'Can you give any example?'}</h5>
        <p class="card-text">${allData.input_output_examples[0].output ? allData.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</p>
      </div>
    </div>
  </div>
</div>
  `
}
// dymnamic modal end
// see all button data fetch start 
const aicategoriesBtn = () => {
  toggleSpinner(true)
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  fetch(url)
    .then(res => res.json())
    .then(data => showAicategories2(data.data.tools))
}
// see all button data fetch end

// see all button data show start
const showAicategories2 = data2 => {
  // console.log(data2.tools.length)
  const AicategoriesContainer = document.getElementById('ai-container');
  AicategoriesContainer.innerHTML = '';
  const showAll = document.getElementById('ahow-all');
  showAll.classList.add('d-none')
  data2.forEach(singleAiCategories => {
    const aiDiv = document.createElement('div');
    aiDiv.classList.add('col', 'mb-5');
    aiDiv.innerHTML = `
 <div class="card shadow h-100">
                <img src="${singleAiCategories.image ? singleAiCategories.image : 'No Img Found'}" class="card-img-top p-2 " alt="..." style="width: 355px; height: 200px;">
                <div class="card-body">
                  <h5 class="card-title">Features</h5>
                     <ol>
                        <li>${singleAiCategories.features[0] ? singleAiCategories.features[0] : 'No data Found'}</li>
                        <li>${singleAiCategories.features[1] ? singleAiCategories.features[1] : 'No data Found'}</li>
                        <li>${singleAiCategories.features[2] ? singleAiCategories.features[2] : 'No data Found'}</li> 
                     </ol> 
                     <hr>
                    <div class="d-flex justify-content-between ">
                        <div> <h5 class="card-title">${singleAiCategories.name ? singleAiCategories.name : 'No data Found'}</h5>
                            <i class="fa-solid fa-calendar-week text-secondary"></i> <span class="text-secondary">${singleAiCategories.published_in ? singleAiCategories.published_in : 'No data Found'}</span></div>
                        <div class="d-flex justify-content-center">
                          <button  onclick="aiDetailsById('${singleAiCategories.id}')" class="btn bg-warning-subtle p-3" style="clip-path: circle(40%); "  data-bs-toggle="modal" data-bs-target="#aiDetailModal"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
              </div>
`
    AicategoriesContainer.appendChild(aiDiv);
    toggleSpinner(false)
  })
  // short button 
  document.getElementById('btn-Sortby').addEventListener('click', function () {
    const aiContainer = document.getElementById('ai-container')
    aiContainer.innerHTML = '';
    showAicategories2(data2.sort(shorting))
  })
}
// see all button data show end
// see all button addEventListener 
document.getElementById('btn-showall').addEventListener('click', function () {
  aicategoriesBtn()
})
// data shorting method 
const shorting = (a, b) => {
  const dateA = new Date(a.published_in);
  const dateB = new Date(b.published_in);
  if (dateA > dateB) {
    return 1;
  }
  else if (dateA < dateB) {
    return -1;
  }
  else {
    return 0;
  }
}
aiLoadDataFetch()
// <<================= close =================>>