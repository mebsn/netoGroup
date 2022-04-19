<template>
  <div class="contact">
    <div class="contact_container">
      <div class="contact_container-info">
        <h4>Write to us</h4>
        <span>Company name/name*</span>
        <input type="text" required placeholder="Company name/name*" v-model="company"/>
        <div class="validation" v-if="companyErr">Please complete the field!</div>
        <span>E-mail*</span>
        <input type="text" required placeholder="E-mail*" v-model="email"/>
        <div class="validation" v-if="emailErr">Please complete the field!</div>
        <span>Phone*</span>
        <input type="number" required placeholder="Phone*" v-model="phone"/>
        <div class="validation" v-if="phoneErr">Please complete the field!</div>
        <span>The service I am interested in:</span>
        <div class="services">
          <div
            class="service"
            v-bind:class="{ green: !clicked, gray: clicked }"
            v-on:click="clicked = !clicked"
          >
            Security/Cameras
          </div>
          <div class="service" v-bind:class="{ green: !clicked1, gray: clicked1 }"
            v-on:click="clicked1 = !clicked1">Manpower</div>
          <div class="service" v-bind:class="{ green: !clicked2, gray: clicked2 }"
            v-on:click="clicked2 = !clicked2">Cleaning</div>
        </div>
        <div class="validation" v-if="serviceErr">Choose at least one service..</div>
        <input type="text" placeholder="Message..." />
        <div class="confirmation">
          <div class="send" @click="handleSend()">Send</div>
          <div class="textMessage">We are glad to hear from you!</div>
        </div>
      </div>
      <div class="contact_container-image">
        Leave your contact info <br />
        and we will contact you <br />soon
      </div>
    </div>
    <div class="sentSuccessfuly" v-if="successfuly">
      <div class="content">
        <div class="closeOption" @click="handleclose()">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z"
              fill="#2A3633"
            />
          </svg>
        </div>
        <div class="response">
          <div class="res1">Your mail sent succesfully</div>
          <div class="res2">Thank you</div>
          <div class="res3">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 0C15.68 0 0 15.68 0 35C0 54.32 15.68 70 35 70C54.32 70 70 54.32 70 35C70 15.68 54.32 0 35 0ZM28 52.5L10.5 35L15.435 30.065L28 42.595L54.565 16.03L59.5 21L28 52.5Z"
                fill="#32BC93"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="sentSuccessfuly" v-if="unSuccessfuly">
        <div class="content">
          <div class="closeOption">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z"
                fill="#2A3633"
              />
            </svg>
          </div>
          <div class="response">
            <div class="res1">Something went wrong</div>
            <div class="res2">please try again</div>
            <div class="res3">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 0C15.68 0 0 15.68 0 35C0 54.32 15.68 70 35 70C54.32 70 70 54.32 70 35C70 15.68 54.32 0 35 0ZM38.5 52.5H31.5V45.5H38.5V52.5ZM38.5 38.5H31.5V17.5H38.5V38.5Z"
                  fill="#BC4332"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      clicked: false,
      clicked1: false,
      clicked2: false,
      company: "",
      email:"",
      phone: "",
      companyErr: false,
      emailErr: false,
      phoneErr: false,
      serviceErr: false,
      successfuly: false,
      unSuccessfuly: false,
    };
  },
  methods: {
      handleSend() {
          if (this.company == "") {
              this.companyErr = true
          }
          else if (this.email == "") {
              this.emailErr = true
          }
          else if ( this.phone =="") {
              this.phoneErr = true
          }
          else if ((( this.clicked == false) && ( this.clicked1 == false)) && ( this.clicked2 == false)) {
            this.serviceErr = true
          }
          else {
              this.companyErr = false
              this.serviceErr = false
              this.phoneErr = false
              this.emailErr = false
              this.successfuly = true
              console.log("1" , this.clicked)
              
          }
      },
      handleclose() {
          this.successfuly = false
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

.contact {
  width: 100%;
  height: calc(100vh - 180px);
  min-height: 900px;
  display: flex;
  flex-direction: row;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}
h4 {
  font-family: "jost", sans-serif;
  font-size: 32px;
  font-weight: 400;
  color: #32bc93;
}
span {
  font-family: "jost", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #2a3633;
  margin-top:15px;
}
input {
  /* width: 100%; */
  height: 40px;
  background-color: #ffffff;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  margin-top: 10px;
  padding-left: 20px;
}
.validation {
  font-family: "jost", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #e83a3a;
  height: 24px;
  margin-bottom: 10px;
}
.services {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom:15px;
}
.service {
  width: 31%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  background-color: #32bc93;
  border-radius: 2px;
  cursor: pointer;
}
.green {
  background-color: #32bc93;
  font-weight: 600;
}
.gray {
  background-color: #e3e3e3;
  color:#2A3633;
  font-weight: 600;
}
.send {
  width: 142px;
  height: 50px;
  background: #2a3633;
  border-radius: 2px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
}
.confirmation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  width: 100%;
  height: 50px;
  margin-top: 60px;
}
.textMessage {
  display: flex;
  align-items: center;
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;

  color: #32bc93;
}
.contact_container {
  width: 86%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.contact_container-info {
  height: 860px;
  max-height:860px;
  width: 50%;
  display: flex;
  flex-direction: column;
}
.contact_container-image {
  background: url("../assets/853382.png");
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  width: 45%;
  height: 860px;
  text-align: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  font-weight: 400;
  font-family: "jost", sans-serif;
}
.sentSuccessfuly {
  width: 100%;
  height: 93%;
  position: absolute;
  background-color: rgba(42, 54, 51, 0.75);
  min-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  width: 40%;
  opacity: 100;
  height: 560px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 2px;
}
.closeOption {
  width: 97%;
  justify-content: right;
  display: flex;
  height: 60px;
  align-items: center;
  cursor: pointer;
}
.response {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.res1 {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 46px;
  margin-bottom: 20px;
  color: #2a3633;
}
.res2 {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;

  color: #69716f;
  margin-bottom: 20px;
}
@media only screen and (min-width: 2100px) {
  .contact_container-info {
    height: 100%;
    display: flex;
  }
  .contact_container-image {
    width: 40;
  }
  
}
@media only screen and (max-width: 1024px) {
  .textMessage {
    font-size: 14px;
  }
}
@media only screen and (max-width: 860px) {
  .contact_container-image {
    display: none;
  }
  .contact_container-info {
    height: 860px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
    .textMessage {
    font-size: 18px;
  }
}
@media only screen and (max-width: 560px) {
  .textMessage {
    font-size: 12px;
  }
  .service {
    font-size: 12px;
  }
}
</style>
