class lazyLoad {
    constructor(el) {
        this.imgList = Array.from(document.querySelector(el));
        this.init();
    }
    canload() {
        let imgList = this.imgList;
        for (let i = 0; i < imgList.length; i++) {
            this.getBound(imgList[i]) && this.loadImage(imgList[i], 1);
        }
    }
    getBound(el) {
        let bound = el.getBoundingClientRect();
        let clientHeight = window.innerHeight;
        // 图片距离顶部的距离 <= 浏览器的可视化高度, 推算是否加载
        return bound.top <= clientHeight - 100;
    }
    loadImage(el, index) {
        let src = el.getAttribute('data-original');
        el.src = src;
        this.imgList.splice(index, 1);
    }
    bindEvent() {
        window.addEventListener('scroll', () => {
            this.canload();
        })
    }
    init() {
        this.canload();
        this.bindEvent();
    }
}