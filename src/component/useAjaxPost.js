import React, { useState } from 'react';
import axios from 'axios';

const UseAjaxPost = () => {
    const [postData, setPostData] = useState({ title: '', body: '' });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPostData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData); // POST 요청
            setResponseMessage(`Response: ${JSON.stringify(response.data)}`);
            setPostData({ title: '', body: '' }); // 폼 초기화
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <div>
            <h2>POST 데이터</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={postData.title} onChange={handleChange} />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea name="body" value={postData.body} onChange={handleChange} />
                </div>
                <button type="submit">전송</button>
            </form>
            <div>{responseMessage}</div>
        </div>
    );
};

export default UseAjaxPost;
