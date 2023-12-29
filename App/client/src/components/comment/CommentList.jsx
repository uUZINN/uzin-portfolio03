import React, { useEffect, useState, useRef } from 'react';
import CommentContent from './CommentContent';
import axios from 'axios';

const CommentList = ({ fetchData }) => {
    const [commentList, setCommentList] = useState([]);
    const commentWrapRef = useRef(null);
    const [shouldAdjustScroll, setShouldAdjustScroll] = useState(true);


    async function fetchData() {
        try {
            const response = await axios.post("/api/comment/getComments");
            if (response.data.success) {
                setCommentList([...response.data.comments]);
            }
        } catch (error) {
            console.error("댓글 불러오기 실패:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        if (shouldAdjustScroll && commentList.length > 0 && commentWrapRef.current) {
            commentWrapRef.current.scrollTo({ top: commentWrapRef.current.scrollHeight, behavior: 'smooth' });
            setShouldAdjustScroll(false);
        }
    }, [commentList, shouldAdjustScroll]);

    // useEffect(() => {
    //     fetchData();

    //     // const intervalId = setInterval(fetchData, 4000);
    //     // return () => clearInterval(intervalId);

    // }, []);

    // useEffect(() => {
    //     // 최신 댓글이 업데이트되면 스크롤을 조정
    //     if (commentWrapRef.current) {
    //         commentWrapRef.current.scrollTo({ top: commentWrapRef.current.scrollHeight, behavior: 'smooth' });
    //     }
    // }, [commentList]);



    return (
        <div
            ref={commentWrapRef}
            className="comment_wrap"
            style={{ overflowY: 'auto', maxHeight: '400px' }}
        >
            {commentList.map((comment, index) => {
                return (
                    <CommentContent key={comment.id} comment={comment} />
                )
            })}
        </div>
    )
}

export default CommentList;