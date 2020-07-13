import React, { useEffect, useState, useMemo, useCallback } from 'react'; 
let arr = [1, 2];
function Demo() {
    const [inputVal, setVal] = useState('海阔天空');
    const [list, setList ] = useState([]);
    const val = useMemo(() => arr);
    console.log(val === arr);
    const handleChange = useCallback((event) => {
        setVal(event.target.value)
    })
    useEffect(() => { 
        fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=' + inputVal)
        .then(res => res.json())
        .then(res => {
            setList(res.result.songs);
        })
        return () => {
            // 卸载
            clearInterval();
            document.removeEventListener();
        }
    }, [inputVal])
    // [] 依赖 react 检查 依赖里面有没有发生数据变化，没变化就不会重新调用
    // [] 一次 componentDidMount
    // [inputVal] 多次 componentDidUpdate
    return (
        <div>
            { list.length }
            <input type='text' value={inputVal} onChange={handleChange} />
        </div>
    )
}

export default Demo;