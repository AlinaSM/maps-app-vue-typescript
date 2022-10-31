<script lang="ts" src="./SearchBar.ts" />

<template>
    <div class="searchbar-container">
        <input type="text" class="form-control" placeholder="Buscar lugar...">
        <SearchResult />
    </div>

</template>
<style scoped>
.searchbar-container {
    background-color: white;
    border-radius: 4px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    left: 30px;
    overflow: hidden;
    padding: 5px;
    position: fixed;
    top: 30px;
    width: 300px;
    z-index: 999;
}
</style>
