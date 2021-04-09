Vue.config.devtools = true;

var app = new Vue ({
  el: '#root',
  data: {
    disks: [],
    genres: [],
    genre: '',
  },
  mounted:function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        this.disks = response.data.response;
        console.log(this.disks);

        this.disks.forEach(disk => {
          if(!this.genres.includes(disk.genre)) {
          this.genres.push(disk.genre);
          }
        });
      });
  },
  computed: {
    filteredDisks: function () {
      return this.disks.filter(disk => !disk.genre.indexOf(this.genre))
    }
  },
  methods: {
    sorted() {
      this.disks.sort((a,b) => a.year > b.year ? 1 : -1);
    }
  },

})
