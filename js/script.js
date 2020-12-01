const app = new Vue ({
  el: '#root',
  data:{
    albums: []
  },
  mounted: function () {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then((result) => {
      this.albums = result.data.response;
      console.log(result)
    })
  }
})
