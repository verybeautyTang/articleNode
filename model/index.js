var MongoClient = require('mongodb').MongoClient

// 链接
var url ="mongodb://localhost:27017"

// 数据库名称
const dbName = 'project'

// 数据库链接方法
function connect(callback) {
    MongoClient.connect(url, function(err, client) {
        if(err) {
            console.log('数据库错误')
        }
        else{
            const db = client.db(dbName)
            callback && callback()
             // 关闭数据库
             client.close()
        }
       
    })
}
module.exports = {
    connect
}
