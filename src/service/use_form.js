import {useEffect, useState} from "react"

function useForm({initialValues, onSubmit, validate}){
    const[values, setValues] = useState(initialValues);
    const[errors,setErrors] = useState({});
    const[submitting, setSubmitting] = useState(false);

    //폼의 각 입력이 변경될때
    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]:value});
    }

    //지도에서 위치를 변경할때
    const locationChange = (data) => { 
        setValues({
            ...values, 'city_name': data.city_name, 'town_name': data.town_name,
            'address': data.address, 'lat': data.lat, 'lng': data.lng
        });
    }

    //Submit
    const handleSubmit = async (event) => {
        setSubmitting(true);
        event.preventDefault();
        await new Promise((r) => {setTimeout(r,1000) 
           
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
            else
            {
                console.log(errors)
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
        locationChange,
    }
}

export default useForm
