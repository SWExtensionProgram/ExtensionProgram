<template>
<div class="container">
  <h2>Todo Revise Page</h2>

	<div class="input-group" style="margin-bottom:10px;">
		<input type="text" class="form-control" 
			placeholder="할일을 입력하세요" 
			v-model="name">
		<li v-for="(todo, i) in todos" v-if="i===index">
		<input type="textarea" class="form-control" 
 			v-bind:placeholder="todo.content"
			v-model="content">
		</li>
		<input type="date" v-model="deadline">
		<span class="input-group-btn">
			<button class="btn btn-default" type="button" 
			@click="reviseTodo(name,content,deadline,index)">추가</button>
		</span>

	</div>

</div>
</template>

<script>

export default {
  name: 'TodoReviseView',
  props : ['todos','viewType','index'],

  	methods:{
		reviseTodo(name,content,deadline,i){
			this.$emit('reviseTodo',name,content,deadline,i);
		}
	}
}
</script>
