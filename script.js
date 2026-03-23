const CategoriesContainer = document.getElementById('CategoriesContainer');
const treesContainer = document.getElementById('treesContainer');

async function loadCategories(){
       //async await
       const res = await fetch(
        "https://openapi.programming-hero.com/api/categories"
       );
       const data = await res.json();
       console.log(data);
       console.log(CategoriesContainer);
       data.categories.forEach(category => {
       console.log(category);
       const btn = document.createElement('button'); 
       btn.className = "btn btn-outline w-full";
       btn.textContent = category.category_name;
       CategoriesContainer.appendChild(btn);

       });
       

    }

async function loadTrees(){
     const res = await fetch('https://openapi.programming-hero.com/api/plants');
     const data = await res.json();
     displayTrees(data.plants);
    }

function displayTrees(trees){
    console.log(trees);
    trees.forEach((tree) =>{
        console.log(tree);
        const card = document.createElement('div');
        card.className = 'card bg-white shadow-sm';
        card.innerHTML = `
        <figure>
    <img
      src='${tree.image}'
      alt='${tree.name}'
      title= '${tree.name}'
      class = 'h-48 w-full object-cover'
      />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${tree.name}</h2>
    <p class="line-clamp-2">${tree.description}</p>
    <div class="badge badge-success badge-outline">${tree.category}</div>
    <div class="card-actions justify-between items-center">
        <h2 class="font-bold  text-[#4ade80]">$${tree.price}</h2>
      <button class="btn btn-primary ">Buy Now</button>
    </div>
  </div> `;

   treesContainer.appendChild(card);
    });

};

loadCategories();
loadTrees();
