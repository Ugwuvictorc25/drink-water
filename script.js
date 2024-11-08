const smallCups = document.querySelectorAll(".cup-small");
const remainedSpan = document.querySelector(".remained span");
const remained = document.querySelector(".remained");
const remainedSmall = document.querySelector(".remained small");
const percentage = document.getElementById("percentage");

smallCups.forEach((cup, indx) => {
	cup.addEventListener("click", () => fillCull(indx));
});

fullBigCup();

function fillCull(indx) {
	console.log(indx);
	if (indx === 7 && smallCups[indx].classList.contains("fill")) indx--;
	console.log(indx);
	if (smallCups[indx].classList.contains("fill") && !smallCups[indx].nextElementSibling.classList.contains("fill")) {
		indx--;
	}

	smallCups.forEach((cup, indx2) => {
		if (indx2 <= indx) {
			cup.classList.add("fill");
		} else {
			cup.classList.remove("fill");
		}
	});
	fullBigCup();
}

function fullBigCup() {
	const fullSmallCupLength = document.querySelectorAll(".cup.cup-small.fill").length;

	if (fullSmallCupLength === 0) {
		percentage.style.visibility = "hidden";
		percentage.style.height = "0";
	} else {
		percentage.style.visibility = "visible";
		percentage.style.height = `${(fullSmallCupLength / smallCups.length) * 19}rem`;
		percentage.innerHTML = `${(fullSmallCupLength / smallCups.length) * 100}%`;
	}

	if (fullSmallCupLength === smallCups.length) {
		remained.style.visibility = "hidden";
		remained.style.height = "0";
	} else {
		remained.style.visibility = "visible";
		remainedSpan.innerText = `${2 - (250 * fullSmallCupLength) / 1000}L`;
	}
}
