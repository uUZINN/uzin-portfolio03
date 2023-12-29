import React, { useEffect, useState, useRef } from 'react';
import CommentContent from './CommentContent';
import axios from 'axios';

const CommentList = ({ fetchData }) => {
    const [commentList, setCommentList] = useState([]);
    const commentWrapRef = useRef(null);
    const [shouldAdjustScroll, setShouldAdjustScroll] = useState(true);
    const [isUserScrolling, setIsUserScrolling] = useState(false);


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
        const handleScroll = () => {
            setIsUserScrolling(true);
        };

        const handleScrollEnd = () => {
            setIsUserScrolling(false);
        };

        if (commentWrapRef.current) {
            commentWrapRef.current.addEventListener('scroll', handleScroll);

            // 스크롤 종료 후 상태 업데이트
            commentWrapRef.current.addEventListener('scroll', handleScrollEnd);
        }

        return () => {
            if (commentWrapRef.current) {
                commentWrapRef.current.removeEventListener('scroll', handleScroll);
                commentWrapRef.current.removeEventListener('scroll', handleScrollEnd);
            }
        };
    }, []);

    useEffect(() => {
        if (shouldAdjustScroll && commentList.length > 0 && commentWrapRef.current) {
            commentWrapRef.current.scrollTo({ top: commentWrapRef.current.scrollHeight, behavior: 'smooth' });
            setShouldAdjustScroll(false);
        }

        if (isUserScrolling) {
            // 사용자가 스크롤을 조작 중이면 포커스 설정 해제
            commentWrapRef.current.blur();
            setIsUserScrolling(false);
        }
    }, [commentList, shouldAdjustScroll, isUserScrolling]);

    useEffect(() => {
        if (shouldAdjustScroll && commentList.length > 0 && commentWrapRef.current) {
            commentWrapRef.current.scrollTo({ top: commentWrapRef.current.scrollHeight, behavior: 'smooth' });
            setShouldAdjustScroll(false);
        }
    }, [commentList.length, shouldAdjustScroll]);


    // useEffect(() => {
    //     fetchData();

    //     // const intervalId = setInterval(fetchData, 4000);
    //     // return () => clearInterval(intervalId);

    // }, []);

    // useEffect(() => {
    //     if (!isUserScrolling && commentWrapRef.current) {
    //         commentWrapRef.current.scrollTo({ top: commentWrapRef.current.scrollHeight, behavior: 'smooth' });
    //     }
    // }, [commentList, isUserScrolling]);



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