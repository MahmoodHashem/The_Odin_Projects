
    const openBtn = document.querySelector(".open-btn"); 
    const closeBtn = document.querySelector(".close-btn")
    const modal = document.querySelector("dialog"); 

    openBtn.addEventListener("click", ()=>{
        modal.style.animationName = 'showModal'
        modal.showModal()
    })

    closeBtn.addEventListener("click", ()=>{
       modal.style.animationName = 'closeModal'
       setTimeout(() => {
        modal.close()
       }, 900);
    })
