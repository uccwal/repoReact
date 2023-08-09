import React, {useState, useEffect} from 'react';
import axios from "axios";
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';


const UseToastGridAjaxGet = () => {

    const [dataSet, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // AJAX 호출
            setData(response.data); // 가져온 데이터를 상태 변수에 저장
            console.log(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const dataResult = dataSet.map((item) => ({
        id: item.id,
        name: item.title
    }));
    const columns = [
        {name: 'id', header: 'ID'},
        {name: 'name', header: 'Name'}
    ];
    // 컴포넌트가 마운트될 때 한 번 데이터를 불러옴
    useEffect(() => {
        fetchData();
    }, []);

    return (

        <Grid
            data={dataResult}
            columns={columns}
            rowHeight={25}
            bodyHeight={100}
            heightResizable={true}
            rowHeaders={['rowNum']}
        />

    );
};

export default UseToastGridAjaxGet;