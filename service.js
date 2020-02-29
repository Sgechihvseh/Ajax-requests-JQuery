
function getImages(pageNumber) {
	const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`)

	return promise.then((response) => {
		return response.data;
	});
}

function postTasks(task) {
	const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
		widgetId: 543265,
		title: task
	})

	return promise.then((response) => {
		return response.data;
	});
}

function getTasks() {
	const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=543265&count=30`)

	return promise.then((response) => {
		return response.data;
	});
}

function deleteTask(id) {
	const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=543265&taskId=${id}`)

	return promise.then((response) => {
		return response.data;
	});
}