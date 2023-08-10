<template>
  <div class="v-root">
    <div class="v-container">
      <div class="column">
        <img
          src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          alt="">
      </div>
      <div class="column">
        <h1 class="page-title">About Us</h1>
        <p class="description">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
          sollicitudin pellentesque.
          Nunc
          posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
          venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus
          dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros,
          mattis
          at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”</p>
      </div>
    </div>
  </div>
</template>

<style>
.v-root {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 244px);
  justify-content: center;
}

.column {
  flex: 50%;
}

.v-container {
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 32px;
  display: flex;
  gap: 32px;
}

.page-title {
  font-size: 1.875rem;
  font-weight: 600;
}

.description {
  font-weight: 400;
}
</style>
