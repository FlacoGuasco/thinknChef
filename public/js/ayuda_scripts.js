document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isVisible = answer.style.maxHeight && answer.style.maxHeight !== '0px';
            
            faqItems.forEach(i => {
                i.querySelector('.faq-answer').style.maxHeight = '0';
            });

            if (!isVisible) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
