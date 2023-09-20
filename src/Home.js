import React, { useEffect, useState } from 'react'

export default function Home() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect", count);
        if (count == 10) {
            console.log("maximum count reached");
        }
    }, [count])

    const HandleBtn = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <input type='button' onClick={HandleBtn} value='Increment' />
        </div>
    )
}
