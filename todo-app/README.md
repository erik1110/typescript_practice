# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## How to Create

1. 安裝 Node.js
2. 執行環境 `npm create vite@latest todo-app -- --template vue-ts`
3. 在 `components` 資料夾載入 `TodoList.vue 元件`，範例碼如下
4. 在 `app.vue` 加入 `TodoList.vue 元件`
5. `npm run dev` 開啟伺服器
:::spoiler Todolist.vue
```=javascript
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
```
:::
### 採雷
可能會遇到以下錯誤
```
Node's package format requires that CommonJS files in a "type": "module" package use the ".cjs"
  file extension.
```
將 `vite.config.js` 改名為 `vite.config.cjs`