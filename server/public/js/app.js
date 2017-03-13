(() => {
	const app = {
		tasks:null,
		init(){
			this.getTasks();
		},
		getTasks(){
			fetch('/database/tasks.json')
			.then(res=>res.json())
			.then(data=>{
				this.tasks = data.tasks;
				this.addTasks();
			})
		},
		addTasks(){
			this.tasks.map(task=>{
				console.log(task.content)
				document.getElementById('list').innerHTML += `<li>${task.content}</li>`
			})

		}
	}
	app.init();
})();
