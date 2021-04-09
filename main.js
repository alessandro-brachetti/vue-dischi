Vue.config.devtools = true;

var app = new Vue ({
  el: '#root',
  data: {
    disks: [],
  },
  mounted:function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        this.disks = response.data.response;
        console.log(this.disks);
      });
  },

})
