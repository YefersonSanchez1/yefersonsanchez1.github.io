(function() {
    const $sections = document.querySelectorAll('section[data-section]')
    
    const scrollBehavior = value => {
        scrollTo({ top: value, behavior: "smooth" })
    }

    function scrollLink(e) {
        e.preventDefault()
        $sections.forEach($section => {
            if (e.target.dataset.link === $section.dataset.section) scrollBehavior($section.offsetTop - 60)
        })
    }

    document.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) scrollLink(e)
    })
})()