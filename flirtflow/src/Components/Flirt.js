import React, {useState, useEffect} from 'react'




const AutoType = ({word, delay, infinite}) => {
    const [text, SetText] = useState('');
    const [index, SetIndex] = useState(0);


    useEffect(() => {
        if (index < word.length){
            const timeout = setTimeout(() => {
                SetText(prevText => prevText + word[index]);
                SetIndex(prevIndex => prevIndex + 1);
            }, delay);
            return() => clearTimeout(timeout);
        }
    }, [index, delay, word]);


    return(
        <span>{text}</span>
    )
}





export default AutoType;