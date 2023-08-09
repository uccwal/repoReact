import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseAjaxGet = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // AJAX 호출
            setData(response.data); // 가져온 데이터를 상태 변수에 저장
            //console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // 컴포넌트가 마운트될 때 한 번 데이터를 불러옴
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ul>
            {data.map((item) => (
                <li style={{ textAlign: 'left' }} key={item.id}>{item.id} : {item.title}</li>
            ))}
        </ul>
    );
};

export default UseAjaxGet;
