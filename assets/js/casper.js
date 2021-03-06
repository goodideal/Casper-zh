var defaultCasper = {
    footerBA2URL: "",
    isVisible: false
};

casper = jQuery.extend(casper, defaultCasper);

var vm = new Vue({
    el: "#casper",
    delimiters: ["${", "}"],
    data: casper,
    methods: {
        getDigital: function (digital) {
            var digitalReg = /\d+/g;
            return digital.match(digitalReg);
        },
        openDonate: function () {
            this.isVisible = true;
        },
        closeDonate: function () {
            this.isVisible = false;
        }
    },
    mounted: function () {
        var self = this;
        self.$nextTick(function () {
            self.qq = "http://wpa.qq.com/msgrd?v=3&site=qq&menu=yes&uin=" + self.qq;
            self.footerBA2URL = "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=" + self.getDigital(self.footerBA2);

            //百度推送
            if (self.bdPush) {
                var bp = document.createElement("script");
                var curProtocol = window.location.protocol.split(":")[0];
                if (curProtocol === "https") {
                    bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
                } else {
                    bp.src = "http://push.zhanzhang.baidu.com/push.js";
                }
                var bdPush = document.getElementsByTagName("script")[0];
                bdPush.parentNode.insertBefore(bp, bdPush);
            }
            //百度统计
            if (self.bdhmt !== "") {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?" + self.bdhmt;
                var bdhmt = document.getElementsByTagName("script")[0];
                bdhmt.parentNode.insertBefore(hm, bdhmt);
            }
            //valine评论支持
            if (self.valine) {
                loadScript(
                    "//cdn.jsdelivr.net/npm/leancloud-storage/dist/av-min.js",
                    function () {
                        loadScript(
                            "//cdn.jsdelivr.net/wp/plugins/wp-editormd/tags/valine/1.1.7/Valine.min.js",
                            function () {
                                if (document.getElementById("vcomments") !== null) {
                                    new Valine({
                                        av: AV,
                                        el: "#vcomments",
                                        emoticon_url: "https://cdn.jsdelivr.net/wp/plugins/wp-editormd/tags/valine/alu",
                                        emoticon_list: [
                                            "吐.png",
                                            "喷血.png",
                                            "狂汗.png",
                                            "不说话.png",
                                            "汗.png",
                                            "坐等.png",
                                            "献花.png",
                                            "不高兴.png",
                                            "中刀.png",
                                            "害羞.png",
                                            "皱眉.png",
                                            "小眼睛.png",
                                            "中指.png",
                                            "尴尬.png",
                                            "瞅你.png",
                                            "想一想.png",
                                            "中枪.png",
                                            "得意.png",
                                            "肿包.png",
                                            "扇耳光.png",
                                            "亲亲.png",
                                            "惊喜.png",
                                            "脸红.png",
                                            "无所谓.png",
                                            "便便.png",
                                            "愤怒.png",
                                            "蜡烛.png",
                                            "献黄瓜.png",
                                            "内伤.png",
                                            "投降.png",
                                            "观察.png",
                                            "看不见.png",
                                            "击掌.png",
                                            "抠鼻.png",
                                            "邪恶.png",
                                            "看热闹.png",
                                            "口水.png",
                                            "抽烟.png",
                                            "锁眉.png",
                                            "装大款.png",
                                            "吐舌.png",
                                            "无奈.png",
                                            "长草.png",
                                            "赞一个.png",
                                            "呲牙.png",
                                            "无语.png",
                                            "阴暗.png",
                                            "不出所料.png",
                                            "咽气.png",
                                            "期待.png",
                                            "高兴.png",
                                            "吐血倒地.png",
                                            "哭泣.png",
                                            "欢呼.png",
                                            "黑线.png",
                                            "喜极而泣.png",
                                            "喷水.png",
                                            "深思.png",
                                            "鼓掌.png",
                                            "暗地观察.png"
                                        ],
                                        appId: casper.valineAppId,
                                        appKey: casper.valineAppKey,
                                        notify: false,
                                        verify: false,
                                        avatar: "mm",
                                        placeholder: casper.valinePlaceholder
                                    });
                                }
                            }
                        );
                    }
                );
            }
            //图箱支持
            if (self.mediumZoom) {
                loadScript("//cdn.jsdelivr.net/npm/medium-zoom/dist/medium-zoom.min.js", function () {
                        mediumZoom(document.querySelectorAll(".post-full-content .post-content img"));
                    }
                );
            }
            //Prism高亮支持
            if (self.prism) {
                if( self.prismTheme === 'customize' ) {
                    loadCSS(self.prismThemeUrl);
                } else {
                    // if ( self.prismTheme === '' ) {
                    //     loadCSS("//cdn.jsdelivr.net/npm/prismjs/themes/prism.min.css");
                    // } else {
                    //     loadCSS("//cdn.jsdelivr.net/npm/prismjs/themes/prism-" + self.prismTheme + ".min.css");
                    // }
                    self.prismTheme === '' ? loadCSS("//cdn.jsdelivr.net/npm/prismjs/themes/prism.min.css") : loadCSS("//cdn.jsdelivr.net/npm/prismjs/themes/prism-" + self.prismTheme + ".min.css");
                }

                loadScript("//cdn.jsdelivr.net/npm/prismjs/components/prism-core.min.js",function () {
                    loadScript("//cdn.jsdelivr.net/npm/prismjs/plugins/autoloader/prism-autoloader.min.js", function () {
                            //将html代码块支持高亮
                            jQuery(".post-content pre code").attr("class", function (i, clazz) {
                                if (clazz !== undefined) {
                                    return clazz.replace(/language-html/g, "language-markup");
                                }
                            });
                            //设置高亮语言样式文件地址
                            if (window.Prism !== "undefined") {
                                Prism.plugins.autoloader.languages_path = "//cdn.jsdelivr.net/npm/prismjs/components/";
                                Prism.highlightAll();
                            }
                        }
                    );
                });
                //行号
                if (self.prismLineNumbers) {
                    loadCSS("//cdn.jsdelivr.net/npm/prismjs/plugins/line-numbers/prism-line-numbers.min.css");
                    loadScript("//cdn.jsdelivr.net/npm/prismjs/plugins/line-numbers/prism-line-numbers.min.js");
                    //支持行号显示
                    jQuery(".post-content pre").addClass("line-numbers");
                }
                //显示语言或者粘贴
                if (self.prismShowLanguage || self.prismCopy) {
                    loadCSS("//cdn.jsdelivr.net/npm/prismjs/plugins/toolbar/prism-toolbar.min.css");
                    loadScript("//cdn.jsdelivr.net/npm/prismjs/plugins/toolbar/prism-toolbar.min.js");
                    if (self.prismShowLanguage) {
                        loadScript("//cdn.jsdelivr.net/npm/prismjs/plugins/show-language/prism-show-language.min.js");
                    }
                    if (self.prismCopy) {
                        loadScript("//cdn.jsdelivr.net/npm/clipboard/dist/clipboard.min.js");
                        loadScript("//cdn.jsdelivr.net/npm/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js");
                    }
                }
            }
        });
    }
});

/**
 * 回到顶部
 */
jQuery(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $("#return-to-top").fadeIn(200);
    } else {
        $("#return-to-top").fadeOut(200);
    }
});
$("#return-to-top").click(function () {
    $("body,html").animate(
        {
            scrollTop: 0
        },
        500
    );
});

/**
 * 评论跳转
 */
if (window.location.hash) {
    var checkExist = setInterval(function () {
        if ($(window.location.hash).length) {
            $("html, body").animate(
                {scrollTop: $(window.location.hash).offset().top - 90},
                1000
            );
            clearInterval(checkExist);
        }
    }, 100);
}

var loadFiles = {
    js: [],
    css: []
};

console.log("已经动态加载资源：", loadFiles);

/**
 * 时间转换
 * @param timestamp
 * @returns {string}
 */
function timestampFormat(timestamp) {
    timestamp = Date.parse(timestamp) / 1000;

    function zeroize(num) {
        return (String(num).length === 1 ? "0" : "") + num;
    }

    var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
    var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数
    var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
    var tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象
    var Y = tmDate.getFullYear(),
        m = tmDate.getMonth() + 1,
        d = tmDate.getDate();
    var H = tmDate.getHours(),
        i = tmDate.getMinutes(),
        s = tmDate.getSeconds();
    if (timestampDiff < 60) {
        // 一分钟以内
        return "刚刚";
    } else if (timestampDiff < 3600) {
        // 一小时前之内
        return Math.floor(timestampDiff / 60) + "分钟前";
    } else if (
        curDate.getFullYear() === Y &&
        curDate.getMonth() + 1 === m &&
        curDate.getDate() === d
    ) {
        return "今天" + zeroize(H) + ":" + zeroize(i);
    } else {
        var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
        if (
            newDate.getFullYear() === Y &&
            newDate.getMonth() + 1 === m &&
            newDate.getDate() === d
        ) {
            return "昨天" + zeroize(H) + ":" + zeroize(i);
        } else if (curDate.getFullYear() === Y) {
            return (
                zeroize(m) + "月" + zeroize(d) + "日 " + zeroize(H) + ":" + zeroize(i)
            );
        } else {
            return (
                Y +
                "年" +
                zeroize(m) +
                "月" +
                zeroize(d) +
                "日 " +
                zeroize(H) +
                ":" +
                zeroize(i)
            );
        }
    }
}

/**
 * 动态加载JS文件的方法
 * Load javascript file method
 *
 * @param {String}   fileName              JS文件名
 * @param {Function} [callback=function()] 加载成功后执行的回调函数
 * @param {String}   [into="head"]         嵌入页面的位置
 */
function loadScript(fileName, callback, into) {
    into = into || "head";
    callback = callback || function () {
    };
    var script = null;
    script = document.createElement("script");
    script.id = fileName.replace(/[\./]+/g, "-");
    script.type = "text/javascript";
    script.src = fileName;
    script.onload = function () {
        loadFiles.js.push(fileName);
        callback();
    };
    if (into === "head") {
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        document.body.appendChild(script);
    }
}

/**
 * 动态加载CSS文件的方法
 * Load css file method
 *
 * @param {String}   fileName              CSS文件名
 * @param {Function} [callback=function()] 加载成功后执行的回调函数
 * @param {String}   [into="head"]         嵌入页面的位置
 */
function loadCSS(fileName, callback, into) {
    into = into || "head";
    callback = callback || function () {
    };

    var css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.onload = css.onreadystatechange = function () {
        loadFiles.css.push(fileName);
        callback();
    };
    css.href = fileName;
    if (into === "head") {
        document.getElementsByTagName("head")[0].appendChild(css);
    } else {
        document.body.appendChild(css);
    }
}