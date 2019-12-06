export default {
  data(){

  },
  mounted(){
    this.getMessage()
  },
  methods: {
    getMessage(){
      console.log('===222',this.formCongfig);
      
      alert('mixins方法先执行:'+'22222')
    }
  }
}