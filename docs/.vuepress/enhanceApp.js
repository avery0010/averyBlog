export default ({ router }) => {
    /**
     * 路由切换事件处理
     */
    router.beforeEach((to, from, next) => {
        // console.log("切换路由", to.fullPath, from.fullPath);
        
        console.log(1212121212)
        //触发百度的pv统计
        if (typeof _hmt != "undefined") {
            console.log(11111111);
            if (to.path) {
                _hmt.push(["_trackPageview", to.fullPath]);
                console.log("上报百度统计", to.fullPath);
            }
        }

        // continue
        next();
    });
};
