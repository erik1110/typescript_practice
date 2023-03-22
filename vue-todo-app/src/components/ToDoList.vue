<template>
    <div>
      <h2>代辦清單</h2>
      <div>
        <input type="text" v-model="inputText" />
        <button @click="addTodo">新增</button>
      </div>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo.text }}
          <button @click="removeTodo(index)">刪除</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  interface TodoItem {
    text: string;
  }
  
  export default {
    data() {
      return {
        inputText: '',
        todos: [] as TodoItem[],
      };
    },
    methods: {
      addTodo() {
        if (this.inputText.trim() === '') {
          return;
        }
  
        this.todos.push({ text: this.inputText.trim() });
        this.inputText = '';
      },
      removeTodo(index: number) {
        this.todos.splice(index, 1);
      },
    },
  };
  </script>