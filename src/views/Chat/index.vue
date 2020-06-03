<template>
  <div class="chat">
    <div class="wrap">
      <div class="list">
        <p>11111111111111</p>
        <p>11111111111111</p>
        <Home />
        <Detail />
      </div>
      <div class="input-box">
        <input type="text" class="input" placeholder="请输入内容" />
        <button class="btn" @click="send">发送</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  mounted() {
    // 打开一个 web socket
      var ws = new WebSocket("ws://localhost:8888");
      console.log('ws', ws)
      ws.onopen = function() {
        // Web Socket 已连接上，使用 send() 方法发送数据
        ws.send("发送数据");
        console.log("数据发送中...");
      };

      ws.onmessage = function(evt) {
        var received_msg = evt.data;
        console.log("数据已接收...");
      };

      ws.onclose = function() {
        // 关闭 websocket
        console.log("连接已关闭...");
      };
  },
  methods: {
    send() {
      alert(0);
    }
  }
};
</script>

<style scoped>
.chat {
  display: flex;
  justify-content: center;
}
.wrap {
  width: 300px;
}
.list {
  height: 300px;
  padding: 15px;
  background: #f6f;
  border: 1px solid #f7f7f7;
}
.input-box {
  display: flex;
  margin-top: 20px;
}
.input {
  outline: none;
  line-height: 20px;
  padding: 2px 5px;
  border-radius: 4px;
  flex: 1;
  margin-right: 10px;
  box-shadow: none;
}
.btn {
  width: 80px;
  border: none;
  background: #5cbe4c;
  border-radius: 5px;
  outline: none;
  color: #fff;
  cursor: pointer;
}
</style>