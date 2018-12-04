<template>
<div class="container">
  <h2>Todo Page</h2>
	<div class="input-group" style="margin-bottom:10px;">
		<input type="text" class="form-control" 
			placeholder="할일을 입력하세요" 
			v-model="name">
		<input type="textarea" class="form-control" 
 			placeholder="내용을 입력하세요" 
			v-model="content">
		<input type="date" v-model="deadline">
		<span class="input-group-btn">
			<button class="btn btn-default" type="button" 
			@click="createTodo(name,content,deadline)">추가</button>
		</span>
	</div>
</div>
</template>

<script>

export default {
  name: 'TodoPage',
  props : ['todos'],

  	methods:{
		createTodo(name,content,deadline){
			this.$emit('createTodo',name,content,deadline);
		}
	}
}
</script>
