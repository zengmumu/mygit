import random


# 存放单词的列表(可以自己填写需要背诵的单词)
words = ["print", "int", "str", "len", "input", "format", "if","for","def"]

#初始化信息↓↓↓↓↓↓↓
def init():
    # 声明三个全局变量
    global word
    global tips
    global ranList

    #随机获取单词列表里的一个单词
    word = list(words[random.randint(0, len(words) - 1)])

    #随机数列表，存放着与单词长度一致的随机数（不重复）
    ranList = random.sample(range(0, len(word)), len(word))

    #存放提示信息
    tips = list()
    #初始化提示信息
    #存放跟单词长度一致的下划线
    for i in range(len(word)):
        tips.append("_")
    #随机提示两个字母
    tips[ranList[0]] = word[ranList[0]]
    tips[ranList[1]] = word[ranList[1]]

#函数部分↓↓↓↓↓

#展示菜单
def showMenu():
    print("需要提示请输入'?'")
    print("结束游戏请输入'quit!'")


#显示提示信息
def showtips():
    for i in tips:
        print(i, end=" ")
    print()


#需要提示
def needTips(tipsSize):
    #至少有两个未知字母
    if tipsSize <= len(word)-3:
        tips[ranList[tipsSize]] = word[ranList[tipsSize]]
        tipsSize += 1
        return tipsSize
    else:
        print("已没有提示！")


#主要运行函数↓↓↓↓↓↓
def run():
    print("------python关键字版本-------")
    init()
    tipsSize = 2
    showMenu()
    
    while True:
        print("提示：",end="")
        showtips()
        guessWord = input("猜一下这个单词：")
        # <''.join(word)>把word列表的内容转换成字符串
        if guessWord == ''.join(word):
            print("恭喜你，猜对了！就是%s!"%(''.join(word)))
            print("再猜一次")
            init()
            
        elif guessWord == '?':
            tipsSize = needTips(tipsSize)
        elif guessWord == 'quit!':
            break
        else:
            print("猜错了！")
            continue
run()