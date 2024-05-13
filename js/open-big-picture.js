const bigPictureUrl = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const commentsSection = document.querySelector('.social__comments');
const socialCaption = document.querySelector('.social__caption');
const commentFragment = document.createDocumentFragment();

const addComment = (comments) => {
  comments.forEach(({avatar, name, message}) => {
    const comment = document.createElement('li');
    const commentImage = document.createElement('img');
    const commentContent = document.createElement('p');

    comment.classList.add('social__comment');
    commentImage.classList.add('social__picture');
    commentContent.classList.add('social__text');

    commentImage.src = avatar;
    commentImage.alt = name;

    commentContent.textContent = message;

    comment.append(commentImage);
    comment.append(commentContent);
    commentFragment.append(comment);
  });
  commentsSection.append(commentFragment);
};

const openBigPicture = ({url, likes, comments, description}) => {
  bigPictureUrl.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  addComment(comments);
  socialCaption.textContent = description;
};

export {openBigPicture};
