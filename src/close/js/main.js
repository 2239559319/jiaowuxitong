function close() {
    const modalbackdrop = document.querySelector('.modal-backdrop')
    document.body.removeChild(modalbackdrop)
    setTimeout(() => {
        const rightMenu = document.querySelector('#right-menu')
        document.body.removeChild(rightMenu)
    }, 200)
}
(() => {
    close()
})()