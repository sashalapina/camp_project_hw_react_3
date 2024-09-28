import { useForm } from 'react-hook-form'

import './ReactHookForm.css'

function ReactHookForm() {

        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm()

        const onSubmit = (data) => {
            alert(JSON.stringify(data))
        }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-item'>
                <label>Name:</label>
                <input
                    {...register('name', {
                        required: 'Имя обязательно',
                    })}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
            </div>
            <div className='form-item'>
                <label>Email:</label>
                <input
                    {...register('email', {
                        required: 'Email обязателен',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Некорректный email',
                        },
                    })}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>
            <button type='submit'>Log In</button>
        </form>
    )
    
}

export default ReactHookForm