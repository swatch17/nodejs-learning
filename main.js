const fs = require('fs');
const events = require('events')

// 创建eventEmitter对象
const eventEmitter = new events.EventEmitter()

// 同步、阻塞
const data = fs.readFileSync('input.txt')


console.log(data.toString())
console.log('程序执行结束！')

// 异步、非阻塞
fs.readFile('input.txt',function(err,data){
    if(err) {
        console.log(err.stack)
        return console.error(err)
    }
    console.log(1,data.toString())
})

fs.readFile('input.txt',(err,data)=>{
    if(err){
        return console.log('err',err)
    }
    const text = `${data}\n测试文本`
    fs.writeFile('input.txt',text,(err,data)=>{
    console.log('err',err)
    console.log('data',data)
})
})

// 创建目录
fs.mkdir(`${__dirname}/name`,function(err){
    if(err){
        return console.error(err)
    }
    console.log('目录创建成功')
})
// 删除目录
fs.rmdir(`${__dirname}/name`,function(err){
    if(err){
        return console.log('删除失败')
    }
    console.log('删除成功')
})

// 读取目录文件
fs.readdir(`${__dirname}`,(err,info)=>{
    if(err){
        return console.log(err)
    }
    console.log('info--->',info)
})



console.log(1,'程序执行结束！')


// 绑定事件及事件的处理程序
eventEmitter.on('eventName',function(arg1,arg2){
    console.log('监听事件',arg1,arg2)
})

eventEmitter.emit('eventName','arg1参数','arg2参数')
