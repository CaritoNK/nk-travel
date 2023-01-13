const htmlElement = document.querySelector("html");
const toggleButtonDesk = document.querySelector("#toggleDarkDesk");
const toggleButtonMovil = document.querySelector("#toggleDarkMovil");
const cardContent = document.querySelector("#card-content");

toggleButtonDesk.addEventListener("click", () => {
	htmlElement.classList.toggle("dark");
});
toggleButtonMovil.addEventListener("click", () => {
	htmlElement.classList.toggle("dark");
});

const cardArray = [
	["bg-norway","Norway","Beautiful landscapes"],
	["bg-new_york","New York","Concrete jungle"],
	["bg-europe","Europe","Big City"],
	["bg-iceland","Iceland","A break from the world"],
	["bg-switzerland","Switzerland","Beautiful landscapes"],
	["bg-seattle","Seattle","Concrete jungle"],
	["bg-sydney","Sydney","Big City"],
	["bg-yosemite","Yosemite","A break from the world"]
];	
// función que se llama asi misma
async function renderCard() {
    try {
		for (let i=0; i<cardArray.length; i++) {
			let view =  await `
				<div class="card">
					<div class="w-full h-3/5 bg-cover bg-center ${cardArray[i][0]} rounded-t-lg"></div>
					<div class="card-info">
						<p class="font-semibold text-xl">${cardArray[i][1]}</p>
						<p class="text-sm">${cardArray[i][2]}</p>
					</div>
				</div>
			`
			//return view;
			cardContent.innerHTML += view;
		}  
    } catch (error)  {
        throw new Error("API Not Found");
    }
}
renderCard()
