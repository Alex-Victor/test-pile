使用nodejs做了个简单的桩测试工具。
说明：
url路径形如localhost:8082/**/test 返回test.json内容
监听并拦截某端口的访问，返回mock文件夹中返回的json数据，用于前后台分离、微服务间相互调用的模拟桩