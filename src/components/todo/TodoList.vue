<template>
<div>
  <ul class="list-group">
    <li class="list-group-item" v-for="(todo, index) in todos">
	<div @click = "changeToReviseView(index)">
	title: {{todo.name}}<br>
    content: {{todo.content}}<br>
    deadline: {{todo.deadline}}
	</div>
      <div class="btn-group pull-right" 
        style="font-size: 12px; line-height: 1;">
        <ul class="dropdown-menu">
			<button class="btn btn-default" type="button" 
			@click="deleteTodo(index)">삭제</button>
        </ul>
      </div>
    </li>
  </ul>
</div>

</template>

<script>
export default {
  name: 'TodoList',
  props : ['todos'],
  methods:{
	deleteTodo(index){
		this.$emit('deleteTodo',index);
	},
	changeToReviseView(){
		this.$emit('changeToReviseView');
	}
	},
	computed:{

	sortDeadline(){
		this.$emit('sortDeadline');
	}
	}
}
</script>
