<template>
<div>
  <ul class="list-group">
    <li class="list-group-item" v-for="(todo, index) in todos"  @click="changeToReviseView(index)" >
	title: {{todo.name}} <br>
    content: {{todo.content}}<br>
    deadline: {{todo.deadline}}
	{{index}}
      <div class="btn-group pull-right" 
        style="font-size: 12px; line-height: 1;">
        <button type="button" 
        class="btn-link dropdown-toggle" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false">
          더보기<span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
			<li>
				<a href="#" @click="deleteTodo(index)">삭제</a>
			</li>
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
