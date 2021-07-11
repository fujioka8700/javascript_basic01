window.onload = function() {
    const message = document.getElementById('text');
    const btn = document.getElementById('btn');
    btn.addEventListener('click', function(event){
        // messageの背景を赤色にする。
        message.style.backgroundColor = 'red'

        // アラートでclickedを表示する。
        alert('clicked');
    })
}

