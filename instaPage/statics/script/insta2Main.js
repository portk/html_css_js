const userUnLike = '<svg class="like interactIcon" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>좋아요</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>';
const userLike = '<svg class="like interactIcon" fill="rgb(255,0,0)" height="24" role="img" viewBox="0 0 48 48" width="24"><title>좋아요 취소</title><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>';
const followPost=document.getElementsByClassName("followPost");
const recommandPost=document.getElementsByClassName("recommandPost");
const inputComment=document.getElementsByClassName("inputComment");
const CommentSubmit=document.getElementsByClassName("CommentSubmit");
const photoList=document.getElementsByClassName("photoList");
const postLike=document.getElementsByClassName("postLike");
const postSave=document.getElementsByClassName('postSave');
const postMention=document.getElementsByClassName('postMention');
const moreRead=document.getElementsByClassName('moreRead');
const photoListMoveRightButton=document.getElementsByClassName("photoListMoveRightButton");
const photoListMoveLeftButton=document.getElementsByClassName("photoListMoveLeftButton");
const Currentsave='<svg class="interactIcon" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>저장</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>'
const deleteSave='<svg class="saveIcon" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>삭제</title><path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path></svg>'
const postMoreInfo=document.getElementsByClassName('postMoreInfo');
const recommandPostMoreInfo=document.getElementsByClassName('recommandPostMoreInfo');
let postMentionContext = [
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque praesentium eligendi quae labore nam eum veritatis consectetur possimus excepturi aspernatur reprehenderit voluptatum, at dolor tenetur cumque velit dolorum sunt?'
    ,'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque praesentium eligendi quae labore nam eum veritatis consectetur possimus excepturi aspernatur reprehenderit voluptatum, at dolor tenetur cumque velit dolorum sunt?'
    ,"Wellknown 하지 않은  festival 다녀왔어요 <br> 을지로판타지아라는 festival이에요. 갔는데 enjoy할 thing이 없어서 59계단이라는 bar에서 술만 drink했어요 i'm sad에요"
];

//팔로우 추천 오른쪽 버튼
function recommandListMoveLeft() {
    mainRecommandList.scrollLeft += 200;
    RecommandListMoveRightButton.style.display = 'initial';
    if (mainRecommandList.scrollLeft > 150 * mainRecommandList.childElementCount - 600) {
        RecommandListMoveLeftButton.style.display = 'none';
    }
}
//팔로우 추천 왼쪽 버튼
function recommandListMoveRight() {
    mainRecommandList.scrollLeft -= 200;
    RecommandListMoveLeftButton.style.display = 'initial';
    if (mainRecommandList.scrollLeft <= 200) {
        RecommandListMoveRightButton.style.display = 'none';
    }
}

//게시글 오른쪽 버튼
for (let i=0; i < photoListMoveLeftButton.length;i++){
    photoListMoveLeftButton[i].addEventListener('click',() => {
        photoList[i].scrollLeft += 555;
        photoListMoveRightButton[i].style.display = 'initial';
        if (photoList[i].scrollLeft > 555 * photoList[0].childElementCount - 1200) {
            photoListMoveLeftButton[i].style.display = 'none';
        }
    })
}
//게시글 왼쪽 버튼
for (let i=0; i < photoListMoveRightButton.length;i++){
    photoListMoveRightButton[i].addEventListener('click',() => {
        photoList[i].scrollLeft -= 555;
        photoListMoveLeftButton[i].style.display = 'initial';
        if (photoList[i].scrollLeft <= 600) {
            photoListMoveRightButton[i].style.display = 'none';
        }
    })
}

let text = "";

for (let i=0;i<postLike.length;i++){
    postLike[i].innerHTML=userUnLike;
}

//더보기 전
for (let i=0; i < postMention.length;i++){
    postMention[i].innerHTML = postMentionContext[i].slice(0,100)+" ...";
}
//더보기 후
for (let i=0; i < moreRead.length;i++){
    moreRead[i].addEventListener('click', () => {
        postMention[i].innerHTML = postMentionContext[i];
        moreRead[i].style.display='none'
    })
}
//댓글창 자동높이
for (let i=0; i < inputComment.length;i++) {
    inputComment[i].addEventListener('input', () => {
        inputComment[i].style.height = 'auto';
        if(inputComment[i].scrollHeight < 85){
            inputComment[i].style.height = inputComment[i].scrollHeight + "px";
        } else {
            inputComment[i].style.height = 'auto';
            inputComment[i].style.height = '88' + "px";
        }
        if (inputComment[i].value == "") {
            CommentSubmit[i].style.display = 'none';
        } else {
            CommentSubmit[i].style.display = 'inherit';
        }
    });
}
//좋아요 표시
for (let i=0; i < postLike.length;i++) {
    postLike[i].addEventListener('click', () => {
        if (postLike[i].innerHTML == userLike) {
            postLike[i].innerHTML = userUnLike;
        } else {
            postLike[i].innerHTML = userLike;
        }
    })
}
//저장 표시
for (let i=0; i < postSave.length;i++) {
    postSave[i].addEventListener('click', () => {
        if (postSave[i].innerHTML == Currentsave) {
            postSave[i].innerHTML = deleteSave;
        } else {
            postSave[i].innerHTML = Currentsave;
        }
    })
}
//댓글 입력 받아서 로그에 남기기
for (let i=0; i < postSave.length;i++) {
    CommentSubmit[i].addEventListener('click', () => {
        text = inputComment[i].value;
        inputComment[i].value = "";
        console.log(inputComment[i].name +"에서 입력된 내용: "+ text);
        text = "";
    })
}

// 이벤트 리스너를 지정할 때 사용한 번호를 이용하여
// 자연스럽게 버튼의 위치를 획득할 수 있게 만들어 둡니다.
let followPostMoreIndex = NaN;
let recommandPostMoreIndex = NaN;
for (let i=0; i < postMoreInfo.length; i++) {
    postMoreInfo[i].addEventListener('click', () => {
        postMore.style.display = 'block';
        followPostMoreIndex = i;
    })
}
for (let i=0; i < recommandPostMoreInfo.length; i++) {
    recommandPostMoreInfo[i].addEventListener('click', () => {
        postMore.style.display = 'block';
        recommandPostMoreIndex = i;
    })
}

// 취소나 배경을 클릭하여 빠져나가기
postMoreBackground.addEventListener('click', () => {
    postMore.style.display = 'none';
    followPostMoreIndex = NaN;
    recommandPostMoreIndex = NaN;
})
cancel.addEventListener('click', () => {
    postMore.style.display = 'none';
    followPostMoreIndex = NaN;
    recommandPostMoreIndex = NaN;
})

// 오류로 섞였을 시 잘못 처리될 우려가 있으므로 XOR형태를 띌 수 있게 설계하였습니다.
// 또한 오류로 초기화되지 않아 처리되지 않는 경우 초기화 할 수 있게 만들었습니다.
report.addEventListener('click', () => {
    if (isNaN(followPostMoreIndex)) {
        console.log(`recommandPost[${recommandPostMoreIndex}](이)가 신고 처리 되었습니다`);
        recommandPost[recommandPostMoreIndex].style.display='none';
        postMore.style.display = 'none';
        recommandPostMoreIndex = NaN;
    } else if (isNaN(recommandPostMoreIndex)) {
        console.log(`followPost[${followPostMoreIndex}](이)가 신고 처리 되었습니다`);
        followPost[followPostMoreIndex].style.display='none'
        postMore.style.display = 'none';
        followPostMoreIndex=NaN;
    } else {
        followPostMoreIndex=NaN;
        recommandPostMoreIndex = NaN;
    }
})

notInteresting.addEventListener('click', () => {
    if (isNaN(followPostMoreIndex)) {
        console.log(`recommandPost[${recommandPostMoreIndex}](이)가 관심 없음 처리되었습니다`);
        recommandPost[recommandPostMoreIndex].style.display='none';
        postMore.style.display = 'none';
        recommandPostMoreIndex = NaN;
    } else if (isNaN(recommandPostMoreIndex)) {
        console.log(`followPost[${followPostMoreIndex}](이)가 관심 없음 처리되었습니다`);
        followPost[followPostMoreIndex].style.display='none'
        postMore.style.display = 'none';
        followPostMoreIndex=NaN;
    } else {
        followPostMoreIndex=NaN;
        recommandPostMoreIndex = NaN;
    }
})

goToPost.addEventListener('click', () => {
    if (isNaN(followPostMoreIndex)) {
        console.log(`recommandPost[${recommandPostMoreIndex}] 게시물로 이동합니다`);
        location.href='#'
        postMore.style.display = 'none';
        recommandPostMoreIndex = NaN;
    } else if (isNaN(recommandPostMoreIndex)) {
        console.log(`followPost[${followPostMoreIndex}] 게시물로 이동합니다`);
        postMore.style.display = 'none';
        followPostMoreIndex=NaN;
    } else {
        followPostMoreIndex=NaN;
        recommandPostMoreIndex = NaN;
    }
})