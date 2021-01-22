import {useEffect, useState} from "react"

function useForm({initialValues, onSubmit, validate}){
    const[values, setValues] = useState(initialValues);
    const[errors,setErrors] = useState({});
    const[submitting, setSubmitting] = useState(false);

    //폼의 각 입력이 변경될때
    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]:value});
        console.log(`${name} : ${value}`);
    }

    //Submit
    const handleSubmit = async (event) => {
        setSubmitting(true);
        event.preventDefault();
        await new Promise((r) => {setTimeout(r,1000) /* submit process */
            console.log(values);
            //useRepository.saveUser(data.user);
        });
        setErrors(validate(values));
    }

    useEffect(() => {
        if(submitting)
        {
            if(Object.keys(errors).length === 0)
            {
                onSubmit(values);
            }
            setSubmitting(false)
        }
    }, [errors])

    return{
        values,
        errors,
        submitting,
        handleChange,
        handleSubmit,
    }
}

export default useForm