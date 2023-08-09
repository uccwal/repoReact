import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from "@toast-ui/react-grid";

const UseAjaxGetPy = () => {
    const [dataPy, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/people');
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const columns = [
        { name: 'data1', header: '업무', width: 'auto' },
        { name: 'data2', header: '공고번호-차수', width: 'auto'},
        { name: 'data3', header: '분류', width: 'auto'},
        { name: 'data4', header: '공고명', width: 'auto'},
        { name: 'data5', header: '공고기관',width: 'auto' },
        { name: 'data6', header: '수요기관', width: 'auto' },
        { name: 'data7', header: '계약방법', width: 'auto' },
        { name: 'data8', header: '입력일시(입찰마감일시)', width: 'auto' },
        { name: 'data9', header: '공동 수급', width: 'auto' },
        { name: 'data10', header: '투찰', width: 'auto' },
        { name: 'link1', header: 'URL1',  width: 'auto' }, // 수정: 컬럼 이름 수정
        { name: 'link2', header: 'URL2',  width: 'auto' } // 수정: 새로운 컬럼 추가
    ];

    const dataResult = dataPy.map((item) => ({
        data1: item.data1,
        data2: item.data2,
        data3: item.data3,
        data4: item.data4,
        data5: item.data5,
        data6: item.data6,
        data7: item.data7,
        data8: item.data8,
        data9: item.data9,
        data10: item.data10,
        link1: item.link1,
        link2: item.link2,
    }));

    return (
        <Grid
            data={dataResult}
            columns={columns}
            rowHeight={25}
            bodyHeight={500}
            heightResizable={true}
            rowHeaders={['rowNum']}
        />
    );
};

export default UseAjaxGetPy;
