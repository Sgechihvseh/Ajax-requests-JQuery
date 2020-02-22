const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
const pageNumber = document.querySelector("#page-number");
clickMeButton.addEventListener("click", makeRequest);

function makeRequest() {
	$.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber.value}&count=1`, {
		success: function (data) {
				data.forEach(el => {
					const img = document.createElement('img');
					img.src = el.thumbnail;
					document.querySelector('#result').appendChild(img);
				});

			}
	})
}