// ==========================================
// HSC English 2nd Paper Practice Book
// Completing Sentence
// script.js
// ==========================================


// ================================
// HTML Elements
// ================================

const rulesContainer = document.getElementById("rulesContainer");
const categoryContainer = document.getElementById("categoryButtons");
const searchBox = document.getElementById("searchBox");


// ================================
// Current Category
// ================================

let currentCategory = "All";


// ================================
// Create Category Buttons
// ================================

function createCategoryButtons() {

    const categories = [

        "All",

        ...new Set(
            completingSentenceRules.map(item => item.category)
        )

    ];

    categoryContainer.innerHTML = "";

    categories.forEach(category => {

        const button = document.createElement("button");

        button.textContent = category;

        if(category === currentCategory){

            button.classList.add("active");

        }

        button.onclick = () => {

            currentCategory = category;

            createCategoryButtons();

            renderPatterns();

        };

        categoryContainer.appendChild(button);

    });

}



// ================================
// Render Pattern Cards
// ================================

function renderPatterns() {

    const keyword = searchBox.value.toLowerCase();

    rulesContainer.innerHTML = "";

    const filteredPatterns = completingSentenceRules.filter(item => {

        const matchedCategory =

            currentCategory === "All" ||

            item.category === currentCategory;


        const matchedSearch =

            item.pattern.toLowerCase().includes(keyword) ||

            item.category.toLowerCase().includes(keyword) ||

            item.structure.toLowerCase().includes(keyword) ||

            item.explanation.toLowerCase().includes(keyword) ||

            item.example.toLowerCase().includes(keyword) ||

            item.mistake.toLowerCase().includes(keyword) ||

            item.correction.toLowerCase().includes(keyword) ||

            item.note.toLowerCase().includes(keyword);

        return matchedCategory && matchedSearch;

    });


    if(filteredPatterns.length === 0){

        rulesContainer.innerHTML = `

        <div class="no-result">

            <h2>No Pattern Found</h2>

            <p>Try searching with another keyword.</p>

        </div>

        `;

        return;

    }



    filteredPatterns.forEach(item=>{

        rulesContainer.innerHTML += `

        <div class="rule-card">

            <div class="pattern-badge">

                Pattern ${item.id}

            </div>

            <div class="pattern-title">

                ${item.pattern}

            </div>

            <div class="category">

                ${item.category}

            </div>


            <div class="heading">

                Structure

            </div>

            <div class="structure-box">

                ${item.structure}

            </div>


            <div class="heading">

                Explanation

            </div>

            <p>

                ${item.explanation}

            </p>


            <div class="heading">

                Example

            </div>

            <div class="example">

                ${item.example}

            </div>


            <div class="heading">

                Common Mistake

            </div>

            <div class="mistake">

                ❌ ${item.mistake}

                <br><br>

                ✅ ${item.correction}

            </div>


            <div class="heading">

                Exam Tip

            </div>

            <div class="tip">

                ${item.note}

            </div>

        </div>

        `;

    });

}



// ================================
// Live Search
// ================================

searchBox.addEventListener("input",renderPatterns);



// ================================
// Initial Load
// ================================

createCategoryButtons();

renderPatterns();