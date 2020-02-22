const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
const pageNumber = document.querySelector("#page-number");
clickMeButton.addEventListener("click", () => {
	const promise = getImages(pageNumber.value);
	promise.then(onDataReceived)
} );

	function onDataReceived (data) {
		data.forEach(el => {
			const img = document.createElement('img');
			img.src = el.thumbnail;
			document.querySelector('#result').appendChild(img);
		});
}

