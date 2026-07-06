// ==========================================
// HSC English 2nd Paper Practice Book
// Connectors
// script.js
// ==========================================

// HTML Elements

const rulesContainer = document.getElementById("rulesContainer");
const categoryContainer = document.getElementById("categoryButtons");
const searchBox = document.getElementById("searchBox");


// Current selected category

let currentCategory = "All";


// ================================
// Create Category Buttons
// ================================

function createCategoryButtons() {

    const categories = [
        "All",
        ...new Set(connectorRules.map(rule => rule.category))
    ];

    categoryContainer.innerHTML = "";

    categories.forEach(category => {

        const button = document.createElement("button");

        button.className = "";

        if(category === currentCategory){
            button.classList.add("active-category");
        }

        button.innerText = category;

        button.onclick = () => {

            currentCategory = category;

            createCategoryButtons();

            renderRules();

        };

        categoryContainer.appendChild(button);

    });

}



// ================================
// Display Rules
// ================================

function renderRules() {

    const keyword = searchBox.value.toLowerCase();

    rulesContainer.innerHTML = "";

    const filteredRules = connectorRules.filter(rule => {

        const matchedCategory =
            currentCategory === "All" ||
            rule.category === currentCategory;

        const matchedSearch =

            rule.title.toLowerCase().includes(keyword) ||

            rule.category.toLowerCase().includes(keyword) ||

            rule.explanation.toLowerCase().includes(keyword) ||

            rule.example.toLowerCase().includes(keyword) ||

            (rule.structure || "").toLowerCase().includes(keyword) ||

            (rule.note || "").toLowerCase().includes(keyword);

        return matchedCategory && matchedSearch;

    });

    if(filteredRules.length === 0){

        rulesContainer.innerHTML =

        `<div class="no-result">

            No matching rules found.

        </div>`;

        return;

    }

    filteredRules.forEach((rule,index)=>{

        rulesContainer.innerHTML += `

        <div class="rule-card">

            <div class="rule-number">

                Rule ${rule.id}

            </div>

            <div class="rule-title">

                ${rule.title}

            </div>

            <div class="category">

                ${rule.category}

            </div>

            <div class="heading">

    Structure

</div>

<div class="structure-box">

    ${rule.structure || "-"}

</div>

            <div class="heading">

                Explanation

            </div>

            <p>

                ${rule.explanation}

            </p>

            <div class="heading">

                Example

            </div>

            <div class="example">

                ${rule.example}

            </div>

            <div class="heading">
    Exam Tip
</div>

<div class="tip">
    ${rule.note || "-"}
</div>

        </div>

        `;

    });

}



// ================================
// Live Search
// ================================

searchBox.addEventListener("input",renderRules);



// ================================
// Initial Load
// ================================

createCategoryButtons();

renderRules();