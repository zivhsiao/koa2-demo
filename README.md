# Koa2 Demo

這是 ubuntu 14.04 的安裝方式

## 先安裝 nvm  
這個是安裝 node.js 的利器，複製就可以了

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/

v0.33.2/install.sh | bash

source ~/.profile ( 這一定要執行 )
```

## 直接使用 nvm

```
nvm install 8 (會直接跑 8.2.1[New], 然後 npm 會一併安裝)

npm install -g yarn ( 推薦選用 )

npm install -g yo ( 選用 )
```

## koa2-generator

這是一定要的套件，-g 代表是全域

```
npm install -g koa2-generator

koa2 --view hogan ./app && cd ./app 
( 其實這裡選擇 ejs 樣板，不過卻 ejs 的配置有點奇怪，而改為 hjs，之後再改回來 )

yarn install ( 第一次跑 )
```

## 記得要在 app.js 的開頭加入的是時區

``` 
 process.env.TZ = 'Asia/Taipei'，這樣才會 +8:00

 然後安裝 dateformat
 
 yarn add dateformat

```

## yarn 增加支援 mariaDB 的套件

```
 yarn add sequelize
 
 yarn add mysql2
```

## 更新自己的套件 ( 非必須 )

安裝了一堆套件，直接就更新吧！

```
  yarn upgrade
```


## 安裝 mardiaDB

因為 Ubuntu 本身並不支援 mardiaDB，必須用以下的方式才行：  

```
sudo apt-get install software-properties-common

sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db

sudo add-apt-repository 'deb [arch=amd64,i386,ppc64el] http://ftp.ubuntu-tw.org/mirror/mariadb/repo/10.2/ubuntu trusty main'

sudo apt-get update

sudo apt-get install mariadb-server

```

## SESSION 要的方式，安裝 redis

koa2 對 session 並沒有原生的支援

所以要安裝其他的套件來使 koa2 可以讓 session 跑的正常  

Unbutu 14.04 安裝 redis

```
sudo add-apt-repository ppa:chris-lea/redis-server

sudo apt-get update

sudo apt-get install redis-server

測試是否已經安裝成功

redis-benchmark -q -n 1000 -c 10 -P 5

```

安裝好了之後。順便安裝套件,koa-redis

```
yarn add koa-generic-session

yarn add koa-redis

```

## 安裝 nodemon，pm2 

有個東西不能忘

開發所必須要的 - nodemon

直接將 node 換下來

```
yarn global add nodemon
```

上線的必需品 - pm2

```
yarn global add pm2
```

以下的是他的語法，帶個參數 -i x 表示是幾核心

```
pm2 start/stop/restart run.js -i 2
```


## 直接 RUN 


```

nodemon bin/run.js ( 開發使用 )

or

pm2 run bin/run.js ( 正式上線 ) 
```

-

# 後台的畫面

這比較花時間在處理登入的事情

這裡採用的部分 

Bootstrap 3，而捨去 4，因為他還在改版

jQuert 3.1.1
 


# 前台的畫面

稍等一下下...