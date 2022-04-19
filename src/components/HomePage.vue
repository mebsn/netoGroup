<template>
  <main>
    <div class="security">
      <div class="content_description">
        <div class="description">
          <h3>Security/Cameras</h3>
          <div class="text"
            >Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
      </div>
      <div class="content_image-security"></div>
    </div>
    <div class="Manpower">
      <div class="content_image-manpower"></div>
      <div class="content_description">
        <div class="description2">
          <h3>Manpower</h3>
          <div class="text"
            >Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
      </div>
    </div>
    <div class="Cleaning">
      <div class="content_description">
        <div class="description">
          <h3>Cleaning</h3>
          <div class="text"
            >Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
      </div>
      <div class="content_image-cleaning"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');


main {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f9;
  margin-top:80px;
}
.security {
  height: 778px;
  width: 86%;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  justify-content: space-between;
}
.Manpower {
  height: 778px;
  width: 86%;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin-top: 220px;
  justify-content: space-between;
}
.Cleaning {
  height: 778px;
  width: 86%;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin-top: 220px;
  justify-content: space-between;
  margin-bottom:60px;
}
.content_description {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content_image-security {
  background: url("../assets/image6.png");
  background-repeat: no-repeat;
  width: 60%;
  height: 100%;
  max-width:972px;
}
.content_image-manpower {
   background: url("../assets/image8.png");
  background-repeat: no-repeat;
  width: 60%;
  height: 100%;
  max-width:972px;
}
.content_image-cleaning {
  background: url("../assets/image20.png");
  background-repeat: no-repeat;
  width: 60%;
  height: 100%;
  max-width:972px;
}
.description {
  width:80%;
  height:400px;
  background-color:rgba(174,205,213, 0.25);
  color: #2A3633;
  font-size:18px;
  font-weight: 400;
  font-family:'jost' , sans-serif;
  margin-right:100px;
}
.description2 {
  width:80%;
  height:400px;
  background-color:rgba(174,205,213, 0.25);
  color: #2A3633;
  font-size:18px;
  font-weight: 400;
  font-family:'jost' , sans-serif;
  margin-left:100px;
}
h3 {
  font-size:32px;
  margin-left:10px;
  font-family:'jost' , sans-serif;
}
.text {
  margin:10px;
  font-family:'jost' , sans-serif;
}
@media only screen and (min-width: 2100px) {
  .content_description {
  min-width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.description {
  font-size:26px;
  font-weight: 400;
  font-family:'jost' , sans-serif;
}
.description2 {
  font-size:26px;
  font-weight: 400;
  font-family:'jost' , sans-serif;
}
h3 {
  font-size:42px;
  margin-left:10px;
}

}
@media only screen and (max-width: 1450px) {
  .description {
  font-size:14px;
  font-weight: 400;
  font-family:'jost' , sans-serif;
}
.description2 {
  font-size:14px;
  font-weight: 400;
  font-family:'jost' , sans-serif;
}
h3 {
  font-size:20px;
  margin-left:10px;
}
}
@media only screen and (max-width: 860px) {
  .security {
  height: 778px;
  width: 86%;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 70px;
  justify-content: space-between;
}
h3 {
  font-size:20px;
  margin-left:10px;
  margin-top:40px;
}
.Manpower {
  height: 778px;
  width: 86%;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  justify-content: space-between;
}
.Cleaning {
  height: 778px;
  width: 86%;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 70px;
  justify-content: space-between;
}
.content_description {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content_image-security {
  background: url("../assets/image6.png");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  max-width:972px;
}
.content_image-manpower {
   background: url("../assets/image8.png");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
.content_image-cleaning {
  background: url("../assets/image20.png");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
.description {
  width:100%;
  height:400px;
  background-color:transparent;
  text-align: center;
  opacity:0.75;
  color: #2A3633;
  font-size:18px;
  font-weight: 400;
  font-family:'jost' , sans-serif;
  margin-left:80px;
}
.description2 {
  width:100%;
  height:400px;
  background-color:transparent;
  color: #2A3633;
  font-size:18px;
  font-weight: 400;
  font-family:'jost' , sans-serif;
  text-align: center;
  margin-right:100px;
}
.text {
  width:100%;
}
}
@media only screen and (max-width: 540px) {
  .text {
    font-size:14px;
  }
}
</style>
