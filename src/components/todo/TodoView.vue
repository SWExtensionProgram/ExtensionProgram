<template lang="html">
    <div>
	<div v-if="viewType==='revise'">
        <todoRevisePage :todos="todos" viewType="viewType" index="index"
			@reviseTodo="reviseTodo" />
	</div>		

	<div v-else-if="viewType==='todo'">
        <todoPage :todos="todos" @createTodo="createTodo" />
	</div>
	<div v-else>
		<button class="btn btn-default" type="button" 
			@click="changeToTodoView">생성</button>
        <todoList :todos="todos" @deleteTodo="deleteTodo"
		@sortDeadline="sortDeadline" @changeToReviseView="changeToReviseView"/>
	</div>	
    </div>
</template>
　
<script>
import todoList from './TodoList';
import todoPage from './TodoPage';
import todoRevisePage from './TodoRevisePage';
　
export default {
	name: 'TodoView',
    components: {
        todoPage,
        todoList,
		todoRevisePage
    },
  data () {
    return {
		viewType:'list',
		name:null,
		content:null,
		deadline:null,
		index:0,
		todos: []
    }
  },
  	methods:{
		deleteTodo(i){
			this.changeToListView()
			this.todos.splice(i,1);
		},
		createTodo(name,content,deadline){
			if(name != null){
				this.changeToListView()
				this.todos.push({name:name, content:content, deadline:deadline});
				this.name = null
				this.content = null
				this.deadline = null
				this.sortDeadline()

			}
		},
		reviseTodo(name,content,deadline,i){
			this.todos.splice(i,1);
			if(name != null){
				this.changeToListView()
				this.todos.push({name:name, content:content, deadline:deadline});
				this.name = null
				this.content = null
				this.deadline = null
				this.sortDeadline()

			}
		},
		changeToListView(){
			this.viewType = 'list'
		},
		changeToTodoView(){
			this.viewType = 'todo'
		},
		changeToReviseView(i){
			this.index = i
			this.viewType = 'revise'
			console.log(i)
		}
	},
	computed:{
		sortDeadline(){
			this.todos.sort(function(a,b){
				return new Date(a.deadline) - new Date(b.deadline);
			}
		);
		}
	}
}
</script>
