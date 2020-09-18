// 1.获取元素
let jh = document.querySelector('.jh');
let qg = document.querySelector('.qg');
// 2.注册点击事件
// jh.onclick = function() {
//     // 3. 判断
//     let key = prompt('江汉学校学部主任：');
//     if (key == '李元荣') {
//         window.location.href = './jh.html';
//     } else {
//         alert('输入错误，请重试');
//     }
// };
qg.onclick = function() {
    // 3.判断
    let key = prompt('1509寝室长');
    if (key == '王哲武') {
        window.location.href = './1509.html';
    } else {
        alert('输入错误，请重试');
    }
};