import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Time from "@/components/Time";
import MemoList from "@/components/memo/MemoList";
import MemoLayout from "@/components/memo/MemoLayout";
import MemoDetail from "@/components/memo/MemoDetail";
import TodoList from "@/components/todo/TodoList";
import TodoView from "@/components/todo/TodoView";
import TodoPage from "@/components/todo/TodoPage";
import TodoRevisePage from "@/components/todo/TodoRevisePage";



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Time
    },
    {
      path: "/memo",
      component: MemoLayout,
      children: [
        { path: "", component: MemoList },
        { path: ":id", component: MemoDetail }
      ]
    },
	{
      path: "/todo",
      component: TodoView,
      children: [
        { path: "", component: TodoList },
        { path: ":id", component: TodoView },
		{ path: ":id", component: TodoRevisePage }
      ]
    }
  ]
});
