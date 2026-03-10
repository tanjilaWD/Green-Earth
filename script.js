const CategoriesContainer = document.getElementById('CategoriesContainer');

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
loadCategories();
