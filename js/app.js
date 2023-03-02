
const aiCategorisFetch = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => showAiCategoris(data.data))
}

const showAiCategoris = data => {
    // console.log(data)
    const AiCategorisContainer = document.getElementById('ai-container');

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
                            <div> <h5 class="card-title">Card title</h5>
                                <i class="fa-solid fa-calendar-week"></i> <span>date</span></div>
                            <div class="d-flex justify-content-center">
                              <span class="bg-warning-subtle p-3" style="clip-path: circle(40%); "><i class="fa-solid fa-arrow-right"></i></span>
                            </div>
                        </div>
                    </div>
                  </div>
    `
    AiCategorisContainer.appendChild(aiDiv);
       
    })
}
aiCategorisFetch()