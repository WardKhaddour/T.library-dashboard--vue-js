<template>
  <div>
    <div id="book-details">
      <img
        id="book-img"
        src="https://www.w3schools.com/images/w3schools_green.jpg"
      />
      <p>{{ title }}</p>
      <p>{{ author }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "author", "imageURL", "rate"],
  data() {
    return {
      name: "",
    };
  },
};
</script>
<style scoped>
#book-details {
  /* background-color: red; */
  position: relative;
  border: 1px solid #000;
  color: #fff;
  background-color: blue;
  margin: 0 auto;
  border-radius: 25px;
  padding: 1%;
  width: 10%;

  /* margin-top: 20%;
  padding: 30px; */
}
#book-img {
  position: absolute;
  top: -40%;
  left: 20%;
  width: 40%;
}
</style>