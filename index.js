const resultBlockImg = document.querySelector("#resultimg");
const resultBlockTask = document.querySelector("#resulttask");

const clickMeButton = document.querySelector("#click-me");
const addTaskButton = document.querySelector("#addtask");
const showTaskButton = document.querySelector("#showtask");
const deleteTaskButton = document.querySelector("#deletetask");

const pageNumber = document.querySelector("#numberimg");
const taskText = document.querySelector("#tasktext");

clickMeButton.addEventListener("click", () => {
	const promise = getImages(pageNumber.value);
	promise.then(onGetImages)
});

addTaskButton.addEventListener("click", () => {
	const promise = postTasks(taskText.value);
	promise.then(renderTask);
} );

showTaskButton.addEventListener("click", () => {
	const promise = getTasks();
	promise.then(onGetTasks);
});

function renderTask() {
	const promise = getTasks();
	promise.then(onGetTasks);
};

deleteTaskButton.addEventListener("click", () => {
	deleteTask('5220a757-0e83-4af8-b328-42d65ce2e232');
})

function onGetImages(data) {
	data.forEach(el => {
		const img = document.createElement('img');
		img.src = el.thumbnail;
		document.querySelector('#resultimg').appendChild(img);
	});

}
function onGetTasks(tasks) {
	const result = document.querySelector('#resulttask');
	result.innerHTML = "";
	tasks.forEach(task => {
		const li = document.createElement('li');
		li.innerHTML = task.title;
		li.dataset.id = task.id;
		result.appendChild(li);
	});
}

