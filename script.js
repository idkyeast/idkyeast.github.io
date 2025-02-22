document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentSection = document.getElementById('commentSection');
    let selectedRating = 0;

    document.querySelectorAll('.star-rating span').forEach(star => {
        star.addEventListener('click', function () {
            selectedRating = this.getAttribute('data-star');
            document.querySelectorAll('.star-rating span').forEach(s => s.style.color = '');
            for (let i = 0; i < selectedRating; i++) {
                document.querySelectorAll('.star-rating span')[i].style.color = 'gold';
            }
        });
    });

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const text = document.getElementById('commentText').value;
        const imageInput = document.getElementById('commentImage').files[0];

        if (!text.trim()) {
            alert('Comment cannot be empty!');
            return;
        }

        const commentCard = document.createElement('div');
        commentCard.className = 'comment-card';

        let stars = '⭐'.repeat(selectedRating);
        let commentHTML = `<div class="comment-header"><span class="comment-stars">${stars}</span><button class="like-btn">👍 0</button></div><p>${text}</p>`;

        if (imageInput) {
            const imgURL = URL.createObjectURL(imageInput);
            commentHTML += `<img src="${imgURL}" class="comment-img">`;
        }

        commentCard.innerHTML = commentHTML;
        commentSection.prepend(commentCard);

        document.getElementById('commentText').value = '';
        document.getElementById('commentImage').value = '';

        commentCard.querySelector('.like-btn').addEventListener('click', function () {
            let likes = parseInt(this.innerText.split(' ')[1]) + 1;
            this.innerText = `👍 ${likes}`;
        });
    });
});
