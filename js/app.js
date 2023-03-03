
const aiCategorisFetch = () => {
    toggleSpinner(true) 
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => showAiCategoris(data.data))
}

const showAiCategoris = data => {
    console.log(data.tools.length)
    const AiCategorisContainer = document.getElementById('ai-container');
    // display 6 item only 
    const showAll = document.getElementById('ahow-all');
    if(data.tools.length > 6){
      data.tools = data.tools.slice(0, 6);
    showAll.classList.remove('d-none')
  }
  else{
    showAll.classList.add('d-none');
}

data.tools.forEach(singleAiCategories => {
    const aiDiv = document.createElement('div');
    aiDiv.classList.add('col');
    aiDiv.innerHTML = `
     <div class="card h-100">
                    <img src="${singleAiCategories.image ? singleAiCategories.image: 'No Img Found'}" class="card-img-top p-2 " alt="..." style="width: 355px; height: 200px;">
                    <div class="card-body">
                      <h5 class="card-title">Features</h5>
                         <ol>
                            <li>${singleAiCategories.features[0] ? singleAiCategories.features[0]: 'No data Found'}</li>
                            <li>${singleAiCategories.features[1] ? singleAiCategories.features[1]: 'No data Found'}</li>
                            <li>${singleAiCategories.features[2] ? singleAiCategories.features[2]: 'No data Found'}</li> 
                         </ol> 
                         <hr>
                        <div class="d-flex justify-content-between ">
                            <div> <h5 class="card-title">${singleAiCategories.name ? singleAiCategories.name: 'No data Found'}</h5>
                                <i class="fa-solid fa-calendar-week text-secondary"></i> <span class="text-secondary">${singleAiCategories.published_in ? singleAiCategories.published_in: 'No data Found'}</span></div>
                            <div class="d-flex justify-content-center">
                              <button  onclick="aiDetailsById('${singleAiCategories.id}')" class="btn bg-warning-subtle p-3" style="clip-path: circle(40%); "  data-bs-toggle="modal" data-bs-target="#aiDetailModal"><i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                  </div>
    `
    AiCategorisContainer.appendChild(aiDiv);
    toggleSpinner(false) 
    })
}

// spiner 
const toggleSpinner = isLoding => {
    const loaderSection = document.getElementById('loder');
    if(isLoding){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

const aiDetailsById = id =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayAiDetails(data.data) )

}
const displayAiDetails = data => {
    console.log(data)
    const aiDetails = document.getElementById('modal-body');
    aiDetails.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 g-4">          
    <div class="col">
      <div class="card">
        <div class="card-body bg-danger-subtle  p-3">
          <h5 class="card-title fw-bold mb-4">${data.description}</h5>
          <div class="d-flex gap-3 rounded mb-4">
            <h6 class="p-4 fw-semibold rounded bg-white bg-white text-success">${data.pricing[0].price ? data.pricing[0].price: 'Free of Cost/Basic' } Basic</h6>
           <h6 class="p-4 fw-semibold rounded bg-white text-info text-center">${data.pricing[1].price ? data.pricing[1].price: 'Free Of Cost/Pro' } Pro</h6>
            <h6 class="p-4 fw-semibold rounded bg-white text-danger text-center ">${data.pricing[2].price ? data.pricing[2].price: 'Free of Cost /Enterprise' } Enterprise</h6>
          </div>
        <div class="d-flex justify-content-between">
          <div>
            <h5 class="card-title fw-semibold mb-2">Features</h5>
            <ul>
              <li>${data.features[1].feature_name? data.features[1].feature_name: 'No Data Found'}</li>
              <li>${data.features[2].feature_name? data.features[2].feature_name: 'No Data Found'}</li>
              <li>${data.features[3].feature_name? data.features[3].feature_name: 'No Data Found'}</li>
            </ul>
          </div>
          <div>
            <h5 class="card-title fw-semibold mb-2">Integrations</h5>
            <ul>
            <li>${data.integrations[0] ? data.integrations[0]: 'No Data Found'}</li>
            <li>${data.integrations[2] ? data.integrations[2]: 'No Data Found'}</li>
            <li class="mb-4">${data.integrations[1] ? data.integrations[1]: 'No Data Found'}</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card p-3">
        <img src="${data.image_link[0] ? data.image_link[0]: 'No Image'}" class="card-img-top img-fluid" " alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${data.input_output_examples[0].input ? data.input_output_examples[0].input: 'Can you give any example?'}</h5>
          <p class="card-text">${data.input_output_examples[0].output.slice(0,100) ? data.input_output_examples[0].output.slice(0,100): 'No! Not Yet! Take a break!!!'}</p>
        </div>
      </div>
    </div>
  </div>
    `
   } 

   const aiCategorisBtn = () => {
    toggleSpinner(true) 
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => showAiCategoris2(data.data))
}

const showAiCategoris2 = data => {
  console.log(data.tools.length)
  const AiCategorisContainer = document.getElementById('ai-container');
  AiCategorisContainer.innerHTML = '';
data.tools.forEach(singleAiCategories => {
  const aiDiv = document.createElement('div');
  aiDiv.classList.add('col');
  aiDiv.innerHTML = `
   <div class="card h-100">
                  <img src="${singleAiCategories.image ? singleAiCategories.image: 'No Img Found'}" class="card-img-top p-2 " alt="..." style="width: 355px; height: 200px;">
                  <div class="card-body">
                    <h5 class="card-title">Features</h5>
                       <ol>
                          <li>${singleAiCategories.features[0] ? singleAiCategories.features[0]: 'No data Found'}</li>
                          <li>${singleAiCategories.features[1] ? singleAiCategories.features[1]: 'No data Found'}</li>
                          <li>${singleAiCategories.features[2] ? singleAiCategories.features[2]: 'No data Found'}</li> 
                       </ol> 
                       <hr>
                      <div class="d-flex justify-content-between ">
                          <div> <h5 class="card-title">${singleAiCategories.name ? singleAiCategories.name: 'No data Found'}</h5>
                              <i class="fa-solid fa-calendar-week text-secondary"></i> <span class="text-secondary">${singleAiCategories.published_in ? singleAiCategories.published_in: 'No data Found'}</span></div>
                          <div class="d-flex justify-content-center">
                            <button  onclick="aiDetailsById('${singleAiCategories.id}')" class="btn bg-warning-subtle p-3" style="clip-path: circle(40%); "  data-bs-toggle="modal" data-bs-target="#aiDetailModal"><i class="fa-solid fa-arrow-right"></i></button>
                          </div>
                      </div>
                  </div>
                </div>
  `
  AiCategorisContainer.appendChild(aiDiv);
  toggleSpinner(false) 
  })
}
   document.getElementById('btn-showall').addEventListener('click', function(){
    
    aiCategorisBtn()
   })
aiCategorisFetch()