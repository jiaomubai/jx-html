function changeColor() {
    // 获取魔术帽变色按钮
    const btn = document.getElementById('btn');
    // 获取帽子元素
    const hat = document.getElementsByClassName('hat')[0];
    // 获取帽檐元素
    const brim = document.getElementsByClassName('brim')[0];
    // 当魔术帽变色按钮点击时
    btn.onclick = () => {   
        // 随机获取3个0~255之间的数用于更换背景色
        const R = Math.round(Math.random() * 255);
        const G = Math.round(Math.random() * 255);
        const B = Math.round(Math.random() * 255);
        // 给魔术帽重新赋值颜色
        hat.style.backgroundColor = `rgb(${R},${G},${B})`;
        // 给魔术帽连接处重新赋值颜色
        hat.style.borderBottomColor = `rgb(${G},${B},${R})`;
        // 给魔术帽帽檐重新赋值颜色
        brim.style.backgroundColor = `rgb(${B},${G},${R})`;
    }
}
